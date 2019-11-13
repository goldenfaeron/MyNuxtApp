<template>
	<div>
		<Carousel :props="carouselContent"></Carousel>
		<v-container grid-list-xs>
			<v-layout column justify-center align-center>
				<div class="display-2 text-uppercase">Sam and Tobias Cool Website</div>
				<br />
				<div
					class="display-1"
				>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper.</div>
				<br />
				<div class="body-2">{{lorum}}</div>
				<div>{{lorum}}</div>
				<br />
			</v-layout>
			<v-layout>
				<Timeline></Timeline>
			</v-layout>
			<v-layout row wrap>
				<div>{{lorum}}</div>
				<br />
				<div>{{lorum}}</div>
			</v-layout>

			<v-layout my-5 row wrap>
				<Gallery :props="carouselContent"></Gallery>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
	components: {
		Carousel: () => import("@/components/Carousel"),
		Timeline: () => import("@/components/Timeline"),
		Gallery: () => import("@/components/Gallery")
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
			]
		};
	}
};
</script>
