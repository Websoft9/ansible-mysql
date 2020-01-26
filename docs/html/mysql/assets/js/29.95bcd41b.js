(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{201:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"备份恢复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份恢复","aria-hidden":"true"}},[t._v("#")]),t._v(" 备份恢复")]),t._v(" "),e("h2",{attrs:{id:"为什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么？")]),t._v(" "),e("p",[t._v("有服务器运维经验的用户都明白一个道理：“信息系统根本无法长时间保持100%稳定的状态，任何系统都可能会出现故障，只是故障出现的概率不同、危害程度不同而已”。")]),t._v(" "),e("ol",[e("li",[t._v("工作几天的成果被误删了，怎么恢复？")]),t._v(" "),e("li",[t._v("网站被黑客攻击面目全非，能复原吗？")]),t._v(" "),e("li",[t._v("网站内容被改得乱七八糟，想要恢复到一个正常状态？")])]),t._v(" "),e("p",[t._v("当故障发生之时，我们首先是寻求专业人士的帮助，快速诊断并处理故障，但不幸的是，有些故障无法在期望的时间周期内顺利的解决，甚至是无法解决。")]),t._v(" "),e("p",[t._v("显然，有一个备份及其重要，它可以保证出现故障之时可以通过已有的备份文件将系统恢复到正常的状态，意味着可以避免由于无法恢复而造成的巨大损失。")]),t._v(" "),e("blockquote",[e("p",[t._v("一定要养成备份的习惯，切莫存在侥幸心理")])]),t._v(" "),e("h2",{attrs:{id:"怎样做？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎样做？","aria-hidden":"true"}},[t._v("#")]),t._v(" 怎样做？")]),t._v(" "),e("p",[t._v("从具体的备份对象上看，由于服务器上存在："),e("strong",[t._v("操作系统、运行环境、数据库和应用程序")]),t._v("四个备份对象，每个对象都有可能出现不可预期、不可如期解决的故障。")]),t._v(" "),e("p",[t._v("基于备份对象的性质，我们认为如下两种备份措施是必要的：")]),t._v(" "),e("h3",{attrs:{id:"全局自动备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局自动备份","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局自动备份")]),t._v(" "),e("p",[t._v("所有的云平台都提供了全局自动备份功能，基本原理是基于"),e("strong",[t._v("磁盘快照")]),t._v("：快照是针对于服务器的磁盘来说的，它可以记录磁盘在指定时间点的数据，将其全部备份起来，并可以实现一键恢复。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- 备份范围: 将操作系统、运行环境、数据库和应用程序\n- 备份效果: 非常好\n- 备份频率: 按小时、天、周备份均可\n- 恢复方式: 云平台一键恢复\n- 技能要求：非常容易\n- 自动化：设置策略后全自动备份\n")])])]),e("p",[t._v("不同云平台的自动备份方案有一定的差异，详情参考 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云平台备份方案"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"mysql应用备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql应用备份","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL应用备份")]),t._v(" "),e("p",[t._v("MySQL上的应用备份主要通过"),e("strong",[t._v("下载Volume")]),t._v("实现最小化的备份方案。")]),t._v(" "),e("p",[t._v("下面以列表的方式介绍这种备份：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- 备份范围: 数据库和应用程序\n- 备份效果: 一般\n- 备份频率: 一周最低1次，备份保留30天\n- 恢复方式: 重新导入\n- 技能要求：非常容易\n- 自动化：无\n")])])]),e("p",[t._v("通用的手动备份操作步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("使用phpMyAdmin等可视化工具，导致数据库（建议SQL格式）")]),t._v(" "),e("li",[t._v("将备份文件下载到本地，备份工作完成")])]),t._v(" "),e("p",[t._v("In phpMyAdmin, Export is to back up the database, import and restore the database.")]),t._v(" "),e("h4",{attrs:{id:"export"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export","aria-hidden":"true"}},[t._v("#")]),t._v(" Export")]),t._v(" "),e("ol",[e("li",[e("p",[t._v('Login to phpMyAdmin, select your database then click "Export" tab on the top menu\n'),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/en/phpmyadmin/phpmyadmin-export-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('Select suitable Export method,Format for you, then click the "Go" button to start export')])]),t._v(" "),e("li",[e("p",[t._v("After the database backup file (.sql suffix) is generated, save it to the local computer")])])]),t._v(" "),e("h4",{attrs:{id:"import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import","aria-hidden":"true"}},[t._v("#")]),t._v(" Import")]),t._v(" "),e("ol",[e("li",[e("p",[t._v('Restore the database, corresponding to the "Import" operation, refer to the following\n'),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/mysql/mysql-import-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Import files should pay special attention to character set compatibility")])])])])},[],!1,null,null,null);a.default=s.exports}}]);