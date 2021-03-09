<template>
	<div class="container">
		<div id="screeshot">
			<button class="capture-button">Capture Button</button>
			<button id="screenshot-button">Screenshot Button</button>
			<video autoplay></video>
			<img src="" />
			<canvas style="display: none"></canvas>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		async playVideo(event) {
			const video = document.querySelector("video");
			const constraints = {
				video: true,
			};

			try {
				await navigator.mediaDevices
					.getUserMedia(constraints)
					.then(function (stream) {
						video.srcObject = stream;
						console.log(stream);
					});
			} catch (error) {
				console.error(error);
			}
		},
	},
	mounted() {
		const captureVideoButton = document.querySelector(
			"#screenshot .capture-button"
		);
		const screenshotButton = document.querySelector("#screenshot-button");
		const img = document.querySelector("#screenshot img");
		const video = document.querySelector("#screenshot video");

		const canvas = document.createElement("canvas");
		const constraints = {
			video: true,
		};

		captureVideoButton.addEventListener("click", function () {
			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(handleSuccess)
				.catch(handleError);
		});

		// captureVideoButton.onclick = function () {
		// 	navigator.mediaDevices
		// 		.getUserMedia(constraints)
		// 		.then(handleSuccess)
		// 		.catch(handleError);
		// };

		screenshotButton.addEventListener("click", function () {
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			canvas.getContext("2d").drawImage(video, 0, 0);
			// Other browsers will fall back to image/png
			img.src = canvas.toDataURL("image/webp");
		});

		// screenshotButton.onclick = video.onclick = function () {
		// 	canvas.width = video.videoWidth;
		// 	canvas.height = video.videoHeight;
		// 	canvas.getContext("2d").drawImage(video, 0, 0);
		// 	// Other browsers will fall back to image/png
		// 	img.src = canvas.toDataURL("image/webp");
		// };

		function handleSuccess(stream) {
			screenshotButton.disabled = false;
			video.srcObject = stream;
		}

		function handleError(error) {
			console.log(error);
		}
	},
};
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
video {
	width: 30rem;
	height: 20rem;
	/* background-color: aqua; */
}
</style>