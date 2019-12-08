<template>
	<div class="assurance">
		<v-container fluid>
			<v-layout mx-5 my-5 row wrap>
				<v-flex v-for="(item, index) in values" :key="index" xs12 sm6 md4>
					<div class="display-1 font-weight-thin">
						<v-icon large color="secondary">{{item.icon}}</v-icon>
						<v-spacer></v-spacer>
						{{item.text}}
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
	<!-- We're accepting dentist referrals -->
	<!--  -->
</template>

<script>
export default {
	data() {
		return {
			values: [
				{
					icon: "mdi-ambulance",
					text: "Emergency Appointments"
				},
				{
					icon: "mdi-wheelchair-accessibility",
					text: "Wheelchair Friendly"
				},
				{
					icon: "mdi-clipboard-account-outline",
					text: "We're accepting dentist's referrals"
				}
			]
		};
	}
};
</script>

<style lang="css">
.assurance {
	text-align: center;
}
</style>

