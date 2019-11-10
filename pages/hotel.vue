	<template>
	<div>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<Room class="elevation-10" :props="rooms[1]"></Room>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-md>
			<v-layout row wrap just>
				<v-flex xs3 v-for="(room, index) in rooms" :key="index">
					<Room :props="room"></Room>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: {
		Room: () => import("@/components/products/Room")
	},
	data() {
		return {
			rooms: [
				{ name: "Presidents Sweet ", description: "Super nice" },
				{ name: "Boring room ", description: "Just so boring" },
				{ name: "Shitty room ", description: "Quite cool actually" },
				{ name: "Garbage room ", description: "Just total garbage" }
			]
		};
	}
};
</script>
