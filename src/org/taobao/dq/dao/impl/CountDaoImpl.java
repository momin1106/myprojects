	
	package org.taobao.dq.dao.impl;
	
	import org.springframework.stereotype.Repository;
	import org.taobao.dq.bean.Count;
	import org.taobao.dq.dao.BaseDao;
	import org.taobao.dq.dao.CountDao;
	import org.taobao.dq.mapper.CountMapper;
	
	@Repository
	public class CountDaoImpl extends BaseDao implements CountDao {
	
		@Override
		public Integer add(Count count) {
			
			return getMapper(CountMapper.class).add(count);
		}
	
	
	}
