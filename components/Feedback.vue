<template>
	<div>
		<v-layout column align-center>
			<v-flex xs12 my-5>
				<div class="display-3">{{title}}</div>
			</v-flex>
			<v-layout row my-5>
				<v-flex d-flex align-center xs12 sm6 md4 v-for="(item, index) in values" :key="index">
					<div style="padding:auto" class="text-xs-center display-3">
						<v-progress-circular
							:rotate="360"
							:size="200"
							:width="15"
							:value="item.percent"
							:color="item.color"
						>{{ item.percent }}%</v-progress-circular>
					</div>
					<div style="text-align:center" class="subheading">{{item.text}}</div>
				</v-flex>
			</v-layout>
			<v-flex xs12 my-5>
				<v-btn :to="buttonLink" color="primary">{{buttonText}}</v-btn>
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
			title: "Patient Feedbck",
			values: [
				{
					color: "primary lighten-1",
					percent: 50,
					text:
						"Of our patients surveyed say ‘I feel involved in all decisions about my care."
				},
				{
					color: "secondary lighten-1",
					percent: 80,
					text:
						"Of our patients surveyed would recommend our practice to others."
				},
				{
					color: "accent ",
					percent: 90,
					text:
						"Of our patients surveyed say ‘The quality of their treatment was good."
				}
			],
			buttonText: "Leave Feedback",
			buttonLink: "/feedback"
		};
	}
};
</script>