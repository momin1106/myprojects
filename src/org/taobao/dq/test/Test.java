	
	package org.taobao.dq.test;
	
	import org.springframework.context.ApplicationContext;
	import org.springframework.context.support.ClassPathXmlApplicationContext;
	import org.taobao.dq.service.CountService;

	
	public class Test {
		
		public static void main(String[] args) {
			ApplicationContext context =new ClassPathXmlApplicationContext("application.xml");
			//SqlSession sqlsession =context.getBean(SqlSession.class);
			CountService count=context.getBean(CountService.class);
			count.query();
		}
	}
