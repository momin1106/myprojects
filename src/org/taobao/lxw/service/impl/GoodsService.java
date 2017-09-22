package org.taobao.lxw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.dao.IGoodsDao;
import org.taobao.lxw.service.IGoodsService;
@Service
public class GoodsService implements IGoodsService {

	@Autowired
	IGoodsDao dao;
	
	@Override
	public Integer addGoods(Goods info) {
		return dao.addGoods(info);
	}
	@Override
	public Integer deleteGoods(Integer id) {
		return dao.deleteGoods(id);
	}
	@Override
	public Integer updateGoods(Goods info) {
		return dao.updateGoods(info);
	}
	@Override
	public List<Goods> getAllGoodsById(Integer id) {
		return dao.getAllGoodsById(id);
	}
	@Override
	public List<Goods> getGoodsByName(Integer id, String name) {
		return dao.getGoodsByName(id, name);
	}
	@Override
	public Integer getStoreIdById(Integer id) {
		return dao.getStoreIdById(id);
	}
	@Override
	public Goods getGoodsById(Integer id) {
		return dao.getGoodsById(id);
	}
	@Override
	public Integer getGoodsCount(Integer id) {
		return dao.getGoodsCount(id);
	}
	@Override
	public List<Goods> getAllGoodsPageById(Integer id, Integer pageIndex, Integer pageSize) {
		return dao.getAllGoodsPageById(id, pageIndex, pageSize);
	}
	@Override
	public List<Goods> getGoodsBySortId(Integer id) {
		return dao.getGoodsBySortId(id);
	}
	@Override
	public Goods getGoodsByIdAndSid(Integer id, Integer sid) {
		return dao.getGoodsByIdAndSid(id, sid);
	}

}
