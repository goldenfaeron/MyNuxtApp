<template>
	<div>
		<v-parallax max-height="300" :src="$store.state.assetRoot + values.image.path"></v-parallax>
		<v-container>
			<v-layout column>
				<v-flex my-5 xs12>
					<h1>{{values.title}}</h1>
					<div v-html="values.content"></div>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex xs12>
					<Gallery :props="values.gallery"></Gallery>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>

<script>
export default {
	components: {
		Practices: () => import("@/components/Practices"),
		Gallery: () => import("@/components/Gallery")
	},

	//Get data for this page
	asyncData({ params, store, $axios, route }) {
		let collection = "blog";
		return $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken,
				{
					filter: { slug: route.params.id }
				}
			)
			.then(res => {
				return { values: res.data.entries[0] };
			});
	},
	data() {},
	head() {
		return {
			title: this.values.title,
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

// export default {
// 	async asyncData({ $axios, route, params}) {
// 		let collection = "bupaPractises";
// 		let { data } = await $axios.post(
// 			$store.state.webRoot +
// 				"/api/collections/get/" +
// 				collection +
// 				"?token=" +
// 				$store.state.bupaPractisesToken,
// 			{
// 				filter: { permalink: route.params.id }
// 			}
// 		);
// 		return { values: data.entries[0] };
// 	},
// 	data() {}
// };
</script>

