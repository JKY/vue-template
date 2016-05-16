
项目模版
===
使用 nodejs 及 webpack 的 SPA 的项目模版


	git clone https://github.com/JKY/vue-template.git
	npm install 
	

目录结构
===
* app.js 主文件
* api 后段 API
* common 公用后端逻辑
* lib 后端库文件
	- auth.js
    - db.js
    - proxy.js
    - util.js 
* views  前端脚本及资源
* build  构建脚本
* config.js 配置文件
* package.json 依赖


启动
===
	nodemon app.js 


build
===
	npm run build




LINE (线路)
====
** compoments **
====
* line-list (线路列表)
* line-status (线路)
    - line-status-header 
	- line-status-comment-list (评论列表）
	- line-status-comment (单条评论)
* line-filter (过滤)

** page **
	* page-lines 
	* page-pub-line-stat
	* page-line-detail



CONVERSATION (对话)
============
** compoments **
* chat-text-item
* recent-chat-list-item-group
* recent-chat-list-item

page
	* chat
	* recent-chats

FAV (收藏)
===========
** compoment **
	* fav-item



FOLLOW
======
	* people
		** component **
	    	* fl-people-list
			* fl-people-item
		** page **
			* fl-fans (关注我的人)
			* fl-mine (我的关注)
	* line
		** component **
			* fl-line-item
			* fl-line-list
		** page **
			* fl-line-add
			* fl-lines 

	