package org.taobao.yyj.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.yyj.bean.Address;
import org.taobao.yyj.service.AddressService;

import com.google.gson.Gson;

@Controller
@RequestMapping("/address")
public class AddressController {
	@Autowired
	AddressService service;
	//@Autowired
	//Address addresscon;
	
	@RequestMapping(value="/add",produces="text/plain;charset=utf-8",method=RequestMethod.POST)
	@ResponseBody
	public String  add(HttpSession session,String uname,String aname,String number){
		Address addresscon =new Address(null,uname,aname,number,1,1);
		String msg="";
		System.out.println(addresscon);
		Gson gson=new Gson();
		if(service.addAddress(addresscon)>0){
			return "ok";
		}
		
		return msg;
	}
	

	
	@RequestMapping("/delete")
	public void delete(Integer i){
		//System.out.println("***********************delete");
		//service.deleteAddress(6);
	}
	
	
	@RequestMapping("/update")
	public void updateAddress(){
		//System.out.println("***********************update");
		//Address a=new Address(7,"da","dsasasadsdssfds","11",1,0);
		//service.updateAddress(a);
	}
	
	@RequestMapping(value="/get",produces="text/plain;charset=utf-8",method=RequestMethod.POST)
	@ResponseBody
	public String getAddresses(@RequestParam("uid")Integer uid){
		
		List<Address> list=service.getAddresses(uid);
		Gson g=new Gson();
		return g.toJson(list);
		
	}
	
}
