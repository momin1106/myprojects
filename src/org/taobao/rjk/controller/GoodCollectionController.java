package org.taobao.rjk.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.service.IGoodsService;
import org.taobao.rjk.bean.GoodCollection;
import org.taobao.rjk.service.impl.GoodCollectionServiceImpl;

import com.google.gson.Gson;

@Controller
@RequestMapping(value="/good")
public class GoodCollectionController {
@Autowired
GoodCollectionServiceImpl service;
@Autowired
  IGoodsService service2;
  Gson  gson=new Gson();
  /**
   * 鑾峰彇鎵�鏈夋敹钘忓晢鍝�
   * @return
   */
@RequestMapping(value="/getallgood")
@ResponseBody
   public String getAllCollectionGood(){
			String msg="";
	List<GoodCollection> list=service.getAllGoodCollection();
	
	if(list!=null){
		msg=gson.toJson(list);
	}
	
   return msg;

   }
//鏍规嵁id鑾峰彇鍟嗗搧鐨勪俊鎭�
@RequestMapping(value="/getgoodsbyid",produces="text/plain;charset=utf-8")
@ResponseBody
 public String getGoodById(Integer gid){
	 Goods goods=service2.getGoodsById(gid);
	 System.out.println(goods);
	 String msg="";
	 if(goods!=null){
		 msg=gson.toJson(goods);
	 }
	
	 return msg;
 }
//閫氳繃鍟嗗搧id鍒犻櫎鍟嗗搧
@RequestMapping(value="/deletecollectiongoodsbyid")
@ResponseBody
 public String deleteCollectionGoodById(Integer gid){
	 String msg="";
	 if(service.deleteCollectionGoodBygId(gid)>0){
		 msg=gson.toJson("ok");
	 }
	 return msg;
 }
@RequestMapping(value="/insertgoodsbyid",produces="text/plain;charset=utf-8",method=RequestMethod.POST)
@ResponseBody
public String addGoodstoCollection(@RequestParam("id")Integer gid){
	String msg="";
	SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");//璁剧疆鏃堕棿鏍煎紡
	String date= df.format(new Date());//杩斿洖鏃堕棿瀛楃涓�
	GoodCollection good=new GoodCollection(null,gid,1,date,1);
	if(service.insertGood(good)>0){
		 msg=gson.toJson("ok");
	}
	return msg;
}

}
