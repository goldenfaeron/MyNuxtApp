<template>
	<v-layout row wrap grid-list-xs justify-space-between>
		<v-flex xs12 sm3 mx-2 my-3 v-for="(item, index) in props" :key="index">
			<v-hover>
				<v-img
					slot-scope="{ hover }"
					@click.stop="openDialog(index)"
					:src="require('@/assets/'+item.src)"
				>
					<v-layout row justify-center align-content-space-around>
						<v-icon large class="d-flex" v-if="hover">mdi-arrow-expand</v-icon>
					</v-layout>
				</v-img>
			</v-hover>
			<div class="body-1">{{item.title}}</div>
			<div class="body-2">{{item.caption}}</div>
			{{outside}}
		</v-flex>

		<template>
			<v-dialog v-model="dialog" width="800">
				<v-card>
					<GalleryCarousel :firstImage="selectedImageIndex" :content="props" :cycle="false"></GalleryCarousel>
				</v-card>
			</v-dialog>
		</template>
	</v-layout>
</template>

<script>
export default {
	props: ["props"],
	components: {
		GalleryCarousel: () => import("@/components/gallery/GalleryCarousel")
	},

	data() {
		return {
			outside: false,
			dialog: false,
			selectedImageIndex: 0,
			slideShow: [...this.props]
		};
	},

	methods: {
		openDialog: function(index) {
			this.selectedImageIndex = index;
			this.dialog = !this.dialog;
		}
	}
};
</script>