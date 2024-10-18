import{_ as t,o as l,c as e,e as n}from"./app-4aa1cc97.js";const s={},i=n(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><h3 id="机密性问题" tabindex="-1"><a class="header-anchor" href="#机密性问题" aria-hidden="true">#</a> 机密性问题</h3><ul><li>对称加密： <ul><li>经典算法 DES，3DES，AES</li><li>分组模式</li><li>问题：中间人攻击：明文与密钥同时传送。中间人可取得密钥完成解密</li></ul></li><li>密钥配送：解决中间人攻击问题。如：事先共享密钥等</li><li>非对称加密：RSA。存在问题如下 <ul><li>中间人冒充通讯对象，替换公钥</li><li>运算慢</li></ul></li><li>对称+非对称混合：解决运算慢问题。对称加密明文，非对称加密密钥。实例：PGP、SSL/TLS。关键点如下 <ul><li>伪随机数生成器算法</li><li>对称密码分组模式</li><li>非对称密钥长度</li></ul></li></ul><h3 id="认证问题" tabindex="-1"><a class="header-anchor" href="#认证问题" aria-hidden="true">#</a> 认证问题</h3><ul><li>单项散列函数：用于防中间人篡改。别名：哈希、杂凑、摘要。输出消息，输出散列值 <ul><li>经典算法：MD5、SHA1、SHA-256、SHA3等</li><li>攻击：算法破解、暴力破解（撞库）、生日攻击（穷举，任意散列值一致概率）</li><li>问题：中间人伪装 - 无法判断消息是否来自正确的发送者</li></ul></li><li>消息认证码（MAC）：解决中间人伪装问题，防篡改，防伪装 <ul><li>实现：带密钥的hash函数。分组密码，单向散列，流密码等都可实现</li><li>原理：密钥和原明文组合，计算hash值（mac值）。中间人不知道密钥值，伪装消息时无法计算正确的mac值，无法伪装。做到了<strong>双方认证</strong></li><li>应用：SWIFT、IPsec、SSL/TLS</li><li>攻击 <ul><li>重放攻击：中间人将截获的内容与mac保存，重复发送。解决：序号、时间戳、随机值nonce</li><li>密钥推测：对于非随机密钥。通过mac值逆向密钥值</li></ul></li><li>问题 <ul><li>共享密钥不可泄漏（非对称加密或Diffie-Hllman）</li><li>第三方证明：需要防止否认。明确消息发送方，消息即可能为A发送，也可能为B发送。</li></ul></li></ul></li><li>数字签名：防篡改，防伪装、防否认。单向散列函数+非对称加密的反向使用 <ul><li>原理：没有私钥无法生成该私钥所生成的密文。持有密钥才能生成消息</li><li>过程 <ul><li>A持有私钥，B持有公钥</li><li>B向A发送消息，直接使用公钥加密后发送。私钥方通过私钥解密得到明文</li><li>A发送消息时，A用私钥对明文hash值进行加密得到密文（即签名），将明文与签名都发送给B公钥方</li><li>B用公钥对签名进行解密的到hash值，与明文的hash进行对比。确保数据源正常</li></ul></li><li>应用：SSL/TLS</li><li>经典算法 ：RSA、DSA、Rabin</li><li>攻击： <ul><li>单向散列函数是否抗碰撞</li><li>数字签名攻击公钥密码（不对意思不清楚的消息进行签名）</li></ul></li><li>问题 <ul><li>中间人攻击：无法确认公钥来自正确的通信对象。C想伪装成A。将B手中的公钥替换为C生成的公钥，C便可伪装成A进行通信（或者C持有A的私钥，也可伪装）</li><li>签名被盗用</li></ul></li></ul></li><li>公钥证书：第三方认证机构给公钥加数字签名，降低遭遇中间人攻击的风险（认证公钥来防止公钥被替换）。 <ul><li>原理：通过CA的公钥，得到A的公钥。再使用公钥对签名解密得到hash值，与正文hash值对比</li></ul></li><li>公钥基础设施PKI：证书颁发管理 <ul><li>认证机构CA：证书管理人，对注册人的公钥加上数字签名</li><li>证书层级：可通过证书验证另一个证书公钥，实现递归</li><li>攻击 <ul><li>公钥注册证书前替换公钥</li><li>相似注册人名攻击</li><li>认证机构的私钥泄漏 发布CRL</li><li>伪装成认证机构</li><li>CRL发布时差漏洞</li></ul></li></ul></li></ul><h2 id="编码流程中的单位问题" tabindex="-1"><a class="header-anchor" href="#编码流程中的单位问题" aria-hidden="true">#</a> 编码流程中的单位问题</h2><ul><li>位（Bit）：1个二进制</li><li>字节（Byte）：8位二进制</li><li>字（word）：在32位系统中，一个字4字节，共32位二进制；64位系统中，一个字8字节，共64位二进制</li></ul><h2 id="电子邮件传输算法-base64编码" tabindex="-1"><a class="header-anchor" href="#电子邮件传输算法-base64编码" aria-hidden="true">#</a> 电子邮件传输算法 - Base64编码</h2><p>为了解决早期电子邮件传输非ascii码字符时，经过有历史问题的网关（对非ascii码的8位二进制最高位置0）时出现的问题。</p><p>经过Base64编码后的数据比原始数据略长，为原来的4/3倍。base64编码字符串的字符数是4的整数倍，结尾的等号用于补位</p><ul><li><p>base64编码表：包含字符&quot;A-Za-z0-9+/&quot;</p><table><thead><tr><th style="text-align:left;">码值</th><th style="text-align:left;">字符</th><th style="text-align:left;">码值</th><th style="text-align:left;">字符</th><th style="text-align:left;">码值</th><th style="text-align:left;">字符</th><th style="text-align:left;">码值</th><th style="text-align:left;">字符</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">A</td><td style="text-align:left;">16</td><td style="text-align:left;">Q</td><td style="text-align:left;">32</td><td style="text-align:left;">g</td><td style="text-align:left;">48</td><td style="text-align:left;">w</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">B</td><td style="text-align:left;">17</td><td style="text-align:left;">R</td><td style="text-align:left;">33</td><td style="text-align:left;">h</td><td style="text-align:left;">49</td><td style="text-align:left;">x</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">C</td><td style="text-align:left;">18</td><td style="text-align:left;">S</td><td style="text-align:left;">34</td><td style="text-align:left;">i</td><td style="text-align:left;">50</td><td style="text-align:left;">y</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">D</td><td style="text-align:left;">19</td><td style="text-align:left;">T</td><td style="text-align:left;">35</td><td style="text-align:left;">j</td><td style="text-align:left;">51</td><td style="text-align:left;">z</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">E</td><td style="text-align:left;">20</td><td style="text-align:left;">U</td><td style="text-align:left;">36</td><td style="text-align:left;">k</td><td style="text-align:left;">52</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">F</td><td style="text-align:left;">21</td><td style="text-align:left;">V</td><td style="text-align:left;">37</td><td style="text-align:left;">l</td><td style="text-align:left;">53</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">G</td><td style="text-align:left;">22</td><td style="text-align:left;">W</td><td style="text-align:left;">38</td><td style="text-align:left;">m</td><td style="text-align:left;">54</td><td style="text-align:left;">2</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">H</td><td style="text-align:left;">23</td><td style="text-align:left;">X</td><td style="text-align:left;">39</td><td style="text-align:left;">n</td><td style="text-align:left;">55</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">I</td><td style="text-align:left;">24</td><td style="text-align:left;">Y</td><td style="text-align:left;">40</td><td style="text-align:left;">o</td><td style="text-align:left;">56</td><td style="text-align:left;">4</td></tr><tr><td style="text-align:left;">9</td><td style="text-align:left;">J</td><td style="text-align:left;">25</td><td style="text-align:left;">Z</td><td style="text-align:left;">41</td><td style="text-align:left;">p</td><td style="text-align:left;">57</td><td style="text-align:left;">5</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;">K</td><td style="text-align:left;">26</td><td style="text-align:left;">a</td><td style="text-align:left;">42</td><td style="text-align:left;">q</td><td style="text-align:left;">58</td><td style="text-align:left;">6</td></tr><tr><td style="text-align:left;">11</td><td style="text-align:left;">L</td><td style="text-align:left;">27</td><td style="text-align:left;">b</td><td style="text-align:left;">43</td><td style="text-align:left;">r</td><td style="text-align:left;">59</td><td style="text-align:left;">7</td></tr><tr><td style="text-align:left;">12</td><td style="text-align:left;">M</td><td style="text-align:left;">28</td><td style="text-align:left;">c</td><td style="text-align:left;">44</td><td style="text-align:left;">s</td><td style="text-align:left;">60</td><td style="text-align:left;">8</td></tr><tr><td style="text-align:left;">13</td><td style="text-align:left;">N</td><td style="text-align:left;">29</td><td style="text-align:left;">d</td><td style="text-align:left;">45</td><td style="text-align:left;">t</td><td style="text-align:left;">61</td><td style="text-align:left;">9</td></tr><tr><td style="text-align:left;">14</td><td style="text-align:left;">O</td><td style="text-align:left;">30</td><td style="text-align:left;">e</td><td style="text-align:left;">46</td><td style="text-align:left;">u</td><td style="text-align:left;">62</td><td style="text-align:left;">+</td></tr><tr><td style="text-align:left;">15</td><td style="text-align:left;">P</td><td style="text-align:left;">31</td><td style="text-align:left;">f</td><td style="text-align:left;">47</td><td style="text-align:left;">v</td><td style="text-align:left;">63</td><td style="text-align:left;">/</td></tr></tbody></table></li><li><p>编码原理</p><ul><li>流程 <ul><li>目标字符串以字符为单位转换成字符编码（ascii码）</li><li>将字符编码转换为二进制码</li><li>对二进制码进行分组转换，即每3个8位二进制码一组，转换为每4个8位二进制码为一组（不足6为低位补0）。注意方向从左往右</li><li>对每组中的6位二进制码高位补0，变为每组4个8位进制码</li><li>将变换后的二进制码换为10进制码</li><li>将10进制码对照码表得到结果字符串</li></ul></li><li>例子：目标字符串 <code>A</code><ul><li><code>A</code> 的ascii码为<code>65</code></li><li>ascii码的二进制码<code>01000001</code></li><li>从左往右每6位切分得到4-6二进制码<code>010000 010000</code></li><li>补0得到4-8二进制码<code>00010000 00010000</code></li><li>转换为10进制<code>16 16</code></li><li>对照码表，并补成4的倍数 <code>QQ==</code></li></ul></li></ul></li><li><p>代码</p><ul><li><p>Java API</p><div class="macos language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>bcel<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>generic<span class="token punctuation">.</span></span><span class="token class-name">NEW</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> testbase64 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;1101&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;MTEwMQ==&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
- C实现，参考[https://blog.csdn.net/qq_26093511/article/details/78836087](https://blog.csdn.net/qq_26093511/article/details/78836087)

    \`\`\`c
    /*base64.c*/  
    #include &quot;base64.h&quot;  
  
    unsigned char *base64_encode(unsigned char *str)  
    {  
        long len;  
        long str_len;  
        unsigned char *res;  
        int i,j;  
        //定义base64编码表  
        unsigned char *base64_table = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;;  
  
        //计算经过base64编码后的字符串长度  
        str_len = strlen(str);  
        if(str_len % 3 == 0)  
            len = str_len/3*4;  
        else  
            len = (str_len/3+1)*4;  
  
        res = malloc(sizeof(unsigned char)*len+1);  
        res[len] = &#39;\\0&#39;;  
  
        //以3个8位字符为一组进行编码  
        for(i = 0, j = 0; i &lt; len-2; j+=3,i+=4) {
            res[i] = base64_table[str[j]&gt;&gt;2]; //取出第一个字符的前6位并找出对应的结果字符  
            res[i+1] = base64_table[(str[j]&amp;0x3)&lt;&lt;4 | (str[j+1]&gt;&gt;4)]; //将第一个字符的后位与第二个字符的前4位进行组合并找到对应的结果字符  
            res[i+2] = base64_table[(str[j+1]&amp;0xf)&lt;&lt;2 | (str[j+2]&gt;&gt;6)]; //将第二个字符的后4位与第三个字符的前2位组合并找出对应的结果字符  
            res[i+3] = base64_table[str[j+2]&amp;0x3f]; //取出第三个字符的后6位并找出结果字符  
        }  
  
        switch(str_len % 3) {  
        case 1:  
            res[i-2] = &#39;=&#39;;  
            res[i-1] = &#39;=&#39;;  
            break;  
        case 2:  
            res[i-1] = &#39;=&#39;;  
            break;  
        }  
  
        return res;  
    }  
  
    unsigned char *base64_decode(unsigned char *code)  
    {  
        //根据base64表，以字符找到对应的十进制数据  
        int table[]={
            0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,62,0,0,0,
            63,52,53,54,55,56,57,58,
            59,60,61,0,0,0,0,0,0,0,0,
            1,2,3,4,5,6,7,8,9,10,11,12,
            13,14,15,16,17,18,19,20,21,
            22,23,24,25,0,0,0,0,0,0,26,
            27,28,29,30,31,32,33,34,35,
            36,37,38,39,40,41,42,43,44,
            45,46,47,48,49,50,51
        };  
        long len;  
        long str_len;  
        unsigned char *res;  
        int i,j;  
  
        //计算解码后的字符串长度  
        len = strlen(code);  
        //判断编码后的字符串后是否有=  
        if(strstr(code,&quot;==&quot;))  
            str_len = len/4*3-2;  
        else if(strstr(code,&quot;=&quot;))  
            str_len = len/4*3-1;  
        else  
            str_len = len/4*3;  
  
        res = malloc(sizeof(unsigned char)*str_len+1);  
        res[str_len] = &#39;\\0&#39;;  
  
        //以4个字符为一位进行解码  
        for(i=0,j=0;i &lt; len-2;j+=3,i+=4) {  
            res[j]=((unsigned char)table[code[i]])&lt;&lt;2 | (((unsigned char)table[code[i+1]])&gt;&gt;4); //取出第一个字符对应base64表的十进制数的前6位与第二个字符对应base64表的十进制数的后2位进行组合  
            res[j+1]=(((unsigned char)table[code[i+1]])&lt;&lt;4) | (((unsigned char)table[code[i+2]])&gt;&gt;2); //取出第二个字符对应base64表的十进制数的后4位与第三个字符对应bas464表的十进制数的后4位进行组合  
            res[j+2]=(((unsigned char)table[code[i+2]])&lt;&lt;6) | ((unsigned char)table[code[i+3]]); //取出第三个字符对应base64表的十进制数的后2位与第4个字符进行组合  
        }  
  
        return res;  
  
    }  
    \`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,11),a=[i];function d(c,u){return l(),e("div",null,a)}const v=t(s,[["render",d],["__file","013.html.vue"]]);export{v as default};
