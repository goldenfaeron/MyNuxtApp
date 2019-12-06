<template>
	<v-app>
		<!-- LEFT DRAWER  -->
		<v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
			<v-list>
				<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
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

			<!-- <span style="cursor:pointer; max-width:40px" @click="go('/')">
				<v-img :src="require('@/static/favicon2.ico')" contain width="30px" height="30px"></v-img>
			</span>-->

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

		<!-- SITE CONTENT -->
		<v-content>
			<nuxt />
		</v-content>

		<!-- GO UP BUTTON  -->
		<v-btn
			@click="top()"
			v-scroll="onScroll"
			v-show="scrollButton"
			mb-5
			color="pink"
			large
			small
			fixed
			bottom
			right
			fab
		>
			<v-icon>mdi-plus</v-icon>
		</v-btn>

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
		<v-footer :fixed="fixed" app>
			<span>&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			scrollButton: false,
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: "mdi-apps",
					title: "Welcome",
					to: "/"
				},
				{
					icon: "mdi-chart-bubble",
					title: "Developers",
					to: "/developers"
				},
				{
					icon: "mdi-book-open-page-variant",
					title: "Learn Nuxt & Vuetify",
					to: "/learn"
				},
				{
					icon: "mdi-apps",
					title: "API testing",
					to: "/api"
				},

				{
					icon: "mdi-image",
					title: "Image test",
					to: "/image"
				},
				{
					icon: "mdi-currency-usd",
					title: "Products",
					to: "/products"
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
		},
		top() {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		},

		onScroll(e) {
			if (typeof window === "undefined") return;
			const top = window.pageYOffset || e.target.scrollTop || 0;
			this.fab = top > 20;
		}
	}
};
</script>

<style lang="css">
v-navigation-drawer {
	color: red;
}
</style>
