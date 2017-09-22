package org.taobao.rjk.dao;

import java.util.List;

import org.taobao.rjk.bean.GoodCollection;

public interface GoodCollectionDao {
	 List<GoodCollection>getAllGoodCollection();
	 
	 int deleteCollectionGoodBygId(int gid);
	    
	   int insertGood(GoodCollection good);
}
