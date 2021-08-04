let isMobileNavOpen = false;

const setMobileNav = () => {
	if (!isMobileNavOpen) {
		document.getElementById('nav').classList.add('active');
		isMobileNavOpen = true;
	} else {
		document.getElementById('nav').classList.remove('active');
		isMobileNavOpen = false;
	}
};
