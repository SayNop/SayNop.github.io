(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{244:function(t,e,s){},254:function(t,e,s){"use strict";s(244)},257:function(t,e,s){"use strict";s.r(e);s(45);var l={name:"nav_wrapper",components:{},data:()=>({height_list:[]}),methods:{scroll_acitve(){if("detail"==this.$frontmatter.layout){var t,e,s=null!==(t=null!==(e=window.pageYOffset)&&void 0!==e?e:document.documentElement.scrollTop)&&void 0!==t?t:document.body.scrollTop;if(s>this.height_list[0]){let t;for(t=0;t<this.height_list.length-1&&!(s>this.height_list[t]&&s<this.height_list[t+1]);t++);document.getElementsByClassName("article_sidebar")[0].childNodes[0].childNodes.forEach((e,s)=>{s==t?e.classList.add("active"):e.classList.remove("active")})}}}},mounted(){if(window.addEventListener("scroll",this.scroll_acitve,!0),"detail"==this.$frontmatter.layout){do{var t=document.getElementsByClassName("header-anchor")}while(!t.length);for(let e of t)this.height_list.push(e.parentElement.offsetTop)}}},i=(s(254),s(10)),a=Object(i.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"article_sidebar"},[e("ul",t._l(t.$page.headers,(function(s){return e("li",{key:s.slug,class:"level"+s.level},[e("a",{staticClass:"sidebar-link",attrs:{href:"#"+s.slug}},[t._v(t._s(s.title))])])})),0)])}),[],!1,null,"990ea420",null);e.default=a.exports}}]);