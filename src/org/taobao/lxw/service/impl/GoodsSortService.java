package org.taobao.lxw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.dq.bean.Store;
import org.taobao.dq.dao.StoreDao;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.GoodsSort;
import org.taobao.lxw.dao.IGoodsSortDao;
import org.taobao.lxw.service.IGoodsSortService;
@Service
public class GoodsSortService implements IGoodsSortService {
	@Autowired
	IGoodsSortDao dao;
	@Autowired
	StoreDao dao2;
	@Override
	public List<GoodsSort> getStoreAllSortIdByUid(Integer id) {
		return dao.getStoreAllSortIdByUid(id);
	}
	@Override
	public List<Store> queryStoreSort(Integer id) {
		return dao2.queryStoreSort(id);
	}
	@Override
	public List<Goods> GroupGoodsBySortIdAndPrice(Integer sortid) {
		return dao.GroupGoodsBySortIdAndPrice(sortid);
	}
	@Override
	public List<Goods> GroupGoodsBySortIdAndSales(Integer sortid) {
		return dao.GroupGoodsBySortIdAndSales(sortid);
	}
	@Override
	public List<Goods> GroupGoodsBySortIdAndPop(Integer sortid) {
		return dao.GroupGoodsBySortIdAndPop(sortid);
	}
	@Override
	public List<Goods> GroupGoodsBySortIdAndPriceRange(Integer sortid, Integer min, Integer max) {
		return dao.GroupGoodsBySortIdAndPriceRange(sortid, min, max);
	}

}
