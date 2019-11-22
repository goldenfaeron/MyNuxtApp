<template>
	<div>
		<v-carousel ref="carousel" @input="sayHello()" :cycle="cycle" hide-controls>
			<v-carousel-item
				v-for="(item, index) in newArray"
				:key="index"
				:src="require('@/assets/'+item.src)"
			>
				<v-container v-if="item.title || item.caption" class="fill-height" fluid>
					<v-layout align-end>
						<v-flex xs12>
							<v-card style="background-color:rgba(0,0,0,0.5)">
								<v-card-text>
									<h3 class="headline">{{item.title}}</h3>
									{{item.caption}}
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script>
export default {
	props: {
		content: Array,
		cycle: Boolean,
		firstImage: Number //index position
	},

	data() {
		return {};
	},

	computed: {
		newArray: function() {
			// var image = this.content[this.firstImage];
			let newArray1 = [...this.content]; //make clone of array
			newArray1.splice(this.firstImage, 1); //remove image
			newArray1.unshift(this.content[this.firstImage]);
			return newArray1; // return new array with selected image pushed to front
		}
	}
};
</script>