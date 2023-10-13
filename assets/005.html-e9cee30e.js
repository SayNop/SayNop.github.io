import{_ as i,r as l,o as p,c as r,a as s,b as a,d as e,e as t}from"./app-4c2ff166.js";const o={},c=t(`<h2 id="文件向手机传输" tabindex="-1"><a class="header-anchor" href="#文件向手机传输" aria-hidden="true">#</a> 文件向手机传输</h2><ul><li><p>推荐使用安卓官方的<a href="%60https://www.android.com/filetransfer/%60">文件传输工具</a>(大陆需良好的网络情况才可访问)。数据线连接电脑即可进行文件传输。</p></li><li><p>或者使用adb进行传输。需要预先安装<code>android sdk</code></p></li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adb push C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Test<span class="token punctuation">\\</span>Downloads<span class="token punctuation">\\</span><span class="token number">1</span>.pem /sdcard/1.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="系统wifi配置charles进行抓包" tabindex="-1"><a class="header-anchor" href="#系统wifi配置charles进行抓包" aria-hidden="true">#</a> 系统Wifi配置Charles进行抓包</h2><ul><li>保证运行Charles的客户端与安卓手机在同一局域网内，手机在wifi设置中配置代理为charles的ip与端口（此时charles无需打开系统代理，系统代理用于抓取charles宿主机的包）</li><li>浏览器打开<code>chls.pro/ssl</code>下载证书 或者 电脑charles打开Help -&gt; Save Charles Root Certi... 将证书传入手机</li><li>手机在设置中搜索“证书”安装或者文件管理器直接打开安装</li><li>charles中对https的包右键开启ssl代理，对需要关注的host进行右键关注方便筛选</li></ul><p><strong>注意：</strong> 通过手机安装的证书为用户级别证书。对大多数app的ssl包无法生效，需要系统级别的证书。</p><p>经root手机可通过面具插件<code>movecert</code>将用户级证书更改为系统级证书从而成功抓包。或是安装xpose插件<code>TrustMeAlready</code>免证书抓取https数据包。</p><p>未root手机安装<code>virtualxposed</code>在系统中模拟一个拥有root权限的安卓系统，将目标app安装在该环境中只需用户级别证书即可抓取。</p><h2 id="使用postern通过socks5协议进行抓包" tabindex="-1"><a class="header-anchor" href="#使用postern通过socks5协议进行抓包" aria-hidden="true">#</a> 使用postern通过socks5协议进行抓包</h2><p>如果App检测了是否走系统代理，则wifi代理无效，需要配合Postern 与使用系统wifi代理流程大致相同，而系统wifi代理通过http协议进行抓包。以下是几个不同点</p><ul><li>在charlse设置中启用socks代理并设置端口</li><li>安装并打开postern，<em>配置代理</em>中添加一个代理服务器，输入charles所在的ip与端口，代理类型选择<code>socks5</code></li><li><em>配置规则</em>中删除软件默认规则，新建规则：匹配所有地址 - 通过代理连接 - 选择上一步中建立的socks5代理保存</li><li>通过<em>打开/关闭VPN</em>进行是否通过charles的控制</li></ul><h2 id="mitmproxy进行抓包" tabindex="-1"><a class="header-anchor" href="#mitmproxy进行抓包" aria-hidden="true">#</a> mitmproxy进行抓包</h2><p>mitmdump可通过url匹配出目标数据包，从而对响应进行处理。（如写入文件，解析后存入数据库等）</p><p>或是配合<code>airtest</code>等自动化框架进行自动化操作并记录过程中的目标数据包。</p><h3 id="mitmproxy的安装与简单使用" tabindex="-1"><a class="header-anchor" href="#mitmproxy的安装与简单使用" aria-hidden="true">#</a> mitmproxy的安装与简单使用</h3><ul><li>安装 推荐通过<code>homebrew</code>进行安装</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> mitmproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>是否安装成功</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mitmdump <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>运行命令，运行后生成公私钥</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mitmdump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如需代理mac系统：mac安装密钥。输入命令后自动打开钥匙串，对证书修改为信任</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">open</span> ~/.mitmproxy/mitmproxy-ca-cert.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),d={href:"http://mitm.it/",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adb push ~/.mitmproxy/mitmproxy-ca-cert.pem /sdcard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>python环境启动</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> mitmproxy  <span class="token comment"># 安装</span>
mitmproxy  <span class="token comment"># 启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mitmdump对指定数据包的拦截" tabindex="-1"><a class="header-anchor" href="#mitmdump对指定数据包的拦截" aria-hidden="true">#</a> mitmdump对指定数据包的拦截</h3><p>通过mitmdump的python api，对目标url的数据包进行参数判断与响应存储</p><ul><li>下方<code>mitmdump</code>脚本是对搜索页面结果抓取</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">from</span> mitmproxy <span class="token keyword">import</span> ctx

<span class="token comment"># 存储搜索结果的列表</span>
result_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">response</span><span class="token punctuation">(</span>flow<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 读取数据包的url</span>
    request_url <span class="token operator">=</span> flow<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url
    <span class="token comment"># 判断api是否为目标api（host可能会改变）</span>
    <span class="token keyword">if</span> <span class="token string">&#39;/api/search/result?keyword&#39;</span> <span class="token keyword">in</span> request_url<span class="token punctuation">:</span>
        <span class="token comment"># 如有需要可对指定页码进行拦截</span>
        <span class="token comment"># page = request_url.split(&#39;&amp;page=&#39;)[-1].split(&#39;&amp;&#39;)[0]</span>

        <span class="token keyword">global</span> result_list
        <span class="token comment"># 通过响应解析函数得到该页码请求的搜索结果</span>
        result_list <span class="token operator">+=</span> get_search_result<span class="token punctuation">(</span>flow<span class="token punctuation">.</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
        <span class="token comment"># 控制台打印结果</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>result_list<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">+</span> <span class="token string-interpolation"><span class="token string">f&#39;result list length is </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>note_id_list<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span> <span class="token operator">+</span> <span class="token string">&#39;*&#39;</span><span class="token operator">*</span><span class="token number">8</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">+</span> <span class="token string-interpolation"><span class="token string">f&#39;result set length is </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">(</span>note_id_list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span> <span class="token operator">+</span> <span class="token string">&#39;*&#39;</span><span class="token operator">*</span><span class="token number">8</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行<code>mitmdump</code>脚本。需要在脚本所在目录运行。手机通过系统wifi或者postern设置<code>http代理</code></li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指明代理端口</span>
mitmdump <span class="token parameter variable">-p</span> <span class="token number">8889</span> <span class="token parameter variable">-s</span> get_search_result.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="r0capture抓包" tabindex="-1"><a class="header-anchor" href="#r0capture抓包" aria-hidden="true">#</a> r0capture抓包</h2>`,10),m=s("strong",null,"注意：需要手机进行root。",-1),h={href:"https://juejin.cn/post/7081295665170481165",target:"_blank",rel:"noopener noreferrer"},v=s("h3",{id:"电脑端抓包环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#电脑端抓包环境","aria-hidden":"true"},"#"),a(" 电脑端抓包环境")],-1),b={href:"https://github.com/r0ysue/r0capture",target:"_blank",rel:"noopener noreferrer"},k=s("li",null,[s("p",null,"安装r0capture的依赖")],-1),g=t(`<div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> frida-tools
pip <span class="token function">install</span> loguru
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机端抓包环境" tabindex="-1"><a class="header-anchor" href="#手机端抓包环境" aria-hidden="true">#</a> 手机端抓包环境</h3><h4 id="手机安装frida服务" tabindex="-1"><a class="header-anchor" href="#手机安装frida服务" aria-hidden="true">#</a> 手机安装frida服务</h4><ul><li>查看手机处理器架构（arm or x86, 32 or 64） <code>adb shell getprop ro.product.cpu.abi</code></li><li>根据架构下载对应的压缩包，解压得到可执行文件frida-server</li></ul><h3 id="手机端启动frida服务" tabindex="-1"><a class="header-anchor" href="#手机端启动frida服务" aria-hidden="true">#</a> 手机端启动frida服务</h3><p>shell里运行上一步得到的可执行文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ adb shell
bullhead:/ $ <span class="token function">su</span> 
bullhead:/ <span class="token comment"># whoami</span>
root
bullhead:/ <span class="token comment"># cd /data/local/tmp/</span>
bullhead:/data/local/tmp <span class="token comment"># chmod 777 /data/local/tmp/frida-server</span>
bullhead:/data/local/tmp <span class="token comment"># ./frida-server &amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">6669</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="电脑端抓包" tabindex="-1"><a class="header-anchor" href="#电脑端抓包" aria-hidden="true">#</a> 电脑端抓包</h3>`,8),f=s("code",null,"pcap",-1),_={href:"https://www.wireshark.org/",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"WireShark",-1),y=t(`<div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 参数：-f 在包未运行时自动启动目标应用 测试小红书会闪退</span>
<span class="token comment"># spawn 模式</span>
python r0capture.py <span class="token parameter variable">-U</span> <span class="token parameter variable">-f</span> 包名
<span class="token comment"># Attach 模式</span>
python r0capture.py <span class="token parameter variable">-U</span> 包名 <span class="token parameter variable">-p</span> 文件名.pcap
python r0capture.py <span class="token parameter variable">-U</span> <span class="token parameter variable">-f</span> 包名 <span class="token parameter variable">-v</span>  <span class="token operator">&gt;&gt;</span> 文件名.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="补充-如何获取应用的包名" tabindex="-1"><a class="header-anchor" href="#补充-如何获取应用的包名" aria-hidden="true">#</a> 补充：如何获取应用的包名</h3><p>启动使用adb获取包名：先使用<code>adb shell am monitor</code>，再启动目标app即可获取</p><p>例如：小红书包名<code>com.xingin.xhs</code></p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,5),w={href:"https://juejin.cn/post/7081295665170481165",target:"_blank",rel:"noopener noreferrer"};function j(C,N){const n=l("ExternalLinkIcon");return p(),r("div",null,[c,s("ul",null,[s("li",null,[a("代理手机：手机端安装证书(1.将证书推入手机后，在手机里手动安装. 2. 手机访问"),s("a",d,[a("http://mitm.it"),e(n)]),a(" )")])]),u,s("p",null,[a("基于frida的抓包工具，抓包支持协议更广。 "),m,a(" 参考"),s("a",h,[a("https://juejin.cn/post/7081295665170481165"),e(n)])]),v,s("ul",null,[s("li",null,[s("p",null,[a("从github拉取"),s("a",b,[a("r0capture"),e(n)])])]),k]),g,s("p",null,[f,a("格式的抓包数据文件需要安装软件"),s("a",_,[x,e(n)]),a("进行分析")]),y,s("p",null,[a("r0capture "),s("a",w,[a("https://juejin.cn/post/7081295665170481165"),e(n)])])])}const q=i(o,[["render",j],["__file","005.html.vue"]]);export{q as default};
