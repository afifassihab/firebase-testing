<template>
	<div class="container">
		<label for="email">Email :</label>
		<input type="email" v-model="email" id="email" /><br />
		<label for="password">Password :</label>
		<input type="password" v-model="password" id="password" /><br />
		<button @click="createAccount">Create Account</button>
	</div>
</template>

<script>
import { fireAuth } from "~/plugins/firebase";

export default {
	data() {
		return {
			password: "",
			email: "",
		};
	},
	methods: {
		createAccount() {
			fireAuth
				.createUserWithEmailAndPassword(this.email, this.password)
				.catch(function (error) {
					console.log(error.code, error.message);
				});
		},
	},
};
</script>

