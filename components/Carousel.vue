<template>
	<div>
		<v-carousel cycle hide-controls hide-delimiters>
			<v-carousel-item
				v-for="(item, index) in props"
				:key="index"
				:src="require('@/assets/'+item.src)"
			>
				<v-container v-if="item.title || item.caption" class="fill-height" fluid>
					<v-layout align-end>
						<v-flex xs8 offset-xs2>
							<v-card style="background-color:rgba(0,0,0,0.5)">
								<v-card-text>
									<h3 class="headline">{{item.title}}</h3>
									<div>
										<div>{{item.caption}}</div>
									</div>
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
	props: ["props"],

	data() {
		return {
			lorum:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
		};
	}
};
</script>