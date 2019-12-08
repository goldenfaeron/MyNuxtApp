<template>
	<div>
		<v-container>
			<v-layout align-center justify-center>
				<v-flex>
					<div xs3 class="content-1">Prices</div>
				</v-flex>
			</v-layout>

			<v-data-table
				v-model="selected"
				:headers="headers"
				:items="desserts"
				:pagination.sync="pagination"
				item-key="name"
				class="elevation-1"
				hide-default-footer
			>
				<template v-slot:headers="props">
					<tr>
						<th>
							<v-checkbox
								:input-value="props.all"
								:indeterminate="props.indeterminate"
								primary
								hide-details
								@click.stop="toggleAll"
							></v-checkbox>
						</th>
						<th
							v-for="header in props.headers"
							:key="header.text"
							:class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
							@click="changeSort(header.value)"
						>
							<v-icon small>arrow_upward</v-icon>
							{{ header.text }}
						</th>
					</tr>
				</template>
				<template v-slot:items="props">
					<tr :active="props.selected" @click="props.selected = !props.selected">
						<td>£{{ props.item.name }}</td>
						<td class="text-xs-right">£{{ props.item.calories }}</td>
						<td class="text-xs-right">£{{ props.item.fat }}</td>
					</tr>
				</template>
			</v-data-table>
		</v-container>
	</div>
</template>

<script>
export default {
	data: () => ({
		pagination: {
			sortBy: "name"
		},
		selected: [],
		headers: [
			{
				text: "",
				align: "left",
				value: "name"
			},
			{ text: "NHS", value: "calories" },
			{ text: "Private", value: "fat" }
		],
		desserts: [
			{
				name: "Frozen Yogurt",
				calories: 159,
				fat: 6.0
			},
			{
				name: "Ice cream sandwich",
				calories: 237,
				fat: 9.0
			}
			// {
			// 	name: "Eclair",
			// 	calories: 262,
			// 	fat: 16.0,
			// 	carbs: 23,
			// 	protein: 6.0,
			// 	iron: "7%"
			// },
			// {
			// 	name: "Cupcake",
			// 	calories: 305,
			// 	fat: 3.7,
			// 	carbs: 67,
			// 	protein: 4.3,
			// 	iron: "8%"
			// },
			// {
			// 	name: "Gingerbread",
			// 	calories: 356,
			// 	fat: 16.0,
			// 	carbs: 49,
			// 	protein: 3.9,
			// 	iron: "16%"
			// },
			// {
			// 	name: "Jelly bean",
			// 	calories: 375,
			// 	fat: 0.0,
			// 	carbs: 94,
			// 	protein: 0.0,
			// 	iron: "0%"
			// },
			// {
			// 	name: "Lollipop",
			// 	calories: 392,
			// 	fat: 0.2,
			// 	carbs: 98,
			// 	protein: 0,
			// 	iron: "2%"
			// },
			// {
			// 	name: "Honeycomb",
			// 	calories: 408,
			// 	fat: 3.2,
			// 	carbs: 87,
			// 	protein: 6.5,
			// 	iron: "45%"
			// },
			// {
			// 	name: "Donut",
			// 	calories: 452,
			// 	fat: 25.0,
			// 	carbs: 51,
			// 	protein: 4.9,
			// 	iron: "22%"
			// },
			// {
			// 	name: "KitKat",
			// 	calories: 518,
			// 	fat: 26.0,
			// 	carbs: 65,
			// 	protein: 7,
			// 	iron: "6%"
			// }
		]
	})
};
</script>