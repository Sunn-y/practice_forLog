<template>
<v-app app>
	<app-bar></app-bar>
	<app-nav></app-nav>
	<v-main>
		<v-container fluid>
			<router-view></router-view>
		</v-container>
	</v-main>
</v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import AppNav from './components/AppNav.vue'
export default {
	components: {
		AppBar,
		AppNav,
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
