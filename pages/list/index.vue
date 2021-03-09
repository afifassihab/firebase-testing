<template>
	<div class="container">
		<h1>Daftar Kota di dunia</h1>
		<ol>
			<li v-for="city of cities" :key="city.id">{{ city.name }}</li>
		</ol>
	</div>
</template>

<script>
import { fireDb } from "~/plugins/firebase";

export default {
	data() {
		return {
			cities: [],
		};
	},
	async asyncData({ app, params, error }) {
		const ref = fireDb
			.collection("cities")
			.where("name", ">=", "L")
			.where("name", "<=", "L" + "\uf8ff");

		let snap = [];

		try {
			await ref.get().then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					// console.log(doc.id, " => ", doc.data());
					let row = doc.data();
					row.id = doc.id;

					snap.push(row);
				});
			});
		} catch (e) {
			console.error(e);
		}

		return {
			cities: snap,
		};
	},
};
</script>

<style>
</style>