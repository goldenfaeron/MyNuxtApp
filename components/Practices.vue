<template>
	<!-- <div>{{values}}</div> -->
	<div>
		<div v-for="(item, index) in props" :key="index">
			<nuxt-link
				no-prefetch
				:to="{path: 'practices/' +item.slug , params: { id:item.slug } }"
			>{{item.title}}</nuxt-link>
			<!-- <div @click="go('/practices/' + item.slug)">{{item.title}}</div> -->
			<br />
			<br />
		</div>
	</div>
</template>

<script>
export default {
	props: ["props"],
	data() {},
	methods: {
		go(route) {
			this.$router.push(route);
		}
	}
};
</script>