KISSY.add("ctr/ct-villager-mgmt/0.0.6/lib/index",["node","base","overlay","ctr/ct-villager-mgmt/0.0.6/lib/adding","ctr/ct-villager-mgmt/0.0.6/lib/selector","ctr/ct-villager-mgmt/0.0.6/lib/asyncSelector"],function(e,t,i,s){var n=t("node").all,a=t("base"),r=t("overlay"),l=t("ctr/ct-villager-mgmt/0.0.6/lib/adding"),o=t("ctr/ct-villager-mgmt/0.0.6/lib/selector"),d=t("ctr/ct-villager-mgmt/0.0.6/lib/asyncSelector"),c='<div class="bd-select"></div><div class="bd-add"></div>',g=a.extend({initializer:function(){var e=this;this.dialog=new r.Dialog({headerContent:this.get("title"),width:500,mask:!0,zIndex:this.get("zIndex"),bodyContent:c,prefixCls:"ks-villager-mgmt-",align:{points:["cc","cc"]}}).on("afterRenderUI",function(){e.renderContent(this),e.renderBtns(this)}).on("hide",function(){e.fire("hide")})},_validate:function(){var e=this.currentRegion.validate();e?this.nextBtn.removeClass("disabled"):this.nextBtn.addClass("disabled")},renderContent:function(){var e=this.get("method"),t={$target:this.dialog.$el.all(".bd-select"),zIndex:this.get("zIndex"),charset:this.getCharset()};e&&"once"===e.toLowerCase()?this.currentRegion=this.selectRegion=new o(t).on("change",this._validate,this):this.currentRegion=this.selectRegion=new d(t).on("change",this._validate,this),this.dialog.$el.delegate("click",".switch",this.switchRegion,this)},renderBtns:function(e){var t=this;this.nextBtn=n('<a class="ks-villager-mgmt-next disabled" href="javascript:void(0)">下一步</a>').appendTo(e.get("footer")),this.nextBtn.on("click",function(){n(this).hasClass("disabled")||n(this).hasClass("progress")||(t.currentRegion==t.addRegion?(n(this).addClass("progress"),t.addRegion.addVillager().then(function(e){n(t.nextBtn).removeClass("progress"),e&&e[0]&&e[0].success?(e[0].result.villagerId=e[0].result.mirrorVillagerId,t.get("callback")(e[0].result),t.destroy()):alert(e[0].errorMsg)},function(){n(t.nextBtn).removeClass("progress")})):t.selectRegion.villagerSelector.validate(function(e,i,s){t.get("callback")(s.value),t.destroy()}))})},show:function(){return this.dialog.show(),this},hide:function(){return this.dialog.hide(),this},switchRegion:function(){this.currentRegion.hide(),this.currentRegion===this.selectRegion?(this.addRegion||(this.addRegion=new l({$target:this.dialog.$el.all(".bd-add"),charset:this.getCharset()}).on("change",this._validate,this)),this.currentRegion=this.addRegion):this.currentRegion=this.selectRegion,this.currentRegion.show(),this._validate()},getCharset:function(){var e,t=document.charset?document.charset:document.characterSet?document.characterSet:document.defaultCharset,i="utf-8|UTF-8";return e=i.indexOf(t)>-1?t:"gbk"},destroy:function(){this.addRegion&&this.addRegion.destroy(),this.selectRegion.destroy(),this.nextBtn.detach("click"),this.dialog.destroy()}},{ATTRS:{$target:{value:"",getter:function(e){return n(e)}},title:{value:"添加购买客户信息"}}});s.exports=g});