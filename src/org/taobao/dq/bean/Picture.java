	
	package org.taobao.dq.bean;
	
	import org.apache.ibatis.type.Alias;
	
	@Alias("picture")
	public class Picture {
		private Integer id;//图片id
		private String url;//图片地址
		private String message;//图片说明
		private Integer isNav;//是否为导航图片
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public String getUrl() {
			return url;
		}
		public void setUrl(String url) {
			this.url = url;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public Integer getIsNav() {
			return isNav;
		}
		public void setIsNav(Integer isNav) {
			this.isNav = isNav;
		}
		
		@Override
		public String toString() {
			return "Picture [id=" + id + ", url=" + url + ", message=" + message
					+ ", isNav=" + isNav + "]";
		}
		
		
	}
