package org.taobao.lxw.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.dao.BaseDao;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.GoodsSort;
import org.taobao.lxw.dao.IGoodsSortDao;
import org.taobao.lxw.mapper.IGoodsSortMapper;
@Repository
public class GoodsSortDao extends BaseDao implements IGoodsSortDao {

	@Override
	public List<GoodsSort> getStoreAllSortIdByUid(Integer id) {
		return getMapper(IGoodsSortMapper.class).getStoreAllSortIdByUid(id);
	}

	@Override
	public List<Goods> GroupGoodsBySortIdAndPrice(Integer sortid) {
		return getMapper(IGoodsSortMapper.class).GroupGoodsBySortIdAndPrice(sortid);
	}

	@Override
	public List<Goods> GroupGoodsBySortIdAndSales(Integer sortid) {
		return getMapper(IGoodsSortMapper.class).GroupGoodsBySortIdAndSales(sortid);
	}

	@Override
	public List<Goods> GroupGoodsBySortIdAndPop(Integer sortid) {
		return getMapper(IGoodsSortMapper.class).GroupGoodsBySortIdAndPop(sortid);
	}

	@Override
	public List<Goods> GroupGoodsBySortIdAndPriceRange(Integer sortid, Integer min, Integer max) {
		return getMapper(IGoodsSortMapper.class).GroupGoodsBySortIdAndPriceRange(sortid, min, max);
	}

}
