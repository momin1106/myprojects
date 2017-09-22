package org.taobao.lgw.service;

import org.taobao.dq.bean.User;

public interface CustomerService {

	User getCustomerByNameAndPwd(String name, String pwd);

	int addcustomer(User customer);

	User getCustomerByName(String name);

}
