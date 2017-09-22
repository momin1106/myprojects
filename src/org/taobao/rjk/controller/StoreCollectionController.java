package org.taobao.rjk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.Store;
import org.taobao.dq.service.impl.StoreServiceImpl;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.service.impl.GoodsService;
import org.taobao.rjk.bean.StoreCollection;
import org.taobao.rjk.service.impl.StoreCollectionServiceImpl;

import com.google.gson.Gson;

@Controller
@RequestMapping(value = "/storecontroller")
public class StoreCollectionController {
	
	Gson gson = new Gson();
	@Autowired
	StoreCollectionServiceImpl service;
	@Autowired
	StoreServiceImpl storeService;
	@Autowired
	GoodsService goodsService;

	@RequestMapping(value = "/getallstore")
	@ResponseBody
	public String getAllSrore() {
		List<StoreCollection> list = service.getAllStoreCollection();
		String msg = "";
		
		if (list != null) {
		
			
			msg = gson.toJson(list);

		}
		return msg;
	}
	//根据id查找店铺
	@RequestMapping(value="/getstorebyid",produces="text/plain;charset=utf-8")
	@ResponseBody
	 public String  getStoreInfo(Integer sid){
		String msg="";
		Store  store =storeService.queryStoreById(sid);
		
		if(store!=null){
			msg=gson.toJson(store);
		}
		return msg;
	}
	
	//通过店铺id查找店铺商品
	@RequestMapping(value="/getstoregoods",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String getGoodBySid(Integer sid){
		String msg="";
		List<Goods> list=goodsService.getAllGoodsById(sid);
		System.out.println(list);
		if(list!=null){
			msg=gson.toJson(list);
		}
		return msg;
	}
	
	//删除收藏店铺
	
	@RequestMapping(value="/deletecollectionstore")
	@ResponseBody
	 public String deleteCollectionGoodById(Integer sid){
		 String msg="";
		 if(service.deleteCollectionStoreBysid(sid)==1){
			 msg=gson.toJson("ok");
			 System.out.println("aaaaaaaaaa");
		 }
		 return msg;
	 }

	
}
