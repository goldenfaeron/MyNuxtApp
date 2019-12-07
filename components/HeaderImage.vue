<template>
	<v-img max-height="550" :src="require('@/assets/bupa/diagnosis.jpg')">
		<v-layout align-center justify-center fill-height>
			<v-container>
				<v-layout>
					<v-flex>
						<v-card style="background-color:rgba(232, 228, 227,0.7)">
							<v-card-text>
								<v-layout column align-center>
									<h3 class="display-1 text-xs-center">Bupa Penzance</h3>

									<!-- Ticks  -->
									<v-layout row>
										<div style="margin-right:10px" class="title">
											<v-icon color="primary">mdi-check-outline</v-icon>- NHS
										</div>

										<div style="margin-right:10px" class="title">
											<v-icon color="primary">mdi-check-outline</v-icon>- Private
										</div>
									</v-layout>

									<!-- Location -->
									<div class="title font-weight-light">
										<v-icon>mdi-location</v-icon>High St, Penzance, TR18 2RH
										<a href>View on map</a>
									</div>

									<div class="title font-weight-light">
										<v-icon>mdi-location</v-icon>
										<b>Today</b> - 8:30am to 7:00pm
										<a href>See all opening hours</a>
									</div>

									<!-- Opening hours -->
									<div class="headline">Currently accepting new private patients and dentist referrals</div>
								</v-layout>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>
	</v-img>
</template>

<style lang="css">
.headline {
	text-align: center;
}
</style>