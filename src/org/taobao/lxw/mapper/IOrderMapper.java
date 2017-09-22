package org.taobao.lxw.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.taobao.lxw.bean.Order;

public interface IOrderMapper {
	
	List<Order> getAllOrderById(Integer id);
	Order getOrderById(Integer id);
	List<Order> getOrderByName(String name);
	Integer deleteOrder(Integer id);
	//获得当前店铺订单总数
	Integer getOrderCount(Integer id);
	//获得所有订单总数
	Integer getAllOrderCount();
	//分页
	List<Order> getAllOrderPageById(@Param("id")Integer id,@Param("pageIndex")Integer pageIndex,@Param("pageSize")Integer pageSize);
	
}
