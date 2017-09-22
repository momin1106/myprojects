	
	package org.taobao.dq.bean;

	import org.apache.ibatis.type.Alias;
	
	@Alias("count")
	public class Count {
	
		private Integer id;//编号
		private Integer user;//用户总数
		private Integer store;//店铺总数
		private Integer business;//商家总数
		private Integer order;//每个商家的订单总数
		private Integer goods;//每个商家商品总数
		private String time;//当天时间
		
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public Integer getUser() {
			return user;
		}
		public void setUser(Integer user) {
			this.user = user;
		}
		public Integer getStore() {
			return store;
		}
		public void setStore(Integer store) {
			this.store = store;
		}
		public Integer getOrder() {
			return order;
		}
		public void setOrder(Integer order) {
			this.order = order;
		}
		public Integer getGoods() {
			return goods;
		}
		public void setGoods(Integer goods) {
			this.goods = goods;
		}
		
		public String getTime() {
			return time;
		}
		public void setTime(String time) {
			this.time = time;
		}
		public Integer getBusiness() {
			return business;
		}
		public void setBusiness(Integer business) {
			this.business = business;
		}
		
		@Override
		public String toString() {
			return "Count [id=" + id + ", user=" + user + ", store=" + store
					+ ", business=" + business + ", order=" + order
					+ ", goods=" + goods + ", time=" + time + "]";
		}
	}
