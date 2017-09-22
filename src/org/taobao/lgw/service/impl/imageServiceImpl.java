package org.taobao.lgw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.dq.bean.Picture;
import org.taobao.dq.dao.PictureDao;
import org.taobao.lgw.service.imageService;

@Service
public class imageServiceImpl implements imageService{
	
	@Autowired
	PictureDao dao;

	@Override
	public List<Picture> getPictureService() {
		// TODO Auto-generated method stub
		return dao.queryAllPicture();
	}
	
}
