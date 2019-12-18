<template>
	<div>
		<HeaderImage :props="singleton.header_image"></HeaderImage>

		<Mission :props="singleton.icons"></Mission>

		<!-- <Practices></Practices> -->

		<!-- ABOUT -->
		<v-container grid-list-xs>
			<v-divider></v-divider>
			<v-layout my-5 column>
				<h1>{{singleton.title}}</h1>
				<About :props="singleton.text"></About>
			</v-layout>
		</v-container>

		<v-container>
			<Gallery :props="singleton.gallery"></Gallery>
		</v-container>

		<v-container>
			<BlogPosts class="section" :props="collection"></BlogPosts>
		</v-container>
	</div>
</template>


<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "blog";
		let singleton = "home";

		//Get collection
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 5, sort: { _created: -1 } }
		);

		//Get singleton
		let request2 = await $axios.get(
			store.state.webRoot +
				"/api/singletons/get/" +
				singleton +
				"?token=" +
				store.state.singletonsToken
		);
		return {
			collection: request1.data.entries,
			singleton: request2.data
		};
	},

	components: {
		About: () => import("@/components/About"),
		BlogPosts: () => import("@/components/BlogPosts"),
		Gallery: () => import("@/components/Gallery"),
		Feedback: () => import("@/components/Feedback"),
		HeaderImage: () => import("@/components/HeaderImage"),
		Mission: () => import("@/components/Mission"),
		OpeningTimes: () => import("@/components/OpeningTimes")
	},
	data() {
		return {
			ids: [],
			pageBar: {
				text: "Call us on 017583 34234",
				componentIds: ["About", "Map", "FAQ", "Practises"]
			}
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
	},

	head() {
		return {
			title: "Home",
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: "description",
					name: "description",
					content: "My custom description"
				}
			]
		};
	}
};
</script>


<style lang="css">
.section {
	margin: 4vh 0;
}
</style>
