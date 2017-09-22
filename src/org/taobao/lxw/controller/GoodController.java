package org.taobao.lxw.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import org.taobao.lxw.service.IGoodsService;

import com.google.gson.Gson;

@Controller
@RequestMapping("/business2")
public class GoodController {
	
	@Autowired
	IGoodsService service2;
	
	Integer pageIndex;
	Integer storeId;
	

	@ModelAttribute("glist")
	public List<Goods> getGoodsList() {
		return new ArrayList<Goods>();
	}

	@ModelAttribute("info")
	public Goods getGoodsinfo() {
		return new Goods(1, 2, "shouji", 1, 99999, 100,1,1, getTime(), 1,null);
	}

	
	@RequestMapping(value = "/getallgoodsbysortid", produces = "text/plain;charset=utf-8")
	public String getAllGoodsBySortId(Integer id){
		
	 List<Goods> list = service2.getGoodsBySortId(id);
		for (Goods goods : list) {
			System.out.println(goods);
		}
		Gson gson = new Gson();
		String msg = gson.toJson(list);
		System.out.println(msg);
		return msg;
	}
	
	
	
	

	@RequestMapping("/addgoods")
	public String addGoods(@ModelAttribute("info") Goods info, Model model,HttpServletRequest request) {
		User business = (User) request.getSession().getAttribute("user");
		storeId = service2.getStoreIdById(business.getId());
		info.setTime(getTime());
		info.setSid(storeId);
		Integer i = service2.addGoods(info);
		if (i > 0) {
			model.addAttribute("msg", "<script>alert('" + "添加成功!" + "')</script>");
			return "forward:/background/business/warehouse.jsp?pageIndex="+pageIndex+"";
		} else {
			model.addAttribute("msg", "<script>alert('" + "添加失败!" + "')</script>");
			return "forward:/background/business/warehouse.jsp?pageIndex="+pageIndex+"";
		}

	}

	/**
	 * 通过商品id来查询商品并返回给修改页面
	 * @param id
	 * @param model
	 * @return
	 */
	@RequestMapping("/getgoodsbyid")
	public String getGoodsById(Integer id, Model model) {
		Goods info = service2.getGoodsById(id);
		model.addAttribute("info", info);
		return "forward:/background/business/editgoods.jsp";
	}
	
	@RequestMapping("/updategoodsbyid")
	public String updateGoodsById(@ModelAttribute("info") Goods info, Model model) {

		Integer i = service2.updateGoods(info);
		if (i > 0) {
			model.addAttribute("msg", "<script>alert('" + "修改成功!" + "')</script>");
			return "forward:/background/business/warehouse.jsp?pageIndex="+pageIndex+"";
		} else {
			model.addAttribute("msg", "<script>alert('" + "修改失败!" + "')</script>");
			return "forward:/background/business/warehouse.jsp?pageIndex="+pageIndex+"";
		}
	}

	@RequestMapping("/deletegoods")
	@ResponseBody
	public String deleteGoods(Integer id) {
		Integer i = service2.deleteGoods(id);
		System.out.println(i);
		if (i > 0) {
			return "ok";
		} else {
			return "not";
		}

	}

	@RequestMapping(value = "/getallgoods", produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getAllGoodsPageById(Integer pageIndex,Integer pageSize,HttpServletRequest request) {
		User business = (User) request.getSession().getAttribute("user");
		storeId = service2.getStoreIdById(business.getId());
		this.pageIndex=pageIndex;
		
		System.out.println("第"+pageIndex+"页"+"   "+"每页"+pageSize+"条数据");
		List<Goods> list = service2.getAllGoodsPageById(storeId,pageIndex,pageSize);
		for (Goods goods : list) {
			System.out.println(goods);
		}
		Gson gson = new Gson();
		String msg = gson.toJson(list);
		System.out.println(msg);
		return msg;
	}
	
	public String getAllGoodsBySid(HttpServletRequest request) {
		User user = (User) request.getSession().getAttribute("user");
		Integer id = service2.getStoreIdById(user.getId());
		List<Goods> list = service2.getAllGoodsById(id);
		for (Goods goods : list) {
			System.out.println(goods);
		}
		Gson gson = new Gson();
		String msg = gson.toJson(list);
		System.out.println(msg);
		return msg;
	}

	/**
	 * 通过商品id来查找商品返回商品列表
	 * @param id
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/selectgoodsbyid", produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String selectGoodsByIdAndSid(Integer id) {
		
		Goods info = service2.getGoodsByIdAndSid(id, storeId);
		Gson gson = new Gson();
		String msg = gson.toJson(info);
		System.out.println(msg);
		return msg;
	}
	
	@RequestMapping(value = "/selectgoodsbyname", produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String getGoodsByName(String name, HttpServletRequest request) { 
		System.out.println(name);
		User business = (User) request.getSession().getAttribute("user");
		storeId = service2.getStoreIdById(business.getId());
		List<Goods> list = service2.getGoodsByName(storeId, name);
		Gson gson = new Gson();
		String msg = gson.toJson(list);
	
		return msg;
	}

	@RequestMapping("getgoodscount")
	@ResponseBody
	public String  getGoodsCount(HttpServletRequest request){
		User business = (User) request.getSession().getAttribute("user");
		storeId = service2.getStoreIdById(business.getId());
		return service2.getGoodsCount(storeId)+"";
		
	}
	
	//获取当前时间
	private  String getTime(){
		SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置时间格式
		System.out.println(df.format(new Date()));
		return df.format(new Date());//返回时间字符串
	}

}
