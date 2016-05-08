
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