	package org.taobao.dq.service.impl;
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;
	import org.taobao.dq.bean.Count;
	import org.taobao.dq.dao.CountDao;
	import org.taobao.dq.dao.StoreDao;
	import org.taobao.dq.dao.UserDao;
	import org.taobao.dq.service.CountService;
	
	@Service
	public class CountServiceImpl implements CountService {
	
		@Autowired
		CountDao dao;
		
		@Autowired
		UserDao userDao;

		@Autowired
		StoreDao storeDao;
		
		Count count=new Count();
		
		@Override
		public Count query() {
			System.out.println(userDao.getCount());
			count.setUser(userDao.getCount());
			count.setStore(storeDao.getCount());
			count.setBusiness(userDao.getBusinessCount());
			System.out.println(count);
			return count;
		}
	}
