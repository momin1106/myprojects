package org.taobao.lgw.controler;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.User;
import org.taobao.lgw.service.CustomerService;

import com.google.gson.Gson;
import com.google.gson.JsonNull;

@Controller
@RequestMapping("/customerControler")
public class CustomerControler {
    @Autowired
    CustomerService service;
    Gson gson = new Gson();
    
    @RequestMapping("/customerLogin")
    public String login(@RequestParam(value="TPL_username")String name, @RequestParam(value="TPL_password")String pwd, HttpServletRequest request){
    	User customer = null;
    	
    	customer = service.getCustomerByNameAndPwd(name, pwd);
        if(customer != null && customer.getName() != null){
            request.getSession().setAttribute("customer", customer);
        }else{
            request.setAttribute("errorMsg", "用户名或密码错误");
            return "redirect:/foreground/login.html";
        }
        return "redirect:/foreground/index.html";
    }
    
    @ResponseBody
    @RequestMapping(value="/getCustomerJson",produces="text/plain;charset=utf-8")
    public String getCustomerJson(HttpSession session){
    	User customer = (User)session.getAttribute("customer");
    	if(customer == null){
    		return gson.toJson(JsonNull.INSTANCE);
    	}
    	return gson.toJson(customer);
    }
    
    //注册
    @ResponseBody
    @RequestMapping(value="/registerCustomer",produces="text/plain;charset=utf-8")
    public String registerCustomer(HttpServletRequest request){
        	//System.out.println(str.toString());
        	String name = request.getParameter("name");
        	String pwd1 = request.getParameter("pwd1");
        	String pwd2 = request.getParameter("pwd2");
        	if(!pwd1.equals(pwd2)){
        		return "-1";
        	}
        	if(service.getCustomerByName(name) != null && service.getCustomerByName(name).getName().equals(name)){
        		return "0";
        	}
        	User customer = new User(name, pwd1, "男", "1900-01-01", "", "1", "", 1, 0);
        	customer.setTime(getTime());
        	service.addcustomer(customer);
        	
        	customer = service.getCustomerByNameAndPwd(name, pwd1);
        	if(customer.getName() != null){
        		request.getSession().setAttribute("customer", customer);
        	}
        			
        	return "1";
    }
    //退出
    @RequestMapping("/quitCustomer")
    public String quitCustomer(HttpSession session){
    	session.removeAttribute("customer");
    	return "redirect:/foreground/index.html";
    }
	//获取当前时间
	private String getTime(){
		SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");//设置时间格式
		//System.out.println(df.format(new Date()));
		return df.format(new Date());//返回时间字符串
	}
}

















