<template>
	<div>
		<v-container grid-list-lg>
			<v-layout>
				<v-flex xs12 md6>
					<v-card>
						<v-img max-height="200" :src="require('@/assets/bike.jpg')"></v-img>
						<v-card-title primary-title>
							<div>
								<h3 class="headline">headline</h3>
								<div>description</div>
							</div>
						</v-card-title>
						<v-list>
							<v-list-item>
								<v-list-item-action avatar>
									<v-icon>mdi-mail</v-icon>
								</v-list-item-action>
								<v-list-item-content>Contact</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>