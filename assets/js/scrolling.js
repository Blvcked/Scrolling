const body = document.querySelector(`body`);
let previousScrollPosition = window.scrollY;

function isNavbarSticked() {
	/**
	 * Get to know if the #siteNavbar
	 * is currently sticked to the top of the viewport.
	 *
	 * As long as the #siteNavbar distance to top is 0 or smaller,
	 * we know it is pixel perfectly sticked to the top of the viewport.
	 */
	const navbar = document.querySelector(`#siteNavbar`);

	if (navbar.getBoundingClientRect().top <= 0) {
		body.classList.add(`navbar--sticked`);
	} else {
		body.classList.remove(`navbar--sticked`);
	}
}

function isThresholdSurpassed() {
	/**
	 * Get to know if the user has scrolled a certain amount.
	 *
	 * Simply add a class to the <body> if the user
	 * has scrolled enough (800), remove the class otherwise.
	 */
	if (window.scrollY >= 800) {
		body.classList.add(`threshold--surpassed`);
	} else {
		body.classList.remove(`threshold--surpassed`);
	}
}

function isFooterInview() {
	/**
	 * Get to know if the footer has entered the viewport.
	 *
	 * If the viewport height is greater than the distance
	 * from the top of the footer to the top of the viewport,
	 * we know the footer has entered the viewport.
	 */
	const footer = document.querySelector(`#siteFooter`);

	if (window.innerHeight > footer.getBoundingClientRect().top) {
		body.classList.add(`footer--inview`);
	} else {
		body.classList.remove(`footer--inview`);
	}
}

function getScrollDirection() {
	/**
	 * Get to know the current scroll direction.
	 *
	 * We compare the previous scroll position against
	 * the current one, if the latter is bigger, we are
	 * moving downwards, else, we are moving upwards.
	 *
	 * We also replace the previous scroll position
	 * with the current one for subsequent iterations.
	 */
	const currentScrollPosition = window.scrollY;

	if (currentScrollPosition > previousScrollPosition) {
		body.classList.add(`scrolling--down`);
		body.classList.remove(`scrolling--up`);
	} else {
		body.classList.add(`scrolling--up`);
		body.classList.remove(`scrolling--down`);
	}
	previousScrollPosition = currentScrollPosition;
}

function getScrollProgress() {
	/**
	 * Get to know the current scroll progress.
	 *
	 * Divide the current scroll position by the total scrollable area.
	 * The scrollable area is the total height of the document minus the viewport height.
	 */
	const documentScrollableArea =
		document.documentElement.scrollHeight - window.innerHeight;
	const currentScrollProgress = window.scrollY / documentScrollableArea;
	body.style.setProperty(`--progress`, `${currentScrollProgress}`);
}
