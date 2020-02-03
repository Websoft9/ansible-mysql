(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{211:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v('The MySQL deployment package contains a sequence software (referred to as "components") required for MySQL to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),a("h2",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[e._v("#")]),e._v(" Path")]),e._v(" "),a("p",[e._v("You should know the components is different for different OS before using MySQL/MariaDB")]),e._v(" "),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),a("h4",{attrs:{id:"mysql-mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-mariadb","aria-hidden":"true"}},[e._v("#")]),e._v(" MySQL&MariaDB")]),e._v(" "),a("p",[e._v("MySQL install directory: "),a("em",[e._v("/usr/share/mysql")]),a("br"),e._v("\nMySQL data directory: "),a("em",[e._v("/data/mysql")]),a("br"),e._v("\nMySQL Configuration File: "),a("em",[e._v("/etc/my.cnf")]),a("br"),e._v("\nMySQL error log: "),a("em",[e._v("/var/log/mysql/mysqld.log")]),a("br"),e._v("\nMySQL Process Identification Number: "),a("em",[e._v("/run/mysqld/mysqld.pid")]),a("br"),e._v("\nMySQL Socket: "),a("em",[e._v("/var/lib/mysql/mysql.sock")])]),e._v(" "),a("h4",{attrs:{id:"phpmyadmin-on-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin-on-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin on Docker")]),e._v(" "),a("p",[e._v("Most of time, we used Docker to install phpMyAdmin")]),e._v(" "),a("h4",{attrs:{id:"phpmyadmin-on-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin-on-php","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin on PHP")]),e._v(" "),a("p",[e._v("For php runtime, e.g LAMP/LNMP, phpMyAdmin is an application for deployment")]),e._v(" "),a("p",[e._v("phpMyAdmin installation directory: "),a("em",[e._v("/data/apps/phpmyadmin")]),a("br"),e._v("\nphpMyAdmin configuration file: "),a("em",[e._v("/data/apps/phpmyadmin/config.inc.php")]),a("br"),e._v("\nphpMyAdmin vhost configuration file: "),a("em",[e._v("/etc/httpd/conf.d/phpMyAdmin.conf")])]),e._v(" "),a("h3",{attrs:{id:"windows-sever"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-sever","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows Sever")]),e._v(" "),a("h4",{attrs:{id:"mysql-mariadb-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-mariadb-2","aria-hidden":"true"}},[e._v("#")]),e._v(" MySQL&MariaDB")]),e._v(" "),a("p",[e._v("Database install directory: "),a("em",[e._v("/C:/websoft9/mysql")]),a("br"),e._v("\nDatabase data directory: "),a("em",[e._v("/C:/websoft9/mysql/data")]),a("br"),e._v("\nDatabase configuration file: "),a("em",[e._v("/C:/websoft9/mysql/my.ini")])]),e._v(" "),a("h2",{attrs:{id:"ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ports","aria-hidden":"true"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),a("p",[e._v("You can control(open or shut down) ports by "),a("strong",[a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Group Setting"),a("OutboundLink")],1)]),e._v(" of your Cloud Server whether the port can be accessed from Internet.")]),e._v(" "),a("p",[e._v("These ports should be opened for this application:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Number")]),e._v(" "),a("th",[e._v("Use")]),e._v(" "),a("th",[e._v("Necessity")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("phpMyAdmin on Docker")]),e._v(" "),a("td",[e._v("9090")]),e._v(" "),a("td",[e._v("HTTP to visit phpMyAdmin")]),e._v(" "),a("td",[e._v("Optional")])]),e._v(" "),a("tr",[a("td",[e._v("MySQL")]),e._v(" "),a("td",[e._v("3306")]),e._v(" "),a("td",[e._v("remote connect MySQL")]),e._v(" "),a("td",[e._v("Optional")])]),e._v(" "),a("tr",[a("td",[e._v("MariaDB")]),e._v(" "),a("td",[e._v("3306")]),e._v(" "),a("td",[e._v("remote connect MariaDB")]),e._v(" "),a("td",[e._v("Optional")])])])]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Linux Version\nlsb_release -a\n\n# MySQL version\nmysql -V\n\n# MySQL Version\ndocker -v\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);