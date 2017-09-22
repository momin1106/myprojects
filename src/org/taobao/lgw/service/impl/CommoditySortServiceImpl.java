package org.taobao.lgw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.dq.bean.Navgiation;
import org.taobao.dq.dao.NavDao;
import org.taobao.lgw.service.CommoditySortService;

@Service
public class CommoditySortServiceImpl implements CommoditySortService{
	@Autowired
	NavDao dao;
	
	@Override
	public List<Navgiation> getAllCommoditySort() {
		// TODO Auto-generated method stub
		return dao.queryAll();
	}

}
