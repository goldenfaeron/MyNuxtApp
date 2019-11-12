<template>
	<div>
		<div class="display-4">API testing</div>
		<!-- <div class="display-2">Result:{{ip}}</div> -->
		<v-container grid-list-xs>
			<v-layout row>
				<v-flex xs12 my5 v-for="(item, index) in ip" :key="index">
					<v-card>
						<v-card-media src="src" height="200px"></v-card-media>
						<v-card-title primary-title>
							<div>
								<h3 class="headline mb-0">{{item.name}}</h3>
								<div>description</div>
							</div>
						</v-card-title>
						<v-card-actions>
							<v-btn flat color="primary">text</v-btn>
							<v-btn flat color="primary">text</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios }) {
		const ip = await $axios.$get(
			"https://jsonplaceholder.typicode.com/comments"
		);
		return { ip };
	}
};
</script>