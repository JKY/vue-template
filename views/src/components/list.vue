<style>
	.list{
		width:100%;
	} 
	.list h1 {
		display:block;
		width:100%;
		padding:1rem;
		font-size: 1.2rem;
		color: #333;
		text-align:left;
		background-color:#ccc;
	}

	.item-transition {
      transition: opacity 2s ease;
    }
    .item-enter {
      opacity: 1;
    }
    .item-leave {
      opacity: 0;
      position: absolute; /* important for removal move to work */
    }
    .item-move {
      color: red;
      transition: transform .5s cubic-bezier(.55,0,.1,1); /* applied when moving */
    }
</style>

<template>
	<div class='list'>
		<h1>title</h1>
		<div class='body'>
			<item v-for="item in items" :data='item' v-on:foo="fooHanlder" transition="item" stagger="100"></item>
		</div>
	</div>
</template>

<script>
	import Item from './item.vue'

	export default {
		/* 返回实例的 data, 每个实例数据独立, 使用 function 返回对象 */
		data (){
			return {
				items: []
			}
		},
		/* 钩子函数 */
		created () {
		   
		},
		/* 方法 */
		methods: {
			fooHanlder(arg){
				console.log(arg);
			}
		},

		/* 组建本地注册 */
		components: {
			'item': Item
		},

		/* 导航到此页面 */
		route: {
			/* to, 导航参数 to.params.xxx */
			data ({ to }) {
				return new Promise((resolve,reject) => {
					setTimeout(()=>{
						resolve({'items':['a','b','c']});
					}, 1);
				});
			}
		}
	}
</script>
