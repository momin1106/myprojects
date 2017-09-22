	package org.taobao.dq.service;
	
	import java.util.List;
	


import org.taobao.dq.bean.Page;
import org.taobao.dq.bean.Store;
	
	public interface StoreService {
	
			//查询所有商家
			public Page<Store> queryAllStore(Integer pageCode,Integer pageSize);
			
			//修改商家信息
			public Integer updateStore(Store store);
			
			//按姓名查询店铺
			public List<Store> queryStoreByName(String name);
			
			//通过id查找
			public Store queryStoreById(Integer id);
			
			public Store queryByUid(Integer id);
			//删除店铺
			public Integer deleteStore(Integer id);
			
			//添加店铺
			public Integer addStore(Store store);
	}
