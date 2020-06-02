<template>
<!-- v-if="Object.keys(card).length != 0" -->
	<div class="outerContainer" >
		<div class="innerContainer" v-bind:class="card.vendor">
			<img
				class="chip"
				:src="chipLight ? require('@/assets/chip-light.svg') : require('@/assets/chip-dark.svg')"
			/>
			<img class="vendorIcon" :src="require('@/assets/' + card.vendor + '.svg')" />
			<p class="cardNumber">{{card.number}}</p>
			<p class="cardHolder">{{card.name}}</p>
			<p class="valid">{{card.valid}}</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		card: Object,
		// position: Number
	},
	data() {
		return {};
	},
	methods: {},
	computed: {
		chipLight() {
			return this.card.vendor != "bitcoin";
		}
	}
};
</script>

<style lang="scss" scoped>
// .outerContainer:hover {
// 	top: -3.5vh;
// }
.outerContainer {
	top: 0;
	width: 100%;
	// position: relative;
	border-radius: 14px;

	.innerContainer {
		height: 15rem;
		width: 100%;
		border-radius: 14px;
		display: grid;
		grid-template-columns: 1fr 10fr 10fr 10fr 10fr 1fr;
		grid-template-rows: 1fr 4fr 2.5fr 2.5fr 1fr;
		// grid-template-areas:

		//   'border1 border2 border2 border2 border2 border3'

		//   'border1 chip   empty empty   vendor border3'

		//   'border1 number number number number border3'

		//   'border1 holder holde  holder valid  border3'

		//   'border1 border border border boder border3'
		// ;
		.chip {
			grid-area: 2 / 2 / 3 / 3;
		}
		.vendorIcon {
			grid-area: 2 / 5 / 3 / 6;
		}
		.cardNumber {
			grid-area: 3 / 2 / 4 / 6;
            align-self:end; 
            font-size: 2rem;
			letter-spacing: 0.055em;
			word-spacing: 0.55em;
		}
		.cardHolder {
			grid-area: 4 / 2 / 5 / 5;
			font-size: 1.5rem;
			letter-spacing: 0.055em;
            word-spacing: 0.55em;
            align-self: end;
		}
		.valid {
			grid-area: 4 / 5 / 5 / 6;
			font-size: 1.5rem;
			letter-spacing: 0.055em;
            word-spacing: 0.55em;
            align-self: end;
		}

		p {
			margin: 0;
			// padding: 1vh 0 1vh 0;
		}
	}
}
.bitcoin {
	background-color: #ffb444;
}
.blockchain {
	background-color: #7d4fe1;
}
.evilcorp {
	background-color: #df2e4e;
}
.ninja {
	background-color: #343434;
}
</style>