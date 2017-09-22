package org.taobao.lxw.dao;

import java.util.List;

import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.mapper.IGoodsMapper;

public interface IGoodsDao {
	// 添加货物（商品）
	Integer addGoods(Goods info);

	// 删除商品
	Integer deleteGoods(Integer id);

	// 更新商品
	Integer updateGoods(Goods info);

	// 获得该商家所有商品
	List<Goods> getAllGoodsById(Integer id);

	// 根据商品名称查找本店商品
	List<Goods> getGoodsByName(Integer id, String name);
	// 在仓库中根据商品名查询商品
	List<Goods> getAllGoodsByName(String name);
	// 根据商品id查找商品
	Goods getGoodsById(Integer id);

	// 根据商品id和店铺id查找本店商品
	Goods getGoodsByIdAndSid(Integer id, Integer sid);

	// 根据类别id来查找本类的所有商品
	List<Goods> getGoodsBySortId(Integer id);

	// 根据商家id查找店铺id
	Integer getStoreIdById(Integer id);

	// 获得所有商品的种类
	Integer getAllGoodsCount();

	// 获取当前店铺所有货物的种数
	Integer getGoodsCount(Integer id);

	// 分页
	List<Goods> getAllGoodsPageById(Integer id, Integer pageIndex, Integer pageSize);
}
