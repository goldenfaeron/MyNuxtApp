<template>
	<v-flex xs5>
		<div style="margin-bottom: 10px" class="headline">Frequently Asked Questions</div>
		<div class="tabs">
			<div class="tab">
				<input type="radio" id="rd1" name="rd" />
				<label class="tab-label" for="rd1">Am I too old to straighten my teeth?</label>
				<div
					class="tab-content"
				>No, orthodontics for adults is becoming more and more common. We can talk through your options with you.</div>
			</div>
			<div class="tab">
				<input type="radio" id="rd2" name="rd" />
				<label class="tab-label" for="rd2">I’m a nervous patient. Can you help me?</label>
				<div
					class="tab-content"
				>We do understand that some people really struggle with dental treatment. But we have lots of ways to help put you at ease. Please just tell us how you feel and what worries you, and then we can work together to decide on the right approach.</div>
			</div>
		</div>
	</v-flex>
</template>

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
// Layout
.row {
	display: flex;
	.col {
		flex: 1;
		&:last-child {
			margin-left: 1em;
		}
	}
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