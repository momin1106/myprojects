package org.taobao.lxw.service;

import java.util.List;

import org.taobao.dq.bean.Store;
import org.taobao.dq.bean.StoreSort;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.GoodsSort;

public interface IGoodsSortService {
	List<GoodsSort> getStoreAllSortIdByUid(Integer id);

	List<Store> queryStoreSort(Integer id);
	//根据商品分类id和价格区间来查询，按价格排序
		List<Goods> GroupGoodsBySortIdAndPriceRange(Integer sortid,Integer min,Integer max);
	// 根据商品分类id来查询，按价格排序
	List<Goods> GroupGoodsBySortIdAndPrice(Integer sortid);
	// 根据商品分类id来查询，按销量排序
	List<Goods> GroupGoodsBySortIdAndSales(Integer sortid);
	// 根据商品分类id来查询，按人气排序
	List<Goods> GroupGoodsBySortIdAndPop(Integer sortid);
}
