	
	package org.taobao.dq.dao.impl;
	
	import java.util.List;
	import org.springframework.stereotype.Repository;
	import org.taobao.dq.bean.StoreSort;
	import org.taobao.dq.dao.BaseDao;
	import org.taobao.dq.dao.StoreSortDao;
	import org.taobao.dq.mapper.StoreSortMapper;
		
	@Repository
	public class StoreSortDaoImpl extends BaseDao implements StoreSortDao {
	
		//添加店铺分类
		@Override
		public Integer addSort(StoreSort ssort) {
		
			return getMapper(StoreSortMapper.class).addSort(ssort);
		}
	
		//修改店铺分类
		@Override
		public Integer updateSort(StoreSort ssort) {
		
			return getMapper(StoreSortMapper.class).updateSort(ssort);
		}
	
		//查询所有分类
		@Override
		public List<StoreSort> querySort() {
			
			return getMapper(StoreSortMapper.class).querySort();
		}
	
		//删除店铺分类
		@Override
		public Integer deleteSort(Integer id) {
			return getMapper(StoreSortMapper.class).deleteSort(id);
		}

		//通过id查询店铺分类
		@Override
		public StoreSort querySortById(Integer id) {
			
			return getMapper(StoreSortMapper.class).querySortById(id);
		}
	
	}
