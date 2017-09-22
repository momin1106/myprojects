package org.taobao.rjk.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.dao.BaseDao;
import org.taobao.rjk.bean.GoodCollection;

import org.taobao.rjk.dao.GoodCollectionDao;
import org.taobao.rjk.mapper.GoodCollectionMapper;
@Repository
public class GoodCollectionDaoImpl extends BaseDao implements GoodCollectionDao {

	@Override
	public List<GoodCollection> getAllGoodCollection() {
		
		return getMapper(GoodCollectionMapper.class).getAllGoodCollection();
	}

	@Override
	public int deleteCollectionGoodBygId(int gid) {
		// TODO Auto-generated method stub
		return getMapper(GoodCollectionMapper.class).deleteCollectionGoodBygId(gid);
	}

	@Override
	public int insertGood(GoodCollection good) {
		// TODO Auto-generated method stub
		return getMapper(GoodCollectionMapper.class).insertGood(good);
	}  
}
