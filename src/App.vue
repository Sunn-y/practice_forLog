<template>
<div id="app">
	<app-bar></app-bar>
	<app-nav></app-nav>
</div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import AppNav from './components/AppNav.vue'
export default {
	components: {
		AppBar,
		AppNav
	},
	data: () => ({}),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');

* {
	font-family: 'Gaegu', cursive;
}
</style>
