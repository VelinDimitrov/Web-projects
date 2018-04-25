package bg.proxiad.demo;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//@WebServlet("/say-hello-my-way")
public class SayHelloMyWay extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        Integer counter=(Integer)req.getSession().getAttribute("request");
        req.getSession().setAttribute("request", ++counter);


        String greeting=getInitParameter("greeting");
        String name=req.getParameter("name");

        resp.getWriter().write("<h1 style='color:blue;text-align:center'>"+greeting +" "+name+"!"+"</h1>");

    }
}
