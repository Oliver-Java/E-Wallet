<template>
	<div id="header">
		<h1>{{header}}</h1>
	</div>
</template>

<script>
// import Card from "@/HomeView/Components/Card";
// import CardStack from "@/HomeView/Components/CardStack";
export default {
	props: {
		header: String
	},
	data() {
		return {
		};
	},

	methods: {}
};
</script>

<style scoped>
h1 {
    margin: 1 0 1 0;
    text-align: center;
}
#header {
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;
}
</style>
