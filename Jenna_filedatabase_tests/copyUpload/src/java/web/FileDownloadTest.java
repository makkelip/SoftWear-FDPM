/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package web;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
@WebServlet(name = "download", urlPatterns = {"/FileDownloadTest"})
@MultipartConfig
public class FileDownloadTest extends HttpServlet {

    private static final int BUFFER_SIZE = 4096;
    private final String URL = "jdbc:mysql://localhost:3306/PicsDB";
    private final String User = "root";
    private final String Pass = "maria";

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

        Connection conn = null;
        String message = null;

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
                // closes the database connection
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
        String message = null;
        try {

            try (Connection connection = DriverManager.getConnection(URL, User, Pass)) {
                String home = System.getProperty("user.home");
                int downloadedId = Integer.parseInt(req.getParameter("id"));
                String nm = req.getParameter("name");
                String sql = "SELECT photo FROM pictures where id=" + downloadedId;
                
                PreparedStatement statement = connection.prepareStatement(sql);
                ResultSet result = statement.executeQuery();
                
                if (result.next()) {
                    
                    Blob blob = result.getBlob("photo");
                    OutputStream outputStream;
                    try (InputStream inputStream = blob.getBinaryStream()) {
                        outputStream = new FileOutputStream(home + "/Downloads/" + nm + ".jpg");
                        int bytesRead = -1;
                        byte[] buffer = new byte[BUFFER_SIZE];
                        while ((bytesRead = inputStream.read(buffer)) != -1) {
                            outputStream.write(buffer, 0, bytesRead);
                        }
                    }
                    outputStream.close();
                    message = "Latasit tiedoston " + nm + " paikkaan " + home + "/Ladatut tiedostot/" + nm + ".jpg";
                }
            }
        } catch (SQLException | IOException e) {
            message = "Virhe:" + e.getMessage();
        }
        req.setAttribute("Message", message);
        getServletContext().getRequestDispatcher("/Message.jsp").forward(req, res);
    }
}
