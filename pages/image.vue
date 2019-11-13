<template>
	<div>
		<v-container>
			{{clicked}}
			<v-layout>
				<v-flex xs10>
					<v-img @click.stop="dialog = true" :src="require('@/assets/bike.jpg')"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<template>
			<v-dialog v-model="dialog" width="800">
				<template v-slot:activator="{ on }">
					<!-- <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn> -->
				</template>

				<v-card>
					<v-img :src="require('@/assets/bike.jpg')"></v-img>
				</v-card>
			</v-dialog>
		</template>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialog: false
		};
	}
};
</script>