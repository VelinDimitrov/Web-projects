<%--
  Created by IntelliJ IDEA.
  User: bgrul
  Date: 4/25/2018
  Time: 4:49 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Hello Velin's Way</title>
</head>
<body>
<%
    Integer counter=(Integer)request.getSession().getAttribute("request");
    request.getSession().setAttribute("request", ++counter);
%>
     <h1 style="color:red; text-align: center;">
        <%= getServletConfig().getInitParameter("greet")+" "+ request.getParameter("name")%>!
     </h1>


    <p style="color:blue; text-align: center;">Velin Render's from JSP :P</p>
    </body>
</html>
