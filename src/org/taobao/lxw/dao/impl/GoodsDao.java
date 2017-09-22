package org.taobao.lxw.dao.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.taobao.dq.dao.BaseDao;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.dao.IGoodsDao;
import org.taobao.lxw.mapper.IGoodsMapper;
@Repository
public class GoodsDao extends BaseDao implements IGoodsDao{
	
	@Override
	public Integer addGoods(Goods info) {
		return getMapper(IGoodsMapper.class).addGoods(info);
	}
	@Override
	public Integer deleteGoods(Integer id) {
		return getMapper(IGoodsMapper.class).deleteGoods(id);
	}
	@Override
	public Integer updateGoods(Goods info) {
		return getMapper(IGoodsMapper.class).updateGoods(info);
	}
	@Override
	public List<Goods> getAllGoodsById(Integer id) {
		return getMapper(IGoodsMapper.class).getAllGoodsById(id);
	}
	@Override
	public List<Goods> getGoodsByName(Integer id, String name) {
		return getMapper(IGoodsMapper.class).getGoodsByName(id, name);
	}
	@Override
	public Integer getStoreIdById(Integer id) {
		return getMapper(IGoodsMapper.class).getStoreIdById(id);
	}
	@Override
	public Goods getGoodsById(Integer id) {
		return getMapper(IGoodsMapper.class).getGoodsById(id);
	}
	@Override
	public Integer getGoodsCount(Integer id) {
		return getMapper(IGoodsMapper.class).getGoodsCount(id);
	}
	@Override
	public List<Goods> getAllGoodsPageById(Integer id, Integer pageIndex, Integer pageSize) {
		return getMapper(IGoodsMapper.class).getAllGoodsPageById(id, (pageIndex-1)*pageSize, pageSize);
	}
	@Override
	public List<Goods> getGoodsBySortId(Integer id) {
		return getMapper(IGoodsMapper.class).getGoodsBySortId(id);
	}
	@Override
	public Integer getAllGoodsCount() {
		return getMapper(IGoodsMapper.class).getAllGoodsCount();
	}
	@Override
	public Goods getGoodsByIdAndSid(Integer id, Integer sid) {
		return getMapper(IGoodsMapper.class).getGoodsByIdAndSid(id, sid);
	}
	@Override
	public List<Goods> getAllGoodsByName(String name) {
		return getMapper(IGoodsMapper.class).getAllGoodsByName(name);
	}
}
