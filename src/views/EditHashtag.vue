<template>
<v-container>
	<v-row>
		<v-col cols="9">
			<v-text-field label="✏ To do  " placeholder="take a walk" outlined v-model="newItem">
			</v-text-field>
		</v-col>
		<v-col cols="1">
			<v-btn dark color="#FFCCCC" height="60%" @click="addTodo">
				<v-icon>
					mdi-plus
				</v-icon>
			</v-btn>
		</v-col>
	</v-row>

	<v-list dense>
		<v-list-item-group color="#FF6666">
			<transition-group name="list" tag="ul">
				<v-list-item v-for="(item, i) in items" :key="i">
					<v-list-item-content>
						<v-icon>mdi-music-accidental-sharp</v-icon>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title v-text="item"></v-list-item-title>
					</v-list-item-content>
					<v-spacer></v-spacer>
					<v-spacer></v-spacer>
					<v-spacer></v-spacer>
					<v-list-item-action>
						<v-list-item-icon @click="editHash(item, i)">
							<v-icon>mdi-lead-pencil</v-icon>
						</v-list-item-icon>
					</v-list-item-action>
				</v-list-item>
			</transition-group>
		</v-list-item-group>
	</v-list>
</v-container>
</template>

<script>
export default {
	data: () => ({
		items: ['meditation', 'journal', 'books'

		]
	}),
	methods: {
		editHash(item, i) {
			console.log('editHash method', item, i)
		}
	}
}
</script>
