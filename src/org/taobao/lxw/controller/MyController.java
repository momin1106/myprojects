package org.taobao.lxw.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.Store;
import org.taobao.dq.bean.User;
import org.taobao.dq.controler.UserControl;
import org.taobao.dq.service.StoreService;
import org.taobao.dq.service.UserService;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.GoodsSort;
import org.taobao.lxw.service.IGoodsSortService;

import com.google.gson.Gson;

import sun.applet.resources.MsgAppletViewer;


@Controller
@RequestMapping("/business")
public class MyController {
	@Autowired
	StoreService service;
	@Autowired
	IGoodsSortService service2;
	@Autowired
	UserService service3;
	
	Integer businessId;

	Gson gson =new Gson();
	
	
	@RequestMapping(value="/getstoremsg",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String getStoreMsg(HttpServletRequest request){
		User user = (User) request.getSession().getAttribute("user");
		
		String msg = null;
		if (user!=null) {
			businessId = user.getId();
			List<Store> store = service2.queryStoreSort(businessId);
			
			System.out.println(store);
			msg=gson.toJson(store );
		}
		
		return msg;
	}
	
	@RequestMapping(value="/getgoodssortbyid",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String getGoodsSortIdByUid(HttpServletRequest request) {
		User business = (User) request.getSession().getAttribute("user");
		businessId = business.getId();
		System.out.println(businessId);
		List<GoodsSort> info = service2.getStoreAllSortIdByUid(businessId);
		String msg =gson.toJson(info );
		return msg;
	}
	
	@RequestMapping(value="/validatepwd",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String Validate(String pwd,HttpServletRequest request){
		User business = (User) request.getSession().getAttribute("user");
		if (service3.login(business.getName(), pwd)!=null) {
			return "1";
		}
		return "0";
		
	}
	
	@RequestMapping(value="/updatepwd",produces="text/plain;charset=utf-8")
	public String updatePwd(String npwd,HttpServletRequest request,Model model){
		User business = (User) request.getSession().getAttribute("user");
		System.out.println(npwd);
		business.setPass(npwd);
		if (service3.modifyUser(business)>=1) {
			model.addAttribute("msg","<script>alert('" + "修改成功!" + "')</script>");
			return "forward:/background/business/businessMsg.jsp";
		}
		model.addAttribute("msg","<script>alert('" + "修改失败!" + "')</script>");
		return "forward:/background/business/businessMsg.jsp";
		
	}
	
	@RequestMapping(value="/groupbypriceandrange",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String GroupGoodsBySortIdAndPriceAndRange(Integer sortid,Integer min,Integer max){
		List<Goods> info = service2.GroupGoodsBySortIdAndPriceRange(sortid, min, max);
		String msg =gson.toJson(info );
		return msg;
	}
	
	@RequestMapping(value="/groupbyprice",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String GroupGoodsBySortIdAndPrice(Integer sortid){
	
		List<Goods> info = service2.GroupGoodsBySortIdAndPrice(sortid);
		String msg =gson.toJson(info );
		return msg;
	}
	
	@RequestMapping(value="/groupbysales",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String GroupGoodsBySortIdAndSales(Integer sortid){
	
		List<Goods> info = service2.GroupGoodsBySortIdAndSales(sortid);
		String msg =gson.toJson(info );
		return msg;
		
	}
	
	@RequestMapping(value="/groupbypop",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String GroupGoodsBySortIdAndPop(Integer sortid){
	
		List<Goods> info = service2.GroupGoodsBySortIdAndPop(sortid);
		String msg =gson.toJson(info );
		return msg;
		
	}
	
}
