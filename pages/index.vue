<template>
	<div>
		<HeaderImage></HeaderImage>
		<v-toolbar dark color="secondary">
			<!-- Show larger sizes -->
			<v-layout wrap hidden-sm-and-down>
				<v-btn
					@click="scroll(item)"
					x-large
					color="secondary"
					depressed
					v-for="(item, index) in pageBar.componentIds"
					:key="index"
				>{{item}}</v-btn>
				<div class="accent--text">{{pageBar.text}}</div>
			</v-layout>
			<!-- Show small -->
			<v-layout wrap hidden-md-and-up hidden-xs-only>
				<v-btn
					color="secondary"
					depressed
					flat
					tile
					v-for="(item, index) in 5"
					:key="index"
				>Button {{index}}</v-btn>
			</v-layout>

			<v-toolbar-items>
				<v-layout hidden-sm-and-up>
					<v-flex>
						<v-btn icon>
							<v-icon>mdi-menu</v-icon>
						</v-btn>MENU
					</v-flex>
				</v-layout>
			</v-toolbar-items>
		</v-toolbar>

		<Mission></Mission>
		<!-- {{$store.state.navigation}}/ -->

		<!-- <Practices></Practices> -->

		<!-- ABOUT -->
		<v-container grid-list-xs>
			<v-divider></v-divider>
			<v-layout my-5 column>
				<About id="About"></About>
			</v-layout>
		</v-container>

		<!-- ASSURANCE -->

		<Assurance></Assurance>
		<!-- MAP -->
		<Map id="Map" class="component"></Map>

		<!-- OPENING TIMES -->
		<v-container grid-list-xs>
			<OpeningTimes class="section"></OpeningTimes>
			<v-divider class="section"></v-divider>
		</v-container>

		<!-- PRICES -->
		<v-container>
			<Prices id="Prices" class="section"></Prices>
		</v-container>

		<!-- ACCREDITATION AND FAQ -->
		<v-container grid-list-lg>
			<v-layout row my-5>
				<v-flex xs12 sm5 md8>
					<Accreditation></Accreditation>
				</v-flex>
				<v-flex xs12 sm5 md4>
					<FAQ id="FAQ"></FAQ>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Feedback -->
		<v-container>
			<Feedback class="section"></Feedback>
		</v-container>

		<v-container grid-list-xs>
			<Practices :props="request"></Practices>
		</v-container>
	</div>
</template>


<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "bupaPractices";
		let { data } = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken
			// {
			// 	filter: { permalink: route.params.id }
			// }
		);
		return { request: data.entries };
	},

	components: {
		About: () => import("@/components/About"),
		Accreditation: () => import("@/components/Accreditation"),
		Assurance: () => import("@/components/Assurance"),
		FAQ: () => import("@/components/FAQ"),
		Feedback: () => import("@/components/Feedback"),
		HeaderImage: () => import("@/components/HeaderImage"),
		Map: () => import("@/components/Map"),
		Mission: () => import("@/components/Mission"),
		NavigationList: () => import("@/components/NavigationList"),
		OpeningTimes: () => import("@/components/OpeningTimes"),
		Practices: () => import("@/components/Practices"),
		Prices: () => import("@/components/Prices")
	},
	data() {
		return {
			ids: [],
			pageBar: {
				text: "Call us on 017583 34234",
				componentIds: ["About", "Map", "FAQ", "Practises"]
			}
		};
	},

	methods: {
		scroll(to) {
			var el = document.getElementById(to);
			if (el) {
				el.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			}
		}
	}
};
</script>


<style lang="css">
.section {
	margin: 4vh 0;
}
</style>
