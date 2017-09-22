package org.taobao.yyj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.taobao.dq.service.UserService;

@Controller
@RequestMapping("user")
public class UserController {
	@Autowired
	UserService service;
	@RequestMapping("info")
	public void getUser(){
		
	} 
}
