(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{196:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"修改或重置-mysql-密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改或重置-mysql-密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改或重置 MySQL 密码")]),a._v(" "),t("p",[a._v("修改密码，即使用已有密码登录MySQL，然后修改成另外一个密码"),t("br"),a._v("\n重置密码，即忘记了密码，需要通过重置密码找回")]),a._v(" "),t("h2",{attrs:{id:"修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改密码")]),a._v(" "),t("p",[a._v("可以通过MySQL管理工具修改密码，也通过命令上修改密码")]),a._v(" "),t("h3",{attrs:{id:"phpmyadmin修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin修改密码","aria-hidden":"true"}},[a._v("#")]),a._v(" phpMyAdmin修改密码")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mysql/websoft9-modifymysqlpw.gif",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"命令行修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行修改密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令行修改密码")]),a._v(" "),t("p",[a._v("执行一下命令:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysqladmin -u 用户名 -p 旧密码 password '新密码' \n")])])]),t("h2",{attrs:{id:"重置密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重置密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 重置密码")]),a._v(" "),t("p",[a._v("如果忘记了root密码，就需要通过命令操作，实现MySQL密码重置。下面有两种方案可供使用：")]),a._v(" "),t("h3",{attrs:{id:"快捷方案（推荐）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快捷方案（推荐）","aria-hidden":"true"}},[a._v("#")]),a._v(" 快捷方案（推荐）")]),a._v(" "),t("ol",[t("li",[a._v("使用SSH远程连接到MySQL服务器")]),a._v(" "),t("li",[a._v("运行如下命令，按提示输入新密码即可。"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo git clone https://github.com/Websoft9/linux.git; cd linuxscript/Mysql\\_ResetPasswd\\_Script;sudo sh reset\\_mysql\\_password.sh\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"手动方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 手动方案")]),a._v(" "),t("ol",[t("li",[a._v("使用SSH远程连接到MySQL服务器")]),a._v(" "),t("li",[a._v("停止 MySQL 服务"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl stop mysqld\n")])])])]),a._v(" "),t("li",[a._v("采用命令行参数启动mysql"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysqld_safe --skip-grant-tables &\n")])])])]),a._v(" "),t("li",[a._v("重置密码（这里将密码重置为"),t("code",[a._v("123456")]),a._v("）"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql -e \"use mysql;update user set password=password('123456') where user='root';\"\n")])])])]),a._v(" "),t("li",[a._v("关闭MySQL进程"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("kill all mysqld\n")])])])]),a._v(" "),t("li",[a._v("启动MySQL服务"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl start mysqld\n")])])])])])])},[],!1,null,null,null);s.default=r.exports}}]);