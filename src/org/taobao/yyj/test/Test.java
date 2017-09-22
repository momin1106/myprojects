package org.taobao.yyj.test;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.taobao.yyj.bean.Address;
import org.taobao.yyj.mapper.AddressMapper;
import org.taobao.yyj.mapper.ShoppingCarMapper;



public class Test {
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("application.xml");
		SqlSession sqlSession=context.getBean(SqlSession.class);
		
		//ShoppingCarMapper mapper=sqlSession.getMapper(ShoppingCarMapper.class);
		//System.out.println(mapper.getCarById(5));
		AddressMapper mapper=sqlSession.getMapper(AddressMapper.class);
		//List<Address> list=mapper.getAddresses(1);
		Address a=new Address("da","dsfds","11",1,0);
		mapper.addAddress(a);
		//System.err.println(list);
		//mapper.updateAddress(new Address(6,"da","dsfds","11",1,0));
		//mapper.deleteAddress(2);
	}
}
