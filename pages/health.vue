<template>
	<v-layout>
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<v-container grid-list-sm fluid>
					<v-layout row wrap>
						<v-flex v-for="item in externalContent['entries']" :key="n" xs4 d-flex>
							<v-card flat tile class="d-flex">
								<v-img
									heigh="200"
									width="200"
									:src="webRoot + item.image.path"
									:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+item.image._id+'&w=200&h=200&o=true'"
									aspect-ratio="1"
									class="grey lighten-2"
								>
									<template v-slot:placeholder>
										<v-layout fill-height align-center justify-center ma-0>
											<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
										</v-layout>
									</template>
								</v-img>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</v-flex>
	</v-layout>
</template>


<script>
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { mapMutations } from "vuex";

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
	},
	methods: {
		...mapMutations(["addToCart"])
	}
};
</script>

