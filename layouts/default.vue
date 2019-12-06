<template>
	<v-app>
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
		<v-app-bar :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-btn icon @click.stop="miniVariant = !miniVariant">
				<v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
			</v-btn>
			<v-btn icon @click.stop="clipped = !clipped">
				<v-icon>mdi-application</v-icon>
			</v-btn>
			<v-btn icon @click.stop="fixed = !fixed">
				<v-icon>mdi-minus</v-icon>
			</v-btn>
			<v-toolbar-title v-text="title" />
			<v-spacer />
			<v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>mdi-menu</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<nuxt />
		</v-content>
		<v-navigation-drawer v-model="rightDrawer" right temporary fixed>
			<v-list>
				<v-list-item @click.native="right = !right">
				    <v-badge>
      					<template v-slot:badge>
        					<span>{{$store.state.cart.length}}</span>
      					</template>	
					
							<v-btn icon>
							<v-icon class="mdi-dark mdi-36px">mdi-cart</v-icon>
						</v-btn>
						
				    </v-badge>

					<v-list-item-title style="margin-left:30px;">Shopping cart</v-list-item-title>
				</v-list-item>
				<v-layout column space>
				<v-flex xs12 md4 my5 v-for="(item, index) in $store.state.cart" :key="index">
					<v-card :color="item.color">
						<v-card-title primary-title>
							<div>
								<h3 class="headline mb-0">{{item.title}}</h3>
							</div>
						</v-card-title>
						<v-img aspect-ratio="1" max-height="500" :src="webRoot + item.image.path"></v-img>
						<v-card-actions>
						<!--<v-btn color="white" @click="deleteFromCart(item)" text>Delete</v-btn>-->
						</v-card-actions>
					</v-card>
				</v-flex>
				</v-layout>
			</v-list>
		</v-navigation-drawer>
		<v-footer :fixed="fixed" app>
			<span>&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			assetRoot: "https://cockpit.hackmylanguage.com/storage/uploads",
			webRoot: "https://cockpit.hackmylanguage.com",
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
					title: "Inspire",
					to: "/inspire"
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
				},
				{
					icon: "mdi-camera",
					title: "Photo Shop",
					to: "/photoshop"
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: "Vuetify.js"
		};
	}
};
</script>
