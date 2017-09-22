		
		package org.taobao.dq.service;
		
		import java.util.List;	
		import org.taobao.dq.bean.StoreSort;
		
		public interface StoreSortService {
		
			//添加店铺分类
			public Integer addSort(StoreSort ssort);
					
			//修改店铺分类
			public Integer updateSort(StoreSort ssort);
					
			//查询店铺分类
			public  List<StoreSort> querySort();
			
			//通过ID查询店铺分类
			public StoreSort querySortById(Integer id);
			
			//删除店铺分类
			public Integer deleteSort(Integer id);
		}
