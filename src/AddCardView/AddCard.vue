<template>
	<div id="addCard" v-if="'addcard' === this.$route.params.addcard">
		<!-- TODO, skicka newCC till Card.vue -->

		<div id="header">
			<Top :header="topHeader" />
		</div>
		<div id="modelCard">
			<Card :card="newCard" />
		</div>
		<div id="forms">
			<Cardform :card="newCard" />
		</div>
	</div>
</template>

<script>
import Cardform from "@/AddCardView/Components/CardForm.vue";
import Top from "@/HomeView/Components/Top.vue";
import Card from "@/HomeView/Components/Card.vue";
// OjOj det saknas grejjer..

export default {
	components: {
		Cardform,
		Top,
		Card
	},
	data() {
		return {
			topHeader: "ADD A NEW BANK CARD",
			newCard: {
				name: "FirstName Lastname",
				vendor: "bitcoin",
				valid: "MM/YY",
				number: "xxxx xxxx xxxx xxxx"
			}
		};
	},
	methods: {}
};
</script>

<style scoped>
#addCard {
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	width: 27rem;
}
#modelCard {
	width: 90%;
	align-self: center;
}
#forms {
    margin-top: 5vh;
}

/* #header {
    height: 10vh
} */
</style>