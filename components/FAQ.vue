<template>
	<div>
		<!-- <div class="text-xs-center mb-3">{{ panel }}</div> -->
		<v-expansion-panels>
			<v-expansion-panel v-model="panel">
				<v-expansion-panel-content>
					<template v-slot:header>
						<div>Item</div>
					</template>
					<v-card>
						<v-card-text
							class="grey lighten-3"
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>


<script>
export default {
	data() {
		return {
			panel: [false, true, true]
		};
	}
};
</script>