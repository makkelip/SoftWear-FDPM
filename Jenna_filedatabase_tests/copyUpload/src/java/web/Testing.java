/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "test", urlPatterns = {"/test"})
public class Testing extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/plain");
        try (PrintWriter out = response.getWriter()) {
            out.println("Hello world! :)");
            //out.println("As URL parameter: " + request.getParameter("test"));
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/plain:charset=utf-8");
        try (PrintWriter out = response.getWriter()) {

            String username = request.getParameter("username");
            int age = Integer.parseInt(request.getParameter("age"));

            if (username == null || username.isEmpty()) {
                out.println("Name: MISSING");
            } else {
                out.println("Name: " + username);
            }

            if (age > 100 || age <= 0) {
                out.println("Age: Please give the right age");
            } else {
                out.println("age: " + age);
            }

        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
