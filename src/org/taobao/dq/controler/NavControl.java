	package org.taobao.dq.controler;
	
	import java.util.List;
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Controller;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.ResponseBody;
	import org.taobao.dq.bean.Navgiation;
	import org.taobao.dq.service.NavService;
	
	import com.google.gson.Gson;
	
	@Controller
	@RequestMapping("/nav")
	public class NavControl {
		@Autowired
		NavService navService;
		
		Gson gson =new Gson();
		
		//查询所有导航
		@RequestMapping(value="all",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String queryAll(){
			List<Navgiation> list=navService.queryAll();
			String msg="";
			if(list!=null){
				msg=gson.toJson(list);
			}
			return msg;
		}
		
		//根据id查询导航
		@RequestMapping(value="queryById",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String queryNavById(Integer id){
			Navgiation nav=navService.queryNavById(id);
			String msg="";
			if(nav!=null){
				msg=gson.toJson(nav);
			}
			return msg;
		}
	
		//修改导航
		@RequestMapping(value="update",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String updateNav(Navgiation nav){
			if(navService.updateNav(nav)>0){
				return "success";
			}
			return "failure";
		}
		//删除导航
		@RequestMapping(value="del",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String delNav(Integer id){
			
			if(id==null){
				return "error";
			}
			
			if(navService.deleteNav(id)>0){
				return "success";
			}
			return "failure";
		}
		
		//添加导航
		@RequestMapping(value="add",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String addNav(Navgiation nav){
			if(navService.addNav(nav)>0){
				return "success";
			}
			return "faliure";
		}
	}
