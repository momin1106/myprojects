	
	package org.taobao.dq.controler;
	
	import java.util.List;
	import javax.servlet.http.HttpServletRequest;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Controller;
	import org.springframework.ui.Model;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.ResponseBody;
	import org.taobao.dq.bean.Page;
	import org.taobao.dq.bean.Store;
	import org.taobao.dq.service.StoreService;
	import com.google.gson.Gson;
	
	@Controller
	@RequestMapping("/store")
	public class StoreControl {
		
		@Autowired
		StoreService storeservice;
		Gson gson =new Gson();
		
		//查询所有店铺
		@RequestMapping(value="all",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String queryAllStore(Integer pageCode){
			if(pageCode==null){
				pageCode=1;
			}
			Integer pageSize=10;
			Page<Store> list =storeservice.queryAllStore(pageCode,pageSize);
			String msg="";
			if(list!=null){
				msg=gson.toJson(list);
			}
			return msg;
		}
		
		//通过关键字查询店铺
		@RequestMapping(value="queryStoreByName",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String queryStoreByName(String name){
			List<Store> store=storeservice.queryStoreByName(name);
			String msg="";
			if(store!=null){
				msg=gson.toJson(store);
			}
			return  msg;
		}
		
		//修改店铺名跳转
		@RequestMapping("updateStoreT")
		public String updateStoreT(Integer id,Integer pc,Model model,HttpServletRequest req){
			Store store =storeservice.queryStoreById(id);
			if(store!=null){
				model.addAttribute("msg", store);
			}
			if(pc!=null){
				req.getSession().setAttribute("pc", pc);
			}
			return "forward:/background/storemanager/update_store.jsp";
		}
		
		//修改店铺信息
		@RequestMapping("updateStore")
		public String updateStore(Store store,Model model){
				if(storeservice.updateStore(store)>0){
					model.addAttribute("msg", "修改成功");
					return "forward:/background/storemanager/store.jsp";
				}else{
					model.addAttribute("msg","修改失败");
				}
			
			return "forward:/background/storemanager/update_store.jsp";
		}
		
		//删除店铺
		@RequestMapping("deleteStore")
		@ResponseBody
		public String deleteStore(Integer id){
			if(storeservice.deleteStore(id)>0){
				return "success";
			}
			return "failure";
		}
		
		
	}
