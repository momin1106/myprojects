package org.taobao.yyj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.lxw.bean.Goods;
import org.taobao.yyj.bean.ShoppingCar;
import org.taobao.yyj.service.ShoppingCarService;

import com.google.gson.Gson;

@Controller
@RequestMapping("/car")
public class ShoppingCarController {
	@Autowired
	ShoppingCarService service;
	
	@RequestMapping("/get")
	public String getCar(){
		return "redirect:/foreground/add_success.html";
	}
	@RequestMapping(value="/add",method=RequestMethod.POST)
	@ResponseBody
	public String add(@RequestParam("uid") String uid,@RequestParam("gid")String gid,@RequestParam("count")String count){
		ShoppingCar car=new ShoppingCar(Integer.parseInt(uid),Integer.parseInt(gid),Integer.parseInt(count));
		service.addToCar(car);
		Integer carcount=service.getCount();
		
		car.setCarcount(carcount);
		Gson g=new Gson();
		return g.toJson(car);
	}
	@RequestMapping(value="/getCarById",method=RequestMethod.POST)
	@ResponseBody
	public String getCarById(@RequestParam("gid")String id){
		int i=Integer.parseInt(id);
		Gson g=new Gson();
		ShoppingCar car =service.getCarById(i);
		return g.toJson(car);
	}
	
	@RequestMapping(value="/getCarCount",method=RequestMethod.POST)
	public String getCount(){
		Integer carcount=service.getCount();
		
		return carcount.toString();
		
	}
	

	@RequestMapping(value="/getByUid",produces="text/plain;charset=utf-8",method=RequestMethod.POST)
	@ResponseBody
	public String getGoodsByUid(@RequestParam("uid")Integer i){
		int uid=i;
		List<ShoppingCar> car=service.getCarByUid(uid);
		Gson g=new Gson();
		return g.toJson(car);
	}
	
}
