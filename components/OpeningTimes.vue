<template>
	<div>
		<v-layout column align-center>
			<v-flex xs12 my-5>
				<div class="display-3">{{title}}</div>
			</v-flex>
			<v-flex xs12>
				<v-icon color="info" large>mdi-store</v-icon>
			</v-flex>
			<v-flex xs12 mt-5>
				<div class="display-1 grey--text">Closed now</div>
			</v-flex>
			<v-flex mb-5>
				<div class="display-1 grey--text">Opens again in 6 hours</div>
			</v-flex>

			<!-- Days -->
		</v-layout>
		<v-layout mt-5 row wrap align-content-space-between justify-space-between>
			<v-flex xs1 v-for="(item, index) in 6" :key="index">
				<div class="title">Monday</div>
				<div class="subheading">10:00 - 18:00</div>
			</v-flex>
			<v-flex xs1>
				<div class="title">
					<b>Sunday</b>
				</div>
				<div class="subheading">Closed</div>
			</v-flex>
		</v-layout>
	</div>
</template>

<style lang="css" scoped>
.v-progress-circular {
	margin: 1rem;
}
</style>

<script>
export default {
	data() {
		return {
			title: "Opening Times",
			values: []
		};
	}
};
</script>