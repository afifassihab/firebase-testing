<template>
	<div class="container">
		<button @click="loginGoogle">Login With Google</button>
	</div>
</template>

<script>
import { provider, fireAuth } from "~/plugins/firebase";

export default {
	methods: {
		loginGoogle() {
			fireAuth
				.signInWithPopup(provider)
				.then(function (result) {
					console.log(result);
				})
				.catch(function (error) {
					console.error(error);
				});
		},
	},
};
</script>

<style>
</style>