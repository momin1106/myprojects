package org.taobao.lxw.dao.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.taobao.dq.dao.BaseDao;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.Order;
import org.taobao.lxw.dao.IOrderDao;
import org.taobao.lxw.mapper.IOrderMapper;

@Repository
public class OrderDao extends BaseDao implements IOrderDao {

	
	@Override
	public List<Order> getAllOrderById(Integer id) {
		return getMapper(IOrderMapper.class).getAllOrderById(id);
	}
	@Override
	public Order getOrderById(Integer id) {
		return getMapper(IOrderMapper.class).getOrderById(id);
	}
	@Override
	public Integer deleteOrder(Integer id) {
		return getMapper(IOrderMapper.class).deleteOrder(id);
	}
	@Override
	public List<Order> getOrderByName(String name) {
		return getMapper(IOrderMapper.class).getOrderByName(name);
	}
	@Override
	public Integer getOrderCount(Integer id) {
		return getMapper(IOrderMapper.class).getOrderCount(id);
	}
	@Override
	public List<Order> getAllOrderPageById(Integer id, Integer pageIndex, Integer pageSize) {
		return getMapper(IOrderMapper.class).getAllOrderPageById(id, (pageIndex-1)*pageSize, pageSize);
	}
	@Override
	public Integer getAllOrderCount() {
		return getMapper(IOrderMapper.class).getAllOrderCount();
	}
	

}
