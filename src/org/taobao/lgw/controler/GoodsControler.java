package org.taobao.lgw.controler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.lgw.service.GoodsService;
import org.taobao.lxw.bean.Goods;

import com.google.gson.Gson;

@Repository
@RequestMapping("/goodsControler")
public class GoodsControler {
	@Autowired
	GoodsService service;
	Gson gson = new Gson();
	
	@ResponseBody
	@RequestMapping("/setSearch")
	public String setSearch(HttpServletRequest request){
		String searchValue = request.getParameter("searchValue");
		request.getSession().setAttribute("searchValue", searchValue);
		return "1";
	}
	
	@ResponseBody
    @RequestMapping(value="/getGoodsAllByName",produces="text/plain;charset=utf-8")
	public String getGoodsAllByName(HttpServletRequest request){
		String searchValue = request.getSession().getAttribute("searchValue").toString();
		List<Goods> goods = service.getGoodsAllByName(searchValue);
		return gson.toJson(goods);
	}
}
