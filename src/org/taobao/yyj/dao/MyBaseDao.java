package org.taobao.yyj.dao;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MyBaseDao {
	@Autowired
	SqlSession sqlSession;
	
	protected <T> T getMapper(Class<T> c){
		return sqlSession.getMapper(c);
	}
}