<template>
	<div>
		<v-img :src="require('@/assets/bupa/chair.jpg')">
			<v-container>
				<v-layout align-end>
					<v-flex xs12>
						<v-card style="background-color:rgba(0,0,0,0.5)">
							<v-card-text>
								<h3 class="headline">Bupa Penzance</h3>
								<div>
									<div>
										NHS Private
										High St, Penzance, TR18 2SX View on map
										Today - 8:30am to 7:00pm See all opening hoursCurrently accepting new private patients and dentist referrals
									</div>
								</div>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-img>
		<v-toolbar dark color="primary" extended>
			<v-toolbar-items>
				<v-btn color="primary" flat v-for="(item, index) in 5" :key="index">Button {{index}}</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-container grid-list-xs>
			<v-layout column justify-center align-center>
				<div>
					Bupa Dental Care Penzance is on the High Street in the centre of the Cornish town of Penzance, just a five-minute walk from the beach. In our modern practice, we offer NHS and private dental services, and emergency appointments. We’re accepting new private patients to register, as well as referrals from other dentists for implants.
					Our location is not only convenient for our patients but for efficiency, as we can offer a quick turnaround on any lab work since we use a local provider on the next street.
					Our team of dentists are experienced practitioners and include an implant dentist. They’re all supported by a large team of friendly nurses.
					Dental treatments
					At Bupa Dental Care Penzance, we offer a range of general dental services, such as check-ups, fillings and hygiene appointments. We also offer a range of cosmetic dentistry services. We place veneers and are experienced in fitting dental implants. And we offer teeth whitening solutions, including whitening kits such as Philips ZOOM!
					Hours to suit you
					We know our patients lead busy lives, so we offer extended opening hours. We stay open until 7pm on three evenings a week. And if you have an urgent dental problem, we can offer you an emergency appointment. Just give us a call to see when we can help you.
					Accessibility
					Bupa Dental Care Penzance is wheelchair friendly.
					How to find Bupa Dental Care Penzance
					We’re on the High Street in Penzance, less than a 10-minute walk from Penzance Train Station and a five-minute walk to the beach.
				</div>
			</v-layout>

			<v-layout my-5 row wrap>
				<Gallery :props="galleryContent"></Gallery>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
import Logo from "~/components/Logo.vue";

export default {
	components: {
		Carousel: () => import("@/components/Carousel"),
		Timeline: () => import("@/components/Timeline"),
		Gallery: () => import("@/components/gallery/Gallery")
	},
	data() {
		return {
			lorum:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			carouselContent: [
				{
					src: "bike.jpg",
					title: "Nice bike",
					caption:
						"Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
				},
				{
					src: "camping.jpg",
					title: "Camping is fun",
					caption:
						"Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
				},
				{
					src: "mine.jpg",
					title: "Feet bathing in water",
					caption:
						"Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
				}
			],

			galleryContent: [
				{
					src: "tent.jpg",
					title: "Camping is amazing!",
					caption:
						"Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
				},
				{
					src: "river.jpg",
					title: "I love rivers so much",
					caption:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper."
				},
				{
					src: "roadtrip.jpg",
					title: "Taking a roadtrip through morocco",
					caption:
						"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
				}
			]
		};
	}
};
</script>
