package org.taobao.rjk.mapper;

import java.util.List;

import org.taobao.rjk.bean.GoodCollection;

public interface GoodCollectionMapper {
    List<GoodCollection>getAllGoodCollection();
    
    int deleteCollectionGoodBygId(int gid);
    
    int insertGood(GoodCollection good);
}
