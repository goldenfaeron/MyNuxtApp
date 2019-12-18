<template>
	<v-img max-height="550" :src="$store.state.assetRoot + props.path">
		<v-layout align-center justify-center fill-height>
			<v-container>
				<v-layout>
					<v-flex>
						<v-card style="background-color:rgba(232, 228, 227,0.7)">
							<v-card-text>
								<v-layout column align-center>
									<h3 class="display-1 text-xs-center">{{heading}}</h3>

									<!-- Icon Set  -->
									<v-layout row>
										<div
											v-for="(item, index) in iconSet"
											:key="index"
											style="margin-right:10px"
											class="title"
										>
											<v-icon color="success">{{item.icon}}</v-icon>
											- {{item.text}}
										</div>
									</v-layout>

									<!-- Location -->
									<div class="title font-weight-light">
										<v-icon color="secondary">mdi-map-marker</v-icon>
										{{address}}
										<a style="text-decoration:underline" @click.stop="scroll('Map')">View on map</a>
									</div>

									<div class="title font-weight-light">
										<v-icon color="secondary">mdi-store</v-icon>
										{{openingTimes}}
										<a href>See all opening hours</a>
									</div>

									<!-- Opening hours -->
									<div class="headline">
										<v-icon color="success">mdi-check-outline</v-icon>
										{{subHeading}}
									</div>
								</v-layout>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>
	</v-img>
</template>

<script>
export default {
	props: ["props"],
	data() {
		return {
			image: require("@/assets/bupa/diagnosis.jpg"),
			heading: "Bupa Penzance",
			iconSet: [
				{ icon: "mdi-check-outline", text: "NHS" },
				{ icon: "mdi-check-outline", text: "Private" }
			],
			address: "High St, Penzance, TR18 2RH",
			openingTimes: "Today - 8:30am to 7:00pm",
			subHeading:
				"Currently accepting new private patients and dentist referrals"
		};
	},

	methods: {
		scroll(to) {
			var el = document.getElementById(to);
			if (el) {
				el.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			}
		}
	}
};
</script>

