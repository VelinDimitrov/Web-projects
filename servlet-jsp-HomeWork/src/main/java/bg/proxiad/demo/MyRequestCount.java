package bg.proxiad.demo;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class MyRequestCount extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        HttpSession session=req.getSession();
        Integer allRequestCounter= (Integer) session.getAttribute("request");
        session.setAttribute("request", ++allRequestCounter);


        Integer counter= (Integer) session.getAttribute("currentPageRequest");
        if (counter != null) {
            session.setAttribute("currentPageRequest", ++counter);
        } else {
            session.setAttribute("currentPageRequest",1);
        }

        resp.getWriter().write("<h1 style='color:green; text-align:center'>"+"Number of requests : "
                +session.getAttribute("currentPageRequest")+"</h1>");
    }
}
