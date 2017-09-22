	package org.taobao.dq.mapper;
	
	import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.taobao.dq.bean.StoreSort;
	
	public interface StoreSortMapper {
		
		//添加分类
		public Integer addSort(StoreSort ssort);
				
		//修改分类
		public Integer updateSort(StoreSort ssort);
		
		//通过ID查询分类
		public StoreSort querySortById(@Param("id")Integer id); 
		
		//查询分类
		public  List<StoreSort> querySort();
				
		//删除分类
		public Integer deleteSort(@Param("id")Integer id);
	}
