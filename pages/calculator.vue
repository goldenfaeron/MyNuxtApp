<template>
	<div>
		<v-container grid-list-xs>
			<div class="display-3">{{number}}</div>
			<div class="display-3">{{solution}}</div>

			<v-layout style="max-width:300px" column wrap>
				<v-layout row wrap>
					<v-flex v-for="(item, index) in 9" :key="index" xs>
						<v-btn @click="setNumber(index+1)" large color="success">{{index+1}}</v-btn>
					</v-flex>
					<v-flex>
						<v-btn @click="setNumber('.')" color="success">.</v-btn>
					</v-flex>
				</v-layout>

				<v-layout row wrap>
					<v-flex xs3>
						<v-btn @click="setNumber('+')" color="red">+</v-btn>
					</v-flex>
					<v-flex xs3>
						<v-btn @click="setNumber('-')" color="blue">-</v-btn>
					</v-flex>
					<v-flex xs3>
						<v-btn @click="solve()" color="pink">=</v-btn>
					</v-flex>
					<v-flex xs3>
						<v-btn @click="setNumber('/')" color="teal">÷</v-btn>
					</v-flex>
					<v-flex xs3 grow>
						<v-btn grow @click="clear()" color="cyan">C</v-btn>
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
			number: "",
			equation: ""
		};
	},
	methods: {
		setNumber: function(val) {
			this.number = this.number + val;
		},
		solve: function() {
			this.number = "" + eval(this.number);
		},
		clear: function() {
			this.number = "";
		}
	}
};
</script>