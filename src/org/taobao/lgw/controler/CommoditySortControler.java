package org.taobao.lgw.controler;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.Navgiation;
import org.taobao.lgw.service.CommoditySortService;

import com.google.gson.Gson;
import com.google.gson.JsonNull;

@Controller
@RequestMapping("/commoditySortControler")
public class CommoditySortControler {
    @Autowired
    CommoditySortService service;
    Gson gson = new Gson();
    
    @ResponseBody
    @RequestMapping(value="/getAllCommoditySortJson",produces="text/plain;charset=utf-8")
    public String GetAllCommoditySortJson(){
    	List<Navgiation> commoditySortList = service.getAllCommoditySort();
    	if(commoditySortList == null){
    		return gson.toJson(JsonNull.INSTANCE);
    	}
    	return gson.toJson(commoditySortList);
    }
}
