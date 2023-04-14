function documentReady() {
	jsToCss();
}
document.addEventListener(`DOMContentLoaded`, documentReady, false);

function widnowLoad() {
	isNavbarSticked();
	isThresholdSurpassed();
	isFooterInview();
	getScrollProgress();
}
window.addEventListener(`load`, widnowLoad, false);

function widnowScroll() {
	isNavbarSticked();
	isThresholdSurpassed();
	isFooterInview();
	getScrollDirection();
	getScrollProgress();
}
window.addEventListener(`scroll`, widnowScroll, { passive: true });
