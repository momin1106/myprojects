	package org.taobao.dq.service.impl;
	
	import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.dq.bean.Page;
import org.taobao.dq.bean.Store;
import org.taobao.dq.dao.StoreDao;
import org.taobao.dq.service.StoreService;
	
	@Service
	public class StoreServiceImpl implements StoreService{
		@Autowired
		StoreDao dao;
		
		@Override
		public Page<Store> queryAllStore(Integer pageCode,Integer pageSize) {
			
			return dao.queryAllStore( pageCode,pageSize);
		}
	
		@Override
		public Integer updateStore(Store store) {
			
			return dao.updateStore(store);
		}
	
		@Override
		public List<Store> queryStoreByName(String name) {
			
			return dao.queryStoreByName(name);
		}
	
		@Override
		public Integer deleteStore(Integer id) {
			
			return dao.deleteStore(id);
		}
	
		@Override
		public Integer addStore(Store store) {
			
			return dao.addStore(store);
		}

		@Override
		public Store queryStoreById(Integer id) {
		
			return dao.queryStoreById(id);
		}

		@Override
		public Store queryByUid(Integer id) {
		
			return dao.queryStoreByUid(id);
		}
	
	}
