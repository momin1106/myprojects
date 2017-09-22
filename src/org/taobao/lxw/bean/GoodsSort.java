package org.taobao.lxw.bean;

import org.apache.ibatis.type.Alias;

@Alias("goodssort")
public class GoodsSort {
	private Integer id;
	private String name;
	


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
	
	public GoodsSort(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	@Override
	public String toString() {
		return "GoodsSort [id=" + id + ", name=" + name + "]";
	}

	public GoodsSort() {
		super();
	}

}
