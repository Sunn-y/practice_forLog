<template>
<v-navigation-drawer v-if="this.$store.state.drawer" permanent fixed app>
	<v-list>
		<v-list-item link>
			<v-list-item-content>
				<v-list-item-title class="title">
					{{ userName }}
					<v-icon> mdi-account-cog</v-icon>
				</v-list-item-title>
				<v-list-item-subtitle>{{ userEmail }}</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
	</v-list>
	<v-divider></v-divider>
	<!-- <v-row>
		<v-col cols="8"> -->
	#HASHTAGS
	<!-- </v-col>
		<v-col cols="4"> -->
	<v-btn depressed right fixed style="background:none;" @click="editHash">EDIT</v-btn>
	<!-- </v-col>
	</v-row> -->
	<v-list dense>
		<v-list-item v-for="item in items" :key="item.title" link>
			<v-list-item-icon>
				<v-icon>{{ item.icon }}</v-icon>
			</v-list-item-icon>

			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</v-navigation-drawer>
</template>

<script>
export default {
	data: () => ({
		userName: 'Sunny',
		userEmail: 'in.wise.nature@gmail.com',
		items: [{
				title: 'Home',
				icon: 'mdi-music-accidental-sharp'
			},
			{
				title: 'My Account',
				icon: 'mdi-music-accidental-sharp'
			},
			{
				title: 'Users',
				icon: 'mdi-music-accidental-sharp'
			},
		],
	}),
	methods: {
		editHash() {
			this.$router.push({
				name: 'EditHashtag'
			});
		}
	}
}
</script>
