<template>
	<!-- <div>{{values}}</div> -->
	<div>
<v-container grid-list-lg>

		<v-layout row>
			<v-flex xs6 v-for="(item, index) in values" :key="index">
		<v-card >
		<a :href="'/practices/'+item.slug">{{item.title}}</a>

			<v-img
				height="100"
				width="100"
				:src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+item.image._id+'&w=100&h=100&o=true'"
			></v-img>
			<!-- <br />Nuxt link
			<nuxt-link :to="'/practices/'+item.slug">{{item.title}}</nuxt-link>-->
	
			</v-card>
			</v-flex>
		</v-layout>
	</v-container>
			
		</div>
</template>

<script>
export default {
	data() {
		return {
			values: this.$store.state.navigation.entries
		};
	}
};
</script>