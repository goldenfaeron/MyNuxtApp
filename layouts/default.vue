<template>
	<v-app>
		<!-- LEFT DRAWER  -->
		<v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
			<v-list>
				<v-list-item v-for="(item, i) in navigation" :key="i" :to="item.to" router exact>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- NAVBAR  -->
		<v-app-bar class="primary white--text" :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />

			<v-toolbar-title
				style="cursor:pointer;"
				@click="go('/')"
				class="toolbar-title title-cursive"
				v-text="$store.state.site.name"
			/>
			<v-spacer />
			<v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>mdi-menu</v-icon>
			</v-btn>
		</v-app-bar>

		<v-content>
			<!-- navigation -->
			<v-toolbar dark color="white">
				<v-container grid-list-xs>
					<v-layout row>
						<v-flex xs2 sm1>
							<v-img max-height height="50" width="50" :src="require('@/assets/bupa/logo.png')"></v-img>
						</v-flex>
						<v-flex xs2 sm1 v-for="(item, i) in navigation" :key="i">
							<nuxt-link :to="item.to">{{item.title}}</nuxt-link>
						</v-flex>
					</v-layout>
				</v-container>
			</v-toolbar>

			<!-- Site Content -->
			<nuxt />

			<!-- Footer -->
			<v-footer>
				<span>&copy; 2019</span>
			</v-footer>
		</v-content>

		<!-- GO UP BUTTON  -->
		<ScrollUpButton></ScrollUpButton>

		<!-- RIGHT DRAWER  -->
		<v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
			<v-list>
				<v-list-item @click.native="right = !right">
					<v-list-item-action>
						<v-icon light>mdi-repeat</v-icon>
					</v-list-item-action>
					<v-list-item-title>Switch drawer (click me)</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- FOOTER  -->
	</v-app>
</template>

<script>
export default {
	components: {
		ScrollUpButton: () => import("@/components/core/ScrollUpButton")
	},

	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			navigation: [
				{
					icon: "mdi-apps",
					title: "Welcome",
					to: "/"
				},
				{
					icon: "mdi-chart-bubble",
					title: "Health",
					to: "/health"
				},
				{
					icon: "mdi-book-open-page-variant",
					title: "Dental",
					to: "/dental"
				},
				{
					icon: "mdi-apps",
					title: "Care Homes",
					to: "/care-homes"
				},

				{
					icon: "mdi-image",
					title: "Travel",
					to: "/travel"
				},
				{
					icon: "mdi-currency-usd",
					title: "Health Information",
					to: "/health-information"
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false
		};
	},
	methods: {
		go(route) {
			this.$router.push(route);
		},
		goBack() {
			this.$router.back();
		}
	}
};
</script>

<style lang="css">
v-navigation-drawer {
	color: red;
}
</style>
