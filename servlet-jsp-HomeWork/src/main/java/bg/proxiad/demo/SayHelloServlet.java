package bg.proxiad.demo;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@WebServlet("/say-hello")
public class SayHelloServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		Integer counter=(Integer)req.getSession().getAttribute("request");
		req.getSession().setAttribute("request", ++counter);
		
		resp.getWriter().write("<h1>Hello I am Velin!</h1>");
	}
	
}
