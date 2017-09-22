	
	package org.taobao.dq.mapper;
	
	import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.taobao.dq.bean.Store;
	
	public interface StoreMapper {
	
		//查询所有商家
		public List<Store> queryAllStore(@Param("pageCode")Integer pageCode,@Param("pageSize")Integer pageSize);
		
		//查询总记录数
		public Integer getCount();
		
		//修改商家信息
		public Integer updateStore(Store store);
		
		//按店铺名关键字搜索
		public List<Store> queryStoreByName(@Param("name")String name);
		
		//按店铺id搜索
		public Store queryStoreById(@Param("id")Integer id);
		
		//根据商家id查询店铺
		public Store queryStoreByUid(@Param("id")Integer id);
		
		//根据商家id查询店铺类别
		public List<Store> queryStoreSort(@Param("id")Integer id);
		
		//删除店铺
		public Integer deleteStore(@Param("id")Integer id);
		
		//添加店铺
		public Integer addStore(Store store);
	}
