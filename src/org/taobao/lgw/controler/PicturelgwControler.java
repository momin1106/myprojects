package org.taobao.lgw.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.taobao.dq.bean.Picture;
import org.taobao.lgw.service.imageService;

import com.google.gson.Gson;
import com.google.gson.JsonNull;
@Controller
@RequestMapping("/picturelgwControler")
public class PicturelgwControler {
    @Autowired
    imageService service;
    Gson gson = new Gson();
    
    @ResponseBody
    @RequestMapping(value="/getPictures",produces="text/plain;charset=utf-8")
    public String getPicture(){
    	List<Picture> pictures = service.getPictureService();
    	if(pictures == null){
    		return gson.toJson(JsonNull.INSTANCE);
    	}
    	return gson.toJson(pictures);
    }
}
