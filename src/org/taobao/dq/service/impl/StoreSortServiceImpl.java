		
		package org.taobao.dq.service.impl;
		
		import java.util.List;
		import org.springframework.beans.factory.annotation.Autowired;
		import org.springframework.stereotype.Service;
		import org.taobao.dq.bean.StoreSort;
		import org.taobao.dq.dao.StoreSortDao;
		import org.taobao.dq.service.StoreSortService;
		
		@Service
		public class StoreSortServiceImpl implements StoreSortService {
			
			@Autowired
			StoreSortDao dao;
			
			//添加分类
			@Override
			public Integer addSort(StoreSort ssort) {
				
				return dao.addSort(ssort);
			}
		
			//修改分类
			@Override
			public Integer updateSort(StoreSort ssort) {
				
				return dao.updateSort(ssort);
			}
		
			//查询所有分类
			@Override
			public List<StoreSort> querySort() {
				
				return dao.querySort();
			}
		
			//通过id查询分类
			@Override
			public StoreSort querySortById(Integer id){
				return dao.querySortById(id);
				
			}
			//删除分类
			@Override
			public Integer deleteSort(Integer id) {
				
				return dao.deleteSort(id);
			}
		
		}
