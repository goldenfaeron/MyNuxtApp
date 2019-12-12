<template>
	<div>
		<v-sheet color="accent">
			<div @click="faq = !faq" style="margin-bottom: 2px; padding: 20px" class="headline white--text">
				Frequently Asked Questions
				<v-icon v-if="!faq" color="white">mdi-chevron-down</v-icon>
				<v-icon v-else color="white">mdi-chevron-up</v-icon>
			</div>
		</v-sheet>
		<div v-if="faq" class="tabs">
			<div class="tab" v-for="(item, index) in values" :key="index">
				<input type="radio" :id="'rd'+index" name="rd" />
				<label class="tab-label" :for="'rd'+index">{{item.question}}</label>
				<div class="tab-content">{{item.answer}}</div>
			</div>
		</div>
		<nuxt-link :to="link">{{linkText}}</nuxt-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			faq: false,
			values: [
				{
					question: "Am I too old to straighten my teeth?",
					answer:
						"No, orthodontics for adults is becoming more and more common. We can talk through your options with you."
				},
				{
					question: "I’m a nervous patient. Can you help me?",
					answer:
						"We do understand that some people really struggle with dental treatment. But we have lots of ways to help put you at ease. Please just tell us how you feel and what worries you, and then we can work together to decide on the right approach."
				},
				{
					question: "How often do I need a check-up?",
					answer:
						"Generally we recommend twice yearly check-ups every six months. However, this varies on a case by case basis. Your Bupa Dental Care dentist will talk to you about when and how often we need to see you."
				},
				{
					question:
						"I've been told I need a filling, but I hadn't noticed a problem.",
					answer:
						"Fillings repair small holes in your tooth enamel. If they aren’t filled, the decay will deepen. You’ll start to feel pain, and you could end up needing root canal treatment, which is much more significant and costs more. So although you might not feel pain right now, it’s best to repair these holes as soon as possible."
				}
			],

			linkText: "See more",
			link: ""
		};
	}
};
</script>

<style lang="scss" scoped>
$midnight: #2c3e50;
$clouds: #ecf0f1;
// General
body {
	color: $midnight;
	background: $clouds;
	padding: 0 1em 1em;
}
h1 {
	margin: 0;
	line-height: 2;
	text-align: center;
}
h2 {
	margin: 0 0 0.5em;
	font-weight: normal;
}
input {
	position: absolute;
	opacity: 0;
	z-index: -1;
}

/* Accordion styles */
.tabs {
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
.tab {
	width: 100%;
	color: white;
	overflow: hidden;
	&-label {
		display: flex;
		justify-content: space-between;
		padding: 1em;
		background: $midnight;
		font-weight: bold;
		cursor: pointer;
		/* Icon */
		&:hover {
			background: darken($midnight, 10%);
		}
		&::after {
			content: "\276F";
			width: 1em;
			height: 1em;
			text-align: center;
			transition: all 0.35s;
		}
	}
	&-content {
		max-height: 0;
		padding: 0 1em;
		color: $midnight;
		background: white;
		transition: all 0.35s;
	}
	&-close {
		display: flex;
		justify-content: flex-end;
		padding: 1em;
		font-size: 0.75em;
		background: $midnight;
		cursor: pointer;
		&:hover {
			background: darken($midnight, 10%);
		}
	}
}

// :checked
input:checked {
	+ .tab-label {
		background: darken($midnight, 10%);
		&::after {
			transform: rotate(90deg);
		}
	}
	~ .tab-content {
		max-height: 100vh;
		padding: 1em;
	}
}
</style>