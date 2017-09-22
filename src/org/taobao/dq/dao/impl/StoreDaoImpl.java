	
	package org.taobao.dq.dao.impl;
	
	import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.bean.Page;
import org.taobao.dq.bean.Store;
import org.taobao.dq.dao.BaseDao;
import org.taobao.dq.dao.StoreDao;
import org.taobao.dq.mapper.StoreMapper;
	
	@Repository
	public class StoreDaoImpl extends BaseDao implements StoreDao {
	
		//pageCode为页码,pageSize为页面显示的数据条数
		@Override
		public Page<Store> queryAllStore(Integer pageCode,Integer pageSize) {
			Page<Store> page=new Page<Store>();
			page.setPc(pageCode);
			page.setPs(pageSize);
			Integer tr=getCount();
			page.setTr(tr);
			List<Store> list=getMapper(StoreMapper.class).queryAllStore((pageCode-1)*pageSize,pageSize);
			page.setBeanList(list);
			return page;
		}
		
		@Override
		public List<Store> queryStoreByName(String name) {
			return getMapper(StoreMapper.class).queryStoreByName(name);
		}
		@Override
		public Store queryStoreById(Integer id){
			return getMapper(StoreMapper.class).queryStoreById(id);
		}
		
		@Override
		public Integer updateStore(Store store) {
			return getMapper(StoreMapper.class).updateStore(store);
		}
	
		@Override
		public Integer deleteStore(Integer id) {
			return getMapper(StoreMapper.class).deleteStore(id);
		}
	
		@Override
		public Integer addStore(Store store) {
			return getMapper(StoreMapper.class).addStore(store);
		}

		@Override
		public Integer getCount() {
			return getMapper(StoreMapper.class).getCount();
		}

		@Override
		public Store queryStoreByUid(Integer id) {
			
			return getMapper(StoreMapper.class).queryStoreByUid(id);
		}

		@Override
		public List<Store> queryStoreSort(Integer id) {
			
			return getMapper(StoreMapper.class).queryStoreSort(id);
		}
	
		
	
	}
