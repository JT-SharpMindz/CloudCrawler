<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>
<%@ page import="java.sql.*"%>  
  
<%  
String object=String.valueOf(request.getAttribute("val"));  
if(object==null || object.trim().equals("")){  
out.print("Please enter id");  
}else{  
out.print(object);  
try{  
Class.forName("com.mysql.jdbc.Driver");  
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/cloud_crawler","root","Imidi@t123");  
PreparedStatement ps=con.prepareStatement("select attributes from aws_object_attrubutes where object_name=?");  
ps.setString(1,object);  
ResultSet rs=ps.executeQuery();  
while(rs.next()){  
out.print(rs.getString(1));  
}  
con.close();  
}catch(Exception e){e.printStackTrace();}  
}  
%>  

<%@ include file="common/footer.jspf"%>
