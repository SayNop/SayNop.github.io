import{_ as p,r as e,o as t,c as o,a as n,b as s,d as c,e as i}from"./app-f1e6e653.js";const l={},u={href:"https://www.bilibili.com/video/BV1dD4y127bD",target:"_blank",rel:"noopener noreferrer"},d=i(`<h2 id="asyncio的基础是协程" tabindex="-1"><a class="header-anchor" href="#asyncio的基础是协程" aria-hidden="true">#</a> asyncio的基础是协程</h2><p>使用Asyncio编程是基于协程的异步开发</p><ul><li>操作系统的调度单元是进程与线程，而协程是人为创造的</li><li>用户态上下午切换技术</li><li>保存当前的执行环境</li></ul><p>协程实现方法</p><ul><li><p>协程库，如greenlet</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> greenlet <span class="token keyword">import</span> greenlet

<span class="token keyword">def</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    gr2<span class="token punctuation">.</span>switch<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 2. 执行gr2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    gr2<span class="token punctuation">.</span>switch<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 4. 执行gr2</span>

<span class="token keyword">def</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    gr1<span class="token punctuation">.</span>switch<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 3. 执行gr1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>

  
gr1 <span class="token operator">=</span> greenlet<span class="token punctuation">(</span>func1<span class="token punctuation">)</span>
gr2 <span class="token operator">=</span> greenlet<span class="token punctuation">(</span>func2<span class="token punctuation">)</span>

gr1<span class="token punctuation">.</span>switch<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 1. 执行gr1</span>
<span class="token comment"># output: 1 3 2 4 - 可巧用该方式实现复杂逻辑下的goto效果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>yield - 生产中不常用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span> <span class="token number">1</span>
    <span class="token keyword">yield</span> <span class="token keyword">from</span> func2<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> <span class="token number">2</span>

<span class="token keyword">def</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span> <span class="token number">3</span>
    <span class="token keyword">yield</span> <span class="token number">4</span>

f1 <span class="token operator">=</span> func1<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> f1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token comment"># output: 1 3 4 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>asyncio装饰器 <em>py3.4</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token decorator annotation punctuation">@asyncio<span class="token punctuation">.</span>coroutine</span>  <span class="token comment"># 协程函数</span>
<span class="token keyword">def</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> <span class="token keyword">from</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># IO耗时操作，让进程处理其他任务防止阻塞</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@asyncio<span class="token punctuation">.</span>coroutine</span>
<span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> <span class="token keyword">from</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token comment"># 协程函数的运行</span>
<span class="token comment"># loop = asyncio.get_event_loop()</span>
<span class="token comment"># loop.run_until_complete( func1() )</span>

tasks <span class="token operator">=</span> <span class="token punctuation">[</span>
    asyncio<span class="token punctuation">.</span>ensure_future<span class="token punctuation">(</span> func1<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    asyncio<span class="token punctuation">.</span>ensure_future<span class="token punctuation">(</span> func2<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token punctuation">]</span>

loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>tasks<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 按照随机顺序执行任务列表中的任务</span>
<span class="token comment"># 若先fun1，output 1 3 2 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：当执行到<code>yield from</code>后面有<code>asyncio</code>修饰的内容时，可以切换到其他协程函数。遇到阻塞部分自动切换。如上例中，若一个操作需要2秒，则使用装饰器可并发，从而节省2秒</p></li><li><p>async 、 await 关键字 <em>py3.5</em> - 装饰器的简化写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 协程函数</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 遇到await自动切换</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>

tasks <span class="token operator">=</span> <span class="token punctuation">[</span>
    asyncio<span class="token punctuation">.</span>ensure_future<span class="token punctuation">(</span> func1<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    asyncio<span class="token punctuation">.</span>ensure_future<span class="token punctuation">(</span> func2<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token punctuation">]</span>

loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>tasks<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="协程的意义" tabindex="-1"><a class="header-anchor" href="#协程的意义" aria-hidden="true">#</a> 协程的意义</h2><p>统筹规划</p><ul><li><p>普通方式下载</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

<span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    file_name <span class="token operator">=</span> url<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_name<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    url_list <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;http://****&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;http://****&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;http://****&#39;</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> url_list<span class="token punctuation">:</span>
        download<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>异步方式下载</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> aiohttp


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span>session<span class="token punctuation">,</span> url<span class="token punctuation">)</span>：
    <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> verify_ssl<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token keyword">as</span> resp<span class="token punctuation">:</span>
        content <span class="token operator">=</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span>content<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># await修饰的请求是并发发出的</span>
        file_name <span class="token operator">=</span> url<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_name<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiohttp<span class="token punctuation">.</span>clientSession<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>
        url_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;http://****&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;http://****&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;http://****&#39;</span>
        <span class="token punctuation">]</span>
        tasks <span class="token operator">=</span> <span class="token punctuation">[</span>asyncio<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>download<span class="token punctuation">(</span>session<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> url <span class="token keyword">in</span> url_list<span class="token punctuation">]</span>
        <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>tasks<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="语法详解" tabindex="-1"><a class="header-anchor" href="#语法详解" aria-hidden="true">#</a> 语法详解</h2><h3 id="asynio内的事件循环" tabindex="-1"><a class="header-anchor" href="#asynio内的事件循环" aria-hidden="true">#</a> asynio内的事件循环</h3><p>以下伪代码仅用于理解事件循环内部的运行逻辑</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>任务列表 = [任务1, 任务2, 任务3...]
# 列表中的任务有多种状态，未执行、正在执行、已执行等等

while True：
	可执行的任务列表，已完成的任务列表 = 去任务列表中检查所有任务，返回状态为可执行，已完成的任务
	
	for 就绪任务 in 已准备就绪的任务列表:
		执行已就绪的任务
	
	for 已完成的任务 in 已完成的任务列表:
		在任务列表中移除已完成的任务

	如果 任务列表中的任务都完成
		break
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件循环的代码表现</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token comment"># 获取事件循环</span>
loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 构造任务列表</span>
loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>任务<span class="token punctuation">)</span>


<span class="token comment"># 以上两行的等效简化写法 - py3.7</span>
asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步编程的流程" tabindex="-1"><a class="header-anchor" href="#异步编程的流程" aria-hidden="true">#</a> 异步编程的流程</h3><p>协程函数：定义函数时使用<code>async def 函数名</code></p><p>协程对象：执行协程函数时会得到的对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义协程函数</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 获取协程对象 - 获取协程对象（简单执行协程）时，函数内部代码不会执行</span>
result <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要运行协程函数内部代码，需与事件循环相配合，让事件循环执行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token comment"># 采用以上两行 或 下面一行</span>
asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="await关键字" tabindex="-1"><a class="header-anchor" href="#await关键字" aria-hidden="true">#</a> await关键字</h3><p>await后接可等待对象。共三种类型：协程对象，future对象，task对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># io阻塞 - 此时如果有其他任务，会切换执行其他任务</span>
    <span class="token comment"># 下面的print会等待结果后再执行</span>
    res <span class="token operator">=</span> <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;end </span><span class="token interpolation"><span class="token punctuation">{</span>res<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>协程对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
    res <span class="token operator">=</span> <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;end&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;run&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 此处await后跟协程对象</span>
    <span class="token comment"># 若有其他任务会执行其他任务，此处只执行run函数，因此无其他任务</span>
    <span class="token comment"># 会等待结果后再往下执行</span>
    res <span class="token operator">=</span> <span class="token keyword">await</span> parse<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;finish, parse res is </span><span class="token interpolation"><span class="token punctuation">{</span>res<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong> await关键字后的代码需等待结果返回后才会往下执行，若是多个任务并发会自动切换其他任务。</p><p>若下一步需要上一步的执行结果，需用await修饰</p><h3 id="task对象" tabindex="-1"><a class="header-anchor" href="#task对象" aria-hidden="true">#</a> Task对象</h3><blockquote><p>Task 对象被用来在事件循环中运行协程。如果一个协程在等待一个 Future 对象，Task 对象会挂起该协程的执行并等待该 Future 对象完成。当该 Future 对象 <em>完成</em>，被打包的协程将恢复执行。（https://docs.python.org/zh-cn/3.7/library/asyncio-task.html#asyncio.Task）</p></blockquote><p>在事件循环中，添加多个任务</p><p>通过<code>asyncio.create_task(协程对象)</code>的方式创建Task对象(py3.7)</p><p>更低层的实现方式<code>loop.create_task()</code>或<code>ensure_future()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;run&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 创建task对象，创建即将任务添加到事件循环</span>
    task1 <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    task2 <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 此处任务已创建完毕</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;run end&#39;</span><span class="token punctuation">)</span>
    
    res1 <span class="token operator">=</span> <span class="token keyword">await</span> task1  <span class="token comment"># 执行至此时，先等待结果，发现内有io，切换到其他任务</span>
    res2 <span class="token operator">=</span> <span class="token keyword">await</span> task2
    <span class="token keyword">print</span><span class="token punctuation">(</span>res1<span class="token punctuation">,</span> res2<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 事件循环共3个任务，main + func*2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用任务列表方式。此时Task列表在协程函数内，执行创建任务前事件循环已创建。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;run&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment"># task1 = asyncio.create_task(func())</span>
    <span class="token comment"># task2 = asyncio.create_task(func())</span>
    <span class="token comment"># 使用任务列表</span>
    task_list <span class="token operator">=</span> <span class="token punctuation">[</span>
        asyncio<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        asyncio<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;22&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;run end&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment"># res1 = await task1</span>
    <span class="token comment"># res2 = await task2</span>
    <span class="token comment"># print(res1, res2)</span>
    
    <span class="token comment"># await后只能跟协程对象，task，future，不能跟列表。列表需要构造成目标对象</span>
    <span class="token comment"># 返回事件循环内的两个集合</span>
    <span class="token comment"># done中是任务结果的返回值集合</span>
    <span class="token comment"># 若传入timeout参数 asynio.wait(task_list, timeout=1) 则未完成的任务在pending中</span>
    done<span class="token punctuation">,</span> pending <span class="token operator">=</span> <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>task_list<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建任务不可出现在事件循环前，改用协程对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
以下写法
task_list = [
    asyncio.create_task(func(11), name=&#39;11&#39;),
    asyncio.create_task(func(22), name=&#39;22&#39;)
]

done, pending = asyncio.run(asyncio.wait(task_list))
print(done)
由于create_task会立即将Task加入循环，而此时循环还未创建，会报错
&quot;&quot;&quot;</span>

<span class="token comment"># 改为存放协程对象</span>
task_list <span class="token operator">=</span> <span class="token punctuation">[</span>
    func<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    func<span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token comment"># 生成事件循环后将协程对象构造成task对象</span>
done<span class="token punctuation">,</span> pending <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>task_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="asyncio模块-future对象" tabindex="-1"><a class="header-anchor" href="#asyncio模块-future对象" aria-hidden="true">#</a> asyncio模块 future对象</h3><p>Task类的父类。用于存放异步完成的结果（运行状态、返回值等），task对象内的结果来源自future。</p><p>通常不会使用future对象，以下代码仅用于表明特征</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取当前正在运行的事件循环</span>
    loop <span class="token operator">=</span> asynio<span class="token punctuation">.</span>get_running_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 创建一个future对象（任务）, 不进行操作</span>
    f <span class="token operator">=</span> loop<span class="token punctuation">.</span>create_future<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 等待结果 - 由于没有任何操作，没有结果，会一直等待</span>
    <span class="token keyword">await</span> f

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改运行结果让<code>await</code>等待到内容</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">set_after</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>set_result<span class="token punctuation">(</span><span class="token string">&#39;111&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    loop <span class="token operator">=</span> asynio<span class="token punctuation">.</span>get_running_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    f <span class="token operator">=</span> loop<span class="token punctuation">.</span>create_future<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 通过代码将future对象赋值</span>
    <span class="token keyword">await</span> loop<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>set_after<span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span>

    res <span class="token operator">=</span> <span class="token keyword">await</span> f
    <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concurrent模块-future对象" tabindex="-1"><a class="header-anchor" href="#concurrent模块-future对象" aria-hidden="true">#</a> concurrent模块 future对象</h3><p>与asyncio模块的future对象没有关系</p><p>使用线程池，进程池实现异步操作用到的对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> Future
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>thread <span class="token keyword">import</span> ThreadPoolExecutor
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>process <span class="token keyword">import</span> ProcessPoolExecutor

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
 
pool <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># pool = ProcessPoolExecutor(max_workers=5)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 一共5个线程但提交了10个任务</span>
    <span class="token comment"># 此处是线程异步产生的future对象</span>
    fut <span class="token operator">=</span> pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>fut<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交叉使用：采用asyncio异步编程时，某些三方模块不支持asyncio</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> concurrent<span class="token punctuation">.</span>futures

<span class="token comment"># 普通函数</span>
<span class="token keyword">def</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_running_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 该行代码内部有两个主要逻辑</span>
    <span class="token comment"># 此处为普通函数。默认创建线程池，以线程方式异步。得到线程future对象</span>
    <span class="token comment"># asyncio将线程future对象转化成asyncio协程的fut对象（通过asyncio.wrap_future）</span>
    fut <span class="token operator">=</span> loop<span class="token punctuation">.</span>run_in_executor<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">.</span> func1<span class="token punctuation">)</span>  <span class="token comment"># 此处传None将默认使用线程池</span>
    result <span class="token operator">=</span> <span class="token keyword">await</span> fut
    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;default thread pool&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    
    <span class="token comment"># 传统写法，上述代码的内部实现类似下方逻辑</span>
    <span class="token comment"># with concurrent.futures.ThreadPoolExecutor() as pool:</span>
    <span class="token comment">#   result = await loop.run_in_executor(pool, func1)</span>
    <span class="token comment">#   print(&#39;custom thread pool&#39;, result)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用进程的协程与进程交叉使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> concurrent<span class="token punctuation">.</span>futures

<span class="token comment"># 普通函数</span>
<span class="token keyword">def</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_running_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
	<span class="token keyword">with</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>ProcessPoolExecutor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token keyword">await</span> loop<span class="token punctuation">.</span>run_in_executor<span class="token punctuation">(</span>pool<span class="token punctuation">,</span> func1<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;custom process pool&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：asyncio + requests（不支持异步模块）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> requests


asyncio <span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;download start&#39;</span><span class="token punctuation">)</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 第二个参数为目标函数，后续参数为目标函数参数</span>
    future <span class="token operator">=</span> lool<span class="token punctuation">.</span>run_in_executor<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">,</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    
    resp <span class="token operator">=</span> <span class="token keyword">await</span> future
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;download end&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    url_list <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;http://****&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;http://****&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;http://****&#39;</span>
    <span class="token punctuation">]</span>
    tasks <span class="token operator">=</span> <span class="token punctuation">[</span>download<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token keyword">for</span> url <span class="token keyword">in</span> url_list<span class="token punctuation">]</span>
    <span class="token comment"># main函数中创建协程对象，且创建与启动相连。使用低层方式启动循环</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>tasks<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步迭代器" tabindex="-1"><a class="header-anchor" href="#异步迭代器" aria-hidden="true">#</a> 异步迭代器</h3><p>迭代器：在内部实现<code>__iter__()</code>和<code>__next__()</code></p><p>异步迭代器：实现了<code>__aiter__()</code>与<code>__anext__()</code></p><p>异步可迭代对象：<code>async for</code>中被使用的对象，<code>__aiter__()</code>方法返回<code>asynchronous iteratior</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">class</span> <span class="token class-name">Reader</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
  
    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">readline</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 该方法在下方的调用处有await修饰，需async声明</span>
        <span class="token comment"># await asyncio.sleep(1)</span>
        self<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">100</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>count
      
    <span class="token keyword">def</span> <span class="token function">__aiter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 有该方法表明该类为一个迭代器，该方法需返回一个可迭代对象</span>
        <span class="token keyword">return</span> self
  
    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">__anext__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        val <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 协程对象</span>
        <span class="token keyword">if</span> val <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 迭代器终止</span>
            <span class="token keyword">raise</span> StopAsyncIteration
        <span class="token keyword">return</span> val


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	obj <span class="token operator">=</span> Reader<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">async</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> obj<span class="token punctuation">:</span>  <span class="token comment"># async for 必须在协程函数内</span>
  	    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在声明某个对象时，若该对象操作存在io阻塞，可使用</p><h3 id="异步上下文管理器" tabindex="-1"><a class="header-anchor" href="#异步上下文管理器" aria-hidden="true">#</a> 异步上下文管理器</h3><p>上下文管理器：<code>with</code>，内有<code>__enter__()</code>与<code>__exit__()</code>方法</p><p>异步上下文管理器对象通过定义<code>__aenter__()</code>与<code>__aexit__()</code>，对<code>async with</code>中的环境进行控制</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AsyncContextManager</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>conn <span class="token operator">=</span> conn

    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">do_something</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 异步操作数据库</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>

    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">__aenter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 异步连接数据库</span>
        self<span class="token punctuation">.</span>conn <span class="token operator">=</span> <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">__aexit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_tyoe<span class="token punctuation">,</span> exc<span class="token punctuation">,</span> tb<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 异步关闭数据库连接</span>
        <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># 实例化这个上下文管理器 - async with 必须嵌套进异步函数内</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> AsyncContextManager<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> obj<span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token keyword">await</span> f<span class="token punctuation">.</span>do_something<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uvloop" tabindex="-1"><a class="header-anchor" href="#uvloop" aria-hidden="true">#</a> uvloop</h2><p>asyncio事件循环的替代方案。事件循环效率 大于 默认asyncio的事件循环。（提高性能使用）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> uvloop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>基本使用 - 只需在开始前声明循环方式为uvloop，其余与原先写法不变</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> uvloop
<span class="token comment"># 只需在原有基础上声明事件循环策略使用uvloop</span>
asynico<span class="token punctuation">.</span>set_event_loop_policy<span class="token punctuation">(</span>uvloop<span class="token punctuation">.</span>EventLoopPolicy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 原有代码</span>

<span class="token comment"># 原有运行方式</span>
asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：异步网络服务（django3、fastapi）asgi（wsgi的异步版本）内部使用了<code>uvicorn</code>，而<code>uvicorn</code>内使用了<code>uvloop</code></p><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h3><p>python代码连接/读写/断开redis都是用网络IO</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> aioredis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例1：只有redis操作任务，遇到io加上<code>await</code>关键字</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> ayncio
<span class="token keyword">import</span> aioredis

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start: &#39;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>
    <span class="token comment"># 网络IO操作: 连接</span>
    redis <span class="token operator">=</span> <span class="token keyword">await</span> aioredis<span class="token punctuation">.</span>create_redis<span class="token punctuation">(</span>address<span class="token punctuation">,</span> password<span class="token operator">=</span>password<span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操作: redis新增数据car:{key1: 1, key2: 2, key3: 3}</span>
    <span class="token keyword">await</span> redis<span class="token punctuation">.</span>hmset_dict<span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> key1<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> key2<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> key3<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操作: 去redis中获取值</span>
    result <span class="token operator">=</span> <span class="token keyword">await</span> redis<span class="token punctuation">.</span>hgetall<span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    
    redis<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 网络IO操作: 断开</span>
    <span class="token keyword">await</span> redis<span class="token punctuation">.</span>wait_closed<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;end:&#39;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span> execute<span class="token punctuation">(</span><span class="token string">&#39;redis://47.93.4.198:6379&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root12345&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例2：多个任务下</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> ayncio
<span class="token keyword">import</span> aioredis

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start: &#39;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>
    <span class="token comment"># 网络IO操作: 连接</span>
    redis <span class="token operator">=</span> <span class="token keyword">await</span> aioredis<span class="token punctuation">.</span>create_redis<span class="token punctuation">(</span>address<span class="token punctuation">,</span> password<span class="token operator">=</span>password<span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操作: redis新增数据car:{key1: 1, key2: 2, key3: 3}</span>
    <span class="token keyword">await</span> redis<span class="token punctuation">.</span>hmset_dict<span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> key1<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> key2<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> key3<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操作: 去redis中获取值</span>
    result <span class="token operator">=</span> <span class="token keyword">await</span> redis<span class="token punctuation">.</span>hgetall<span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    
    redis<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 网络IO操作: 断开</span>
    <span class="token keyword">await</span> redis<span class="token punctuation">.</span>wait_closed<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;end:&#39;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>


task_list <span class="token operator">=</span> <span class="token punctuation">[</span>
    execute<span class="token punctuation">(</span><span class="token string">&#39;redis://47.93.4.197:6379&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    execute<span class="token punctuation">(</span><span class="token string">&#39;redis://47.93.4.198:6379&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root12345&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
  
asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span> asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>task_list<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> aiomysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例1</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> aiomysql

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start: &#39;</span><span class="token punctuation">,</span> host<span class="token punctuation">)</span>
    <span class="token comment"># 网络IO操场：先连任务1的地址，遇到io自动连任务2的地址</span>
    conn <span class="token operator">=</span> <span class="token keyword">await</span> aoimysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span>host<span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span>password<span class="token punctuation">,</span> db<span class="token operator">=</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操场：遇到IO自动切换任务</span>
    cur <span class="token operator">=</span> <span class="token keyword">await</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操场：遇到IO自动切换任务</span>
    <span class="token keyword">await</span> cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;SELECT Host,User FROM user&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操场：遇到IO自动切换任务</span>
    result <span class="token operator">=</span> <span class="token keyword">await</span> cur<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操场：遇到IO自动切换任务</span>
    <span class="token keyword">await</span> cur<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start: &#39;</span><span class="token punctuation">,</span> host<span class="token punctuation">)</span>
  
task_list <span class="token operator">=</span> <span class="token punctuation">[</span>
    execute<span class="token punctuation">(</span><span class="token string">&#39;47.93.41.197&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    execute<span class="token punctuation">(</span><span class="token string">&#39;47.93.40.197&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root12345&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span> asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>task_list<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web框架" tabindex="-1"><a class="header-anchor" href="#web框架" aria-hidden="true">#</a> web框架</h3><p>Fastapi为例，说明web框架中异步流程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> fastapi
pip3 <span class="token function">install</span> uvicorn  <span class="token comment"># fastapi运行 - asgi（wsgi的异步版本）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实例一：普通接口的写法与flask类似</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> uvicorn
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

app <span class="token operator">=</span> FaskAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 两个人同时访问该接口，排队执行 - 同步方式</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">}</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;_main_&#39;</span><span class="token punctuation">:</span>
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&#39;test:app&#39;</span><span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">5000</span><span class="token punctuation">,</span> log_level<span class="token operator">=</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例二：异步接口。遇到await关键字自动处理下一个请求</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> aioredis
<span class="token keyword">import</span> uvicorn
<span class="token keyword">from</span> aioredis <span class="token keyword">import</span> Redis
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 连接池</span>
REDIS_POOL <span class="token operator">=</span> aioredis<span class="token punctuation">.</span>ConnectionsPool<span class="token punctuation">(</span><span class="token string">&#39;redis://47.193.14.198:6379&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;root123&#39;</span><span class="token punctuation">,</span> minsize<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> maxsize<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&#39;/red&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;异步接口&quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 遇到io，切换到下一个请求</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    conn <span class="token operator">=</span> <span class="token keyword">await</span> REDIS_POOL<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    redis <span class="token operator">=</span> Redis<span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操作: redis新增数据car:{key1: 1, key2: 2, key3: 3}</span>
    <span class="token keyword">await</span> redis<span class="token punctuation">.</span>hmset_dict<span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> key1<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> key2<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> key3<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 网络IO操作: redis读取数据</span>
    result <span class="token operator">=</span> <span class="token keyword">await</span> redis<span class="token punctuation">.</span>hget<span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    
    <span class="token comment"># 连接归还</span>
    REDIS_POOL<span class="token punctuation">.</span>release<span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> result

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;_main_&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># python文件名test.py内的app对象运行</span>
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&#39;test:app&#39;</span><span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">5000</span><span class="token punctuation">,</span> log_level<span class="token operator">=</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="爬虫" tabindex="-1"><a class="header-anchor" href="#爬虫" aria-hidden="true">#</a> 爬虫</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> aiohttp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> aiohttp
<span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">fetch</span><span class="token punctuation">(</span>session<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;req url is &#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> verify_ssl<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token keyword">as</span> response<span class="token punctuation">:</span>
        text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;resp is &#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> text

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    url_list <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;https://1&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://2&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://3&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
    tasks <span class="token operator">=</span> <span class="token punctuation">[</span>asyncop<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>fetch<span class="token punctuation">(</span>session<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> url <span class="token keyword">in</span> url_list<span class="token punctuation">]</span>
    done<span class="token punctuation">,</span> pending <span class="token operator">=</span> <span class="token keyword">await</span> saynco<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>tasks<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span> main<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>运用更少的资源（协程而非线程或进程）实现并发</p><p>通过一个线程利用IO等待事件去做其他事情</p>`,95);function r(k,v){const a=e("ExternalLinkIcon");return t(),o("div",null,[n("p",null,[s("本文参考内容 "),n("a",u,[s("https://www.bilibili.com/video/BV1dD4y127bD"),c(a)])]),d])}const b=p(l,[["render",r],["__file","012.html.vue"]]);export{b as default};
