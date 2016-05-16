<style>
	
</style>

<template>
	<div>
		<router-view transition-mode="out-in"></router-view>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				title: 'foo'
			}
		}
	}
</script>
