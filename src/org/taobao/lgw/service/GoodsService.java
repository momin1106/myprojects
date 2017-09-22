package org.taobao.lgw.service;

import java.util.List;

import org.taobao.lxw.bean.Goods;


public interface GoodsService {
	public List<Goods> getGoodsBySortId(Integer id);

	public List<Goods> getGoodsAllByName(String searchValue);

}
