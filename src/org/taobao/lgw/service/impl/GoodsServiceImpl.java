package org.taobao.lgw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.lgw.service.GoodsService;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.dao.impl.GoodsDao;


@Service
public class GoodsServiceImpl implements GoodsService{
	@Autowired
	GoodsDao dao;

	@Override
	public java.util.List<Goods> getGoodsBySortId(Integer id) {
		// TODO Auto-generated method stub
		return dao.getGoodsBySortId(id);
	}

	@Override
	public List<Goods> getGoodsAllByName(String name) {
		// TODO Auto-generated method stub
		return dao.getAllGoodsByName(name);
	}
	

}
