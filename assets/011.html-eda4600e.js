import{_ as s,r as a,o as r,c,a as e,b as i,d as n,e as d}from"./app-a3536e5f.js";const t={},o=d(`<h2 id="汇编常用指令" tabindex="-1"><a class="header-anchor" href="#汇编常用指令" aria-hidden="true">#</a> 汇编常用指令</h2><p>简单说明几个不同种类常见汇编指令。指令的详细介绍、参数说明与例子 见《常用ARM指令集及汇编》</p><h3 id="跳转指令" tabindex="-1"><a class="header-anchor" href="#跳转指令" aria-hidden="true">#</a> 跳转指令</h3><p>B (Branch)</p><ul><li><code>BL</code> 带链接的无条件跳转。即跳转前会保存当前的地址，跳转部分指令执行完成会回到该地址。链接的保存可见本文 <a href="#%E9%80%9A%E8%BF%87%E5%AF%84%E5%AD%98%E5%99%A8%E7%A1%AE%E5%AE%9A%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8"># 通过寄存器确定函数调用</a> 中寄存器列表R14的说明</li><li><code>BX</code> 带状态切换的无条件跳转。arm指令集下，CPSR中T标识位为0；thumb指令集下，T标识位为1。 <strong>观察每条指令间的地址差值</strong> 可判断当前为ARM指令（4字节） or thumb指令</li></ul><h3 id="存储器与寄存器交互指令" tabindex="-1"><a class="header-anchor" href="#存储器与寄存器交互指令" aria-hidden="true">#</a> 存储器与寄存器交互指令</h3><ul><li><p>LDR与STR</p><ul><li><code>LDR &lt;待加载寄存器&gt; &lt;数据地址&gt;</code>(Load from memory into a regisiter) 从存储器中加载数据到寄存器，赋值方向 <code>&lt;-</code>。eg：将<code>R9+0x4</code>指向的存储单元内的数据加载到R8中。其中<code>[]</code>意为取值，类似指针中的<code>*</code>。与立即数的操作 <strong>不会修改参数寄存器内的值</strong> 。该方法为基址寻址，常用于查表等操作。详见《常用ARM指令集及汇编》基址寻址章节</li></ul><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>; 将寄存器中的数据作为地址，找到指定位置的数据存储到R3寄存器中
LDR R3 [R0]
; IDA动态调试查看R0中数据为415E6F98，点击数值后方的箭头跳转到目标位置，发现如下数据
; 415E6F98 DCB 0xE8
; 415E6F99 DCB 0x63
; 415E6F9A DCB 0x5B
; 415E6F9B DCB 0x41
; ARM指令4字节数据写入R3，R3中数据为 0x415B63E8 (小端存储，低地址为低位) 

; 先与立即数进行计算后取值，不会修改R9内的值
LDR R8,[R9,#4]

; 将 sp寄存器的值 + (#0x10+var_4) 的值所指向地址内的数据值 赋值给LR寄存器 不会修改SP指针内的值
LDR LR, [SP,#0x10+var_4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>STR &lt;数据寄存器&gt; &lt;待存储地址&gt;</code> 将寄存器中数据存储到存储器，赋值方向<code>-&gt;</code>。 eg：将R8寄存器中的数据存储到R9+0x4指向的存储单元</li></ul><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>STR R8,[R9,#4]

; 将 R0寄存器的值 存储到 SP寄存器的值 + (#0x10+var_4) 的值作为地址所指向的单元格中
STR R0, [SP,#0x10+var_4]

; 将LR内的数据压栈（栈顶上移一格, 并将LR内的值写入上移的空间）
; \`!\` 在执行完出入栈后会相应修改SP指向
STR LR, [SP, #-4]!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>LDM与STM</p><ul><li><code>LDM</code> 将存储器数据依次加载到寄存器列表，赋值方向<code>-&gt;</code>。eg：将R0指向的存储单元数据依次加载到R1，R2，R3。此时第一个参数相当于指针取值，<code>R1=*R0</code>，<code>R2=*(R0+#1)</code>，<code>R3=*(R0+#2)</code></li></ul><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>LDM R0, {R1-R3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>STM</code> 将寄存器列表数据存储到指定存储器，赋值方向<code>&lt;-</code>。关于读取与存储的顺序，详见本文 <a href="#%E5%A0%86%E6%A0%88%E5%AF%BB%E5%9D%80"># 堆栈寻址</a></li></ul></li><li><p>PUSH与POP</p><ul><li><code>PUSH</code> 入栈</li><li><code>POP</code> 出栈</li></ul></li><li><p>SWP：将寄存器与存储器之间的数据进行交换。三个参数Rd，Rm，[Rn]，将R0指向空间的内容放入Rd，后将Rm的内容放入Rn指向的空间。eg：将寄存器与存储器之间的数据进行交换</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>SWP R1,R1 [R0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="数据传送指令" tabindex="-1"><a class="header-anchor" href="#数据传送指令" aria-hidden="true">#</a> 数据传送指令</h3><p><code>MOV</code> 将立即数货寄存器数据传送到目标寄存器，赋值方向<code>&lt;-</code>。eg1：R0赋值为8。eg2：R2先左移3位后放入R0，即R0 = R2 * 2^3 = R2 * 8（关于 <strong>移位</strong> 详见《常用ARM指令集及汇编》章节：寄存器偏移寻址）</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>MOV R0, #8
MOV R0, R2, LSL #3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据算术运算指令" tabindex="-1"><a class="header-anchor" href="#数据算术运算指令" aria-hidden="true">#</a> 数据算术运算指令</h3><p>三个参数Rd，Rm，Rn。其中Rd存放结果，Rm为操作数1，Rn为操作数2</p><ul><li>ADD</li><li>SUB</li><li>MUL</li><li>DIV</li></ul><h3 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h3><p>三个参数Rd，Rm，Rn。其中Rd存放结果，Rm为操作数1，Rn为操作数2</p><ul><li>AND</li><li>OR</li><li>EOR：异或。不同为1（真）</li></ul><h3 id="比较指令" tabindex="-1"><a class="header-anchor" href="#比较指令" aria-hidden="true">#</a> 比较指令</h3><p>CMP（compare）在CPRS寄存器中标志位存储比较结果，Z=0表示不相等</p><h3 id="伪指令" tabindex="-1"><a class="header-anchor" href="#伪指令" aria-hidden="true">#</a> 伪指令</h3><p>为了编程方便，编译器定义了伪指令。伪指令在编译时会被替换成合适的指令。arm中常用伪指令有<code>ADR</code>，<code>LDR</code>等。此处着重说明<code>LDR</code>指令。</p><h4 id="伪指令ldr-与-存储寄存器交互指令ldr-的不同" tabindex="-1"><a class="header-anchor" href="#伪指令ldr-与-存储寄存器交互指令ldr-的不同" aria-hidden="true">#</a> 伪指令LDR 与 存储寄存器交互指令LDR 的不同</h4><p>由于伪指令会被替换，存储器与寄存器交互指令<code>LDR</code>与伪指令<code>LDR</code>本质上是 <strong>不同</strong> 的指令。以下是详细说明：</p><ul><li>ARM指令集中的LDR是寻址指令。参数2常为指定地址的上的值（LDR Rd,[地址] -- 多伴随取值符<code>[]</code>）。例如：读取 <em>R0-0x12</em> 地址上的值，存储到R1</li></ul><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>LDR R1, [R0, #-0x12]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>伪指令LDR用户指定寄存器加载内容。参数2常为表达式（LDR reg,=立即数/表达式 -- 等号开头）。例如：</li></ul><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>LDR R0, =(#0x1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="通过伪指令加载指定数据" tabindex="-1"><a class="header-anchor" href="#通过伪指令加载指定数据" aria-hidden="true">#</a> 通过伪指令加载指定数据</h4>`,27),v={href:"https://bbs.kanxue.com/thread-268869.htm",target:"_blank",rel:"noopener noreferrer"},u=d(`<p><strong>例1</strong> ：以C++程序helloworld代码main函数为例说明如何通过 <strong>伪指令<code>LDR</code>引用字符串常量</strong>。</p><div class="macos language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>; 目标字符串存放位置
.rodata:000008E4 68 65 6C 6C 6F+aHelloWorld     DCB &quot;hello world&quot;,0     ; DATA XREF: main+A↑o
.rodata:000008E4 20 77 6F 72 6C+                                        ; .text:off_788↑o

; main函数中的代码片段 - 获取目标字符串起始地址
.text:00000760 09 4B                          LDR             R3, =(aHelloWorld - 0x766)
.text:00000762 7B 44                          ADD             R3, PC  ; &quot;hello world&quot;

; 函数结束后的内存偏移表
.text:00000788 7E 01 00 00    off_788         DCD aHelloWorld - 0x766 ; DATA XREF: main+8↑r
.text:00000788                                                        ; &quot;hello world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>说明：</p><ul><li><p>main函数中LDR的第二个参数为表达式（带等号），此LDR为伪指令 \`</p></li><li><p><code>LDR</code>与<code>ADD</code>两条指令组成引用字符串常量的过程(<code>LDR</code>读取偏移，<code>ADD</code>计算目标地址)。如果同时引用多个，<code>LDR</code>与<code>ADD</code>可能不会连续出现，通常为多条<code>LDR</code>后接多条对应的<code>ADD</code></p></li><li><p>伪指令的表达式是 <strong>内存偏移表</strong> 中的内容。 将对应内存偏移表中的机器码 <em>17E</em> 存储到R3</p></li><li><p>ADD执行完成后 <em>R3 = R3 + PC = 17E + 762 + 4= 8E4</em> ，即R3存放<code>.rodata</code>节区中字符串的起始地址</p></li><li><p>被减数为内存偏移表对应项地址，此时 adr加载对应项地址 + 对应项偏移量 = 目标地址</p></li></ul></li></ul><p><strong>内存偏移表</strong>：</p><ul><li><p>由于地址长度为4字节。在thumb指令集中指令长度为2字节，不可直接将<code>.bss</code>段或<code>.rodata</code>段中目标的偏移量放入指令中（目标偏移量过大会超过两字节大小）。arm32中引入内存偏移表存放偏移量，指令中通过内存偏移表与当前代码的偏移量读取对应项，并将存放的目标偏移量直接存入寄存器而无需写在指令中</p></li><li><p>内存偏移表 通常在一个函数的结尾处（<code>BLX LR</code>函数返回后。与pc偏移量可控，不会超过2字节）。其中 <em>被减数</em> 即为 <em>引用地址(便于自己理解的定义)</em> ，如上例中的位于 <em>762</em> 的<code>ADD R3 PC</code>，此时R3指向目标地址，PC为引用地址，所以被减数为当前地址值+PC固有两条指令偏移，即PC实际值为<code>762+4=766</code></p></li><li><p>LDR伪指令加载目标地址的方式：读取内存偏移表中的引用地址与目标地址偏移量 + 当前代码位置 = 目标地址</p></li><li><p>由于三级流水线的存在导致PC并不是调用行的地址，内存偏移表 <strong>涉及PC引用的项</strong> 会存在2条指令地址的偏移即 <strong>汇编代码内计算得到的地址需要额外再+2条指令的地址才是目标地址</strong> 。因此例1说明中的第三点需要+4。详见本文 <a href="#%E4%B8%89%E7%BA%A7%E6%B5%81%E6%B0%B4%E7%BA%BF"># 三级流水线</a> 中PC的说明</p></li></ul><p><strong>例2</strong> ：以C++程序helloworld代码_start函数为例说明如何通过 <strong>伪指令<code>LDR</code>和<code>ADR</code>载入全局偏移表（.got）</strong></p><div class="macos language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>; _start函数中的代码片段 - 获取全局偏移表起始地址
.text:00000658 DF F8 24 A0                    LDR.W           R10, =($_GLOBAL_OFFSET_TABLE_ - 0x680)
.text:0000065C 08 A3                          ADR             R3, off_680
.text:0000065E 9A 44                          ADD             R10, R3 ; $_GLOBAL_OFFSET_TABLE_

; 函数结束后的内存偏移表
.text:00000680 80 09 01 00    off_680         DCD $_GLOBAL_OFFSET_TABLE_ - 0x680
.text:00000680                                                        ; DATA XREF: _start+10↑r
.text:00000680                                                        ; _start+14↑o

; 全局偏移表起始位置 - 目标地址
.got:00011000 00 0F 01 00    $_GLOBAL_OFFSET_TABLE_ DCD stru_10F00   ; DATA XREF: .plt:000005D8↑o
.got:00011000                                                        ; .plt:off_5E4↑o ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m=e("li",null,[i("R10 加载内存偏移表中的机器码（偏移量） "),e("em",null,"10980")],-1),b=e("em",null,"off_680",-1),R=e("em",null,"680",-1),D=e("strong",null,"此处不涉及PC寄存器，因此最后不需要额外+4，详见参数文章链接",-1),h={href:"https://bbs.kanxue.com/thread-268869.htm",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,[i("ADD执行完成后 "),e("em",null,"R10 = 10980 + 680 = 11000"),i(" ，即R10存放全局偏移表的起始地址")],-1),C=d(`<p><strong>补充</strong>：如何修改需要读取的字符串，请查看后续文章中的内容</p><p><strong>例3</strong>：以C++程序helloworld代码deregister_tm_clones函数为例说明如何通过 <strong>伪指令<code>LDR</code>载入全局偏移表（.got）内的数据</strong></p><div class="macos language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>.text:000006B4 deregister_tm_clones                    ; CODE XREF: __do_global_dtors_aux:loc_732↓p
.text:000006B4                 LDR             R0, =(__bss_start - 0x6BE)
.text:000006B6                 LDR             R3, =(__bss_start - 0x6C0)
.text:000006B8                 LDR             R2, =($_GLOBAL_OFFSET_TABLE_ - 0x6C2)
.text:000006BA                 ADD             R0, PC  ; __bss_start
.text:000006BC                 ADD             R3, PC  ; __bss_start
;                              通过ldr与add，此时R2为全局偏移表基地址
.text:000006BE                 ADD             R2, PC  ; $_GLOBAL_OFFSET_TABLE_
.text:000006C0                 CMP             R3, R0
.text:000006C2                 BEQ             locret_6CC
;                              r3存放目标与内存偏移表基地址偏移量
.text:000006C4                 LDR             R3, =(_ITM_deregisterTMCloneTable_ptr - 0x11000)
;                              通过基地址+偏移量 使 r3指向目标
.text:000006C6                 LDR             R3, [R2,R3] ; _ITM_deregisterTMCloneTable
.text:000006C8                 CBZ             R3, locret_6CC
.text:000006CA                 BX              R3      ; _ITM_deregisterTMCloneTable
.text:000006CC ; ---------------------------------------------------------------------------
.text:000006CC
.text:000006CC locret_6CC                              ; CODE XREF: deregister_tm_clones+E↑j
.text:000006CC                                         ; deregister_tm_clones+14↑j
.text:000006CC                 BX              LR
.text:000006CC ; End of function deregister_tm_clones
.text:000006CC
.text:000006CC ; ---------------------------------------------------------------------------
.text:000006CE                 ALIGN 0x10
.text:000006D0 off_6D0         DCD __bss_start - 0x6BE ; DATA XREF: deregister_tm_clones↑r
.text:000006D4 off_6D4         DCD __bss_start - 0x6C0 ; DATA XREF: deregister_tm_clones+2↑r
.text:000006D8 off_6D8         DCD $_GLOBAL_OFFSET_TABLE_ - 0x6C2
.text:000006D8                                         ; DATA XREF: deregister_tm_clones+4↑r
;                              目标在全局偏移表内的偏移量 - 全局偏移表基地址为0x11000
.text:000006DC off_6DC         DCD _ITM_deregisterTMCloneTable_ptr - 0x11000
.text:000006DC                                         ; DATA XREF: deregister_tm_clones+10↑r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="堆栈寻址" tabindex="-1"><a class="header-anchor" href="#堆栈寻址" aria-hidden="true">#</a> 堆栈寻址</h3><p>堆栈的工作方式按照不同方式分类有多种</p><ul><li><p>根据栈顶指针指向分为</p><ul><li><p>满栈（Full Stask）：指向栈顶元素</p></li><li><p>空栈（Empty Stack）：指向栈顶的下一个空位（栈顶元素上方，新入栈数据将存放的空间）</p></li></ul></li><li><p>根据堆栈数据存放的地址方向分为</p><ul><li><p>递增堆栈（Ascending Stack）：由低地址向高地址生成</p></li><li><p>递减堆栈（Decending Stack）：由高地址向低地址生成</p></li></ul></li></ul><p>处理器在设计时便定好了采用哪种堆栈方式，用户不可更改。例如：ARM堆栈的工作方式为 <strong>满递减堆栈(FD - full decending)</strong> ，即按照视觉顺序，栈顶位于低地址，且栈顶指针 <code>SP</code> 指向栈顶元素。</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>; 数据入栈，最后入栈的数据为r0，即执行完成后栈顶为r0（降序入栈，第一个最后入）！
STMFD SP! {r0,r1,r3-r5}
; 数据出栈，第一个出栈数据赋值给r0（降序出栈，第一个出栈存入第一个寄存器）
LDMFD SP! {r0,r1,r3-r5}

; \`!\` 在执行完出入栈后会相应修改SP指向
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数在调用时会产生一系列变量，此时需要在栈中创建存储空间进行存储。因此<code>STMFD</code>与<code>LDMFD</code>常常成对出现</p><p><code>STMFD</code>将寄存器列表内的值入栈，保证第一项在栈顶。<code>LDMFD</code>将栈内的数据放回寄存器列表，按寄存器列表顺序取值。存放数据与读取数据顺序可理解为井中放绳，即排在最后的先进后出。<code>SP!</code> 会自动进行sp指针值变化的计算，不需手动对SP值进行加或减</p><h3 id="指令转换" tabindex="-1"><a class="header-anchor" href="#指令转换" aria-hidden="true">#</a> 指令转换</h3><p>通过将操作数转换格式以实现伪指令的转化，如通过快捷键<code>d</code>将偏移量转化成基本数据，或将字符串转换成字符数据</p><p>以下为IDA中一段代码实例。注意 STM 存放数据顺序与 ADR/LDR伪代码</p><div class="macos language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>;             内存偏移表        字符串地址001468EA
LOAD:00145C4C off_145C4C      DCD aCk1234567+0xA - 0x145C4C

;                             将lr, r2, r1, r0 依次压入栈 保证 r0 为栈顶
LOAD:00145C5C                 STMFD           SP!, {R0-R2,LR}
;                             r1 为内存偏移表对应项的地址，adr内部已做偏移处理
LOAD:00145C60                 ADR             R1, off_145C4C
;                             LDR伪指令 通过内存偏移表加载字符串
LOAD:00145C64                 LDR             R0, =(aCk1234567+0xA - 0x145C4C)
;                             内存偏移表做加法，r0指向目标
LOAD:00145C68                 ADD             R0, R0, R1 ; &quot;&quot;
LOAD:00145C6C                 LDR             R2, =off_145C4C
LOAD:00145C70                 SUB             R1, R1, R2
LOAD:00145C74                 STMFD           SP!, {R1}
LOAD:00145C78                 LDR             R2, =dword_4B4BC
LOAD:00145C7C                 ADD             R1, R1, R2
LOAD:00145C80                 STMFD           SP!, {R1}
LOAD:00145C84                 BL              sub_146568
LOAD:00145C88                 MOV             R2, R0
LOAD:00145C8C                 ADR             R1, off_145C4C
LOAD:00145C90                 LDR             R0, =(aCk1234567+0xA - 0x145C4C)
LOAD:00145C94                 ADD             R0, R0, R1 ; &quot;&quot;
LOAD:00145C98                 LDMFD           SP!, {R1}
LOAD:00145C9C                 BL              sub_146248
LOAD:00145CA0                 LDMFD           SP!, {R1}

; ... 此处省略部分指令 ...

; 字符串定义部分                 
LOAD:001468EA                 aCk1234567      DCB &quot;ck1234567_&quot;,0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>说明 <ul><li><p>内存偏移表中 对应项的被减数为对应项地址，该地址被r1加载（偏移已被adr内部处理）</p></li><li><p>在上一条的条件下，执行ldr加载内存偏移表并add，则会指向目标地址（已在例2中说明）</p></li></ul></li></ul><p>通过将偏移量转换成基本数据，得到如下等效代码（省略部分）</p><div class="macos language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>;             内存偏移表转换成具体数值 0x1468EA + 0xA - 0x145C4C = 0xCA8
LOAD:00145C4C dword_145C4C    DCD 0xCA8

LOAD:00145C5C                 STMFD           SP!, {R0-R2,LR}
LOAD:00145C60                 ADR             R1, dword_145C4C
;                             直接赋值偏移表内的偏移量做加法得到字符串地址
LOAD:00145C64                 LDR             R0, =0xCA8
LOAD:00145C68                 ADD             R0, R0, R1 ; &quot;&quot;
LOAD:00145C6C                 LDR             R2, =dword_145C4C
LOAD:00145C70                 SUB             R1, R1, R2
LOAD:00145C74                 STMFD           SP!, {R1}
LOAD:00145C78                 LDR             R2, =dword_4B4BC
LOAD:00145C7C                 ADD             R1, R1, R2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三级流水线" tabindex="-1"><a class="header-anchor" href="#三级流水线" aria-hidden="true">#</a> 三级流水线</h2><p>ARM7TDM使用三级流水线执行指令。</p><ol><li>内存中取回指令</li><li>开始解码</li><li>实际执行指令</li></ol><p>程序计数器（PC）总是指向<strong>正在读取的指令而非正在执行的指令，超出当前执行指令的两条指令</strong> 。即第x条指令若读取pc寄存器内的值，实际上是读取第(x+2)条指令的地址</p>`,21),_=e("em",null,"IDA",-1),g={href:"https://www.cnblogs.com/dliv3/p/5285771.html",target:"_blank",rel:"noopener noreferrer"},A=d(`<p>故在动态调试过程中需要修改指令时，需在 <strong>执行前两条之前进行修改</strong> （执行到的指令与要修改的指令至少间隔2条指令）</p><h2 id="cprs" tabindex="-1"><a class="header-anchor" href="#cprs" aria-hidden="true">#</a> CPRS</h2><p>全称 Current Program Status Register, 各个bit位表明了CPU的某些状态信息<br></p><p>下方为部分bit的介绍</p><table><thead><tr><th>标识位</th><th>说明</th></tr></thead><tbody><tr><td>N</td><td>Set when the result of the operation was Negative.(负数置1，非负数置0)</td></tr><tr><td>Z</td><td>Set when the result of the operation was Zero.(为零置1，非零置0)</td></tr><tr><td>C</td><td>Set when the operation result in a Carry.(发生进位，或借位时，置1)</td></tr><tr><td>V</td><td>Set when the operation caused oVerflow.(操作造成溢出时，置1。如计算补码)</td></tr></tbody></table><h2 id="so内调用函数的入参分析" tabindex="-1"><a class="header-anchor" href="#so内调用函数的入参分析" aria-hidden="true">#</a> so内调用函数的入参分析</h2><p>BL与BLX指令常常伴随函数调用出现。函数参数的传递是通过寄存器与堆栈实现的</p><h3 id="通过寄存器确定函数调用" tabindex="-1"><a class="header-anchor" href="#通过寄存器确定函数调用" aria-hidden="true">#</a> 通过寄存器确定函数调用</h3><p>在寄存器列表中：</p><ul><li><em>R0 ~ R3</em> 共4个寄存器用于函数参数及返回值的传递（<strong>函数相关</strong>）</li><li><em>R4 ~ R6 / R8 / R10 / R11</em> 普通的通用寄存器</li><li><em>R7</em> 数据栈帧的指针，链接寄存器LR在栈上的地址</li><li><em>R9</em> 系统保留寄存器</li><li><em>R12</em> IP的值</li><li><em>R13</em> 栈顶指针SP - 当指针指向的地址为栈顶元素所在地址，即为满栈。若指向栈顶元素上方的地址（栈顶元素地址-4，可理解为预留位置），即为空栈</li><li><em>R14</em> 链接寄存器LR。所处代码作为函数的返回地址</li><li><em>R15</em> 程序计数器PC的值</li></ul><p><strong>说明：</strong></p><ul><li>R14中存放的不是调用函数的地址，而是当前代码段执行完成后将跳转的地址</li><li>若函数有返回值，则放在R0中。查看函数调用<code>B</code>后的下一行有没有读取或<code>MOV</code>寄存器R0中的值来判断是否有返回值</li></ul><h3 id="判断即将跳转函数的参数个数" tabindex="-1"><a class="header-anchor" href="#判断即将跳转函数的参数个数" aria-hidden="true">#</a> 判断即将跳转函数的参数个数</h3><ul><li><code>BLX</code>的目标值是否为 <em>R0~R3</em> 寄存器（根据参数寄存器为 <em>R0~R3</em> 进行判断） <ul><li><p>是：参数个数小于4个时，<code>BLX</code>的跳转地址为目标函数地址，之前的寄存器皆为函数参数。例如：<code>BLX R3</code> 说明函数有3个参数，分别存储在 R0、R1、R2，而R3存放目标函数地址。</p></li><li><p>否：参数个数量大。前4个参数在 <em>R0~R3</em> 寄存器中。剩下的在跳转指令前通过<code>STR</code>或<code>STM</code>放入堆栈（并不一定入栈的数据都是参数，需要分析。若前面没有<code>STR</code>或<code>STM</code>压栈操作，则为4个）</p></li><li><p>分析：在被调用函数内，一开始便读取寄存器，一开始读取堆栈的，读取的数据为函数参数</p></li></ul></li></ul><p>可通过ida反编译的伪代码辅助分析。例如ida识别为方法名<code>BLX func_xxx</code>，通过 <em>tab</em> 查看ida解析出来的参数个数辅助自己分析</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov r0, #5
mov r3, #4
mov r2, #3
str r0, [sp, #0]
mov r1, #2
mov r0, #1
BL func_test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，第5个参数在调用前被存储在堆栈上</p>`,17);function L(x,E){const l=a("ExternalLinkIcon");return r(),c("div",null,[o,e("p",null,[i("使用IDA工具并设置机器码的显示( Option -> General -> Disassembly -> Number of opcode bytes: 5)。以下两例均来自参考文章"),e("a",v,[i("https://bbs.kanxue.com/thread-268869.htm"),n(l)])]),u,e("ul",null,[e("li",null,[i("说明： "),e("ul",null,[m,e("li",null,[i("R3 加载内存偏移表对应项 "),b,i(" 的地址 "),R,i(" - "),D,e("a",h,[i("https://bbs.kanxue.com/thread-268869.htm"),n(l)])]),p])])]),C,e("p",null,[i("在 "),_,i(" 动态调试时，若F7单步执行到某一条指令时（与其他ide类似，卡在将执行的指令上），其实CPU已经开始处理目标指令后面的两条指令了（下一条指令已开始解码，下下条指令已开始读取）。指令窗口中的PC（假PC）指向的是将执行的指令，而寄存器窗口的PC（真PC）值已为下下条指令的地址（参考文章"),e("a",g,[i("https://www.cnblogs.com/dliv3/p/5285771.html"),n(l)]),i("）")]),A])}const f=s(t,[["render",L],["__file","011.html.vue"]]);export{f as default};
