<template>
	<div id="start">
		<Top :header="topHeader"/>
		<div id="activeCard">
			<card v-bind:card="activeCard" />
		</div>
		<cardStack v-on:changeActiveCard="changeActiveCard" />
		<!-- i want to toggle class show/hide! -->
		<button id="addCardButton" @click="$router.push('addcard')">Add Card</button>
		<div id="addCard">
			<router-view name="addcard" />
		</div>
	</div>
</template>
<script>
import Top from "@/HomeView/Components/Top.vue";
import Card from "@/HomeView/Components/Card.vue";
import CardStack from "@/HomeView/Components/CardStack.vue";

export default {
	components: {
		Top,
		Card,
		CardStack
	},
	data() {
		return {
			topHeader: "E-WALLET",
			activeCard: Object
		};
	},
	computed: {
		getActiveCard() {
			return this.activeCard;
		}
	},
	methods: {
		changeActiveCard(newActiveCard) {
            console.log("hello from newActiveCard");
			console.log(newActiveCard);
			this.activeCard = newActiveCard;
		}
	}
};
</script>

<style lang="scss">
#start {
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	width: 27rem;
	// background-color: white;
	align-content: center;
}
#activeCard {
    width: 90%;
    align-self: center;
}
#addCardButton {
    margin-top: 40vh;
}
</style> 