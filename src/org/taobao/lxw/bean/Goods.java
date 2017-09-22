package org.taobao.lxw.bean;

import org.apache.ibatis.type.Alias;
import org.taobao.dq.bean.Store;
@Alias("goods")
public class Goods {
	//商品id
	private Integer id;
	//店铺id
	private Integer sid;
	//商品名
	private String name;
	//类别id
	private Integer sortid;
	//价格
	private Integer price;
	//数量
	private Integer count;
	//人气
	private Integer pop;
	//销量
	private Integer sales;
	//进货时间
	private String time;
	//是否删除（0-1）
	private Integer isDelete;
	private Store store;
	
	public Goods() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getSid() {
		return sid;
	}

	public void setSid(Integer sid) {
		this.sid = sid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSortid() {
		return sortid;
	}

	public void setSortid(Integer sortid) {
		this.sortid = sortid;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public Integer getPop() {
		return pop;
	}

	public void setPop(Integer pop) {
		this.pop = pop;
	}

	public Integer getSales() {
		return sales;
	}

	public void setSales(Integer sales) {
		this.sales = sales;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Integer getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(Integer isDelete) {
		this.isDelete = isDelete;
	}

	public Store getStore() {
		return store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	@Override
	public String toString() {
		return "Goods [id=" + id + ", sid=" + sid + ", name=" + name + ", sortid=" + sortid + ", price=" + price
				+ ", count=" + count + ", pop=" + pop + ", sales=" + sales + ", time=" + time + ", isDelete=" + isDelete
				+ ", store=" + store + "]";
	}

	public Goods(Integer id, Integer sid, String name, Integer sortid, Integer price, Integer count, Integer pop,
			Integer sales, String time, Integer isDelete, Store store) {
		super();
		this.id = id;
		this.sid = sid;
		this.name = name;
		this.sortid = sortid;
		this.price = price;
		this.count = count;
		this.pop = pop;
		this.sales = sales;
		this.time = time;
		this.isDelete = isDelete;
		this.store = store;
	}

	
	
	
	
	
	
	
}
