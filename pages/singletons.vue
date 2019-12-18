<template>
	<div>{{request2}}</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection2 = "homepage";

		let collection = await $axios.get(
			store.state.webRoot +
				"/api/singletons/get/" +
				collection2 +
				"?token=" +
				store.state.masterToken
			// {
			// 	filter: { permalink: route.params.id }
			// }
		);
		// console.log(data1);
		return { request2: collection.data };
	}
};
</script>