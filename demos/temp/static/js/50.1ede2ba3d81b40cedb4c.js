webpackJsonp([50],{1099:function(t,n,e){var i=e(1100);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(270)("5ab99fd7",i,!0)},1100:function(t,n,e){n=t.exports=e(86)(),n.push([t.i,"\n.vux-circle-demo[data-v-a45adcac] {\n  text-align: center;\n}\n.vux-circle-demo > div[data-v-a45adcac] {\n  margin: 0 auto;\n}\n",""])},1101:function(t,n,e){"use strict";var i=e(670),o=e(603),r=e(54);i.a,o.a,r.a},1102:function(t,n,e){"use strict";var i=e(670),o=e(603),r=e(54);n.a={ready:function(){setInterval(this.update2,2e3)},components:{XCircle:i.a,Range:o.a,Icon:r.a},data:function(){return{percent1:10,percent2:30,strokeColor2:"#3FC7FA"}},methods:{update2:function(){var t=["#3FC7FA","#85D262","#FE8C6A"];this.percent2=parseInt(100*Math.random(),10),this.strokeColor2=t[parseInt(3*Math.random(),10)]}}}},1103:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-circle-demo"},[e("br"),t._v(" "),e("div",{staticStyle:{width:"150px",height:"150px"}},[e("x-circle",{attrs:{percent:t.percent1,"stroke-width":10,"stroke-color":"#04BE02"}},[e("span",[t._v(t._s(t.percent1))])])],1),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{width:"100px",height:"100px"}},[e("x-circle",{attrs:{percent:t.percent1,"stroke-width":5,"stroke-color":"#04BE02"}},[e("span",[t._v(t._s(t.percent1))])])],1),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{width:"50px",height:"50px"}},[e("x-circle",{attrs:{percent:t.percent1,"stroke-width":5,"stroke-color":"#04BE02"}},[e("span",[t._v(t._s(t.percent1))])])],1),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{width:"180px"}},[e("range",{attrs:{min:0,max:100},model:{value:t.percent1,callback:function(n){t.percent1=n},expression:"percent1"}})],1),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{width:"100px",height:"100px"}},[e("x-circle",{attrs:{percent:100,"stroke-width":3,"stroke-color":"#04BE02"}},[e("icon",{attrs:{type:"success"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{width:"100px",height:"100px"}},[e("x-circle",{attrs:{percent:80,"stroke-width":6,"trail-width":6,"stroke-color":["#36D1DC","#5B86E5"],"trail-color":"#ececec"}},[e("span",{style:{color:t.strokeColor2}},[t._v(t._s(t.percent2)+"%")])])],1)])},o=[]},295:function(t,n,e){"use strict";function i(t){e(1099)}Object.defineProperty(n,"__esModule",{value:!0});var o=(e(1101),e(1102)),r=e(1103),s=e(0),a=i,l=Object(s.a)(o.a,r.a,r.b,!1,a,"data-v-a45adcac",null);n.default=l.exports},565:function(t,n){n.bind=function(t,n,e,i){var o=window.addEventListener?"addEventListener":"attachEvent",r="addEventListener"!==o?"on":"";return t[o](r+n,e,i||!1),e},n.unbind=function(t,n,e,i){var o=window.addEventListener?"addEventListener":"attachEvent",r="addEventListener"!==o?"on":"";return t[window.removeEventListener?"removeEventListener":"detachEvent"](r+n,e,i||!1),e}},603:function(t,n,e){"use strict";function i(t){e(640)}var o=(e(642),e(651)),r=e(652),s=e(0),a=i,l=Object(s.a)(o.a,r.a,r.b,!1,a,null,null);n.a=l.exports},604:function(t,n,e){"use strict";function i(t,n){this.element=t,this.options=n||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,null!==this.element&&"text"===this.element.type&&this.init(),this.options.step&&this.step(this.slider.offsetWidth||this.options.initialBarWidth,s(this.handle)),this.setStart(this.options.start)}var o=e(605),r=o.findClosest,s=o.getWidth,a=o.percentage,l=e(643),h=e(644),c=e(646);i.prototype.setStart=function(t){var n=null===t?this.options.min:t,e=a.from(n-this.options.min,this.options.max-this.options.min)||0,i=a.of(e,this.slider.offsetWidth-this.handle.offsetWidth),o=this.options.step?r(i,this.steps):i;this.setPosition(o),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.setStep=function(){this.step(s(this.slider)||this.options.initialBarWidth,s(this.handle))},i.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},i.prototype.onmousedown=function(t){this.options.onTouchstart(t),t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},i.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var n=document.createEvent("HTMLEvents");n.initEvent("change",!1,!0),this.element.dispatchEvent(n)}},i.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var n=this.handleOffsetX+t.clientX-this.startX,e=this.steps?r(n,this.steps):n;n<=0?this.setPosition(0):n>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(e),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.unselectable=function(t,n){l(this.slider).has("unselectable")||!0!==n?l(this.slider).remove("unselectable"):l(this.slider).add("unselectable")},i.prototype.onmouseup=function(t){this.options.onTouchend(t),this.unselectable(this.slider,!1)},i.prototype.disable=function(t){(this.options.disable||t)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),l(this.slider).add("range-bar-disabled"))},i.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},i.prototype.reInit=function(t){this.options.start=t.value,this.options.min=t.min,this.options.max=t.max,this.options.step=t.step,this.disable(!0),this.init()},i.prototype.checkStep=function(t){return t<0&&(t=Math.abs(t)),this.options.step=t,this.options.step},i.prototype.setValue=function(t,n){var e=a.from(parseFloat(t),n);if("0px"===t||0===n)i=this.options.min;else{var i=a.of(e,this.options.max-this.options.min)+this.options.min;i=this.options.decimal?Math.round(100*i)/100:Math.round(i),i>this.options.max&&(i=this.options.max)}var o=!1;o=this.element.value!==i,this.element.value=i,this.options.callback(i),o&&this.changeEvent()},i.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},i.prototype.step=function(t,n){for(var e=t-n,i=a.from(this.checkStep(this.options.step),this.options.max-this.options.min),o=a.of(i,e),r=[],s=0;s<=e;s+=o)r.push(s);this.steps=r;for(var l=10;l>=0;l--)this.steps[r.length-l]=e-o*l;return this.steps},i.prototype.create=function(t,n){var e=document.createElement(t);return e.className=n,e},i.prototype.insertAfter=function(t,n){t.parentNode.insertBefore(n,t.nextSibling)},i.prototype.setRange=function(t,n){"number"!=typeof t||"number"!=typeof n||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||n)},i.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var n in t)if(t.hasOwnProperty(n)){var e=this.create(t[n].type,t[n].selector);this.slider.appendChild(e)}return this.slider},i.prototype.append=function(){if(!this.hasAppend){var t=this.generate();this.insertAfter(this.element,t)}this.hasAppend=!0},i.prototype.hide=function(){this.element.style.display="none"},i.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=c(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=h(this.handle,this),this.mouse.bind()};var u={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1};n.a=function(t,n){n=n||{};for(var e in u)null==n[e]&&(n[e]=u[e]);return new i(t,n)}},605:function(t,n,e){"use strict";function i(t){var n=window.getComputedStyle(t,null).width;return"100%"===n||"auto"===n?0:parseInt(n,10)}Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"indexof",function(){return o}),e.d(n,"findClosest",function(){return r}),e.d(n,"getWidth",function(){return i}),e.d(n,"percentage",function(){return s});var o=function(t,n){if(t.indexOf)return t.indexOf(n);for(var e=0;e<t.length;++e)if(t[e]===n)return e;return-1},r=function(t,n){for(var e=null,i=n[0],o=0;o<n.length;o++)e=Math.abs(t-i),Math.abs(t-n[o])<e&&(i=n[o]);return i},s={isNumber:function(t){return"number"==typeof t},of:function(t,n){if(s.isNumber(t)&&s.isNumber(n))return t/100*n},from:function(t,n){if(s.isNumber(t)&&s.isNumber(n))return t/n*100}}},640:function(t,n,e){var i=e(641);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(270)("226092c7",i,!0)},641:function(t,n,e){n=t.exports=e(86)(),n.push([t.i,"/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n *\n * Main stylesheet for Powerange.\n * http://abpetkov.github.io/powerange/\n *\n */\n/**\n * Horizontal slider style (default).\n */\n.range-bar {\n  background-color: #a9acb1;\n  border-radius: 15px;\n  display: block;\n  height: 1px;\n  position: relative;\n  width: 100%;\n}\n.range-bar-disabled {\n  opacity: 0.5;\n}\n.range-quantity {\n  background-color: #298CCF;\n  border-radius: 15px;\n  display: block;\n  height: 100%;\n  width: 0;\n}\n.range-handle {\n  background-color: #fff;\n  border-radius: 100%;\n  cursor: move;\n  height: 30px;\n  left: 0;\n  top: -13px;\n  position: absolute;\n  width: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n.range-min,\n.range-max {\n  color: #181819;\n  font-size: 12px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 24px;\n}\n.range-min {\n  left: -30px;\n}\n.range-max {\n  right: -30px;\n}\n/**\n * Style for disabling text selection on handle move.\n */\n.unselectable {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/**\n * Style for handle cursor on disabled slider.\n */\n.range-disabled {\n  cursor: default;\n}\n",""])},642:function(t,n,e){"use strict";var i=e(604);Boolean,Number,Number,String,String,Number,Number,Boolean,Number,Number,Number},643:function(t,n,e){function i(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var o=e(605).indexof,r=/\s+/,s=Object.prototype.toString;t.exports=function(t){return new i(t)},i.prototype.add=function(t){if(this.list)return this.list.add(t),this;var n=this.array();return~o(n,t)||n.push(t),this.el.className=n.join(" "),this},i.prototype.remove=function(t){if("[object RegExp]"===s.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var n=this.array(),e=o(n,t);return~e&&n.splice(e,1),this.el.className=n.join(" "),this},i.prototype.removeMatching=function(t){for(var n=this.array(),e=0;e<n.length;e++)t.test(n[e])&&this.remove(n[e]);return this},i.prototype.toggle=function(t,n){return this.list?(void 0!==n?n!==this.list.toggle(t,n)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==n?n?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},i.prototype.array=function(){var t=this.el.getAttribute("class")||"",n=t.replace(/^\s+|\s+$/g,""),e=n.split(r);return""===e[0]&&e.shift(),e},i.prototype.has=i.prototype.contains=function(t){return this.list?this.list.contains(t):!!~o(this.array(),t)}},644:function(t,n,e){function i(t,n){this.obj=n||{},this.el=t}var o=e(645),r=e(565);t.exports=function(t,n){return new i(t,n)},o(i.prototype),i.prototype.bind=function(){function t(o){e.onmouseup&&e.onmouseup(o),r.unbind(document,"mousemove",n),r.unbind(document,"mouseup",t),i.emit("up",o)}function n(t){e.onmousemove&&e.onmousemove(t),i.emit("move",t)}var e=this.obj,i=this;return i.down=function(o){e.onmousedown&&e.onmousedown(o),r.bind(document,"mouseup",t),r.bind(document,"mousemove",n),i.emit("down",o)},r.bind(this.el,"mousedown",i.down),this},i.prototype.unbind=function(){r.unbind(this.el,"mousedown",this.down),this.down=null}},645:function(t,n){function e(t){if(t)return i(t)}function i(t){for(var n in e.prototype)t[n]=e.prototype[n];return t}t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,n){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(n),this},e.prototype.once=function(t,n){function e(){this.off(t,e),n.apply(this,arguments)}return e.fn=n,this.on(t,e),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,n){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var e=this._callbacks["$"+t];if(!e)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var i,o=0;o<e.length;o++)if((i=e[o])===n||i.fn===n){e.splice(o,1);break}return this},e.prototype.emit=function(t){this._callbacks=this._callbacks||{};var n=[].slice.call(arguments,1),e=this._callbacks["$"+t];if(e){e=e.slice(0);for(var i=0,o=e.length;i<o;++i)e[i].apply(this,n)}return this},e.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},e.prototype.hasListeners=function(t){return!!this.listeners(t).length}},646:function(t,n,e){function i(t,n){if(!(this instanceof i))return new i(t,n);if(!t)throw new Error("element required");if(!n)throw new Error("object required");this.el=t,this.obj=n,this._events={}}function o(t){var n=t.split(/ +/);return{name:n.shift(),selector:n.join(" ")}}var r=e(565),s=e(647);t.exports=i,i.prototype.sub=function(t,n,e){this._events[t]=this._events[t]||{},this._events[t][n]=e},i.prototype.bind=function(t,n){var e=o(t),i=this.el,a=this.obj,l=e.name;n=n||"on"+l;var h=[].slice.call(arguments,2),c=function(){var t=[].slice.call(arguments).concat(h);a[n].apply(a,t)};return e.selector?c=s.bind(i,e.selector,l,c):r.bind(i,l,c),this.sub(l,n,c),c},i.prototype.unbind=function(t,n){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var e=this._events[t];if(e){var i=e[n];i&&r.unbind(this.el,t,i)}},i.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},i.prototype.unbindAllOf=function(t){var n=this._events[t];if(n)for(var e in n)this.unbind(t,e)}},647:function(t,n,e){var i=e(648),o=e(565);n.bind=function(t,n,e,r,s){return o.bind(t,e,function(e){var o=e.target||e.srcElement;e.delegateTarget=i(o,n,!0,t),e.delegateTarget&&r.call(t,e)},s)},n.unbind=function(t,n,e,i){o.unbind(t,n,e,i)}},648:function(t,n,e){function i(t,n,e){for(e=e||document.documentElement;t&&t!==e;){if(o(t,n))return t;t=t.parentNode}return o(t,n)?t:null}var o=e(649);t.exports=i},649:function(t,n,e){function i(t,n){if(!t||1!==t.nodeType)return!1;if(s)return s.call(t,n);for(var e=o.all(n,t.parentNode),i=0;i<e.length;++i)if(e[i]===t)return!0;return!1}var o=e(650),r={};"undefined"!=typeof window&&(r=window.Element.prototype);var s=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector;t.exports=i},650:function(t,n){function e(t,n){return n.querySelector(t)}n=t.exports=function(t,n){return n=n||document,e(t,n)},n.all=function(t,n){return n=n||document,n.querySelectorAll(t)},n.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return n.all=t.all,n}},651:function(t,n,e){"use strict";var i=e(604);n.a={name:"range",props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var t=this,n=this;this.$nextTick(function(){var e={callback:function(t){n.currentValue=t},decimal:t.decimal,start:t.currentValue,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,initialBarWidth:window.getComputedStyle(t.$el.parentNode).width.replace("px","")-80,onTouchstart:function(t){n.$emit("on-touchstart",t)},onTouchend:function(t){n.$emit("on-touchend",t)}};0!==t.step&&(e.step=t.step),t.range=new i.a(t.$el.querySelector(".vux-range-input"),e);var o=(t.rangeHandleHeight-t.rangeBarHeight)/2;t.$el.querySelector(".range-handle").style.top="-"+o+"px",t.$el.querySelector(".range-bar").style.height=t.rangeBarHeight+"px",t.handleOrientationchange=function(){t.update()},window.addEventListener("orientationchange",t.handleOrientationchange,!1)})},methods:{update:function(){console.log("update",this.currentValue);var t=this.currentValue;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,step:this.step,value:t}),this.currentValue=t,this.range.setStart(this.currentValue),this.range.setStep()}},data:function(){return{currentValue:0}},watch:{currentValue:function(t){this.range&&this.range.setStart(t),this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.currentValue=t},min:function(){this.update()},step:function(){this.update()},max:function(){this.update()}},beforeDestroy:function(){window.removeEventListener("orientationchange",this.handleOrientationchange,!1)}}},652:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-range-input",domProps:{value:t.currentValue},on:{input:function(n){n.target.composing||(t.currentValue=t._n(n.target.value))},blur:function(n){t.$forceUpdate()}}})])},o=[]},670:function(t,n,e){"use strict";function i(t){e(702)}var o=(e(704),e(705)),r=e(706),s=e(0),a=i,l=Object(s.a)(o.a,r.a,r.b,!1,a,null,null);n.a=l.exports},702:function(t,n,e){var i=e(703);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(270)("ffda46ca",i,!0)},703:function(t,n,e){n=t.exports=e(86)(),n.push([t.i,"\n.vux-circle {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.vux-circle-content {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n",""])},704:function(t,n,e){"use strict";Number,Array,String,Number,String,Number,String,Boolean},705:function(t,n,e){"use strict";n.a={name:"x-circle",props:{strokeWidth:{type:Number,default:1},strokeColor:{type:[Array,String],default:"#3FC7FA"},trailWidth:{type:Number,default:1},trailColor:{type:String,default:"#D9D9D9"},percent:{type:Number,default:0},strokeLinecap:{type:String,default:"round"},anticlockwise:{type:Boolean,default:!1}},computed:{radius:function(){return 50-this.strokeWidth/2},pathString:function(){return"M 50,50 m 0,-"+this.radius+"\n      a "+this.radius+","+this.radius+" 0 1 1 0,"+2*this.radius+"\n      a "+this.radius+","+this.radius+" 0 1 1 0,-"+2*this.radius},len:function(){return 2*Math.PI*this.radius},pathStyle:function(){return{"stroke-dasharray":this.len+"px "+this.len+"px","stroke-dashoffset":(this.anticlockwise?this.percent-100:100-this.percent)/100*this.len+"px",transition:"stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"}},isGradient:function(){return"string"!=typeof this.strokeColor}}}},706:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-circle"},[e("svg",{attrs:{viewBox:"0 0 100 100"}},[t.isGradient?e("defs",[e("linearGradient",{attrs:{id:"vux-circle-gradient",x1:"10%",y1:"45%",x2:"50%",y2:"0%"}},[e("stop",{style:{"stop-color":t.strokeColor[0],"stop-opacity":1},attrs:{offset:"0%"}}),t._v(" "),e("stop",{style:{"stop-color":t.strokeColor[1],"stop-opacity":1},attrs:{offset:"100%"}})],1)],1):t._e(),t._v(" "),e("path",{attrs:{d:t.pathString,stroke:t.trailColor,"stroke-width":t.trailWidth,"fill-opacity":0}}),t._v(" "),e("path",{style:t.pathStyle,attrs:{d:t.pathString,"stroke-linecap":t.strokeLinecap,stroke:t.isGradient?"url(#vux-circle-gradient)":t.strokeColor,"stroke-width":t.strokeWidth,"fill-opacity":"0"}})]),t._v(" "),e("div",{staticClass:"vux-circle-content"},[t._t("default")],2)])},o=[]}});