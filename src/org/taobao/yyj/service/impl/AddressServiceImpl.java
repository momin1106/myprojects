package org.taobao.yyj.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.yyj.bean.Address;
import org.taobao.yyj.dao.AddressDao;
import org.taobao.yyj.service.AddressService;
@Service
public class AddressServiceImpl implements AddressService{
	@Autowired
	AddressDao dao;
	@Override
	public List<Address> getAddresses(Integer i) {
		
		return dao.getAddresses(i);
	}

	@Override
	public Integer updateAddress(Address a) {
		
		return dao.updateAddress(a);
	}

	@Override
	public Integer addAddress(Address a) {
		return dao.addAddress(a);
	}

	@Override
	public Integer deleteAddress(Integer i) {
		return dao.deleteAddress(i);
	}

}
