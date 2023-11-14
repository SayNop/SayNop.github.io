import{_ as s,o as e,c as n,e as a}from"./app-7a642614.js";const i={},t=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>推荐使用pip进行安装。项目环境若为python3，可直接安装在python3下</p><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="生成配置并修改配置文件引入多个配置" tabindex="-1"><a class="header-anchor" href="#生成配置并修改配置文件引入多个配置" aria-hidden="true">#</a> 生成配置并修改配置文件引入多个配置</h2><h3 id="生成" tabindex="-1"><a class="header-anchor" href="#生成" aria-hidden="true">#</a> 生成</h3><p>通过以下命令生成配置，一般放置在<code>/etc/</code>路径下</p><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>echo_supervisord_conf <span class="token operator">&gt;</span> supervisord.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引入多个配置" tabindex="-1"><a class="header-anchor" href="#引入多个配置" aria-hidden="true">#</a> 引入多个配置</h3><p>在原始配置文件末尾添加多个配置文件的目录</p><div class="language-systemd line-numbers-mode" data-ext="systemd"><pre class="language-systemd"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">include</span><span class="token punctuation">]</span></span>
<span class="token comment">; add your conf in conf.d dir</span>
<span class="token key attr-name">files</span> <span class="token punctuation">=</span> <span class="token value attr-value">/etc/supervisor/conf.d/*.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动supervisor与supervisor常用命令" tabindex="-1"><a class="header-anchor" href="#启动supervisor与supervisor常用命令" aria-hidden="true">#</a> 启动supervisor与supervisor常用命令</h2><p>启动时指明配置文件</p><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/  <span class="token comment"># 进入配置文件所在目录或是直接在-c中指明文件位置</span>
supervisord <span class="token parameter variable">-c</span> supervisord.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用命令</p><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入控制台</span>
supervisorctl
<span class="token comment"># 启动进程</span>
start process1
<span class="token comment"># 停止进程</span>
stop process1
<span class="token comment"># 重启进程（停起过快，容易端口冲突）</span>
restart process1
<span class="token comment"># 启动组内所有进程</span>
start group1:*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义管理目录存放配置文件与进程文件" tabindex="-1"><a class="header-anchor" href="#自定义管理目录存放配置文件与进程文件" aria-hidden="true">#</a> 自定义管理目录存放配置文件与进程文件</h2><ul><li>在目标位置创建文件。例如：在根目录创建文件夹<code>/data/etc/supervisor/</code>用于管理super相关配置文件，或者在<code>/etc/supervisor/</code>中</li><li>生成配置文件后修改相关文件的位置，以下配置以<code>/data/etc/supervisor/</code>为例，修改了的<code>file</code>、<code>pidfile</code>、<code>serverurl</code>、<code>files</code>。可不修改<code>pidfile</code>、<code>serverurl</code>以方便进入控制台。</li></ul><div class="language-systemd line-numbers-mode" data-ext="systemd"><pre class="language-systemd"><code><span class="token comment">; Warning:</span>
<span class="token comment">;  Paths throughout this example file use /tmp because it is available on most</span>
<span class="token comment">;  systems.  You will likely need to change these to locations more appropriate</span>
<span class="token comment">;  for your system.  Some systems periodically delete older files in /tmp.</span>
<span class="token comment">;  Notably, if the socket file defined in the [unix_http_server] section below</span>
<span class="token comment">;  is deleted, supervisorctl will be unable to connect to supervisord.</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">unix_http_server</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">file</span><span class="token punctuation">=</span><span class="token value attr-value">/data/etc/supervisor/supervisor.sock ; the path to the socket file</span>
<span class="token comment">;chmod=0700                 ; socket file mode (default 0700)</span>
<span class="token comment">;chown=nobody:nogroup       ; socket file uid:gid owner</span>
<span class="token comment">;username=user              ; default is no username (open server)</span>
<span class="token comment">;password=123               ; default is no password (open server)</span>

<span class="token comment">; Security Warning:</span>
<span class="token comment">;  The inet HTTP server is not enabled by default.  The inet HTTP server is</span>

<span class="token comment">;[inet_http_server]         ; inet (TCP) server disabled by default</span>
<span class="token comment">;port=127.0.0.1:9001        ; ip_address:port specifier, *:port for all iface</span>
<span class="token comment">;username=user              ; default is no username (open server)</span>
<span class="token comment">;password=123               ; default is no password (open server)</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">supervisord</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/data/logs/supervisor/supervisord.log ; main log file; default $CWD/supervisord.log</span>
<span class="token key attr-name">logfile_maxbytes</span><span class="token punctuation">=</span><span class="token value attr-value">50MB        ; max main logfile bytes b4 rotation; default 50MB</span>
<span class="token key attr-name">logfile_backups</span><span class="token punctuation">=</span><span class="token value attr-value">10           ; # of main logfile backups; 0 means none, default 10</span>
<span class="token key attr-name">loglevel</span><span class="token punctuation">=</span><span class="token value attr-value">info                ; log level; default info; others: debug,warn,trace</span>
<span class="token key attr-name">pidfile</span><span class="token punctuation">=</span><span class="token value attr-value">/data/etc/supervisor/supervisord.pid ; supervisord pidfile; default supervisord.pid</span>
<span class="token key attr-name">nodaemon</span><span class="token punctuation">=</span><span class="token value attr-value">false               ; start in foreground if true; default false</span>
<span class="token key attr-name">silent</span><span class="token punctuation">=</span><span class="token value attr-value">false                 ; no logs to stdout if true; default false</span>
<span class="token key attr-name">minfds</span><span class="token punctuation">=</span><span class="token value attr-value">1024                  ; min. avail startup file descriptors; default 1024</span>
<span class="token key attr-name">minprocs</span><span class="token punctuation">=</span><span class="token value attr-value">200                 ; min. avail process descriptors;default 200</span>
<span class="token comment">;umask=022                   ; process file creation umask; default 022</span>
<span class="token comment">;user=supervisord            ; setuid to this UNIX account at startup; recommended if root</span>
<span class="token comment">;identifier=supervisor       ; supervisord identifier, default is &#39;supervisor&#39;</span>
<span class="token comment">;directory=/tmp              ; default is not to cd during start</span>
<span class="token comment">;nocleanup=true              ; don&#39;t clean up tempfiles at start; default false</span>
<span class="token comment">;childlogdir=/tmp            ; &#39;AUTO&#39; child log dir, default $TEMP</span>
<span class="token comment">;environment=KEY=&quot;value&quot;     ; key value pairs to add to environment</span>
<span class="token comment">;strip_ansi=false            ; strip ansi escape codes in logs; def. false</span>

<span class="token comment">; The rpcinterface:supervisor section must remain in the config file for</span>
<span class="token comment">; RPC (supervisorctl/web interface) to work.  Additional interfaces may be</span>
<span class="token comment">; added by defining them in separate [rpcinterface:x] sections.</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">rpcinterface:supervisor</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">supervisor.rpcinterface_factory</span> <span class="token punctuation">=</span> <span class="token value attr-value">supervisor.rpcinterface:make_main_rpcinterface</span>

<span class="token comment">; The supervisorctl section configures how supervisorctl will connect to</span>
<span class="token comment">; supervisord.  configure it match the settings in either the unix_http_server</span>
<span class="token comment">; or inet_http_server section.</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">supervisorctl</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">serverurl</span><span class="token punctuation">=</span><span class="token value attr-value">unix:///data/etc/supervisor/supervisor.sock ; use a unix:// URL  for a unix socket</span>
<span class="token comment">;serverurl=http://127.0.0.1:9001 ; use an http:// url to specify an inet socket</span>
<span class="token comment">;username=chris              ; should be same as in [*_http_server] if set</span>
<span class="token comment">;password=123                ; should be same as in [*_http_server] if set</span>
<span class="token comment">;prompt=mysupervisor         ; cmd line prompt (default &quot;supervisor&quot;)</span>
<span class="token comment">;history_file=~/.sc_history  ; use readline history if available</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">include</span><span class="token punctuation">]</span></span>
<span class="token comment">; add your conf in conf.d dir</span>
<span class="token key attr-name">files</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/etc/supervisor/conf.d/*.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>每次进入控制台</strong>时需指明配置文件<code>supervisorctl -c /data/etc/supervisor/supervisord.conf</code>。可通过<code>.zshrc</code>中设置别名方便启动</li></ul><div class="macos language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">superctl</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/bin/supervisorctl -c /data/etc/supervisor/supervisord.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><ul><li><p>9001连接拒绝<br> 在自定义存放目录时，如果启动控制台不指明配置文件，会出现<code>9001连接拒绝</code>。是由于修改了配置文件的pid，sock文件位置但启动ctl时未加载配置文件，而出现在默认目录下查找时查找不到进程。</p></li><li><p>Unlinking stale socket /path/to/supervisor.sock<br> 由于sock残留导致的启动异常，使用<code>cd /supervisor/sock/path/ &amp;&amp; unlink supervisord.sock</code></p></li></ul>`,22),l=[t];function o(c,r){return e(),n("div",null,l)}const d=s(i,[["render",o],["__file","004.html.vue"]]);export{d as default};
