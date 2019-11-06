<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<v-img :src="require('@/assets/slavery.png')"></v-img>
				<v-card>
					<v-card-text>.png image from assets</v-card-text>
				</v-card>
			</v-flex>

			<v-flex xs12>
				<v-img :src="require('@/assets/butter.jpeg')"></v-img>
				<v-card>
					<v-card-text>.jpeg image from assets</v-card-text>
				</v-card>
			</v-flex>
			<v-flex xs12>
				<v-img
					src="https://www.telegraph.co.uk/content/dam/news/2016/05/14/97887634_Cap_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450"
				></v-img>
				<v-card>
					<v-card-text>image from external URL</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>