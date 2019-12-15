<template>
	<!-- <div>{{values}}</div> -->
	<v-container grid-list-xs>
		<v-layout column wrap>
			<!-- {{$route.params.id}}
			{{values}}-->
			<v-img :src="$store.state.assetRoot + values.image.path"></v-img>
			<h1>{{values.title}}</h1>
			<h2>{{values.location.address}}</h2>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	// async asyncData({ $axios, route, params, store }) {
	// 	let collection = "bupaPractices";
	// 	let { data } = await $axios.post(
	// 		store.state.webRoot +
	// 			"/api/collections/get/" +
	// 			collection +
	// 			"?token=" +
	// 			store.state.collectionsToken,
	// 		{
	// 			filter: { slug: route.params.id }
	// 		}
	// 	);
	// 	return { values: data.entries[0] };
	// },

	watchQuery: ["page"],

	asyncData({ params, store, $axios, route }) {
		let collection = "bupaPractices";
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

