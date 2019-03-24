!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(l){var e=Array.prototype.slice,n=Array.prototype.splice,c={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"auto"},h=l(window),u=l(document),g=[],m=h.height(),t=function(){for(var t=h.scrollTop(),e=u.height(),i=e-m,n=i<t?i-t:0,r=0,s=g.length;r<s;r++){var o=g[r],c=o.stickyWrapper.offset().top-o.topSpacing-n;if(o.stickyWrapper.css("height",o.stickyElement.outerHeight()),t<=c)null!==o.currentTop&&(o.stickyElement.css({width:"",position:"",top:"","z-index":""}),o.stickyElement.parent().removeClass(o.className),o.stickyElement.trigger("sticky-end",[o]),o.currentTop=null);else{var a,p=e-o.stickyElement.outerHeight()-o.topSpacing-o.bottomSpacing-t-n;if(p<0?p+=o.topSpacing:p=o.topSpacing,o.currentTop!==p)o.getWidthFrom?a=l(o.getWidthFrom).width()||null:o.widthFromWrapper&&(a=o.stickyWrapper.width()),null==a&&(a=o.stickyElement.width()),o.stickyElement.css("width",a).css("position","fixed").css("top",p).css("z-index",o.zIndex),o.stickyElement.parent().addClass(o.className),null===o.currentTop?o.stickyElement.trigger("sticky-start",[o]):o.stickyElement.trigger("sticky-update",[o]),o.currentTop===o.topSpacing&&o.currentTop>p||null===o.currentTop&&p<o.topSpacing?o.stickyElement.trigger("sticky-bottom-reached",[o]):null!==o.currentTop&&p===o.topSpacing&&o.currentTop<p&&o.stickyElement.trigger("sticky-bottom-unreached",[o]),o.currentTop=p;var d=o.stickyWrapper.parent();o.stickyElement.offset().top+o.stickyElement.outerHeight()>=d.offset().top+d.outerHeight()&&o.stickyElement.offset().top<=o.topSpacing?o.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):o.stickyElement.css("position","fixed").css("top",p).css("bottom","").css("z-index",o.zIndex)}}},i=function(){m=h.height();for(var t=0,e=g.length;t<e;t++){var i=g[t],n=null;i.getWidthFrom?i.responsiveWidth&&(n=l(i.getWidthFrom).width()):i.widthFromWrapper&&(n=i.stickyWrapper.width()),null!=n&&i.stickyElement.css("width",n)}},a={init:function(o){return this.each(function(){var t=l.extend({},c,o),e=l(this),i=e.attr("id"),n=i?i+"-"+c.wrapperClassName:c.wrapperClassName,r=l("<div></div>").attr("id",n).addClass(t.wrapperClassName);e.wrapAll(function(){if(0==l(this).parent("#"+n).length)return r});var s=e.parent();t.center&&s.css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===e.css("float")&&e.css({float:"none"}).parent().css({float:"right"}),t.stickyElement=e,t.stickyWrapper=s,t.currentTop=null,g.push(t),a.setWrapperHeight(this),a.setupChangeListeners(this)})},setWrapperHeight:function(t){var e=l(t),i=e.parent();i&&i.css("height",e.outerHeight())},setupChangeListeners:function(e){window.MutationObserver?new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&a.setWrapperHeight(e)}).observe(e,{subtree:!0,childList:!0}):window.addEventListener?(e.addEventListener("DOMNodeInserted",function(){a.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){a.setWrapperHeight(e)},!1)):window.attachEvent&&(e.attachEvent("onDOMNodeInserted",function(){a.setWrapperHeight(e)}),e.attachEvent("onDOMNodeRemoved",function(){a.setWrapperHeight(e)}))},update:t,unstick:function(t){return this.each(function(){for(var t=l(this),e=-1,i=g.length;0<i--;)g[i].stickyElement.get(0)===this&&(n.call(g,i,1),e=i);-1!==e&&(t.unwrap(),t.css({width:"",position:"",top:"",float:"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",t,!1),window.addEventListener("resize",i,!1)):window.attachEvent&&(window.attachEvent("onscroll",t),window.attachEvent("onresize",i)),l.fn.sticky=function(t){return a[t]?a[t].apply(this,e.call(arguments,1)):"object"!=typeof t&&t?void l.error("Method "+t+" does not exist on jQuery.sticky"):a.init.apply(this,arguments)},l.fn.unstick=function(t){return a[t]?a[t].apply(this,e.call(arguments,1)):"object"!=typeof t&&t?void l.error("Method "+t+" does not exist on jQuery.sticky"):a.unstick.apply(this,arguments)},l(function(){setTimeout(t,0)})});