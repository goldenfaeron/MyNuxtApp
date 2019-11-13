<template>
	<div>
		<!-- <v-container> -->
		<v-layout row wrap grid-list-xs justify-space-between>
			<v-flex xs3 mx-2 my-3 v-for="(item, index) in props" :key="index">
				<v-img :src="require('@/assets/'+item.src)"></v-img>
				<div class="body-1">{{item.title}}</div>

				<div class="body-2">{{item.caption}}</div>
			</v-flex>
		</v-layout>
		<!-- </v-container> -->
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>