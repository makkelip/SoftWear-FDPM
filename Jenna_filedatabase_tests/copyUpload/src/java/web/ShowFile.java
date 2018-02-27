/*
 * To change this license header, choose License Headers in Project Properties
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package web;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author Jenna
 */
@WebServlet(name = "show", urlPatterns = {"/ShowFile"})
@MultipartConfig
public class ShowFile extends HttpServlet {

    private final String URL = "jdbc:mysql://localhost:3306/PicsDB";
    private final String User = "root";
    private final String Pass = "maria";
    Statement stmt = null;
    ResultSet rs = null;
    Connection conn = null;
    String message = null;
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        String name = request.getParameter("name");

        InputStream inputStream = null;
        Part filePart = request.getPart("photo");
        if (filePart != null) {
            System.out.println(filePart.getName());
            System.out.println(filePart.getSize());
            System.out.println(filePart.getContentType());

            inputStream = filePart.getInputStream();
        }

    

        try {

            conn = DriverManager.getConnection(URL, User, Pass);

            String sql = "INSERT INTO pictures (name, photo) values (?, ?)";
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, name);

            if (inputStream != null) {
                statement.setBlob(2, inputStream);
            }
            int row = statement.executeUpdate();
            if (row > 0) {
                message = "Tiedoston lähetys onnistui";
            }
        } catch (SQLException e) {
            message = "Virhe:" + e.getMessage();

        } finally {
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    message = "Virhe:" + e.getMessage();
                }
            }
            request.setAttribute("Message", message);
            getServletContext().getRequestDispatcher("/Message.jsp").forward(request, response);
        }
    }

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {

        Blob image = null;
        byte[] imgData = null;

        try {

            Connection connection = DriverManager.getConnection(URL, User, Pass);
            Statement stmt = connection.createStatement();
            int downloadedId = Integer.parseInt(req.getParameter("id"));
            ResultSet rs = stmt.executeQuery("select photo from pictures where id=" + downloadedId);

            if (rs.next()) {
                image = rs.getBlob(1);
                imgData = image.getBytes(1, (int) image.length());
            } else {

                return;
            }
            res.setContentType("image/jpg");
            try (OutputStream o = res.getOutputStream()) {
                o.write(imgData);
                o.flush();
            }
        } catch (IOException | NumberFormatException | SQLException e) {
            message = "Virhe:" + e.getMessage();
        }
        req.setAttribute("Message", message);
        getServletContext().getRequestDispatcher("/Message.jsp").forward(req, res);
    }
     
}

