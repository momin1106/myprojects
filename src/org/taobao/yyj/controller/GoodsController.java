package org.taobao.yyj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.service.impl.GoodsService;

import com.google.gson.Gson;

@Controller
@RequestMapping("goods")
public class GoodsController {
	@Autowired
	GoodsService service;
	@RequestMapping("show")
	public void showGoods(){
		//for(int i=1;i<=4;i++){
			System.out.println(service.getGoodsById(10));
		//}
		
	}
	
	@RequestMapping(value="/list",produces="text/plain;charset=utf-8",method=RequestMethod.POST)
	@ResponseBody
	public String showAll(){
		//System.out.println("sdsa");
		List<Goods> goods=service.getGoodsBySortId(1);
		Gson g=new Gson();
		return g.toJson(goods);
	}
	
	@RequestMapping(value="/getById",produces="text/plain;charset=utf-8",method=RequestMethod.POST)
	@ResponseBody
	public String getGoodsById(@RequestParam("id")String id){
		int i=Integer.parseInt(id);
		Gson g=new Gson();
		Goods good=service.getGoodsById(i);
		return g.toJson(good);
	}
	
	
}
