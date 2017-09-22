package org.taobao.lxw.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.User;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.HotSpot;
import org.taobao.lxw.bean.Order;
import org.taobao.lxw.service.IHotSpotService;
import org.taobao.lxw.service.IOrderService;

import com.google.gson.Gson;

@Controller
@RequestMapping("/business3")
public class HotSpotController {
	@Autowired
	IHotSpotService service;
	Integer pageIndex;
	
	@ModelAttribute("hlist")
	public List<HotSpot> getOrderList() {
		return new ArrayList<HotSpot>();
	}
	
	@RequestMapping(value="/getallhotspot" ,produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getAllHotSpot(Integer pageIndex, Integer pageSize) {
		this.pageIndex = pageIndex;
		List<HotSpot> list = service.getAllHotSpot(pageIndex, pageSize);
		for (HotSpot spot : list) {
			System.out.println(spot);
		}
		
		Gson gson = new Gson();
		String msg = gson.toJson(list);
		System.out.println(msg);
		return msg;
	}
	
	@RequestMapping(value="/updatehotspotbyid" ,produces = "text/plain;charset=utf-8")
	public String updateHotSpotById(HotSpot spot,Model model ) {
		
		Integer i = service.updateHotSpot(spot);
				if (i > 0) {
					model.addAttribute("msg", "<script>alert('" + "修改成功!" + "')</script>");
					return "forward:/background/business/hotspot.jsp?pageIndex="+pageIndex+"";
				} else {
					model.addAttribute("msg", "<script>alert('" + "修改失败!" + "')</script>");
					return "forward:/background/business/hotspot.jsp?pageIndex="+pageIndex+"";
				}
	
	}
	
	@RequestMapping(value = "/selecthotspotbyname", produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getHotSpotByName(String name) { 

		HotSpot hSpot = service.getHotSpotByName(name);
		Gson gson = new Gson();
		String msg = gson.toJson(hSpot);
		return msg;
	}
	
	
	/**
	 * 通过商品id来查询商品并返回给修改页面
	 * @param id
	 * @param model
	 * @return
	 */
	@RequestMapping("/gethotspotbyid")
	public String getGoodsById(Integer id, Model model) {
		HotSpot info = service.getHotSpotById(id);
		model.addAttribute("info", info);
		return "forward:/background/business/edithotspot.jsp";
	}
	
	@RequestMapping(value = "/selecthotspotbyid", produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getHotSpotById(Integer id) { 

		HotSpot hSpot = service.getHotSpotById(id);
		Gson gson = new Gson();
		String msg = gson.toJson(hSpot);
		return msg;
	}
	
	@RequestMapping("gethotspotcount")
	@ResponseBody
	public String  getHotSpotCount(){
		return service.getHotSpotCount()+"";
		
	}
}
