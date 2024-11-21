const e=JSON.parse(`{"key":"v-24959e6b","path":"/detail/003.html","title":"macos搭建python开发环境","lang":"zh-CN","frontmatter":{"layout":"Detail","title":"macos搭建python开发环境","date":"2023-03-07T00:00:00.000Z","discription":"macos的python开发环境搭建","category":["Python"],"tags":["Python","MacOS","Android"],"description":"Homebrew 复制Homebrew官网的安装命令进行安装（需要良好的网络环境） cmake nvm 通过homebrew安装cmake、nvm等开发工具 可能会遇到的安装失败 Searching for similarly named formulae... Error: No similarly named formulae found. It was migrated from homebrew/cask to homebrew/core. # 解决 # because you can't brew untap homebrew/core rm -rf $(brew --repo homebrew/core) brew tap homebrew/core","head":[["meta",{"property":"og:url","content":"https://saynop.github.io/detail/003.html"}],["meta",{"property":"og:title","content":"macos搭建python开发环境"}],["meta",{"property":"og:description","content":"Homebrew 复制Homebrew官网的安装命令进行安装（需要良好的网络环境） cmake nvm 通过homebrew安装cmake、nvm等开发工具 可能会遇到的安装失败 Searching for similarly named formulae... Error: No similarly named formulae found. It was migrated from homebrew/cask to homebrew/core. # 解决 # because you can't brew untap homebrew/core rm -rf $(brew --repo homebrew/core) brew tap homebrew/core"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-18T06:41:25.000Z"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"MacOS"}],["meta",{"property":"article:tag","content":"Android"}],["meta",{"property":"article:published_time","content":"2023-03-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-18T06:41:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"macos搭建python开发环境\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-18T06:41:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Homebrew","slug":"homebrew","link":"#homebrew","children":[{"level":3,"title":"cmake nvm","slug":"cmake-nvm","link":"#cmake-nvm","children":[]}]},{"level":2,"title":"vim配置语法高亮","slug":"vim配置语法高亮","link":"#vim配置语法高亮","children":[]},{"level":2,"title":"py3虚拟环境","slug":"py3虚拟环境","link":"#py3虚拟环境","children":[]},{"level":2,"title":"MySQL安装","slug":"mysql安装","link":"#mysql安装","children":[]},{"level":2,"title":"mongo安装","slug":"mongo安装","link":"#mongo安装","children":[]},{"level":2,"title":"docker安装","slug":"docker安装","link":"#docker安装","children":[]},{"level":2,"title":"redis安装","slug":"redis安装","link":"#redis安装","children":[]},{"level":2,"title":"elasticsearch","slug":"elasticsearch","link":"#elasticsearch","children":[]},{"level":2,"title":"fastdfs安装","slug":"fastdfs安装","link":"#fastdfs安装","children":[]},{"level":2,"title":"安卓SDK与NDK安装","slug":"安卓sdk与ndk安装","link":"#安卓sdk与ndk安装","children":[{"level":3,"title":"JRE","slug":"jre","link":"#jre","children":[]},{"level":3,"title":"SDK","slug":"sdk","link":"#sdk","children":[]},{"level":3,"title":"NDK","slug":"ndk","link":"#ndk","children":[]},{"level":3,"title":"gradle","slug":"gradle","link":"#gradle","children":[]},{"level":3,"title":"安装maven","slug":"安装maven","link":"#安装maven","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"updatedTime":1697611285000,"contributors":[{"name":"SayNop","email":"a2045751@163.com","commits":4}]},"filePathRelative":"detail/003.md","excerpt":"<h2> Homebrew</h2>\\n<p>复制<a href=\\"https://brew.sh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Homebrew官网</a>的安装命令进行安装（需要良好的网络环境）</p>\\n<h3> cmake nvm</h3>\\n<p>通过homebrew安装<code>cmake</code>、<code>nvm</code>等开发工具</p>\\n<ul>\\n<li>可能会遇到的安装失败</li>\\n</ul>\\n<div class=\\"macos language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>Searching <span class=\\"token keyword\\">for</span> similarly named formulae<span class=\\"token punctuation\\">..</span>. \\nError: No similarly named formulae found. \\nIt was migrated from homebrew/cask to homebrew/core.\\n\\n<span class=\\"token comment\\"># 解决</span>\\n<span class=\\"token comment\\"># because you can't brew untap homebrew/core</span>\\n<span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-rf</span> <span class=\\"token variable\\"><span class=\\"token variable\\">$(</span>brew <span class=\\"token parameter variable\\">--repo</span> homebrew/core<span class=\\"token variable\\">)</span></span> \\nbrew tap homebrew/core\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
