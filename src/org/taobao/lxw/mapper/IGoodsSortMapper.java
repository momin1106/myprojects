package org.taobao.lxw.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.GoodsSort;

public interface IGoodsSortMapper {
	
	List<GoodsSort> getStoreAllSortIdByUid(Integer id);
	//根据商品分类id来查询，按价格排序
	List<Goods> GroupGoodsBySortIdAndPrice(Integer sortid);
	//根据商品分类id和价格区间来查询，按价格排序
		List<Goods> GroupGoodsBySortIdAndPriceRange(@Param("sortid")Integer sortid,@Param("min")Integer min,@Param("max")Integer max);
	//根据商品分类id来查询，按销量排序
		List<Goods> GroupGoodsBySortIdAndSales(Integer sortid);
		//根据商品分类id来查询，按人气排序
		List<Goods> GroupGoodsBySortIdAndPop(Integer sortid);
		
}
