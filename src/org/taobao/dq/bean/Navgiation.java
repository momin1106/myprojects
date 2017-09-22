package org.taobao.dq.bean;

import org.apache.ibatis.type.Alias;

@Alias("navgiation")
public class Navgiation {

	private Integer id;//id
	private String name;//导航名称
	private Integer pid;//父级id
	private String address;//导航链接地址
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	@Override
	public String toString() {
		return "Navgiation [id=" + id + ", name=" + name + ", pid=" + pid
				+ ", address=" + address + "]";
	}
	
}
