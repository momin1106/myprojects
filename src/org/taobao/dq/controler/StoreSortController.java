	
	package org.taobao.dq.controler;

	import java.util.List;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Controller;
	import org.springframework.ui.Model;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.ResponseBody;
	import org.taobao.dq.bean.StoreSort;
	import org.taobao.dq.service.StoreSortService;
	import com.google.gson.Gson;
	
	@Controller
	@RequestMapping("/storeSort")
	public class StoreSortController {
		
		@Autowired 
		StoreSortService sort;
		
		Gson gson =new Gson();
		
		//查询所有分类，返回jsp页面
		@RequestMapping(value="getAll",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String getAll(){
			String msg="";
			List<StoreSort> list =sort.querySort();
			if(list!=null){
				msg=gson.toJson(list);
			}
			return msg;
		}
		
		//添加分类
		@RequestMapping(value="add",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String add(StoreSort ssort,Model model){
			if(ssort.getName()==null||("").equals(ssort.getName())){
				return "输入不能为空";
			}
			if(sort.addSort(ssort)>0){
				return "添加成功";
			}
			return "添加失败";
		}
		
		//修改分类跳转
		@RequestMapping(value="updateT",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String updateT(Integer id){
			System.out.println("updateT");
			StoreSort ssort =sort.querySortById(id);
			String msg="";
			if(ssort!=null){
				msg=gson.toJson(ssort);
			}
			return msg;
		}
		
		//修改分类
		@RequestMapping(value="update",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String update(StoreSort ssort,Model model){
			if(sort.updateSort(ssort)>0){
				return "修改成功";
			}
			return "修改失败";
		}
		
		//删除分类
		@RequestMapping(value="del",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String delete(Integer id){
			if(sort.deleteSort(id)>0){
				return "删除成功";
			}
			return "删除失败";
		}
	}
