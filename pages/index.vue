<template>
	<div>
		<Carousel :content="carouselContent" cycle="true"></Carousel>
		<v-container grid-list-xs>
			<v-layout column justify-center align-center>
				<div class="display-2 text-uppercase">{{$store.state.site.name}}</div>
				<br />
				<div class="display-1">{{$store.state.site.description}}</div>
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
