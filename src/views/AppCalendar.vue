<template>
<div>
	<v-sheet tile height="50" class="d-flex">
		<v-spacer></v-spacer>
		<!-- <v-menu left bottom>
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon v-bind="attrs" v-on="on">
					<v-icon>mdi-calendar-blank-multiple</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-item v-for="(type, index) in types" :key="index" @click="changeViewType(type.name)">
					<v-list-item-title>
						<v-icon>{{type.icon}}</v-icon>{{type.name}}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<v-menu left bottom>
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon v-bind="attrs" v-on="on">
					<v-icon>mdi-calendar-week-begin</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-item v-for="(weekday, index) in weekdays" :key="index" @click="changeBegin(weekday.value)">
					<v-list-item-title>
						{{weekday.text}}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu> -->

		<!-- <v-spacer></v-spacer>
		<v-btn dense outlined class="ma-2" @click="setToday">
			Today
		</v-btn> -->

	</v-sheet>
	<v-sheet tile height="54" class="d-flex">
		<v-btn icon class="ma-2" @click="$refs.calendar.prev()">
			<v-icon>mdi-calendar-arrow-left</v-icon>
		</v-btn>
		<v-spacer></v-spacer>
		<v-toolbar-title v-if="$refs.calendar">
			<h2>{{ $refs.calendar.title }}</h2>
		</v-toolbar-title>
		<v-toolbar-title v-else>
			<h2>{{ setToday }}</h2>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn icon class="ma-2" @click="$refs.calendar.next()">
			<v-icon>mdi-calendar-arrow-right</v-icon>
		</v-btn>
	</v-sheet>
	<v-sheet height="600">
		<v-calendar ref="calendar" v-model="value" :weekdays="weekday" :type="type" :event-overlap-mode="mode" :event-overlap-threshold="30"></v-calendar>
		<!-- <v-calendar ref="calendar" v-model="value" :weekdays="weekday" :type="type" :events="events" :event-overlap-mode="mode" :event-overlap-threshold="30" :event-color="getEventColor" @change="getEvents"></v-calendar> -->
	</v-sheet>
</div>
</template>

<script>
export default {
	data: () => ({
		type: 'month',
		types: [{
				name: 'month',
				icon: 'mdi-calendar-month'
			},
			{
				name: 'week',
				icon: 'mdi-calendar-week'
			},
			{
				name: 'day',
				icon: 'mdi-calendar-today'
			},
		],
		mode: 'column',
		weekday: [0, 1, 2, 3, 4, 5, 6],
		weekdays: [{
				text: 'Sun - Sat',
				value: [0, 1, 2, 3, 4, 5, 6]
			},
			{
				text: 'Mon - Sun',
				value: [1, 2, 3, 4, 5, 6, 0]
			},
		],
		value: '',
		events: [],
		// colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
		// names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
	}),
	computed: {
		setToday() {
			let d = new Date();
			let year = d.getFullYear();
			let month = d.getMonth() + 1;
			return month + '월 ' + year;
		},
	},
	methods: {
		changeViewType(viewType) {
			this.type = viewType;
		},
		changeBegin(beginDay) {
			this.weekday = beginDay;
		},
		// getEvents({
		// 	start,
		// 	end
		// }) {
		// 	const events = []
		//
		// 	const min = new Date(`${start.date}T00:00:00`)
		// 	const max = new Date(`${end.date}T23:59:59`)
		// 	const days = (max.getTime() - min.getTime()) / 86400000
		// 	const eventCount = this.rnd(days, days + 20)
		//
		// 	for (let i = 0; i < eventCount; i++) {
		// 		const allDay = this.rnd(0, 3) === 0
		// 		const firstTimestamp = this.rnd(min.getTime(), max.getTime())
		// 		const first = new Date(firstTimestamp - (firstTimestamp % 900000))
		// 		const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
		// 		const second = new Date(first.getTime() + secondTimestamp)
		//
		// 		events.push({
		// 			name: this.names[this.rnd(0, this.names.length - 1)],
		// 			start: first,
		// 			end: second,
		// 			color: this.colors[this.rnd(0, this.colors.length - 1)],
		// 			timed: !allDay,
		// 		})
		//
		// 	}
		// 	this.events = events
		// },
		// getEventColor(event) {
		// 	return event.color
		// },
		// rnd(a, b) {
		// 	return Math.floor((b - a + 1) * Math.random()) + a
		// },
	},
}
</script>
