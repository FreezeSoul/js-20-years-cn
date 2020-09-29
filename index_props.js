import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': null,
    'next': {
        "text": "语言诞生",
        "link": "part-1.html"
    },
    'sidebar': [
        {
            "text": "JavaScript 20 年",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "语言诞生",
            "link": "part-1.html",
            "pagePath": "part-1.md"
        },
        {
            "text": "创立标准",
            "link": "part-2.html",
            "pagePath": "part-2.md"
        },
        {
            "text": "改革失败",
            "link": "part-3.html",
            "pagePath": "part-3.md"
        },
        {
            "text": "继往开来",
            "link": "part-4.html",
            "pagePath": "part-4.md"
        },
        {
            "text": "附录",
            "link": "appendices.html",
            "pagePath": "appendices.md"
        },
        {
            "text": "备注",
            "link": "notes.html",
            "pagePath": "notes.md"
        },
        {
            "text": "参考文献",
            "link": "references.html",
            "pagePath": "references.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "JavaScript 20 年",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>JavaScript 20 年</h1>\n<p>\n  <a href="https://github.com/doodlewind/jshistory-cn">\n    <img alt="GitHub stars" src="https://img.shields.io/github/stars/doodlewind/jshistory-cn?style=social"/>\n  </a>\n</p>\n<p><img src="./images/2.png" alt="The Mocha Console"></p>\n<h2 id="%E5%8E%9F%E6%96%87%E7%AE%80%E4%BB%8B">原文简介<a class="anchor" href="#%E5%8E%9F%E6%96%87%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>本书由 JavaScript 之父 Brendan Eich 与 ES6 规范首席作者 Allen Wirfs-Brock 联合编写，详细记载和解读了自 1995 年语言诞生到 2015 年 ES6 规范制定为止，共计 20 年的 JavaScript 语言演化经历。全书不仅讲解了大量语言技术细节层面的演进，更复盘了更高层面上规范制定与标准博弈中的历史成败，是一部讲述人类如何在商业与技术上的竞争合作中促进产业发展的故事。</p>\n<p>这个故事相当漫长而复杂。全文分为四个部分，每部分都对应 JavaScript 演化历程中的一个主要阶段。各部分之间还有一段简短的插曲，介绍彼时的开发者们是如何看待与使用 JavaScript 的。</p>\n<p>这四个部分依次如下：</p>\n<ol>\n<li><strong><a href="./part-1.html">语言诞生</a></strong>（The Origins of JavaScript），介绍了 JavaScript 的创建与早期发展，包括语言的诞生背景、命名方式、初始特性及其设计理念等。这一节还追溯了它在 Netscape 与其他公司最初的演化，例如微软的 JScript。</li>\n<li><strong><a href="./part-2.html">创立标准</a></strong>（Creating a Standard），介绍了从 JavaScript 到 ECMAScript 标准的历程。这主要涵盖 JavaScript 标准化工作的启动、规范的创建、相关贡献者以及决策方式等。</li>\n<li><strong><a href="./part-3.html">改革失败</a></strong>（Failed Reformations），介绍了在 Eich 离开后，缺乏「仁慈独裁者」的 ECMAScript 委员会修改语言的失败尝试。这主要涉及委员会的分裂、对 ES4 的两轮投入，以及 Flash 与 ActionScript 在其中的渊源等。</li>\n<li><strong><a href="./part-4.html">继往开来</a></strong>（Modernizing JavaScript），介绍了 2009 年 ES5 与 2015 年 ES6 这两个成功标准背后的故事，主要包括对 ES5 与 ES6 的目标、重大基础性更改与重要新特性的介绍与回顾。</li>\n</ol>\n<h2 id="%E7%9B%AE%E5%BD%95">目录<a class="anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<ul>\n<li><a href="./part-1.html">语言诞生</a>\n<ul>\n<li><a href="./part-1.html#%E5%8F%B2%E5%89%8D%E6%97%B6%E4%BB%A3">史前时代</a></li>\n<li><a href="./part-1.html#brendan-eich-%E5%8A%A0%E5%85%A5%E7%BD%91%E6%99%AF">Brendan Eich 加入网景</a></li>\n<li><a href="./part-1.html#mocha-%E7%9A%84%E6%95%85%E4%BA%8B">Mocha 的故事</a></li>\n<li><a href="./part-1.html#javascript-10-%E4%B8%8E-11">JavaScript 1.0 与 1.1</a>\n<ul>\n<li><a href="./part-1.html#javascript-%E8%AF%AD%E6%B3%95">JavaScript 语法</a></li>\n<li><a href="./part-1.html#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E8%A1%A8%E8%BE%BE%E5%BC%8F">数据类型与表达式</a></li>\n<li><a href="./part-1.html#%E5%AF%B9%E8%B1%A1">对象</a></li>\n<li><a href="./part-1.html#%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1">函数对象</a></li>\n<li><a href="./part-1.html#%E5%86%85%E7%BD%AE%E5%BA%93">内置库</a></li>\n<li><a href="./part-1.html#%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9E%8B">执行模型</a></li>\n<li><a href="./part-1.html#%E8%BF%B7%E6%83%91%E8%A1%8C%E4%B8%BA%E4%B8%8E-bug">迷惑行为与 Bug</a>\n<ul>\n<li><a href="./part-1.html#%E5%86%97%E4%BD%99%E5%A3%B0%E6%98%8E">冗余声明</a></li>\n<li><a href="./part-1.html#%E9%9A%90%E5%BC%8F%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E4%B8%8E--%E8%BF%90%E7%AE%97%E7%AC%A6">隐式类型转换与 <code>==</code> 运算符</a></li>\n<li><a href="./part-1.html#32-%E4%BD%8D%E7%AE%97%E6%9C%AF">32 位算术</a></li>\n<li><a href="./part-1.html#this-%E5%85%B3%E9%94%AE%E5%AD%97"><code>this</code> 关键字</a></li>\n<li><a href="./part-1.html#arguments-%E5%AF%B9%E8%B1%A1">Arguments 对象</a></li>\n<li><a href="./part-1.html#%E5%AF%B9%E6%95%B0%E5%80%BC%E5%B1%9E%E6%80%A7%E9%94%AE%E7%9A%84%E7%89%B9%E6%AE%8A%E5%A4%84%E7%90%86">对数值属性键的特殊处理</a></li>\n<li><a href="./part-1.html#%E5%8E%9F%E5%A7%8B%E5%80%BC%E7%9A%84%E5%B1%9E%E6%80%A7">原始值的属性</a></li>\n<li><a href="./part-1.html#javascript-%E4%B8%AD%E7%9A%84-html-%E6%B3%A8%E9%87%8A">JavaScript 中的 HTML 注释</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="./part-1.html#%E5%BE%AE%E8%BD%AF-jscript22">微软 JScript</a></li>\n<li><a href="./part-1.html#%E4%BB%8E-mocha-%E5%88%B0-spidermonkey">从 Mocha 到 SpiderMonkey</a></li>\n</ul>\n</li>\n<li><a href="./part-1.html#%E6%8F%92%E6%9B%B2%E9%A3%8E%E8%AF%84%E8%A2%AB%E5%AE%B3">插曲：风评被害</a></li>\n<li><a href="./part-2.html">创立标准</a>\n<ul>\n<li><a href="./part-2.html#%E5%AF%BB%E6%89%BE%E5%9C%BA%E5%9C%B0">寻找场地</a></li>\n<li><a href="./part-2.html#%E9%A6%96%E6%AC%A1-tc39-%E4%BC%9A%E8%AE%AE">首次 TC39 会议</a></li>\n<li><a href="./part-2.html#%E7%BC%96%E5%86%99%E8%A7%84%E8%8C%83">编写规范</a></li>\n<li><a href="./part-2.html#%E5%91%BD%E5%90%8D%E6%A0%87%E5%87%86">命名标准</a></li>\n<li><a href="./part-2.html#iso-%E5%BF%AB%E9%80%9F%E9%80%9A%E9%81%93">ISO 快速通道</a></li>\n<li><a href="./part-2.html#%E5%AE%9A%E4%B9%89-ecmascript-3">定义 ECMAScript 3</a></li>\n</ul>\n</li>\n<li><a href="./part-2.html#%E6%8F%92%E6%9B%B2javascript-%E4%B8%8D%E9%9C%80%E8%A6%81-java">插曲：JavaScript 不需要 Java</a>\n<ul>\n<li><a href="./part-2.html#%E5%B8%83%E9%81%93%E5%B8%88">布道师</a></li>\n<li><a href="./part-2.html#%E5%AF%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%BA%94%E7%94%A8%E4%B8%8E-ajax">富互联网应用与 AJAX</a></li>\n<li><a href="./part-2.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8D%9A%E5%BC%88%E8%AE%BA">浏览器博弈论</a></li>\n</ul>\n</li>\n<li><a href="./part-3.html">改革失败</a>\n<ul>\n<li><a href="./part-3.html#%E4%B8%8D%E6%BB%A1%E4%BA%8E%E6%88%90%E5%8A%9F">不满于成功</a></li>\n<li><a href="./part-3.html#%E5%AF%B9-es4-%E7%9A%84%E7%AC%AC%E4%B8%80%E8%BD%AE%E5%B0%9D%E8%AF%95">对 ES4 的第一轮尝试</a></li>\n<li><a href="./part-3.html#%E5%8F%A6%E4%B8%80%E6%9D%A1%E6%AD%BB%E8%B7%AF">另一条死路</a></li>\n<li><a href="./part-3.html#flash-%E4%B8%8E-actionscript">Flash 与 ActionScript</a></li>\n<li><a href="./part-3.html#%E5%AF%B9-es4-%E7%9A%84%E7%AC%AC%E4%BA%8C%E8%BD%AE%E5%B0%9D%E8%AF%95">对 ES4 的第二轮尝试</a>\n<ul>\n<li><a href="./part-3.html#%E9%87%8D%E7%BD%AE-tc39-tg1">重置 TC39-TG1</a></li>\n<li><a href="./part-3.html#%E9%87%8D%E6%96%B0%E8%AE%BE%E8%AE%A1-es4">重新设计 ES4</a></li>\n<li><a href="./part-3.html#%E9%98%BB%E5%8A%9B">阻力</a></li>\n<li><a href="./part-3.html#%E5%AF%BB%E6%B1%82%E5%92%8C%E8%B0%90">寻求和谐</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="./part-3.html#%E6%8F%92%E6%9B%B2%E8%AE%A4%E7%9C%9F%E5%AF%B9%E5%BE%85-javascript">插曲：认真对待 JavaScript</a>\n<ul>\n<li><a href="./part-3.html#javascript-%E6%80%A7%E8%83%BD%E9%9D%A9%E5%91%BD">JavaScript 性能革命</a></li>\n<li><a href="./part-3.html#commonjs-%E5%92%8C-nodejs">CommonJS 和 Node.js</a></li>\n<li><a href="./part-3.html#%E6%88%90%E4%B8%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E9%80%9A%E7%94%A8%E8%BF%90%E8%A1%8C%E6%97%B6%E7%9A%84-javascript">成为浏览器通用运行时的 JavaScript</a></li>\n</ul>\n</li>\n<li><a href="./part-4.html">继往开来</a>\n<ul>\n<li><a href="./part-4.html#%E5%BC%80%E5%8F%91-es31es5">开发 ES3.1/ES5</a>\n<ul>\n<li><a href="./part-4.html#es5-%E6%8A%80%E6%9C%AF%E8%AE%BE%E8%AE%A1">ES5 技术设计</a>\n<ul>\n<li><a href="./part-4.html#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F">严格模式</a></li>\n<li><a href="./part-4.html#gettersetter-%E5%92%8C%E5%AF%B9%E8%B1%A1%E5%85%83%E6%93%8D%E4%BD%9C">Getter，Setter 和对象元操作</a></li>\n<li><a href="./part-4.html#%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%AE%8C%E6%95%B4%E6%80%A7%E4%B8%8E%E5%AE%89%E5%85%A8%E6%80%A7%E7%89%B9%E6%80%A7">对象的完整性与安全性特性</a></li>\n<li><a href="./part-4.html#%E6%B4%BB%E5%8A%A8%E5%AF%B9%E8%B1%A1activation-object%E7%9A%84%E7%A7%BB%E9%99%A4">活动对象（Activation Object）的移除</a></li>\n<li><a href="./part-4.html#%E5%85%B6%E4%BB%96-es5-%E7%89%B9%E6%80%A7">其他 ES5 特性</a></li>\n</ul>\n</li>\n<li><a href="./part-4.html#%E5%AE%9E%E7%8E%B0%E4%B8%8E%E6%B5%8B%E8%AF%9586">实现与测试</a></li>\n</ul>\n</li>\n<li><a href="./part-4.html#%E4%BB%8E-harmony-%E5%88%B0-ecmascript-2015">从 Harmony 到 ECMAScript 2015</a>\n<ul>\n<li><a href="./part-4.html#%E5%BC%80%E5%A7%8B%E6%8A%95%E5%85%A5-harmony">开始投入 Harmony</a>\n<ul>\n<li><a href="./part-4.html#%E7%A8%BB%E8%8D%89%E4%BA%BAstrawman%E4%B8%8E%E7%9B%AE%E6%A0%87">稻草人（Strawman）与目标</a></li>\n<li><a href="./part-4.html#%E5%80%A1%E5%AF%BC%E8%80%85%E6%A8%A1%E5%9E%8B">倡导者模型</a></li>\n<li><a href="./part-4.html#%E9%80%89%E6%8B%A9%E7%89%B9%E6%80%A7%E9%9B%86">选择特性集</a></li>\n<li><a href="./part-4.html#%E5%BC%80%E5%A7%8B%E7%BC%96%E5%86%99%E8%A7%84%E8%8C%83">开始编写规范</a></li>\n<li><a href="./part-4.html#one-javascript">One JavaScript</a></li>\n<li><a href="./part-4.html#brendan-%E7%9A%84%E6%A2%A6%E6%83%B3">Brendan 的梦想</a></li>\n</ul>\n</li>\n<li><a href="./part-4.html#%E9%87%8D%E6%96%B0%E6%89%93%E9%80%A0%E8%A7%84%E8%8C%83">重新打造规范</a>\n<ul>\n<li><a href="./part-4.html#%E9%87%8D%E7%BB%84%E8%A7%84%E8%8C%83%E7%BB%93%E6%9E%84">重组规范结构</a></li>\n<li><a href="./part-4.html#%E6%96%B0%E7%9A%84%E6%9C%AF%E8%AF%AD">新的术语</a></li>\n<li><a href="./part-4.html#%E6%96%B0%E7%9A%84%E8%AF%AD%E4%B9%89%E7%A7%8D%E7%B1%BB">新的语义种类</a></li>\n</ul>\n</li>\n<li><a href="./part-4.html#es2015-%E8%AF%AD%E8%A8%80%E7%89%B9%E6%80%A7">ES2015 语言特性</a>\n<ul>\n<li><a href="./part-4.html#realmsjobsproxies-%E5%92%8C%E5%85%83%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8Bmop">Realms、Jobs、Proxies 和元对象编程（MOP）</a></li>\n<li><a href="./part-4.html#%E5%9D%97%E7%BA%A7%E5%A3%B0%E6%98%8E%E4%BD%9C%E7%94%A8%E5%9F%9F">块级声明作用域</a></li>\n<li><a href="./part-4.html#%E7%B1%BB">类</a></li>\n<li><a href="./part-4.html#%E6%A8%A1%E5%9D%97">模块</a></li>\n<li><a href="./part-4.html#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0">箭头函数</a></li>\n<li><a href="./part-4.html#%E5%85%B6%E4%BB%96%E7%89%B9%E6%80%A7">其他特性</a></li>\n<li><a href="./part-4.html#%E5%BB%B6%E6%9C%9F%E5%92%8C%E8%A2%AB%E6%94%BE%E5%BC%83%E7%9A%84%E7%89%B9%E6%80%A7">延期和被放弃的特性</a></li>\n</ul>\n</li>\n<li><a href="./part-4.html#harmony-%E8%BD%AC%E8%AF%91%E5%99%A8">Harmony 转译器</a></li>\n<li><a href="./part-4.html#%E5%AE%8C%E6%88%90-ecmascript-2015">完成 ECMAScript 2015</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="./part-4.html#%E6%80%BB%E7%BB%93">总结</a></li>\n<li><a href="./part-4.html#%E8%87%B4%E8%B0%A2">致谢</a></li>\n<li><a href="./appendices.html">附录</a>\n<ul>\n<li><a href="./appendices.html#%E7%99%BB%E5%9C%BA%E4%BA%BA%E7%89%A9">登场人物</a></li>\n<li><a href="./appendices.html#%E7%99%BB%E5%9C%BA%E7%BB%84%E7%BB%87">登场组织</a></li>\n<li><a href="./appendices.html#%E6%9C%AF%E8%AF%AD%E8%A1%A8">术语表</a></li>\n<li><a href="./appendices.html#%E7%BC%A9%E7%95%A5%E8%AF%AD%E5%92%8C%E9%A6%96%E5%AD%97%E6%AF%8D%E7%BC%A9%E5%86%99%E8%AF%8D">缩略语和首字母缩写词</a></li>\n<li><a href="./appendices.html#%E6%97%B6%E9%97%B4%E7%BA%BF">时间线</a>\n<ul>\n<li><a href="./appendices.html#%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86%E8%AF%AD%E8%A8%80%E8%AF%9E%E7%94%9F">第一部分：语言诞生</a></li>\n<li><a href="./appendices.html#%E7%AC%AC%E4%BA%8C%E9%83%A8%E5%88%86%E5%88%9B%E7%AB%8B%E6%A0%87%E5%87%86">第二部分：创立标准</a></li>\n<li><a href="./appendices.html#%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%E6%94%B9%E9%9D%A9%E5%A4%B1%E8%B4%A5">第三部分：改革失败</a></li>\n<li><a href="./appendices.html#%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%E7%BB%A7%E5%BE%80%E5%BC%80%E6%9D%A5">第四部分：继往开来</a></li>\n</ul>\n</li>\n<li><a href="./appendices.html#1995-%E5%B9%B4-12-%E6%9C%88-4-%E6%97%A5%E7%9A%84-javascript-%E5%8F%91%E5%B8%83%E5%85%AC%E5%91%8A">1995 年 12 月 4 日的 JavaScript 发布公告</a></li>\n</ul>\n</li>\n<li><a href="./notes.html">备注</a></li>\n<li><a href="./references.html">参考文献</a></li>\n</ul>\n<h2 id="%E8%AE%B8%E5%8F%AF">许可<a class="anchor" href="#%E8%AE%B8%E5%8F%AF">§</a></h2>\n<p>本文基于 <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC-BY-NC 4.0</a> 许可，不限制非商用转载。</p>\n<p>Allen Wirfs-Brock and Brendan Eich. 2020. JavaScript: the first 20 years. Proc. ACM Program. Lang. 4, HOPL, Article 77 (June 2020), 189 pages. DOI:<a href="https://doi.org/10.1145/3386327">https://doi.org/10.1145/3386327</a></p>'
        } }),
    'head': undefined,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%8E%9F%E6%96%87%E7%AE%80%E4%BB%8B">原文简介</a></li><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E8%AE%B8%E5%8F%AF">许可</a></li></ol></nav>'
        } })
};
