package org.taobao.rjk.service;

import java.util.List;

import org.taobao.rjk.bean.GoodCollection;

public interface GoodCollectionService {
	 List<GoodCollection>getAllGoodCollection();
	 
	 int deleteCollectionGoodBygId(int gid);
	    
	   int insertGood(GoodCollection good);
}
