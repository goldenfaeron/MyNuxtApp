<template>
	<div>
		<v-container grid-list-lg>
			<div class="display-4">Nice Artworks for sale</div>
			<v-layout row space>
				<v-flex xs12 md4 my5 v-for="(item, index) in externalContent['entries']" :key="index">
						<v-card :color="item.color">      
                    	<v-card-title primary-title>
							<div>
								<h3 class="headline mb-0">{{item.title}}</h3>
                                <br>
                               <v-rating v-model="item.rating" background-color="red" color="red" readonly="true"></v-rating>
                                <p>Rating: <v-icon v-for="(rating, index) in item.rating" :key="index">mdi-star</v-icon><v-icon v-for="(nonrated, index) in 5-item.rating" :key="index">mdi-star-outline</v-icon></p>
							</div>
						</v-card-title>                      
                    <v-img aspect-ratio="1" max-height="500" :src="webRoot + item.image.path"></v-img>
                    <v-card-actions>
						<v-btn color="white" text>Buy</v-btn>
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
		//Set collection here
		let collection = "photoShop";

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
			title: "Photo Shop ",
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