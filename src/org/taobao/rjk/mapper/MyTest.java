package org.taobao.rjk.mapper;
import java.util.Date;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.taobao.rjk.bean.GoodCollection;

public class MyTest {
	@Autowired
	static 
	SqlSession  se;
	@Autowired
	static
	GoodCollectionMapper good;
		public static void main(String[] args) {
			ApplicationContext context=new ClassPathXmlApplicationContext("application.xml");
		
			se=context.getBean(SqlSession.class);
			good=se.getMapper(GoodCollectionMapper.class);
			System.out.println(good.getAllGoodCollection());
			System.out.println(good.deleteCollectionGoodBygId(1));
			
		//GoodCollection good1=new  GoodCollection (null,2,1,new Date(),1);
			//System.out.println(good.insertGood(good1));
			
		   //System.out.println(new Date());
		}
}
