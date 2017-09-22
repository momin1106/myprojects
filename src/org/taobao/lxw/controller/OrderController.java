package org.taobao.lxw.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.User;
import org.taobao.lxw.bean.Order;
import org.taobao.lxw.service.IOrderService;

import com.google.gson.Gson;

@Controller
@RequestMapping("/business1")
public class OrderController {
	@Autowired
	IOrderService service1;
	
	Integer BusinessId;
	
	@ModelAttribute("olist")
	public List<Order> getOrderList() {
		return new ArrayList<Order>();
	}
	
	@RequestMapping(value="/getallorders" ,produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getAllOrderPageById(Integer pageIndex, Integer pageSize,HttpServletRequest request) {
		User business = (User) request.getSession().getAttribute("user");
		BusinessId=business.getId();
		System.out.println("第"+pageIndex+"页"+"   "+"每页"+pageSize+"条数据");
		List<Order> list = service1.getAllOrderPageById(BusinessId,pageIndex,pageSize);
		for (Order order : list) {
			System.out.println(order);
		}
		
		Gson gson = new Gson();
		String msg = gson.toJson(list);
		System.out.println(msg);
		return msg;
	}
	
	public String getAllOrderById() {
		
	
		List<Order> list = service1.getAllOrderById(BusinessId);
		for (Order order : list) {
			System.out.println(order);
		}
		
		Gson gson = new Gson();
		String msg = gson.toJson(list);
		System.out.println(msg);
		return msg;
	}

	@RequestMapping(value="/getorderbyid", produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getOrderById(Integer id) {
		System.out.println(id);
		Order order = service1.getOrderById(id);
		Gson gson = new Gson();
		String msg = gson.toJson(order);
		System.out.println("手机" + msg);
		return msg;
	}
	
	@RequestMapping(value="/getorderbyname", produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getOrderByName(String name) {
		System.out.println(name);
		List<Order> list= service1.getOrderByName(name);
		Gson gson = new Gson();
		String msg = gson.toJson(list);
		System.out.println("手机" + msg);
		return msg;
	}
	
	
	@RequestMapping("getordercount")
	@ResponseBody
	public String  getOrderCount(){
		System.out.println("liuxinwei");
		return service1.getOrderCount(1)+"";
		
	}
	
	
	@RequestMapping("/deleteorder")
	@ResponseBody
	public String deleteOrder(Integer id) {
		Integer i = service1.deleteOrder(id);
		System.out.println(i);
		if (i > 0) {
			return "ok";
		} else {
			return "not";
		}

	}
}
