<template>
	<div id="cardStack">
		<cardcomponent
			v-for="card in cardsToStack"
			v-bind:key="card.number"
			v-bind:card="card"
			@click.native="changeActiveCard(card)"
		/>
	</div>
</template>
<script>
import Card from "@/HomeView/Components/Card";
export default {
	components: {
		cardcomponent: Card
	},
	data() {
		return {
			activeCard: String
		};
	},
	methods: {
		changeActiveCard(card) {
			// console.log("hello from cardstack");
			// console.log(card);
			this.activeCard = card.number;
			// console.log(this.activeCard);
			this.$emit("changeActiveCard", card);
			// this.position = 0;
		}
	},
	computed: {
		cardsToStack() {
			console.log(
				this.$root.allCards.filter(
					card => card.number != this.activeCard
				)
			);
			return this.$root.allCards.filter(
				card => card.number != this.activeCard
			);
		}
	}
};
</script>

<style lang="scss">
// TO-DO !! Move CSS to appropiate component (Card.vue) -!-

#cardStack {
	align-self: center;
	width: 90%;
	// position: relative;
	display: grid;
	grid-template-columns: 100%;
    grid-auto-rows: 10vh;
    margin-top: 8vh;
.outerContainer:hover {
    top: -6vh;
}
.outerContainer {
    top: 0;
    transition: top 0.7s;
    // får ej transition-timing-function: ease-out; eller andra modifiers av transition att fungera, endast speed/seconds
    width: 100%;
    position: relative;
    border-radius: 14px;

	.innerContainer {
        // display: flex;
        // flex-direction: column;
        // justify-content: space-around;
        // align-items: center;
        border-radius: 14px;
        p {
        margin: 0;
        padding: 1vh 0 1vh 0;
        }
	}
}
}

</style>