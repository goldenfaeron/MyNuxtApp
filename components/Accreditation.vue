<template>
	<div>
		<v-sheet elevation="4" class="info">
			<v-continer grid-list-xs>
				<v-layout mx-5 column wrap justify-space-between align-content-space-between>
					<v-flex xs1 my-1>
						<img :src="require('@/assets/bupa/carequality.png')" alt />
					</v-flex>
					<v-flex xs12>{{text}}</v-flex>
					<v-flex xs3>
						<v-btn :to="buttonLink" color="primary">{{buttonText}}</v-btn>
					</v-flex>
				</v-layout>
			</v-continer>
		</v-sheet>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text:
				"The latest check of this service used our new approach to inspection.",

			buttonText: "See the latest report",
			buttonLink: "/care-homes"
		};
	}
};
</script>