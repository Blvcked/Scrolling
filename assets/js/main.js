function jsToCss() {
	if (document.querySelector(`#siteHeader`)) {
		const target = document.querySelector(`#siteHeader`);
		const targetHeight = target.getBoundingClientRect().height;
		document
			.querySelector(`:root`)
			.style.setProperty(`--siteHeader-height`, `${targetHeight}px`);
	}
	if (document.querySelector(`#siteTopbar`)) {
		const target = document.querySelector(`#siteTopbar`);
		const targetHeight = target.getBoundingClientRect().height;
		document
			.querySelector(`:root`)
			.style.setProperty(`--siteTopbar-height`, `${targetHeight}px`);
	}
}
