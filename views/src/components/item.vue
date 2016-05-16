<style>
	.row {
		width:100%;
		background-color:#ff0000;
		border-bottom:solid 1px #ddd;
		margin:0;
		padding:0;
		color: #fff;
		overflow:hidden;
		position:relative;
		height:4rem;
	}
	.row span {
		display:block;
		width:100%;
		height:100%;
		line-height:100%;
		text-align:left;
		padding:1rem;
		margin:0;
		position:absolute;
		left:0;
		top:0;
		background-color:#eee;
	}
</style>

<template>
	<div class='row' v-touch:swipeleft="onSwipeLeft">
		<span @click="handler">{{data}}</span>
	</div>
	
</template>

<script>

	export default {
		/* 传递进来的数据 */
		props: ['data'],
		/* 方法集合 */
		methods: {
			/* 事件 hanlder */
			handler(){
				/* 使用 dispatch 发送消息到 parent */
				this.$dispatch('foo','123');
				console.log($('#app'))
			},

			onSwipeLeft(){

			}
		}
	}
</script>
