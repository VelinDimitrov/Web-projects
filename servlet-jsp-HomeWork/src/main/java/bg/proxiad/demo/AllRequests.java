package bg.proxiad.demo;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class AllRequests extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        HttpSession session=req.getSession();

        Integer counter= (Integer) session.getAttribute("request");
        if (counter != null) {
            session.setAttribute("request", ++counter);
        } else {
            session.setAttribute("request",1);
        }

        resp.getWriter().write("<h1 style='color:purple; text-align:center'>"+"Number of all page requests : "
                +session.getAttribute("request")+"</h1>");
    }
}
