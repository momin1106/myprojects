package org.taobao.rjk.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.rjk.bean.GoodCollection;
import org.taobao.rjk.dao.impl.GoodCollectionDaoImpl;
import org.taobao.rjk.service.GoodCollectionService;
@Service
public class GoodCollectionServiceImpl implements GoodCollectionService {
@Autowired
       GoodCollectionDaoImpl dao;
	
	public List<GoodCollection> getAllGoodCollection() {
		
		return dao.getAllGoodCollection();
	}

	@Override
	public int deleteCollectionGoodBygId(int gid) {
		// TODO Auto-generated method stub
		return dao.deleteCollectionGoodBygId(gid);
	}

	@Override
	public int insertGood(GoodCollection good) {
		// TODO Auto-generated method stub
		return dao.insertGood(good);
	}
	
}
