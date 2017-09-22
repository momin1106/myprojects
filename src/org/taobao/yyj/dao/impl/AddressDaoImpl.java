package org.taobao.yyj.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.yyj.bean.Address;
import org.taobao.yyj.dao.AddressDao;
import org.taobao.yyj.dao.MyBaseDao;
import org.taobao.yyj.mapper.AddressMapper;
@Repository
public class AddressDaoImpl extends MyBaseDao implements AddressDao {

	@Override
	public List<Address> getAddresses(Integer i) {
		
		return getMapper(AddressMapper.class).getAddresses(i);
	}

	@Override
	public Integer updateAddress(Address a) {
		return getMapper(AddressMapper.class).updateAddress(a);
	}

	@Override
	public Integer addAddress(Address a) {
		return getMapper(AddressMapper.class).addAddress(a);
	}

	@Override
	public Integer deleteAddress(Integer i) {
		return getMapper(AddressMapper.class).deleteAddress(i);
	}

}
