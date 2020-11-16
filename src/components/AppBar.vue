<template>
<v-app-bar color="#FF9999" dark dense>
	<v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
	<v-toolbar-title>
		<h4> 📝 </h4>
		<h1> For Log</h1>
	</v-toolbar-title>

	<v-spacer></v-spacer>
	<v-spacer></v-spacer>
	<v-spacer></v-spacer>

	<v-text-field></v-text-field>
	<v-btn icon>
		<v-icon>mdi-magnify</v-icon>
	</v-btn>

	<v-btn icon>
		<v-icon>mdi-dots-vertical</v-icon>
	</v-btn>
</v-app-bar>
</template>

<script>
import {
	mapActions
} from 'vuex'
export default {
	computed: {
		...mapActions(['setDrawer'])
	},
	data: () => ({}),
	methods: {
		openDrawer(){
			this.setDrawer;
		}
	}

}
</script>

<style scoped>
h1,
h4 {
	display: inline-block;
}
</style>
