	
	package org.taobao.dq.controler;
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Controller;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.ResponseBody;
	import org.taobao.dq.bean.Count;
	import org.taobao.dq.service.CountService;	
	import com.google.gson.Gson;
	
	@Controller
	@RequestMapping("/count")
	public class CountControl {
		@Autowired
		CountService cs;
		
		Gson gson =new Gson();
		
		@RequestMapping(value="sum",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String queryCount(){
			Count count=cs.query();
			return gson.toJson(count);
		}
			
	}
