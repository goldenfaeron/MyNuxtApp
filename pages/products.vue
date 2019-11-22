<template>
	<div>
		<!-- <div class="display-2">Result:{{ip}}</div> -->
		<v-container grid-list-lg>
			<div class="display-4">Nice Houses for sale</div>
				
			<v-layout row space>
				<v-flex xs12 md4 my5 v-for="(item, index) in externalContent['entries']" :key="index">
					<v-card>
						<v-carousel height="300" cycle>
							<v-carousel-item :src="assetRoot + item.image.path" ></v-carousel-item>
							<v-carousel-item v-for="(galleryItem, index) in item.gallery" :key="index" :src="webRoot + galleryItem.path"></v-carousel-item>
						</v-carousel>
						<v-card-title primary-title>
							<div>
								<h3 class="headline mb-0">{{item.title}}</h3>
								<br />
								<p>{{item.location.address}}</p>
								<br />
								<div>{{item.description}}</div>
								<br />
								<p v-if="item.disabilityAccess"><v-icon>mdi-wheelchair-accessibility</v-icon> Disability Access</p>
								<p v-else><v-icon>mdi-stairs</v-icon> No Disability Access</p>
								<p v-if="item.internetConnection"><v-icon>mdi-wifi</v-icon> Internet Conection</p>
								<p v-else><v-icon>mdi-wifi-off</v-icon> No Internet Conection</p>
								<p v-if="item.schoolsNearby"><v-icon>mdi-school</v-icon> Schools Nearby</p>
								<p v-else><v-icon>mdi-school-outline</v-icon> No Schools Nearby</p>
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
			assetRoot: "https://cockpit.hackmylanguage.com/storage/uploads",
			webRoot: "https://cockpit.hackmylanguage.com"
		};
	},
	head() {
		return {
			title: "Beautiful houses for sale ",
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
</script>