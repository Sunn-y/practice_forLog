<template>
<v-app-bar v-bind:color="color" dark dense app>
	<v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
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

	<v-menu left bottom>
		<template v-slot:activator="{ on, attrs }">
			<v-btn icon v-bind="attrs" v-on="on">
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</template>

		<v-list>
			<v-list-item v-for="(color, index) in colors" :key="index" @click="changeColor(color.value)">
				<v-list-item-title>{{color.name}}</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</v-app-bar>
</template>

<script>
import axios from 'axios'
export default {
	data: () => ({
		color: '',
		colors: [
			{name: 'coral', value: '#FF9999'},
			{name: 'yellow', value: '#FFFF00'},
			{name: 'green', value: '#66FF66'},
			{name: 'blue', value: '#0099FF'},
			{name: 'purple', value: '#CC66FF'},
		]
	}),
	async mounted(){
			const res = await axios.get("http://localhost:3000/theme");
			this.color = res.data.color;
			console.log(res.data.color);
	},
	methods: {
		async changeColor(colorValue) {
			await axios.post("http://localhost:3000/theme", {color: colorValue});
		},
		changeDrawer() {
			this.$store.commit('changeDrawer');
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
