<script>
	import { onMount } from 'svelte';

	// The URL to encode in the QR code
	export let url = 'https://example.com';
	// Size of the QR code in pixels
	export let size = 200;
	// Error correction level: L (7%), M (15%), Q (25%), H (30%)
	export let errorCorrection = 'M';
	// Background color
	export let background = '#ffffff';
	// Foreground color
	export let foreground = '#000000';

	let qrCodeElement;

	onMount(async () => {
		// Dynamically import the QR code library to avoid SSR issues
		const QRCodeModule = await import('qrcode');
		const QRCode = QRCodeModule.default;

		// Generate QR code on canvas element
		QRCode.toCanvas(qrCodeElement, url, {
			width: size,
			margin: 4,
			color: {
				dark: foreground,
				light: background
			},
			errorCorrectionLevel: errorCorrection
		});
	});

	// Update the QR code when the URL changes
	$: if (qrCodeElement && url) {
		import('qrcode').then((QRCodeModule) => {
			const QRCode = QRCodeModule.default;
			QRCode.toCanvas(qrCodeElement, url, {
				width: size,
				margin: 4,
				color: {
					dark: foreground,
					light: background
				},
				errorCorrectionLevel: errorCorrection
			});
		});
	}
</script>

<canvas
	bind:this={qrCodeElement}
	on:click={() => window.open(url, '_blank')}
	style="cursor: pointer;"
	title="Click to open URL in new tab"
/>
