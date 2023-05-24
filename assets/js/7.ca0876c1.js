(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(s,a,e){"use strict";e.r(a);var t=e(10),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[s._v("#")]),s._v(" Homebrew")]),s._v(" "),a("p",[s._v("复制"),a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew官网"),a("OutboundLink")],1),s._v("的安装命令进行安装（需要良好的网络环境）")]),s._v(" "),a("h3",{attrs:{id:"cmake-nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmake-nvm"}},[s._v("#")]),s._v(" cmake nvm")]),s._v(" "),a("p",[s._v("通过homebrew安装"),a("code",[s._v("cmake")]),s._v("、"),a("code",[s._v("nvm")]),s._v("等开发工具")]),s._v(" "),a("ul",[a("li",[s._v("可能会遇到的安装失败")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Searching "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" similarly named formulae"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". \nError: No similarly named formulae found. \nIt was migrated from homebrew/cask to homebrew/core.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# because you can't brew untap homebrew/core")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repo")]),s._v(" homebrew/core"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" \nbrew tap homebrew/core\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"py3虚拟环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#py3虚拟环境"}},[s._v("#")]),s._v(" py3虚拟环境")]),s._v(" "),a("p",[s._v("https://zhuanlan.zhihu.com/p/137624513")]),s._v(" "),a("ul",[a("li",[s._v("安装虚拟环境与虚拟环境管理")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" virtualenv\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" virtualenvwrapper\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("创建虚拟环境存储目录。默认为"),a("code",[s._v("~/.virtualenvs")]),s._v("。建议创建默认目录，也可自定义目录")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用默认")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.virtualenvs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/python_envs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("查看python3解释器与虚拟环境管理脚本位置")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" python3\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" virtualenvwrapper.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("zsh修改"),a("code",[s._v(".zshrc")]),s._v("将mysql配置添加到环境变量(bash修改"),a("code",[s._v(".bashrc")]),s._v(")，完成后先"),a("strong",[s._v("不进行")]),s._v("source")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第二步中创建存储目录pwd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 使用默认")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORKON_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.virtualenvs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 使用自定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORKON_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/用户名/python_envs'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第三步中python3解释器的位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VIRTUALENVWRAPPER_PYTHON")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Library/Frameworks/Python.framework/Versions/3.7/bin/python3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /Library/Frameworks/Python.framework/Versions/3.6/bin/virtualenvwrapper.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("执行一次虚拟环境管理脚本，后"),a("strong",[s._v("执行source")]),s._v("使配置生效")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第三步中虚拟环境管理脚本位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使配置生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("至此完成了虚拟环境的创建。以下是常用指令")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("mkvirtualenv 环境名")]),s._v(" 创建虚拟环境")]),s._v(" "),a("li",[a("code",[s._v("workon")]),s._v(" 查看全部虚拟环境")]),s._v(" "),a("li",[a("code",[s._v("workon 环境名")]),s._v(" 使用已有环境")]),s._v(" "),a("li",[a("code",[s._v("deactivate")]),s._v(" 退出虚拟环境")]),s._v(" "),a("li",[a("code",[s._v("rmvirtualenv 环境名")]),s._v(" 删除已有虚拟环境")])]),s._v(" "),a("p",[a("strong",[s._v("说明：")]),s._v("\n在自定义目录的情况下，在创建新项目时仍可能生成"),a("code",[s._v("~/.virtualenvs")]),s._v("并在其中生成项目的虚拟环境文件，因此建议使用"),a("code",[s._v("~/.virtualenvs")]),s._v("目录进行创建")]),s._v(" "),a("h2",{attrs:{id:"mysql安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql安装"}},[s._v("#")]),s._v(" MySQL安装")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql官网"),a("OutboundLink")],1),s._v("下载所需的社区版本桌面端APP")]),s._v(" "),a("li",[s._v("在安装完成后，安装器会显示root用户的初始密码，需要记录")]),s._v(" "),a("li",[s._v("在macos的系统偏好设置中点击MySQL启动MySQL服务")]),s._v(" "),a("li",[s._v("zsh修改"),a("code",[s._v(".zprofile")]),s._v("将mysql配置添加到环境变量(bash修改"),a("code",[s._v(".bash_profile")]),s._v(")，完成后进行"),a("code",[s._v("source")])])]),s._v(" "),a("div",{staticClass:"language-shell macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("}")]),s._v(":/usr/local/mysql/bin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("}")]),s._v(":/usr/local/mysql/bin/mysql_config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("终端中使用初始密码登录mysql")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" -p初始密码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("执行下列命令修改root用户的密码")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码")]),s._v("\nSET PASSWORD FOR "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yourpassword'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新权限")]),s._v("\nFLUSH PRIVILEGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"mongo安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongo安装"}},[s._v("#")]),s._v(" mongo安装")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.mongodb.com/try/download/community-edition",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v("下载所需的社区版本")]),s._v(" "),a("li",[s._v("解压数据包并放入对应位置")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" mongodb-osx-ssl-x86_64-x.x.x.tgz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/mongodb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mongodb-macos-x86_64-6.0.4/* /usr/local/mongdb/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("zsh修改"),a("code",[s._v(".zprofile")]),s._v("将mongo配置添加到环境变量(bash修改"),a("code",[s._v(".bash_profile")]),s._v(")，完成后进行"),a("code",[s._v("source")])])]),s._v(" "),a("div",{staticClass:"language-shell macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("}")]),s._v(":/usr/local/mongodb/bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("启动")]),s._v("：启动参数可使用"),a("code",[s._v("mongod --help")]),s._v("查看，"),a("code",[s._v("--dpath")]),s._v("用于指定数据存放位置")]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dbpath")]),s._v(" /var/mongo/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" docker安装")]),s._v(" "),a("p",[s._v("参照"),a("a",{attrs:{href:"https://docs.docker.com/desktop/get-started",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker官方文档"),a("OutboundLink")],1),s._v("安装docker桌面端APP")]),s._v(" "),a("p",[s._v("具体命令与说明可参考"),a("a",{attrs:{href:"https://www.jianshu.com/p/6067a74fca3c",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关文章"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("如需切换源：在设置中的docker engine选项json中添加配置")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://docker.mirrors.ustc.edu.cn/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"redis安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis安装"}},[s._v("#")]),s._v(" redis安装")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis官网"),a("OutboundLink")],1),s._v("下载所需版本的redis数据包")]),s._v(" "),a("li",[s._v("解压数据包并放入对应位置")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" redis-x.x.x.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" redis-x.x.x/* /usr/local/redis/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进行环境测试，查看环境测试是否成功")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成运行文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("启动与关闭")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis\n./bin/redis-server etc/redis.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\nredis-cli "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("redis的开机启动")]),a("br"),s._v("\n参考："),a("a",{attrs:{href:"http://www.js2node.com/redis-io/install-redis-io-2-4-17-on-mac-osx-as-service",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.js2node.com/redis-io/install-redis-io-2-4-17-on-mac-osx-as-service"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("给mac添加一个启动项")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在 ~/Library/LaunchAgents 目录下自己建立一个 redis.plist")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("sudo vim redis.plist")]),s._v("输入以下内容")])])]),s._v(" "),a("p",[s._v("Labelio.redis.redis-serverProgramArguments/usr/local/bin/redis-server/usr/local/etc/redis.confRunAtLoad")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("执行命令"),a("code",[s._v("sudo launchctlload/Library/LaunchDaemons/io.redis.redis-server.plist")])])]),s._v(" "),a("li",[a("p",[s._v("打开关闭"),a("code",[s._v("sudo launchctlstartio.redis.redis-server$ sudo launchctl stop io.redis.redis-server")])])])]),s._v(" "),a("h2",{attrs:{id:"fastdfs安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastdfs安装"}},[s._v("#")]),s._v(" fastdfs安装")]),s._v(" "),a("p",[s._v("使用docker进行fastdfs的安装")]),s._v(" "),a("ul",[a("li",[s._v("拉取镜像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull delron/fastdfs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("linux")]),s._v("开启tracker服务。指明名称，网络，本地到容器的卷宗映射")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-dit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" tracker "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/fdfs/tracker:/var/fdfs delron/fastdfs tracker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("linux")]),s._v("开启storage服务，指明名称，网络，tracker服务的内网地址，本地到容器的卷宗映射")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-dti")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" storage "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TRACKER_SERVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".xxx.xxx:22122 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/fdfs/storage:/var/fdfs delron/fastdfs storage\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("由于macos不能使用"),a("code",[s._v("host")]),s._v("网络绑定端口，需要创建docker桥接网络(默认创建的就是桥接模式)")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network create my-net\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("macos")]),s._v("通过桥接网络开启tracker服务")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22122")]),s._v(":22122 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" tracker "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-net  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/fdfs/tracker:/var/fdfs delron/fastdfs tracker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("macos")]),s._v("通过桥接网络开启storage服务 通过8888与23000端口的桥接")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v(":8888 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23000")]),s._v(":23000 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" storage "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-net "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TRACKER_SERVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8:22122 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/fdfs/storage:/var/fdfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GROUP_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("group1 delron/fastdfs storage\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("由于storage容器注册在tracker容器中用的是容器网段ip（172.19.0.1），所以返回给Java服务器端的ip也是该ip，导致服务无法访问。需要将宿主机中请求172.19.0.1的请求都默认为docker中的请求。在客户端访问172.19.0.1:23000时，会转向访问本机的127.0.0.1:23000进入docker中的tracker服务")]),s._v(" "),a("li",[a("strong",[s._v("macos")]),s._v("参照命令并建立172的端口映射，"),a("a",{attrs:{href:"https://blog.csdn.net/zhujuntiankong/article/details/106864724",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),a("OutboundLink")],1),s._v("内10开头的端口映射暂时不用。")])]),s._v(" "),a("div",{staticClass:"language-bash macos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" lo0 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("p",[s._v("python虚拟环境 "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/137624513",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhuanlan.zhihu.com/p/137624513"),a("OutboundLink")],1),a("br"),s._v("\nmysql安装 "),a("a",{attrs:{href:"https://jingyan.baidu.com/article/fa4125ac0e3c2928ac709204.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://jingyan.baidu.com/article/fa4125ac0e3c2928ac709204.html"),a("OutboundLink")],1),a("br"),s._v("\nmongo安装 "),a("a",{attrs:{href:"https://www.jianshu.com/p/bb77f8be67f4",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/bb77f8be67f4"),a("OutboundLink")],1),a("br"),s._v("\ndocker命令参考 "),a("a",{attrs:{href:"https://www.jianshu.com/p/6067a74fca3c",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/6067a74fca3c"),a("OutboundLink")],1),a("br"),s._v("\nredis安装 "),a("a",{attrs:{href:"https://yijiebuyi.com/blog/d8ab4b444c16f42cefe30df738a42518.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://yijiebuyi.com/blog/d8ab4b444c16f42cefe30df738a42518.html"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.jianshu.com/p/6b5eca8d908b",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/6b5eca8d908b"),a("OutboundLink")],1),a("br"),s._v("\nfastdfs安装 "),a("a",{attrs:{href:"https://blog.csdn.net/zhujuntiankong/article/details/106864724",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/zhujuntiankong/article/details/106864724"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);