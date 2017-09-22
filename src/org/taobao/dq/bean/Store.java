	
	package org.taobao.dq.bean;

	import org.apache.ibatis.type.Alias;
	
	@Alias("store")
	public class Store {
	
		private Integer id;//店铺ID
		private String name;//店铺名称
		private String level;//星级
		private String address;//店铺地址
		private Integer sortId;//类别id
		private String time;//开店时间
		private Integer isDelete;//是否删除
		private Integer uid;//商家id
		private User info;//商家信息
		private StoreSort sort;//店铺类别
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
		public Integer getUid() {
			return uid;
		}
		public void setUid(Integer uid) {
			this.uid = uid;
		}
		
		public String getLevel() {
			return level;
		}
		public void setLevel(String level) {
			this.level = level;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public Integer getSortId() {
			return sortId;
		}
		public void setSortId(Integer sortId) {
			this.sortId = sortId;
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
		
		public StoreSort getSort() {
			return sort;
		}
		public void setSort(StoreSort sort) {
			this.sort = sort;
		}
		public User getInfo() {
			return info;
		}
		public void setInfo(User info) {
			this.info = info;
		}
		
		@Override
		public String toString() {
			return "Store [id=" + id + ", name=" + name + ", level=" + level
					+ ", address=" + address + ", sortId=" + sortId + ", time="
					+ time + ", isDelete=" + isDelete + ", uid=" + uid
					+ ", info=" + info + ", sort=" + sort + "]";
		}
	}
