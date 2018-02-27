/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package web;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
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
@WebServlet(name = "upload", urlPatterns = {"/FileUpload"})
@MultipartConfig
public class FileUpload extends HttpServlet {

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
        PrintWriter out = res.getWriter();
        res.setContentType("text/html");
        out.println("<html><body>");
        try {

            try (Connection connection = DriverManager.getConnection(URL, User, Pass)) {
                Statement stmt = connection.createStatement();
                ResultSet rs = stmt.executeQuery("select * from pictures");
                out.println("<table border=1 width=50% height=50%>");
                out.println("<tr><th>Nimi</th><th>ID</th><th>Photo</th><th>Download</th><tr>");
                while (rs.next()) {
                    int i = rs.getInt("id");
                    String nm = rs.getString("name");
                    out.println("<tr><td>" + nm + "</td><td>" + i + "</td><td>" + "<a href=\"ShowFile?id="+ i +"\"+\">Esikatselu</a>" + "</td><td>" + "<a href=\"FileDownloadTest?id="+ i +"&name=" + nm +"\"+>Lataa</a>" + "</td></tr>");
                }
                out.println("</table>");
                out.println("</html></body>");
            }
        } catch (SQLException e) {
            out.println("error" + e.getMessage());
        }
    }
}
    