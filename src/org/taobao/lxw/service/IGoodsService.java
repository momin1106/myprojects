package org.taobao.lxw.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.taobao.lxw.bean.Goods;

public interface IGoodsService {
	// 添加货物（商品）
	Integer addGoods(Goods info);

	// 删除商品
	Integer deleteGoods(Integer id);

	// 更新商品
	Integer updateGoods(Goods info);

	// 获得该商家所有商品
	List<Goods> getAllGoodsById(Integer id);
	

	// 根据商品名称查找商品
	List<Goods> getGoodsByName(Integer id, String name);

	// 根据商家id查找店铺id
	Integer getStoreIdById(Integer id);

	// 根据商品id查找商品
	Goods getGoodsById(Integer id);
	// 根据商品id和店铺id查找本店商品
	Goods getGoodsByIdAndSid(Integer id,Integer sid);
	//根据类别id来查找本类的所有商品
			List<Goods> getGoodsBySortId(Integer id);
	//获取所有货物的种数
	Integer getGoodsCount(Integer id);

	//分页
	List<Goods> getAllGoodsPageById(Integer id,Integer pageIndex,Integer pageSize);

	
	

}
