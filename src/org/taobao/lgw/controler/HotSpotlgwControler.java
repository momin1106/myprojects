package org.taobao.lgw.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.lgw.service.HotSpotService;
import org.taobao.lxw.bean.HotSpot;

import com.google.gson.Gson;
import com.google.gson.JsonNull;

@Controller
@RequestMapping("/hotSpotlgwControler")
public class HotSpotlgwControler {
    @Autowired
    HotSpotService service;
    Gson gson = new Gson();
    
    @ResponseBody
    @RequestMapping(value="/getAllHotSpot",produces="text/plain;charset=utf-8")
    public String getAllHotSpot(){
    	List<HotSpot> commoditySortList = service.getAllHotSpot();
    	if(commoditySortList == null){
    		return gson.toJson(JsonNull.INSTANCE);
    	}
    	return gson.toJson(commoditySortList);
    }
}