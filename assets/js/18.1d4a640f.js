(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{294:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"配置ssh进行远程服务器快速连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh进行远程服务器快速连接"}},[s._v("#")]),s._v(" 配置SSH进行远程服务器快速连接")]),s._v(" "),t("p",[s._v("修改"),t("code",[s._v("~/.ssh/config")]),s._v("文件进行配置")]),s._v(" "),t("div",{staticClass:"language-shell macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Host server01  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置服务器别名")]),s._v("\n  HostName xxx.xxx.xxx.xxx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器ip")]),s._v("\n  User root  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录用户名")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("配置完成后，可使用别名进行连接")]),s._v(" "),t("div",{staticClass:"language-bash macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原本的连接，需要用户名和真实ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@xxx.xxx.xxx.xxx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置完成后可使用别名直接连接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" server01\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"处理长时间未使用导致的远程连接断开"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理长时间未使用导致的远程连接断开"}},[s._v("#")]),s._v(" 处理长时间未使用导致的远程连接断开")]),s._v(" "),t("p",[s._v("配置文件中增加轮询防止ssh自动断开")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Host *\n  ServerAliveCountMax "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 断开时重试连接的次数")]),s._v("\n  ServerAliveInterval "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每隔5秒自动发送一个空的请求以保持连接")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"单台设备多个git账号公钥的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单台设备多个git账号公钥的配置"}},[s._v("#")]),s._v(" 单台设备多个git账号公钥的配置")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("控制台键入"),t("code",[s._v('ssh-keygen -t rsa -C "邮箱"')]),s._v("生成公钥（单个邮箱单种加密只可生成一个公钥匙。因不指定文件名会进行覆盖）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("cat ~/.ssh/id_rsa.pub")]),s._v("查看公钥，将其复制进git的ssh公钥中（例如gitlab，github等）")])]),s._v(" "),t("li",[t("p",[s._v("git平台保存公钥时可将标题指明为设备，防止单个邮箱在多个设备上生成不同的公钥，产生混淆")])])]),s._v(" "),t("p",[s._v("在生成公钥时一般使用邮箱进行生成。如要区分公司账号与自己账号，自己账号尽量使用同一个邮箱，后续会有说明。")]),s._v(" "),t("p",[t("strong",[s._v("注意：")]),s._v("\n同一个邮箱使用同一种加密算法生成的公钥相同。在生成公钥时，尽量每个站点生成名称不同的公钥文件。")]),s._v(" "),t("div",{staticClass:"language-shell macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Host gitlab.com\n    HostName gitlab.com\n    User xxx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab的用户名")]),s._v("\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa_gitlab  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab的公钥")]),s._v("\n\nHost github.com\n    HostName github.com\n    User xxx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github的用户名")]),s._v("\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github的公钥")]),s._v("\n\nHost gitee.com\n    HostName gitee.com\n    User xxx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitee的用户名")]),s._v("\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitee的公钥")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("配置完成后进行测试")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@gitlab.com  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试gitlab的公钥配置是否成功")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@github.com  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试github的公钥配置是否成功")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@gitee.com  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试gitee的公钥配置是否成功")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("em",[s._v("说明：多个git平台可使用相同的公钥文件。以上述github与gitee为例，由于是同一个邮箱，使用相同的公钥")])]),s._v(" "),t("h2",{attrs:{id:"关于git的全局配置与多个git平台账号问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于git的全局配置与多个git平台账号问题"}},[s._v("#")]),s._v(" 关于git的全局配置与多个git平台账号问题")]),s._v(" "),t("p",[s._v("查看git全局配置"),t("code",[s._v("git config --global --edit")])]),s._v(" "),t("div",{staticClass:"language-systemd macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-systemd"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n      name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxx")]),s._v("\n      email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxx@xx.com")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在初次使用时，可能如上配置了全局的用户名与邮箱。该配置会让该设备所进行的所有推送都将使用该用户名与邮箱。")]),s._v(" "),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在未设置全局的情况下，终端中使用"),t("code",[s._v("git push")]),s._v("将使用设备系统设置中的用户名与邮箱进行推送。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("邮箱")]),s._v("是确定推送git平台账号的标识。如果邮箱不匹配git平台账号，则git平台会显示为其他用户推送，不会正常统计git平台账号的贡献次数。")])]),s._v(" "),t("li",[t("p",[s._v("修改指定项目的推送用户名和邮箱。通过bash执行"),t("code",[s._v('git config --local user.name "xxx"')]),s._v("与"),t("code",[s._v('git config --local user.email "xxx@xx.com"')])])])]),s._v(" "),t("p",[s._v("或编辑项目的"),t("code",[s._v(".git/config")]),s._v("添加（通过bash命令添加即是在config中加入下列对应参数）")]),s._v(" "),t("div",{staticClass:"language-systemd macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-systemd"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n        name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxx")]),s._v("\n        email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxx@xx.com")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("设置项目推送的"),t("strong",[s._v("邮箱")]),s._v("与git平台账号一致，以保证git平台正常统计。即使用户名不一致，使用邮箱一致即可（保证生成公钥邮箱、git登录邮箱、推送邮箱三者一致）。")]),s._v(" "),t("h2",{attrs:{id:"同一项目向多个git平台推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同一项目向多个git平台推送"}},[s._v("#")]),s._v(" 同一项目向多个git平台推送")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("执行一次"),t("code",[s._v("git push")]),s._v("同时推送多个平台")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("选择一个仓库进行clone")])]),s._v(" "),t("li",[t("p",[s._v("在另一个平台新建仓库并导入上一个平台中创建的仓库")])]),s._v(" "),t("li",[t("p",[s._v("修改"),t("code",[s._v(".git/config")])]),s._v(" "),t("div",{staticClass:"language-systemd macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-systemd"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v('remote "origin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n        url "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("git@github.com:xxx/xxxxx.git")]),s._v("\n        # 添加需要额外推送的仓库git链接\n        url "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("git@gitee.com:xxx/xxxxx.git")]),s._v("\n        fetch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("+refs/heads/*:refs/remotes/origin/*")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("注意：以此方式进行推送，多个git平台在推送时将使用统一的用户名与邮箱。如果git平台的"),t("strong",[s._v("邮箱不一致")]),s._v("，则无法使多个git平台同时正确的统计账号贡献信息")])])])]),s._v(" "),t("li",[t("p",[s._v("配置多个remote进行多次推送保证多个git平台都能正常统计账号贡献信息")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("修改"),t("code",[s._v(".git/config")]),s._v("，删除"),t("code",[s._v('[remote "origin"]')]),s._v("，新增多个git平台的remote配置")]),s._v(" "),t("div",{staticClass:"language-systemd macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-systemd"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v('remote "github"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n    url "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("git@github.com:xxx/xxxxx.git")]),s._v("\n    fetch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("+refs/heads/*:refs/remotes/origin/*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v('remote "gitee"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n    url "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("git@gitee.com:xxx/xxxxx.git")]),s._v("\n    fetch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("+refs/heads/*:refs/remotes/origin/*")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("bash中使用"),t("code",[s._v("git remote")]),s._v("测试是否配置成功")])]),s._v(" "),t("li",[t("p",[s._v("在推送前修改"),t("code",[s._v(".git/config")]),s._v("中的user信息")]),s._v(" "),t("div",{staticClass:"language-systemd macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-systemd"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n        name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxx")]),s._v("\n        email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxx@xx.com")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("推送时根据user信息对两个仓库分别进行修改后的推送")]),s._v(" "),t("div",{staticClass:"language-bash macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送github")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push github matser\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送gitee")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push gitee master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("修改全局配置实现对用户名与密码的自动选择（需要git版本2.36.0）")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("通过if对仓库地址进行判断从而读取不同的配置文件")]),s._v(" "),t("div",{staticClass:"language-systemd macos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-systemd"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v('includeIf "hasconfig:remote.*.url:git@github.com*/**"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n      path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("~/.gitconfig-gitlab")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v('includeIf "hasconfig:remote.*.url:git@github.com*/**"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n      path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("~/.gitconfig-github")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v('includeIf "hasconfig:remote.*.url:git@gitee.com*/**"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n      path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("~/.gitconfig-gitee")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);