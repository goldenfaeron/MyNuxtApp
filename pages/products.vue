<template>
	<div>
		<!-- <div class="display-2">Result:{{ip}}</div> -->
		<v-container grid-list-lg>
			<div class="display-4">Nice Houses for sale</div>
			<v-layout row space>
				<v-flex xs12 md4 my5 v-for="(item, index) in externalContent['entries']" :key="index">
					<v-card>
						<v-img aspect-ratio="1.7" max-height="300" :src="assetRoot + item.image.path"></v-img>
						<v-card-title primary-title>
							<div>
								<h3 class="headline mb-0">{{item.title}}</h3>
								<br />
								<div>{{item.description}}</div>
								<br />
								<div class="display-1">£{{item.price}}</div>

								<iframe
									width="100%"
									height="300"
									:src="'https://maps.google.com/maps?width=100%&amp;height=900&amp;hl=en&amp;q='+item.location.address+'()&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'"
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"
								>
									<a href="https://www.maps.ie/map-my-route/"></a>
								</iframe>

								<br />
								<br />
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
		{{ip}}
	</div>
</template>

<script>
export default {
	async asyncData({ $axios }) {
		//Set collection here
		let collection = "houses";

		const externalContent = await $axios.$get(
			"https://cockpit.hackmylanguage.com/api/collections/get/" +
				collection +
				"?token=d2e55cc7bc1ba0b4f7d66c43afb30a"
		);
		return { externalContent };
	},

	data() {
		return {
			assetRoot: "https://cockpit.hackmylanguage.com/storage/uploads"
		};
	}
};
</script>