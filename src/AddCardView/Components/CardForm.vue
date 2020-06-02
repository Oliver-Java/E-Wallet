<template>
	<div id="formsContainer">
		<div>

        </div>
        <div>

        </div>
        <input class="inputField" type="text" v-model="card.number" >
		<input class="inputField" type="text" v-model="card.name">
		<input class="inputField" type="text" v-model="card.valid" >
		<input class="inputField" type="text" v-model="card.vendor">

		<router-link id="button" @click="saveCard" to="/">ADD CARD</router-link>
	</div>
</template>

<script>
// TODO saveCard(), Vill spara in i creditcards.json - fråga någon?
export default {
	props: {
		card: Object
	},
	data() {
		return {
			
		};
	},

	methods: {
		saveCard() {}
	}
};
</script>

<style lang="scss" scoped>
#formsContainer{
    display: flex;
    flex-direction: column;
}

.inputField {
    padding: 5px 0px 5px 0px;
    margin-bottom: 10px;
}
</style>>