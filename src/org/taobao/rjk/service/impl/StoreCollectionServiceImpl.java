package org.taobao.rjk.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.rjk.bean.StoreCollection;
import org.taobao.rjk.dao.impl.StoreCollectionDaoImpl;
import org.taobao.rjk.service.StoreCollectionService;
@Service
public class StoreCollectionServiceImpl implements StoreCollectionService {
@Autowired
StoreCollectionDaoImpl dao;
	@Override
	public List<StoreCollection> getAllStoreCollection() {
		// TODO Auto-generated method stub
		return dao.getAllStoreCollection();
	}

	@Override
	public int deleteCollectionStoreBysid(int sid) {
		// TODO Auto-generated method stub
		return dao.deleteCollectionStoreBysid(sid);
	}

	@Override
	public int insertStore(StoreCollection store) {
		// TODO Auto-generated method stub
		return dao.insertStore(store);
	}

}
