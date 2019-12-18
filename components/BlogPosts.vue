<template>
	<v-layout column>
		<h1>My adventure blog</h1>
		<v-flex my-5 xs12 v-for="(item, index) in props" :key="index">
			<v-container grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12 md3>
						<v-img
							height="150"
							:src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+item.image._id+'&w=250&h=250&o=true'"
						>
							<!-- Loading reticycle -->
							<template v-slot:placeholder>
								<v-layout fill-height align-center justify-center ma-0>
									<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
								</v-layout>
							</template>
						</v-img>
					</v-flex>

					<v-flex xs12 md9>
						<h2>{{item.title}}</h2>
						<br />
						{{item.preview.substr(0,200)}}...
						<br />
						<br />

						<!-- <v-btn color="primary">
							<a :href="'/blog/'+item.slug">Read more</a>
						</v-btn>-->
						<v-btn color="primary lighten-2" nuxt :to="'/blog/'+item.slug" class="accent--text">Read more</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
			<br />
			<v-divider></v-divider>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	props: ["props"]
};
</script>