<template>
	<div>
		<Carousel :props="content"></Carousel>
		<v-container grid-list-xs>
			<v-layout column justify-center align-center></v-layout>
		</v-container>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
	components: {
		Carousel: () => import("@/components/Carousel"),
		Logo,
		VuetifyLogo
	},
	data() {
		return {
			content: [
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
