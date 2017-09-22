package org.taobao.lxw.test;

import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.taobao.dq.controler.UserControl;
import org.taobao.dq.mapper.UserMapper;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.Order;
import org.taobao.lxw.mapper.IGoodsMapper;
import org.taobao.lxw.mapper.IOrderMapper;
import org.taobao.lxw.service.IGoodsSortService;

public class Test {
	
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("application.xml");
		IGoodsSortService service=context.getBean(IGoodsSortService.class);
		List<Goods> info = service.GroupGoodsBySortIdAndPriceRange(1, 1, 10000);
		List<Goods> info2 = service.GroupGoodsBySortIdAndSales(1);
		System.out.println(info);
		System.out.println("------------------------");
		System.out.println(info2);

		//System.out.println(service);
		//System.out.println(service.queryStoreSort(1));
		/*for (Order order : list) {
			System.out.println(order);
		}
		System.out.println(mapper1.getOrderById(1001));*/
		//System.out.println(new Date());
		
	//对商品的测试
		//System.out.println(mapper2.deleteGoods(6));
		//System.out.println(mapper2.updateGoods(new Goods(2, 10, "智能电脑", 1, 20000, 2, new Date(), 0)));
		
		//List<Goods> list2 = mapper2.getAllGoodsById(10);
		//for (Goods goods : list2) {
		//	System.out.println(goods);
		//}
		//System.out.println("-----------------------------------------");
		/*Map<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("id", 10);
		map.put("name", "手机");
		System.out.println(mapper2.getGoodsByName(map));*/
		
		//System.out.println(mapper2.getGoodsByName(10, "手机"));
		//System.out.println(mapper2.getGoodsById(1));
		/*System.out.println(mapper2.getGoodsCount(10));
		System.out.println(mapper3.queryByNamePass("admin", "123456"));
		System.out.println(mapper1.getOrderCount(1));*/
	//	System.out.println(mapper2.getStoreIdById(1));
		

	}
}
