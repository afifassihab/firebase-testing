<template>
	<div id="container">
		<button @click="writeToFirestore">Write to Firestore</button>
	</div>
</template>

<script>
import { fireDb } from "~/plugins/firebase";

export default {
	data() {
		return {
			text: "hello world",
		};
	},
	methods: {
		async writeToFirestore() {
			const citiesRef = fireDb.collection("cities");

			try {
				await citiesRef.doc("SF").set({
					name: "San Francisco",
					state: "CA",
					country: "USA",
					capital: false,
					population: 860000,
					regions: ["west_coast", "norcal"],
				});
				await citiesRef.doc("LA").set({
					name: "Los Angeles",
					state: "CA",
					country: "USA",
					capital: false,
					population: 3900000,
					regions: ["west_coast", "socal"],
				});
				await citiesRef.doc("DC").set({
					name: "Washington, D.C.",
					state: null,
					country: "USA",
					capital: true,
					population: 680000,
					regions: ["east_coast"],
				});
				await citiesRef.doc("TOK").set({
					name: "Tokyo",
					state: null,
					country: "Japan",
					capital: true,
					population: 9000000,
					regions: ["kanto", "honshu"],
				});
				await citiesRef.doc("BJ").set({
					name: "Beijing",
					state: null,
					country: "China",
					capital: true,
					population: 21500000,
					regions: ["jingjinji", "hebei"],
				});
			} catch (e) {
				console.error(e);
			}
		},
	},
};
</script>

<style>
</style>