package org.taobao.yyj.mapper;

import java.util.List;

import org.taobao.yyj.bean.Address;

public interface AddressMapper {
	public List<Address> getAddresses(Integer i);
	public Integer updateAddress(Address a);
	public Integer addAddress(Address a);
	public Integer deleteAddress(Integer i);
}
