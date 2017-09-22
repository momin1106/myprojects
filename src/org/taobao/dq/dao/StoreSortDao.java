	
	package org.taobao.dq.dao;
	
	import java.util.List;

	import org.taobao.dq.bean.StoreSort;
	
	public interface StoreSortDao {
	
		//添加分类
		public Integer addSort(StoreSort ssort);
		
		//修改分类
		public Integer updateSort(StoreSort ssort);
		
		public StoreSort querySortById(Integer id);
		//查询分类
		public  List<StoreSort> querySort();
		
		//删除分类
		public Integer deleteSort(Integer id);
		
	}
