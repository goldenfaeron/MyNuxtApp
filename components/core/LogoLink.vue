<template>
	<v-img
		@click="go('/')"
		style="cursor:pointer"
		:height="props.height || '50'"
		:width="props.width || '50'"
		:src="require('@/assets/bupa/logo.png')"
	></v-img>
</template>

<script>
export default {
	props: ["props"]
};
</script>