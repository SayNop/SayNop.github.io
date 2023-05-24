(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{285:function(t,v,o){"use strict";o.r(v);var _=o(10),s=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"刷机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#刷机"}},[t._v("#")]),t._v(" 刷机")]),t._v(" "),v("p",[t._v("由于安卓系统的本质是linux，所以很多系统级别的操作都需要root用户权限进行。")]),t._v(" "),v("p",[t._v("解锁root用户权限，需要手机能够解锁bootloader")]),t._v(" "),v("h3",{attrs:{id:"卡刷与线刷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#卡刷与线刷"}},[t._v("#")]),t._v(" 卡刷与线刷")]),t._v(" "),v("ul",[v("li",[t._v("卡刷：将数据包放入手机，使用"),v("code",[t._v("twrp")]),t._v("进行刷机")]),t._v(" "),v("li",[t._v("线刷：使用电脑连接数据线将数据包刷入手机")])]),t._v(" "),v("p",[t._v("本文将以线刷为主记录线刷小米5的过程")]),t._v(" "),v("h2",{attrs:{id:"刷面具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#刷面具"}},[t._v("#")]),t._v(" 刷面具")]),t._v(" "),v("p",[t._v("面具可隐藏对银行等APP隐藏手机已Root的信息")]),t._v(" "),v("p",[t._v("需要安卓版本 >= 8")]),t._v(" "),v("ul",[v("li",[t._v("解锁bootloader")]),t._v(" "),v("li",[t._v("下载对应rom（线刷包，即fastboot刷机包），解压后找到boot.img文件传入手机")]),t._v(" "),v("li",[t._v("安装面具软件，修补boot.img。")]),t._v(" "),v("li",[t._v("将修补后的img文件传入电脑")]),t._v(" "),v("li",[t._v("连接数据线，电脑端"),v("code",[t._v("adb reboot bootloader")]),t._v("进入fastboot")]),t._v(" "),v("li",[t._v("电脑端"),v("code",[t._v("fastboot flash boot ~/Desktop/magisk_patched-25200_qN40j.img")]),t._v("刷入修补镜像后重启手机")])]),t._v(" "),v("h2",{attrs:{id:"刷xpose框架"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#刷xpose框架"}},[t._v("#")]),t._v(" 刷xpose框架")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("10及以上（可使用lsposed）")]),t._v(" "),v("ul",[v("li",[t._v("面具里在设置中打开Zygisk后重启")]),t._v(" "),v("li",[t._v("面具中本地安装Shamiko与lsposed")])])]),t._v(" "),v("li",[v("p",[t._v("安卓8（不可用lsposed，使用edxposed）")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("面具中安装riru（25及以下版本以适配当前edxposed版本，比如选择25中最新版本 "),v("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FRikkaApps%2FRiru%2Freleases%2Ftag%2Fv25.4.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("v25.4.4"),v("OutboundLink")],1),t._v("）")])]),t._v(" "),v("li",[v("p",[t._v("面具中安装edxposed")])])])]),t._v(" "),v("li",[v("p",[t._v("安卓7及以下（xposed）")]),t._v(" "),v("ul",[v("li",[t._v("安装Xposed installer")]),t._v(" "),v("li",[t._v("下载Xposed安装包(zip文件)，重启进入Recovery，刷入该zip文件")])])])]),t._v(" "),v("p",[t._v("最终在xposed框架中安装trustmealready模块解决ssl验证问题")]),t._v(" "),v("p",[v("strong",[t._v("注意：")]),t._v("\ntrustmealready模块可以免证书抓包。如果抓包仍然失败，可能是插件已被监测。")]),t._v(" "),v("p",[t._v("关闭插件，charles等抓包软件证书在设置中安装后可使用面具的movecert模块将证书的安全等级提高至系统级，再进行尝试。")])])}),[],!1,null,null,null);v.default=s.exports}}]);