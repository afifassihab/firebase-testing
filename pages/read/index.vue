<template>
	<section class="container">
		<div>
			<h2>write to Firestore</h2>
			<input type="text" v-model="input" />
			<div>
				<button @click="writeToFirestore">
					<span v-if="!writeSuccessful">Write now</span>
					<span v-else>Successful!</span>
				</button>
			</div>
		</div>
		<div>
			<h2>Read from Firestore</h2>
			<div>
				<button @click="readFromFirestore" :disabled="readSuccessful">
					<span v-if="!readSuccessful">Read now</span>
					<span v-else>Successful!</span>
				</button>
				<p>{{ text }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";

export default {
	data() {
		return {
			writeSuccessful: false,
			readSuccessful: false,
			text: "",
			input: "Input your text!",
		};
	},
	async asyncData({ app, params, error }) {
		const ref = fireDb.collection("test").doc("test");

		let snap;
		try {
			snap = await ref.get();
		} catch (e) {
			console.error(e);
		}
		return {
			text: snap.data().text,
		};
	},
	methods: {
		async writeToFirestore() {
			const ref = fireDb.collection("test").doc("test");
			const document = {
				text: this.input,
			};

			try {
				await ref.set(document);
			} catch (e) {
				console.error(e);
			}
			this.writeSuccessful = true;
		},
		async readFromFirestore() {
			const ref = fireDb.collection("test").doc("test");

			let snap;
			try {
				snap = await ref.get();
			} catch (e) {
				console.error(e);
			}
			this.text = snap.data().text;
			this.readSuccessful = true;
		},
	},
};
</script>

<style scoped>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>


