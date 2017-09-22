	
	package org.taobao.dq.service.impl;
	
	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;
	import org.taobao.dq.bean.Picture;
	import org.taobao.dq.dao.PictureDao;
	import org.taobao.dq.service.PictureService;
	
	@Service
	public class PictureServiceImpl implements PictureService {
	
		@Autowired
		PictureDao dao;
		
		//保存图片
		@Override
		public Integer savePicture(Picture picture) {
		
			return dao.savePicture(picture);
		}
		
		//查询图片
		@Override
		public List<Picture> queryAllPicture() {
			
			return dao.queryAllPicture();
		}
	
		//删除图片
		@Override
		public Integer deletePicture(Integer id) {
			
			return dao.deletePicture(id);
		}
	
		//更换图片
		@Override
		public Integer changePicture(Picture picture) {
			
			return dao.changePicture(picture);
		}
	
	}
