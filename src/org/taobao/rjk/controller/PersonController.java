package org.taobao.rjk.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.User;
import org.taobao.dq.service.UserService;
@Controller
@RequestMapping(value="/personinfo")
public class PersonController {
	@Autowired
	  UserService useservice;
	
	
	
	@RequestMapping(value="/test",produces="text/plain;charset=utf-8",method=RequestMethod.POST)
	@ResponseBody
	public String test(String name,String sex,String birthday,String number){
		
		System.out.println(birthday);
		SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");//设置时间格式
		String date= df.format(new Date());//返回时间字符串
        User use=new User(name, "123456", sex, "2016-09-02", number, "1", date, 1, 0);
        
		
		System.out.println(useservice.addUser(use));
		if(useservice.addUser(use)>0){
			return "ok";
		}
		
		return "no";
	}
}
