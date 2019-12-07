<template>
	<div>
		<v-toolbar dark color="secondary">
			<!-- Show larger sizes -->
			<v-layout wrap hidden-sm-and-down>
				<v-btn
					x-large
					color="secondary"
					depressed
					flat
					tile
					v-for="(item, index) in 5"
					:key="index"
				>Button {{index}}</v-btn>
			</v-layout>
			<!-- Show small -->
			<v-layout wrap hidden-md-and-up hidden-xs-only>
				<v-btn
					color="secondary"
					depressed
					flat
					tile
					v-for="(item, index) in 5"
					:key="index"
				>Button {{index}}</v-btn>
			</v-layout>

			<v-toolbar-items>
				<v-layout hidden-sm-and-up>
					<v-flex>
						<v-btn icon>
							<v-icon>mdi-menu</v-icon>
						</v-btn>MENU
					</v-flex>
				</v-layout>
			</v-toolbar-items>
		</v-toolbar>
		<HeaderImage></HeaderImage>
		<Mission></Mission>

		<v-container grid-list-xs>
			<v-divider></v-divider>
			<v-layout my-5 column justify-center align-center>
				<About></About>
			</v-layout>
		</v-container>

		<Assurance></Assurance>
		<v-img :src="require('@/assets/bupa/map.png')"></v-img>
	</div>
</template>


<script>
import Logo from "~/components/Logo.vue";

export default {
	components: {
		About: () => import("@/components/About"),
		Assurance: () => import("@/components/Assurance"),
		Carousel: () => import("@/components/Carousel"),
		Gallery: () => import("@/components/gallery/Gallery"),
		HeaderImage: () => import("@/components/HeaderImage"),
		Mission: () => import("@/components/Mission"),
		Timeline: () => import("@/components/Timeline")
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
