<template>
    <div>
        <p>hello this is a text lalala</p>
    </div>
</template>
<script>
export default {
    async asyncData({ $axios }) {
		//Set collection here
		let collection = "photoShop";

		const externalContent = await $axios.$get(
			"https://cockpit.hackmylanguage.com/api/collections/get/" +
				collection +
				"?token=$store.state.site.cocpit.bupaPracticesToken"
		);
		return { externalContent };
	},

}
</script>