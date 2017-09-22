package org.taobao.lxw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.lxw.bean.HotSpot;
import org.taobao.lxw.dao.IHotSpotDao;
import org.taobao.lxw.service.IHotSpotService;
@Service
public class HotSpotService implements IHotSpotService{
	@Autowired
	IHotSpotDao dao;
	@Override
	public Integer updateHotSpot(HotSpot spot) {
		return dao.updateHotSpot(spot);
	}

	@Override
	public List<HotSpot> getAllHotSpot(Integer pageIndex, Integer pageSize) {
		return dao.getAllHotSpot(pageIndex, pageSize);
	}

	@Override
	public HotSpot getHotSpotByName(String main) {
		return dao.getHotSpotByName(main);
	}

	@Override
	public HotSpot getHotSpotById(Integer id) {
		return dao.getHotSpotById(id);
	}

	@Override
	public Integer getHotSpotCount() {
		return dao.getHotSpotCount();
	}

}
