KISSY.add("ctr/ct-villager-mgmt/0.0.6/index",["ctr/ct-villager-mgmt/0.0.6/index.css","ctr/ct-villager-mgmt/0.0.6/lib/","base","io","kg/placeholder/2.0.0/index","node","combobox","overlay"],function(e,t,a,i){var n,l,r,s,o,c=(t("ctr/ct-villager-mgmt/0.0.6/index.css"),t("ctr/ct-villager-mgmt/0.0.6/lib/")),d=t("base"),h=t("io"),u=t("kg/placeholder/2.0.0/index"),g=t("node"),v=t("combobox"),m=t("overlay");n=function(e){return e=c}(),l=function(t){var a=g.all,i=d,n=h,l=u,r=KISSY.unparam(location.search.slice(1))._login_daily_,s=r||-1!==location.host.indexOf(".daily."),o=s?"//icuntao.daily.taobao.net":"//icuntao.taobao.com";KISSY.config({packages:{"kg/address":{base:"//g.alicdn.com/vip/address",ignorePackageNameInUri:!0}}});var c='<div class="bd-content"><p class="row"><input type="text" class="v_name" placeholder="请输入购买客户姓名" size="30"/></p><p class="row"><input type="text" class="v_mbno" placeholder="请输入购买客户手机号码" size="30"/><span class="warn"></span></p><div class="row J_CitySelect ks-clear clearfix"><input type="hidden" name="prov" value="" class="J_iProv"/><input type="hidden" name="provExt" value="" class="J_iProvExt"/><input type="hidden" name="city" value="" class="J_iCity"/><input type="hidden" name="area" value="" class="J_iArea"/><input type="hidden" name="town" value="" class="J_iTown"/></div><p class="row"><textarea class="v_detail_addr"  placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息"></textarea></p></div><span class="switch"><em>＋</em>已有购买客户</span>',v=i.extend({plugins:[],initializer:function(){var e=this;this.$el=this.get("$target").append(c),KISSY.use(["kg/address/6.0.9/","kg/address/6.0.9/index.css"],function(t,a){e.citySelect=new a({node:e.$el.all(".J_CitySelect")}).on("select",function(){this.fire("change")},e),e.plugins.push(e.citySelect)}),this.$el.all(".v_name, .v_mbno, .v_detail_addr").each(function(t){e.plugins.push(new l({node:t}))}),this.$el.all(".v_mbno,.v_name,  .v_detail_addr").on("valuechange",function(){this.fire("change")},this)},validate:function(){var t=e.some(this.$el.all(".v_name"),function(t){var a=e.trim(t.value);return a.length>10&&(t.value=a.substr(0,10)),e.trim(t.value).length}),i=e.some(this.$el.all(".v_mbno"),function(t){var i=e.trim(t.value),n=i.replace(/[^0-9]/g,"");n.length>11&&(n=n.substr(0,11)),n!==i&&(t.value=n);var l=e.trim(t.value).length;return l&&11>l?a(t).parent().parent().all(".warn").html("请输入11位手机号码").show():a(t).parent().parent().all(".warn").hide(),11===l}),n=e.some(this.$el.all(".v_detail_addr"),function(t){return e.trim(t.value).length>50&&(t.value=e.trim(t.value).substr(0,50)),e.trim(t.value).length});return t&&i&&n&&this.citySelect.getAddressIds().provinceId},addVillager:function(){var t=this.$el.all(".v_name").val(),a=this.$el.all(".v_mbno").val(),i=this.$el.all(".v_detail_addr").val(),l=e.mix({name:t,mobile:a,address:i,_output_charset:this.get("charset")},this.citySelect.getAddressIds());return new n({dataType:"jsonp",url:o+"/villager/addOrEdit",data:l})},show:function(){this.$el.show()},hide:function(){this.$el.hide()},destroy:function(){a(this.plugins).each(function(e,t,a){a[t].destroy()}),this.$el.all(".v_name, .v_mbno, .v_detail_addr").detach("valuechange")}},{ATTRS:{$target:{getter:function(e){return a(e)}}}});return t=v}(),r=function(t){var a=g.all,i=d,n=h,l=v,r=KISSY.unparam(location.search.slice(1))._login_daily_,s=r||-1!==location.host.indexOf(".daily."),o=s?"//icuntao.daily.taobao.net":"//icuntao.taobao.com",c='<div class="bd-content"></div><span class="switch"><em>＋</em>新增购买客户</span>',u=i.extend({initializer:function(){this.$el=this.get("$target").append(c),this.render()},render:function(){this.villagerSelector=new l.FilterSelect({render:this.$el.all(".bd-content"),placeholder:"下拉选择购买客户或输入购买客户姓名查找",prefixCls:"ks-villager-mgmt-",width:325,menu:{zIndex:this.get("zIndex")+2},maxItemCount:50,dataSource:new l.LocalDataSource({data:[]}),format:function(e,t){for(var a,i=[],n=0;n<t.length;n++)a=t[n].villagerName+" | "+t[n].villagerMobile,i[n]={content:"<em>"+t[n].villagerName+"</em> | "+t[n].villagerMobile,textContent:a};return i}}).render().on("afterValueChange",function(){this.fire("change")},this),this.getVillagers()},validate:function(){var e;return this.villagerSelector.validate(function(t,a){e=!t}),e},getVillagers:function(){var e=this;return new n({url:o+"/villager/simpleQuery",data:{_output_charset:this.get("charset")},dataType:"jsonp",success:function(t){e.villagerSelector.set("dataSource",new l.LocalDataSource({data:t.result,parse:e._parser}))}})},_parser:function(t,a){var i=[],n=0;return t?(e.each(a,function(e){-1!=(e.villagerName+" | "+e.villagerMobile).indexOf(t)&&i.push(e),n++}),i):a},show:function(){this.$el.show()},hide:function(){this.$el.hide()},destroy:function(){this.villagerSelector.destroy()}},{ATTRS:{$target:{getter:function(e){return a(e)}}}});return t=u}(),s=function(e){var t=g.all,a=d,i=v,n=KISSY.unparam(location.search.slice(1))._login_daily_,l=n||-1!==location.host.indexOf(".daily."),r=l?"//icuntao.daily.taobao.net":"//icuntao.taobao.com",s='<div class="bd-content"></div><span class="switch"><em>＋</em>新增购买客户</span>',o=i.extend({validate:function(e){var t=this,a=t.get("validator"),i=t.get("value");a?a(i,function(t,a){e(t,i,a)}):e(!1,i,{})}}),c=a.extend({initializer:function(){this.$el=this.get("$target").append(s),this.lastRequestTime=+new Date,this.render()},render:function(){var e=this;this.villagerSelector=new o({render:this.$el.all(".bd-content"),placeholder:"下拉选择购买客户或输入购买客户姓名查找",prefixCls:"ks-villager-mgmt-",width:325,menu:{zIndex:this.get("zIndex")+2},maxItemCount:50,dataSource:new i.RemoteDataSource({xhrCfg:{url:r+"/rest/getSimpleCustomersByKeyword",dataType:"jsonp",data:{}},paramName:"keyword",parse:function(e,t){return t.result},allowEmpty:!0}),format:function(e,t){for(var a,i=[],n=0;n<t.length;n++){var l=t[n].villagerName||t[n].name,r=t[n].villagerMobile||t[n].mobile;a=l+" | "+r,i[n]={content:"<em>"+l+"</em> | "+r,textContent:a}}return i}}),this.villagerSelector.set("validator",function(t,a){var i=!0,n={value:null},l=e.villagerSelector.get("dataSource")&&e.villagerSelector.get("dataSource").get("data")||[];l.forEach(function(e,a){var l=e.villagerName||e.name,r=e.villagerMobile||e.mobile;return l+" | "+r===t?(i=!1,void(n.value=e)):void 0}),a(i,n)}),this.villagerSelector.render().on("afterValueChange",function(){this.fire("change")},this),this.villagerSelector.get("menu").hide()},validate:function(){var e;return this.villagerSelector.validate(function(t,a){e=!t&&a}),e},show:function(){this.$el.show()},hide:function(){this.$el.hide()},destroy:function(){this.villagerSelector.destroy()}},{ATTRS:{$target:{getter:function(e){return t(e)}}}});return e=c}(),o=function(e){var t=g.all,a=d,i=m,n=l,o=r,c=s,h='<div class="bd-select"></div><div class="bd-add"></div>',u=a.extend({initializer:function(){var e=this;this.dialog=new i.Dialog({headerContent:this.get("title"),width:500,mask:!0,zIndex:this.get("zIndex"),bodyContent:h,prefixCls:"ks-villager-mgmt-",align:{points:["cc","cc"]}}).on("afterRenderUI",function(){e.renderContent(this),e.renderBtns(this)}).on("hide",function(){e.fire("hide")})},_validate:function(){var e=this.currentRegion.validate();e?this.nextBtn.removeClass("disabled"):this.nextBtn.addClass("disabled")},renderContent:function(){var e=this.get("method"),t={$target:this.dialog.$el.all(".bd-select"),zIndex:this.get("zIndex"),charset:this.getCharset()};e&&"once"===e.toLowerCase()?this.currentRegion=this.selectRegion=new o(t).on("change",this._validate,this):this.currentRegion=this.selectRegion=new c(t).on("change",this._validate,this),this.dialog.$el.delegate("click",".switch",this.switchRegion,this)},renderBtns:function(e){var a=this;this.nextBtn=t('<a class="ks-villager-mgmt-next disabled" href="javascript:void(0)">下一步</a>').appendTo(e.get("footer")),this.nextBtn.on("click",function(){t(this).hasClass("disabled")||t(this).hasClass("progress")||(a.currentRegion==a.addRegion?(t(this).addClass("progress"),a.addRegion.addVillager().then(function(e){t(a.nextBtn).removeClass("progress"),e&&e[0]&&e[0].success?(e[0].result.villagerId=e[0].result.mirrorVillagerId,a.get("callback")(e[0].result),a.destroy()):alert(e[0].errorMsg)},function(){t(a.nextBtn).removeClass("progress")})):a.selectRegion.villagerSelector.validate(function(e,t,i){a.get("callback")(i.value),a.destroy()}))})},show:function(){return this.dialog.show(),this},hide:function(){return this.dialog.hide(),this},switchRegion:function(){this.currentRegion.hide(),this.currentRegion===this.selectRegion?(this.addRegion||(this.addRegion=new n({$target:this.dialog.$el.all(".bd-add"),charset:this.getCharset()}).on("change",this._validate,this)),this.currentRegion=this.addRegion):this.currentRegion=this.selectRegion,this.currentRegion.show(),this._validate()},getCharset:function(){var e,t=document.charset?document.charset:document.characterSet?document.characterSet:document.defaultCharset,a="utf-8|UTF-8";return e=a.indexOf(t)>-1?t:"gbk"},destroy:function(){this.addRegion&&this.addRegion.destroy(),this.selectRegion.destroy(),this.nextBtn.detach("click"),this.dialog.destroy()}},{ATTRS:{$target:{value:"",getter:function(e){return t(e)}},title:{value:"添加购买客户信息"}}});return e=u}(),i.exports=n});