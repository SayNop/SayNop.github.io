(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"文件向手机传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件向手机传输"}},[s._v("#")]),s._v(" 文件向手机传输")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("推荐使用安卓官方的"),a("a",{attrs:{href:"%60https://www.android.com/filetransfer/%60"}},[s._v("文件传输工具")]),s._v("(大陆需良好的网络情况才可访问)。数据线连接电脑即可进行文件传输。")])]),s._v(" "),a("li",[a("p",[s._v("或者使用adb进行传输。需要预先安装"),a("code",[s._v("android sdk")])])])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("adb push C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Downloads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".pem /sdcard/1.pem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"系统wifi配置charles进行抓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统wifi配置charles进行抓包"}},[s._v("#")]),s._v(" 系统Wifi配置Charles进行抓包")]),s._v(" "),a("ul",[a("li",[s._v("保证运行Charles的客户端与安卓手机在同一局域网内，手机在wifi设置中配置代理为charles的ip与端口（此时charles无需打开系统代理，系统代理用于抓取charles宿主机的包）")]),s._v(" "),a("li",[s._v("浏览器打开"),a("code",[s._v("chls.pro/ssl")]),s._v("下载证书  或者 电脑charles打开Help -> Save Charles Root Certi... 将证书传入手机")]),s._v(" "),a("li",[s._v("手机在设置中搜索“证书”安装或者文件管理器直接打开安装")]),s._v(" "),a("li",[s._v("charles中对https的包右键开启ssl代理，对需要关注的host进行右键关注方便筛选")])]),s._v(" "),a("p",[a("strong",[s._v("注意：")]),s._v("\n通过手机安装的证书为用户级别证书。对大多数app的ssl包无法生效，需要系统级别的证书。")]),s._v(" "),a("p",[s._v("经root手机可通过面具插件"),a("code",[s._v("movecert")]),s._v("将用户级证书更改为系统级证书从而成功抓包。或是安装xpose插件"),a("code",[s._v("TrustMeAlready")]),s._v("免证书抓取https数据包。")]),s._v(" "),a("p",[s._v("未root手机安装"),a("code",[s._v("virtualxposed")]),s._v("在系统中模拟一个拥有root权限的安卓系统，将目标app安装在该环境中只需用户级别证书即可抓取。")]),s._v(" "),a("h2",{attrs:{id:"使用postern通过socks5协议进行抓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用postern通过socks5协议进行抓包"}},[s._v("#")]),s._v(" 使用postern通过socks5协议进行抓包")]),s._v(" "),a("p",[s._v("如果App检测了是否走系统代理，则wifi代理无效，需要配合Postern\n与使用系统wifi代理流程大致相同，而系统wifi代理通过http协议进行抓包。以下是几个不同点")]),s._v(" "),a("ul",[a("li",[s._v("在charlse设置中启用socks代理并设置端口")]),s._v(" "),a("li",[s._v("安装并打开postern，"),a("em",[s._v("配置代理")]),s._v("中添加一个代理服务器，输入charles所在的ip与端口，代理类型选择"),a("code",[s._v("socks5")])]),s._v(" "),a("li",[a("em",[s._v("配置规则")]),s._v("中删除软件默认规则，新建规则：匹配所有地址 - 通过代理连接 - 选择上一步中建立的socks5代理保存")]),s._v(" "),a("li",[s._v("通过"),a("em",[s._v("打开/关闭VPN")]),s._v("进行是否通过charles的控制")])]),s._v(" "),a("h2",{attrs:{id:"mitmproxy进行抓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mitmproxy进行抓包"}},[s._v("#")]),s._v(" mitmproxy进行抓包")]),s._v(" "),a("p",[s._v("mitmdump可通过url匹配出目标数据包，从而对响应进行处理。（如写入文件，解析后存入数据库等）")]),s._v(" "),a("p",[s._v("或是配合"),a("code",[s._v("airtest")]),s._v("等自动化框架进行自动化操作并记录过程中的目标数据包。")]),s._v(" "),a("h3",{attrs:{id:"mitmproxy的安装与简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mitmproxy的安装与简单使用"}},[s._v("#")]),s._v(" mitmproxy的安装与简单使用")]),s._v(" "),a("ul",[a("li",[s._v("安装 推荐通过"),a("code",[s._v("homebrew")]),s._v("进行安装")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mitmproxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("是否安装成功")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mitmdump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("运行命令，运行后生成公私钥")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mitmdump\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("如需代理mac系统：mac安装密钥。输入命令后自动打开钥匙串，对证书修改为信任")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" ~/.mitmproxy/mitmproxy-ca-cert.pem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("代理手机：手机端安装证书(1.将证书推入手机后，在手机里手动安装. 2. 手机访问"),a("a",{attrs:{href:"http://mitm.it/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mitm.it"),a("OutboundLink")],1),s._v(" )")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("adb push ~/.mitmproxy/mitmproxy-ca-cert.pem /sdcard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("python环境启动")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mitmproxy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nmitmproxy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"mitmdump对指定数据包的拦截"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mitmdump对指定数据包的拦截"}},[s._v("#")]),s._v(" mitmdump对指定数据包的拦截")]),s._v(" "),a("p",[s._v("通过mitmdump的python api，对目标url的数据包进行参数判断与响应存储")]),s._v(" "),a("ul",[a("li",[s._v("下方"),a("code",[s._v("mitmdump")]),s._v("脚本是对搜索页面结果抓取")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" datetime\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mitmproxy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ctx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存储搜索结果的列表")]),s._v("\nresult_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取数据包的url")]),s._v("\n    request_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" flow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断api是否为目标api（host可能会改变）")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api/search/result?keyword'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" request_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如有需要可对指定页码进行拦截")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# page = request_url.split('&page=')[-1].split('&')[0]")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" result_list\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过响应解析函数得到该页码请求的搜索结果")]),s._v("\n        result_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" get_search_result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 控制台打印结果")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("f'result list length is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("note_id_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("f'result set length is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("note_id_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ul",[a("li",[s._v("运行"),a("code",[s._v("mitmdump")]),s._v("脚本。需要在脚本所在目录运行。手机通过系统wifi或者postern设置"),a("code",[s._v("http代理")])])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指明代理端口")]),s._v("\nmitmdump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8889")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" get_search_result.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"r0capture抓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r0capture抓包"}},[s._v("#")]),s._v(" r0capture抓包")]),s._v(" "),a("p",[s._v("基于frida的抓包工具，抓包支持协议更广。\n"),a("strong",[s._v("注意：需要手机进行root。")]),s._v("\n参考"),a("a",{attrs:{href:"https://juejin.cn/post/7081295665170481165",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://juejin.cn/post/7081295665170481165"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"电脑端抓包环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电脑端抓包环境"}},[s._v("#")]),s._v(" 电脑端抓包环境")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("从github拉取"),a("a",{attrs:{href:"https://github.com/r0ysue/r0capture",target:"_blank",rel:"noopener noreferrer"}},[s._v("r0capture"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("安装r0capture的依赖")])])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" frida-tools\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" loguru\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"手机端抓包环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机端抓包环境"}},[s._v("#")]),s._v(" 手机端抓包环境")]),s._v(" "),a("h4",{attrs:{id:"手机安装frida服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机安装frida服务"}},[s._v("#")]),s._v(" 手机安装frida服务")]),s._v(" "),a("ul",[a("li",[s._v("查看手机处理器架构（arm or x86, 32 or 64） "),a("code",[s._v("adb shell getprop ro.product.cpu.abi")])]),s._v(" "),a("li",[s._v("根据架构下载对应的压缩包，解压得到可执行文件frida-server")])]),s._v(" "),a("h3",{attrs:{id:"手机端启动frida服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机端启动frida服务"}},[s._v("#")]),s._v(" 手机端启动frida服务")]),s._v(" "),a("p",[s._v("shell里运行上一步得到的可执行文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ adb shell\nbullhead:/ $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" \nbullhead:/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whoami")]),s._v("\nroot\nbullhead:/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /data/local/tmp/")]),s._v("\nbullhead:/data/local/tmp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 777 /data/local/tmp/frida-server")]),s._v("\nbullhead:/data/local/tmp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./frida-server &")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6669")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"电脑端抓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电脑端抓包"}},[s._v("#")]),s._v(" 电脑端抓包")]),s._v(" "),a("p",[a("code",[s._v("pcap")]),s._v("格式的抓包数据文件需要安装软件"),a("a",{attrs:{href:"https://www.wireshark.org/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("WireShark")]),a("OutboundLink")],1),s._v("进行分析")]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参数：-f 在包未运行时自动启动目标应用 测试小红书会闪退")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# spawn 模式")]),s._v("\npython r0capture.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 包名\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Attach 模式")]),s._v("\npython r0capture.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" 包名 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 文件名.pcap\npython r0capture.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 包名 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 文件名.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"补充-如何获取应用的包名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充-如何获取应用的包名"}},[s._v("#")]),s._v(" 补充：如何获取应用的包名")]),s._v(" "),a("p",[s._v("启动使用adb获取包名：先使用"),a("code",[s._v("adb shell am monitor")]),s._v("，再启动目标app即可获取")]),s._v(" "),a("p",[s._v("例如：小红书包名"),a("code",[s._v("com.xingin.xhs")])]),s._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("p",[s._v("r0capture "),a("a",{attrs:{href:"https://juejin.cn/post/7081295665170481165",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://juejin.cn/post/7081295665170481165"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);