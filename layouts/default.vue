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

				<v-list-item v-for="(item, index) in $store.state.navigation.entries" :key="index" router exact>
					<v-list-item-action>
						<v-icon>mdi-hospital</v-icon>
					</v-list-item-action>

					<v-list-item-content>
						<a :href="'/practices/' + item.slug">
							<v-list-item-title>{{item.title}}</v-list-item-title>
						</a>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- NAVBAr  -->
		<v-app-bar class="primary accent--text" :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon color="accent lighten-1" @click.stop="drawer = !drawer" />

			<v-toolbar-title
				style="cursor:pointer;"
				@click="go('/')"
				class="toolbar-title title-cursive"
				v-text="$store.state.name"
			/>
			<v-spacer />
			<!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>mdi-menu</v-icon>
			</v-btn>-->

			<div class="accent--text">
				Contact Us
				<v-icon mr-3 color="accent lighten-1">mdi-phone-message</v-icon>
			</div>
		</v-app-bar>

		<v-content>
			<!-- navigation -->

			<!-- Site Content -->
			<nuxt />

			<!-- Footer -->
			<v-footer height="auto" color="primary">
				<v-layout justify-center row wrap>
					<v-container>
						<v-layout row wrap align-center justify-center>
							<v-flex class="accent--text" v-for="(item, index) in navigation" :key="index">
								<nuxt-link :to="item.to">
									<div class="accent--text">{{item.title}}</div>
								</nuxt-link>
							</v-flex>
						</v-layout>
					</v-container>

					<v-flex primary lighten-2 py-3 text-xs-center accent--text xs12>
						&copy;2018 —
						<strong>Vuetify</strong>
					</v-flex>
				</v-layout>
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
		LogoLink: () => import("@/components/core/LogoLink"),
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
					title: "Blog",
					to: "/blog"
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
</style>
