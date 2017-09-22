package org.taobao.lgw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.lgw.service.HotSpotService;
import org.taobao.lxw.bean.HotSpot;
import org.taobao.lxw.dao.IHotSpotDao;

@Service
public class HotSpotServiceImpl implements HotSpotService{
	@Autowired
	IHotSpotDao dao;
	@Override
	public List<HotSpot> getAllHotSpot() {
		// TODO Auto-generated method stub
		return dao.getAllHotSpot(1, 10);
	}

}
