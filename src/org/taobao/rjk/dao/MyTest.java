package org.taobao.rjk.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.taobao.rjk.dao.impl.GoodCollectionDaoImpl;

public class MyTest {
	
@Autowired
static
  GoodCollectionDaoImpl dao;

	public static void main(String[] args) {
		//GoodCollectionDaoImpl dao=new GoodCollectionDaoImpl();
		System.out.println(dao.getAllGoodCollection());
	}

}
