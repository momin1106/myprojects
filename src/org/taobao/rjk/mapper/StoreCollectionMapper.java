package org.taobao.rjk.mapper;

import java.util.List;

import org.taobao.rjk.bean.StoreCollection;

public interface StoreCollectionMapper {
	//获取所有收藏的店铺
List<StoreCollection> getAllStoreCollection();
//根据店铺id删除收藏的店铺
int deleteCollectionStoreBysid(int sid);
//增加收藏的店铺
int insertStore(StoreCollection store);
}
