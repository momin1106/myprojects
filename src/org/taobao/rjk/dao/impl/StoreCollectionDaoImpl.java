package org.taobao.rjk.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.dao.BaseDao;
import org.taobao.rjk.bean.StoreCollection;
import org.taobao.rjk.mapper.StoreCollectionMapper;
@Repository
public class StoreCollectionDaoImpl extends BaseDao implements StoreCollectionDao {

	@Override
	public List<StoreCollection> getAllStoreCollection() {
		// TODO Auto-generated method stub
		return  getMapper(StoreCollectionMapper.class).getAllStoreCollection();
	}

	@Override
	public int deleteCollectionStoreBysid(int sid) {
		// TODO Auto-generated method stub
		return getMapper(StoreCollectionMapper.class).deleteCollectionStoreBysid(sid);
	}

	@Override
	public int insertStore(StoreCollection store) {
		// TODO Auto-generated method stub
		return getMapper(StoreCollectionMapper.class).insertStore(store);
	}

}
