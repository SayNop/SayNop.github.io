import{_ as r,r as o,o as i,c as t,a as s,b as a,d as e,e as l}from"./app-e4c0a286.js";const c={},d=s("h2",{id:"homebrew",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#homebrew","aria-hidden":"true"},"#"),a(" Homebrew")],-1),p={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},u=l(`<h3 id="cmake-nvm" tabindex="-1"><a class="header-anchor" href="#cmake-nvm" aria-hidden="true">#</a> cmake nvm</h3><p>通过homebrew安装<code>cmake</code>、<code>nvm</code>等开发工具</p><ul><li>可能会遇到的安装失败</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Searching <span class="token keyword">for</span> similarly named formulae<span class="token punctuation">..</span>. 
Error: No similarly named formulae found. 
It was migrated from homebrew/cask to homebrew/core.

<span class="token comment"># 解决</span>
<span class="token comment"># because you can&#39;t brew untap homebrew/core</span>
<span class="token function">rm</span> <span class="token parameter variable">-fr</span> <span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/core<span class="token variable">)</span></span> 
brew tap homebrew/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="py3虚拟环境" tabindex="-1"><a class="header-anchor" href="#py3虚拟环境" aria-hidden="true">#</a> py3虚拟环境</h2><p>https://zhuanlan.zhihu.com/p/137624513</p><ul><li>安装虚拟环境与虚拟环境管理</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> virtualenv
pip3 <span class="token function">install</span> virtualenvwrapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建虚拟环境存储目录。默认为<code>~/.virtualenvs</code>。建议创建默认目录，也可自定义目录</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用默认</span>
<span class="token function">mkdir</span> <span class="token environment constant">$HOME</span>/.virtualenvs
<span class="token comment"># 自定义</span>
<span class="token function">mkdir</span> ~/python_envs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看python3解释器与虚拟环境管理脚本位置</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> python3
<span class="token function">which</span> virtualenvwrapper.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>zsh修改<code>.zshrc</code>将mysql配置添加到环境变量(bash修改<code>.bashrc</code>)，完成后先<strong>不进行</strong>source</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第二步中创建存储目录pwd</span>
<span class="token comment"># - 使用默认</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">WORKON_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/.virtualenvs
<span class="token comment"># - 使用自定义</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">WORKON_HOME</span><span class="token operator">=</span><span class="token string">&#39;/Users/&lt;username&gt;/python_envs&#39;</span>
<span class="token comment"># 第三步中python3解释器的位置</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VIRTUALENVWRAPPER_PYTHON</span><span class="token operator">=</span><span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.7/bin/python3&#39;</span>
<span class="token builtin class-name">source</span> /Library/Frameworks/Python.framework/Versions/3.6/bin/virtualenvwrapper.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行一次虚拟环境管理脚本，后<strong>执行source</strong>使配置生效</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第三步中虚拟环境管理脚本位置</span>
<span class="token builtin class-name">.</span> /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
<span class="token comment"># 使配置生效</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此完成了虚拟环境的创建。以下是常用指令</p><ul><li><code>mkvirtualenv 环境名</code> 创建虚拟环境</li><li><code>workon</code> 查看全部虚拟环境</li><li><code>workon 环境名</code> 使用已有环境</li><li><code>deactivate</code> 退出虚拟环境</li><li><code>rmvirtualenv 环境名</code> 删除已有虚拟环境</li></ul><p><strong>说明：</strong> 在自定义目录的情况下，在创建新项目时仍可能生成<code>~/.virtualenvs</code>并在其中生成项目的虚拟环境文件，因此建议使用<code>~/.virtualenvs</code>目录进行创建</p><h2 id="mysql安装" tabindex="-1"><a class="header-anchor" href="#mysql安装" aria-hidden="true">#</a> MySQL安装</h2>`,20),m={href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},v=s("li",null,"在安装完成后，安装器会显示root用户的初始密码，需要记录",-1),b=s("li",null,"在macos的系统偏好设置中点击MySQL启动MySQL服务",-1),h=s("li",null,[a("zsh修改"),s("code",null,".zprofile"),a("将mysql配置添加到环境变量(bash修改"),s("code",null,".bash_profile"),a(")，完成后进行"),s("code",null,"source")],-1),k=l(`<div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/usr/local/mysql/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/usr/local/mysql/bin/mysql_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>终端中使用初始密码登录mysql</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> -p初始密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>执行下列命令修改root用户的密码</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置密码</span>
SET PASSWORD FOR <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;yourpassword&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 刷新权限</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongo安装" tabindex="-1"><a class="header-anchor" href="#mongo安装" aria-hidden="true">#</a> mongo安装</h2>`,6),g={href:"https://www.mongodb.com/try/download/community-edition",target:"_blank",rel:"noopener noreferrer"},f=s("li",null,"解压数据包并放入对应位置",-1),_=l(`<div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> mongodb-osx-ssl-x86_64-x.x.x.tgz
<span class="token function">sudo</span> <span class="token function">mkdir</span> /usr/local/mongodb
<span class="token function">sudo</span> <span class="token function">mv</span> mongodb-macos-x86_64-6.0.4/* /usr/local/mongdb/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>zsh修改<code>.zprofile</code>将mongo配置添加到环境变量(bash修改<code>.bash_profile</code>)，完成后进行<code>source</code></li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/usr/local/mongodb/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>启动</strong>：启动参数可使用<code>mongod --help</code>查看，<code>--dpath</code>用于指定数据存放位置</p><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mongod <span class="token parameter variable">--dbpath</span> /var/mongo/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h2>`,6),x={href:"https://docs.docker.com/desktop/get-started",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.jianshu.com/p/6067a74fca3c",target:"_blank",rel:"noopener noreferrer"},y=l(`<p>如需切换源：在设置中的docker engine选项json中添加配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://docker.mirrors.ustc.edu.cn/&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="redis安装" tabindex="-1"><a class="header-anchor" href="#redis安装" aria-hidden="true">#</a> redis安装</h2>`,3),A={href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"},O=s("li",null,"解压数据包并放入对应位置",-1),P=l(`<div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-x.x.x.tar.gz
<span class="token function">sudo</span> <span class="token function">mkdir</span> /usr/local/redis
<span class="token function">sudo</span> <span class="token function">mv</span> redis-x.x.x/* /usr/local/redis/
<span class="token builtin class-name">cd</span> /usr/local/redis
<span class="token comment"># 进行环境测试，查看环境测试是否成功</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token builtin class-name">test</span>
<span class="token comment"># 生成运行文件</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动与关闭</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
<span class="token builtin class-name">cd</span> /usr/local/redis
./bin/redis-server etc/redis.conf

<span class="token comment"># 关闭</span>
redis-cli <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R=s("strong",null,"redis的开机启动",-1),H=s("br",null,null,-1),E={href:"http://www.js2node.com/redis-io/install-redis-io-2-4-17-on-mac-osx-as-service",target:"_blank",rel:"noopener noreferrer"},T=l(`<p>给mac添加一个启动项</p><ul><li><p>在 ~/Library/LaunchAgents 目录下自己建立一个 redis.plist</p></li><li><p><code>sudo vim redis.plist</code>输入以下内容</p></li></ul><p>Labelio.redis.redis-serverProgramArguments/usr/local/bin/redis-server/usr/local/etc/redis.confRunAtLoad</p><ul><li><p>执行命令<code>sudo launchctlload/Library/LaunchDaemons/io.redis.redis-server.plist</code></p></li><li><p>打开关闭<code>sudo launchctlstartio.redis.redis-server$ sudo launchctl stop io.redis.redis-server</code></p></li></ul><h2 id="fastdfs安装" tabindex="-1"><a class="header-anchor" href="#fastdfs安装" aria-hidden="true">#</a> fastdfs安装</h2><p>使用docker进行fastdfs的安装</p><ul><li>拉取镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull delron/fastdfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>linux</strong>开启tracker服务。指明名称，网络，本地到容器的卷宗映射</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-dit</span> <span class="token parameter variable">--name</span> tracker <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token parameter variable">-v</span> /var/fdfs/tracker:/var/fdfs delron/fastdfs tracker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>linux</strong>开启storage服务，指明名称，网络，tracker服务的内网地址，本地到容器的卷宗映射</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-dti</span> <span class="token parameter variable">--name</span> storage <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token parameter variable">-e</span> <span class="token assign-left variable">TRACKER_SERVER</span><span class="token operator">=</span><span class="token number">192.168</span>.xxx.xxx:22122 <span class="token parameter variable">-v</span> /var/fdfs/storage:/var/fdfs delron/fastdfs storage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>由于macos不能使用<code>host</code>网络绑定端口，需要创建docker桥接网络(默认创建的就是桥接模式)</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create my-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>macos</strong>通过桥接网络开启tracker服务</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">22122</span>:22122 <span class="token parameter variable">--name</span> tracker <span class="token parameter variable">--net</span><span class="token operator">=</span>my-net  <span class="token parameter variable">-v</span> /var/fdfs/tracker:/var/fdfs delron/fastdfs tracker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>macos</strong>通过桥接网络开启storage服务 通过8888与23000端口的桥接</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8888</span>:8888 <span class="token parameter variable">-p</span> <span class="token number">23000</span>:23000 <span class="token parameter variable">--name</span> storage <span class="token parameter variable">--net</span><span class="token operator">=</span>my-net <span class="token parameter variable">-e</span> <span class="token assign-left variable">TRACKER_SERVER</span><span class="token operator">=</span><span class="token number">192.168</span>.1.8:22122 <span class="token parameter variable">-v</span> /var/fdfs/storage:/var/fdfs <span class="token parameter variable">-e</span> <span class="token assign-left variable">GROUP_NAME</span><span class="token operator">=</span>group1 delron/fastdfs storage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),D=s("li",null,"由于storage容器注册在tracker容器中用的是容器网段ip（172.19.0.1），所以返回给Java服务器端的ip也是该ip，导致服务无法访问。需要将宿主机中请求172.19.0.1的请求都默认为docker中的请求。在客户端访问172.19.0.1:23000时，会转向访问本机的127.0.0.1:23000进入docker中的tracker服务",-1),z=s("strong",null,"macos",-1),N={href:"https://blog.csdn.net/zhujuntiankong/article/details/106864724",target:"_blank",rel:"noopener noreferrer"},j=l(`<div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ifconfig</span> lo0 <span class="token builtin class-name">alias</span> <span class="token number">172.19</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安卓sdk与ndk安装" tabindex="-1"><a class="header-anchor" href="#安卓sdk与ndk安装" aria-hidden="true">#</a> 安卓SDK与NDK安装</h2><h3 id="sdk" tabindex="-1"><a class="header-anchor" href="#sdk" aria-hidden="true">#</a> SDK</h3><ul><li>下载压缩包</li><li>将以下内容加入 <em>~/.zprofile</em> ，注意修改用户名</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ANDROID_HOME</span><span class="token operator">=</span>/Users/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/android-sdk-macosx
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span><span class="token builtin class-name">:</span><span class="token variable">\${ANDROID_HOME}</span>/platform-tools
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span><span class="token builtin class-name">:</span><span class="token variable">\${ANDROID_HOME}</span>/tools
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span><span class="token builtin class-name">:</span><span class="token variable">\${ANDROID_HOME}</span>/build-tools/29.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ndk" tabindex="-1"><a class="header-anchor" href="#ndk" aria-hidden="true">#</a> NDK</h3><ul><li>下载压缩包。不同版本ndk的下载链接https://www.jianshu.com/p/c5b59cbe65f7，文本使用 <em>r10e</em></li><li>将下载得到的bin文件，进行解压</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加文件的可执行权限</span>
<span class="token function">chmod</span> a+x android-ndk-r10e-darwin-x86_64.bin
<span class="token comment"># 解压文件</span>
<span class="token function">sudo</span> ./android-ndk-r10c-darwin-x86_64.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将以下内容加入 <em>~/.zprofile</em> ，注意修改用户名</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ANDROID_NDK_ROOT</span><span class="token operator">=</span>/Users/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/android-ndk-r10e
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NDK_ROOT</span><span class="token operator">=</span>/Users/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/android-ndk-r10e
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NDK_ROOT_quick</span><span class="token operator">=</span>/Users/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/android-ndk-r10e
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span><span class="token builtin class-name">:</span><span class="token variable">\${ANDROID_NDK_ROOT}</span>/toolchains/arm-linux-androideabi-4.9/prebuilt/darwin-x86_64/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,11),q={href:"https://zhuanlan.zhihu.com/p/137624513",target:"_blank",rel:"noopener noreferrer"},L=s("br",null,null,-1),S={href:"https://jingyan.baidu.com/article/fa4125ac0e3c2928ac709204.html",target:"_blank",rel:"noopener noreferrer"},$=s("br",null,null,-1),I={href:"https://www.jianshu.com/p/bb77f8be67f4",target:"_blank",rel:"noopener noreferrer"},K=s("br",null,null,-1),M={href:"https://www.jianshu.com/p/6067a74fca3c",target:"_blank",rel:"noopener noreferrer"},V=s("br",null,null,-1),U={href:"https://yijiebuyi.com/blog/d8ab4b444c16f42cefe30df738a42518.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.jianshu.com/p/6b5eca8d908b",target:"_blank",rel:"noopener noreferrer"},W=s("br",null,null,-1),B={href:"https://blog.csdn.net/zhujuntiankong/article/details/106864724",target:"_blank",rel:"noopener noreferrer"};function C(Q,G){const n=o("ExternalLinkIcon");return i(),t("div",null,[d,s("p",null,[a("复制"),s("a",p,[a("Homebrew官网"),e(n)]),a("的安装命令进行安装（需要良好的网络环境）")]),u,s("ul",null,[s("li",null,[s("a",m,[a("mysql官网"),e(n)]),a("下载所需的社区版本桌面端APP")]),v,b,h]),k,s("ul",null,[s("li",null,[s("a",g,[a("官网"),e(n)]),a("下载所需的社区版本")]),f]),_,s("p",null,[a("参照"),s("a",x,[a("docker官方文档"),e(n)]),a("安装docker桌面端APP")]),s("p",null,[a("具体命令与说明可参考"),s("a",w,[a("相关文章"),e(n)])]),y,s("ul",null,[s("li",null,[s("a",A,[a("redis官网"),e(n)]),a("下载所需版本的redis数据包")]),O]),P,s("p",null,[R,H,a(" 参考："),s("a",E,[a("http://www.js2node.com/redis-io/install-redis-io-2-4-17-on-mac-osx-as-service"),e(n)])]),T,s("ul",null,[D,s("li",null,[z,a("参照命令并建立172的端口映射，"),s("a",N,[a("参考文章"),e(n)]),a("内10开头的端口映射暂时不用。")])]),j,s("p",null,[a("python虚拟环境 "),s("a",q,[a("https://zhuanlan.zhihu.com/p/137624513"),e(n)]),L,a(" mysql安装 "),s("a",S,[a("https://jingyan.baidu.com/article/fa4125ac0e3c2928ac709204.html"),e(n)]),$,a(" mongo安装 "),s("a",I,[a("https://www.jianshu.com/p/bb77f8be67f4"),e(n)]),K,a(" docker命令参考 "),s("a",M,[a("https://www.jianshu.com/p/6067a74fca3c"),e(n)]),V,a(" redis安装 "),s("a",U,[a("https://yijiebuyi.com/blog/d8ab4b444c16f42cefe30df738a42518.html"),e(n)]),s("a",F,[a("https://www.jianshu.com/p/6b5eca8d908b"),e(n)]),W,a(" fastdfs安装 "),s("a",B,[a("https://blog.csdn.net/zhujuntiankong/article/details/106864724"),e(n)])])])}const Y=r(c,[["render",C],["__file","003.html.vue"]]);export{Y as default};