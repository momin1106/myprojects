	
	package org.taobao.dq.dao;
	
	import java.util.List;
	

import org.taobao.dq.bean.Page;
import org.taobao.dq.bean.Store;
	
	public interface StoreDao {
	
		//查询所有商家
		public Page<Store>  queryAllStore(Integer pageCode,Integer pageSize);
		
		//获取总记录数
		public Integer getCount();
		
		//修改商家信息
		public Integer updateStore(Store store);
		
		//通过姓名查询
		public List<Store> queryStoreByName(String name);
		
		//通过店铺id查询
		public Store queryStoreById(Integer id);
		
		//根据商家id查询店铺
		public Store queryStoreByUid(Integer id);
		
		//根据商家id查询店铺类别
		public List<Store> queryStoreSort(Integer id);
		
		//删除店铺
		public Integer deleteStore(Integer id);
		
		//添加店铺
		public Integer addStore(Store store);
	}
