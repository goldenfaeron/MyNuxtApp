<template>
	<div>
		<v-container grid-list-xs>
			<v-layout style="max-width:300px" column wrap>
				{{number}}
				<v-layout row wrap>
					<v-flex v-for="(item, index) in 9" :key="index" xs>
						<v-btn @click="setNumber(index+1)" large color="success">{{index+1}}</v-btn>
					</v-flex>
				</v-layout>

				<v-layout row wrap>
					<v-flex xs6>
						<v-btn color="red">+</v-btn>
					</v-flex>
					<v-flex xs6>
						<v-btn color="blue">-</v-btn>
					</v-flex>
				</v-layout>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			number: 0
		};
	},
	methods: {
		calculate: function(operator) {
			return this.number[0] + this.number[1];
		},
		setNumber: function(val) {
			return (this.number[1] = val);
		}
	}
};
</script>