webpackJsonp([66],{1451:function(n,t,e){var i=e(1452);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(270)("7d2de268",i,!0)},1452:function(n,t,e){t=n.exports=e(86)(),t.push([n.i,"\n.record-component[data-v-12fd317e] {\r\n  padding: 10px 0 0;\n}\n.value-range[data-v-12fd317e] {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  margin-right: 40px !important;\r\n  margin-left: 40px !important;\n}\r\n",""])},1453:function(n,t,e){"use strict";var i=e(603);i.a},1454:function(n,t,e){"use strict";var i=e(603);t.a={data:function(){return{number:10,min:0,max:250,step:1,rangeBarHeight:4,error:null}},components:{Range:i.a}}},1455:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"record-component"},[e("div",[n._v(n._s(n.number))]),n._v(" "),e("range",{staticClass:"value-range",attrs:{min:n.min,max:n.max,step:n.step,"range-bar-height":n.rangeBarHeight,decimal:""},model:{value:n.number,callback:function(t){n.number=t},expression:"number"}})],1)},o=[]},360:function(n,t,e){"use strict";function i(n){e(1451)}Object.defineProperty(t,"__esModule",{value:!0});var o=(e(1453),e(1454)),r=e(1455),s=e(0),a=i,l=Object(s.a)(o.a,r.a,r.b,!1,a,"data-v-12fd317e",null);t.default=l.exports},565:function(n,t){t.bind=function(n,t,e,i){var o=window.addEventListener?"addEventListener":"attachEvent",r="addEventListener"!==o?"on":"";return n[o](r+t,e,i||!1),e},t.unbind=function(n,t,e,i){var o=window.addEventListener?"addEventListener":"attachEvent",r="addEventListener"!==o?"on":"";return n[window.removeEventListener?"removeEventListener":"detachEvent"](r+t,e,i||!1),e}},603:function(n,t,e){"use strict";function i(n){e(640)}var o=(e(642),e(651)),r=e(652),s=e(0),a=i,l=Object(s.a)(o.a,r.a,r.b,!1,a,null,null);t.a=l.exports},604:function(n,t,e){"use strict";function i(n,t){this.element=n,this.options=t||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,null!==this.element&&"text"===this.element.type&&this.init(),this.options.step&&this.step(this.slider.offsetWidth||this.options.initialBarWidth,s(this.handle)),this.setStart(this.options.start)}var o=e(605),r=o.findClosest,s=o.getWidth,a=o.percentage,l=e(643),h=e(644),u=e(646);i.prototype.setStart=function(n){var t=null===n?this.options.min:n,e=a.from(t-this.options.min,this.options.max-this.options.min)||0,i=a.of(e,this.slider.offsetWidth-this.handle.offsetWidth),o=this.options.step?r(i,this.steps):i;this.setPosition(o),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.setStep=function(){this.step(s(this.slider)||this.options.initialBarWidth,s(this.handle))},i.prototype.setPosition=function(n){this.handle.style.left=n+"px",this.slider.querySelector(".range-quantity").style.width=n+"px"},i.prototype.onmousedown=function(n){this.options.onTouchstart(n),n.touches&&(n=n.touches[0]),this.startX=n.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},i.prototype.changeEvent=function(n){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),this.element.dispatchEvent(t)}},i.prototype.onmousemove=function(n){n.preventDefault(),n.touches&&(n=n.touches[0]);var t=this.handleOffsetX+n.clientX-this.startX,e=this.steps?r(t,this.steps):t;t<=0?this.setPosition(0):t>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(e),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.unselectable=function(n,t){l(this.slider).has("unselectable")||!0!==t?l(this.slider).remove("unselectable"):l(this.slider).add("unselectable")},i.prototype.onmouseup=function(n){this.options.onTouchend(n),this.unselectable(this.slider,!1)},i.prototype.disable=function(n){(this.options.disable||n)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),l(this.slider).add("range-bar-disabled"))},i.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},i.prototype.reInit=function(n){this.options.start=n.value,this.options.min=n.min,this.options.max=n.max,this.options.step=n.step,this.disable(!0),this.init()},i.prototype.checkStep=function(n){return n<0&&(n=Math.abs(n)),this.options.step=n,this.options.step},i.prototype.setValue=function(n,t){var e=a.from(parseFloat(n),t);if("0px"===n||0===t)i=this.options.min;else{var i=a.of(e,this.options.max-this.options.min)+this.options.min;i=this.options.decimal?Math.round(100*i)/100:Math.round(i),i>this.options.max&&(i=this.options.max)}var o=!1;o=this.element.value!==i,this.element.value=i,this.options.callback(i),o&&this.changeEvent()},i.prototype.checkValues=function(n){n<this.options.min&&(this.options.start=this.options.min),n>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},i.prototype.step=function(n,t){for(var e=n-t,i=a.from(this.checkStep(this.options.step),this.options.max-this.options.min),o=a.of(i,e),r=[],s=0;s<=e;s+=o)r.push(s);this.steps=r;for(var l=10;l>=0;l--)this.steps[r.length-l]=e-o*l;return this.steps},i.prototype.create=function(n,t){var e=document.createElement(n);return e.className=t,e},i.prototype.insertAfter=function(n,t){n.parentNode.insertBefore(t,n.nextSibling)},i.prototype.setRange=function(n,t){"number"!=typeof n||"number"!=typeof t||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||n,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||t)},i.prototype.generate=function(){var n={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var t in n)if(n.hasOwnProperty(t)){var e=this.create(n[t].type,n[t].selector);this.slider.appendChild(e)}return this.slider},i.prototype.append=function(){if(!this.hasAppend){var n=this.generate();this.insertAfter(this.element,n)}this.hasAppend=!0},i.prototype.hide=function(){this.element.style.display="none"},i.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=u(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=h(this.handle,this),this.mouse.bind()};var c={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1};t.a=function(n,t){t=t||{};for(var e in c)null==t[e]&&(t[e]=c[e]);return new i(n,t)}},605:function(n,t,e){"use strict";function i(n){var t=window.getComputedStyle(n,null).width;return"100%"===t||"auto"===t?0:parseInt(t,10)}Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"indexof",function(){return o}),e.d(t,"findClosest",function(){return r}),e.d(t,"getWidth",function(){return i}),e.d(t,"percentage",function(){return s});var o=function(n,t){if(n.indexOf)return n.indexOf(t);for(var e=0;e<n.length;++e)if(n[e]===t)return e;return-1},r=function(n,t){for(var e=null,i=t[0],o=0;o<t.length;o++)e=Math.abs(n-i),Math.abs(n-t[o])<e&&(i=t[o]);return i},s={isNumber:function(n){return"number"==typeof n},of:function(n,t){if(s.isNumber(n)&&s.isNumber(t))return n/100*t},from:function(n,t){if(s.isNumber(n)&&s.isNumber(t))return n/t*100}}},640:function(n,t,e){var i=e(641);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(270)("226092c7",i,!0)},641:function(n,t,e){t=n.exports=e(86)(),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n *\n * Main stylesheet for Powerange.\n * http://abpetkov.github.io/powerange/\n *\n */\n/**\n * Horizontal slider style (default).\n */\n.range-bar {\n  background-color: #a9acb1;\n  border-radius: 15px;\n  display: block;\n  height: 1px;\n  position: relative;\n  width: 100%;\n}\n.range-bar-disabled {\n  opacity: 0.5;\n}\n.range-quantity {\n  background-color: #298CCF;\n  border-radius: 15px;\n  display: block;\n  height: 100%;\n  width: 0;\n}\n.range-handle {\n  background-color: #fff;\n  border-radius: 100%;\n  cursor: move;\n  height: 30px;\n  left: 0;\n  top: -13px;\n  position: absolute;\n  width: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n.range-min,\n.range-max {\n  color: #181819;\n  font-size: 12px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 24px;\n}\n.range-min {\n  left: -30px;\n}\n.range-max {\n  right: -30px;\n}\n/**\n * Style for disabling text selection on handle move.\n */\n.unselectable {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/**\n * Style for handle cursor on disabled slider.\n */\n.range-disabled {\n  cursor: default;\n}\n",""])},642:function(n,t,e){"use strict";var i=e(604);Boolean,Number,Number,String,String,Number,Number,Boolean,Number,Number,Number},643:function(n,t,e){function i(n){if(!n||!n.nodeType)throw new Error("A DOM element reference is required");this.el=n,this.list=n.classList}var o=e(605).indexof,r=/\s+/,s=Object.prototype.toString;n.exports=function(n){return new i(n)},i.prototype.add=function(n){if(this.list)return this.list.add(n),this;var t=this.array();return~o(t,n)||t.push(n),this.el.className=t.join(" "),this},i.prototype.remove=function(n){if("[object RegExp]"===s.call(n))return this.removeMatching(n);if(this.list)return this.list.remove(n),this;var t=this.array(),e=o(t,n);return~e&&t.splice(e,1),this.el.className=t.join(" "),this},i.prototype.removeMatching=function(n){for(var t=this.array(),e=0;e<t.length;e++)n.test(t[e])&&this.remove(t[e]);return this},i.prototype.toggle=function(n,t){return this.list?(void 0!==t?t!==this.list.toggle(n,t)&&this.list.toggle(n):this.list.toggle(n),this):(void 0!==t?t?this.add(n):this.remove(n):this.has(n)?this.remove(n):this.add(n),this)},i.prototype.array=function(){var n=this.el.getAttribute("class")||"",t=n.replace(/^\s+|\s+$/g,""),e=t.split(r);return""===e[0]&&e.shift(),e},i.prototype.has=i.prototype.contains=function(n){return this.list?this.list.contains(n):!!~o(this.array(),n)}},644:function(n,t,e){function i(n,t){this.obj=t||{},this.el=n}var o=e(645),r=e(565);n.exports=function(n,t){return new i(n,t)},o(i.prototype),i.prototype.bind=function(){function n(o){e.onmouseup&&e.onmouseup(o),r.unbind(document,"mousemove",t),r.unbind(document,"mouseup",n),i.emit("up",o)}function t(n){e.onmousemove&&e.onmousemove(n),i.emit("move",n)}var e=this.obj,i=this;return i.down=function(o){e.onmousedown&&e.onmousedown(o),r.bind(document,"mouseup",n),r.bind(document,"mousemove",t),i.emit("down",o)},r.bind(this.el,"mousedown",i.down),this},i.prototype.unbind=function(){r.unbind(this.el,"mousedown",this.down),this.down=null}},645:function(n,t){function e(n){if(n)return i(n)}function i(n){for(var t in e.prototype)n[t]=e.prototype[t];return n}n.exports=e,e.prototype.on=e.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this},e.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(1===arguments.length)return delete this._callbacks["$"+n],this;for(var i,o=0;o<e.length;o++)if((i=e[o])===t||i.fn===t){e.splice(o,1);break}return this},e.prototype.emit=function(n){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),e=this._callbacks["$"+n];if(e){e=e.slice(0);for(var i=0,o=e.length;i<o;++i)e[i].apply(this,t)}return this},e.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]},e.prototype.hasListeners=function(n){return!!this.listeners(n).length}},646:function(n,t,e){function i(n,t){if(!(this instanceof i))return new i(n,t);if(!n)throw new Error("element required");if(!t)throw new Error("object required");this.el=n,this.obj=t,this._events={}}function o(n){var t=n.split(/ +/);return{name:t.shift(),selector:t.join(" ")}}var r=e(565),s=e(647);n.exports=i,i.prototype.sub=function(n,t,e){this._events[n]=this._events[n]||{},this._events[n][t]=e},i.prototype.bind=function(n,t){var e=o(n),i=this.el,a=this.obj,l=e.name;t=t||"on"+l;var h=[].slice.call(arguments,2),u=function(){var n=[].slice.call(arguments).concat(h);a[t].apply(a,n)};return e.selector?u=s.bind(i,e.selector,l,u):r.bind(i,l,u),this.sub(l,t,u),u},i.prototype.unbind=function(n,t){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(n);var e=this._events[n];if(e){var i=e[t];i&&r.unbind(this.el,n,i)}},i.prototype.unbindAll=function(){for(var n in this._events)this.unbindAllOf(n)},i.prototype.unbindAllOf=function(n){var t=this._events[n];if(t)for(var e in t)this.unbind(n,e)}},647:function(n,t,e){var i=e(648),o=e(565);t.bind=function(n,t,e,r,s){return o.bind(n,e,function(e){var o=e.target||e.srcElement;e.delegateTarget=i(o,t,!0,n),e.delegateTarget&&r.call(n,e)},s)},t.unbind=function(n,t,e,i){o.unbind(n,t,e,i)}},648:function(n,t,e){function i(n,t,e){for(e=e||document.documentElement;n&&n!==e;){if(o(n,t))return n;n=n.parentNode}return o(n,t)?n:null}var o=e(649);n.exports=i},649:function(n,t,e){function i(n,t){if(!n||1!==n.nodeType)return!1;if(s)return s.call(n,t);for(var e=o.all(t,n.parentNode),i=0;i<e.length;++i)if(e[i]===n)return!0;return!1}var o=e(650),r={};"undefined"!=typeof window&&(r=window.Element.prototype);var s=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector;n.exports=i},650:function(n,t){function e(n,t){return t.querySelector(n)}t=n.exports=function(n,t){return t=t||document,e(n,t)},t.all=function(n,t){return t=t||document,t.querySelectorAll(n)},t.engine=function(n){if(!n.one)throw new Error(".one callback required");if(!n.all)throw new Error(".all callback required");return t.all=n.all,t}},651:function(n,t,e){"use strict";var i=e(604);t.a={name:"range",props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var n=this,t=this;this.$nextTick(function(){var e={callback:function(n){t.currentValue=n},decimal:n.decimal,start:n.currentValue,min:n.min,max:n.max,minHTML:n.minHTML,maxHTML:n.maxHTML,disable:n.disabled,disabledOpacity:n.disabledOpacity,initialBarWidth:window.getComputedStyle(n.$el.parentNode).width.replace("px","")-80,onTouchstart:function(n){t.$emit("on-touchstart",n)},onTouchend:function(n){t.$emit("on-touchend",n)}};0!==n.step&&(e.step=n.step),n.range=new i.a(n.$el.querySelector(".vux-range-input"),e);var o=(n.rangeHandleHeight-n.rangeBarHeight)/2;n.$el.querySelector(".range-handle").style.top="-"+o+"px",n.$el.querySelector(".range-bar").style.height=n.rangeBarHeight+"px",n.handleOrientationchange=function(){n.update()},window.addEventListener("orientationchange",n.handleOrientationchange,!1)})},methods:{update:function(){console.log("update",this.currentValue);var n=this.currentValue;n<this.min&&(n=this.min),n>this.max&&(n=this.max),this.range.reInit({min:this.min,max:this.max,step:this.step,value:n}),this.currentValue=n,this.range.setStart(this.currentValue),this.range.setStep()}},data:function(){return{currentValue:0}},watch:{currentValue:function(n){this.range&&this.range.setStart(n),this.$emit("input",n),this.$emit("on-change",n)},value:function(n){this.currentValue=n},min:function(){this.update()},step:function(){this.update()},max:function(){this.update()}},beforeDestroy:function(){window.removeEventListener("orientationchange",this.handleOrientationchange,!1)}}},652:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:n.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-range-input",domProps:{value:n.currentValue},on:{input:function(t){t.target.composing||(n.currentValue=n._n(t.target.value))},blur:function(t){n.$forceUpdate()}}})])},o=[]}});