console.log("TEST!!");

//If we are not on Qwant maps :
let pattern = "https:\/\/www\.qwant\.com\/(?!maps).*"
if (document.URL.match(pattern)[0] !== ""){
	//First we change the css style by the local one :
	let children = document.head.children;
	let child;
	let i;
	let style;
	for (i = 0; i < children.length; i++) {
		if (children[i].localName === "link" && children[i].rel === "stylesheet") {
			child = children[i];
			break;
		}
	}
	style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = "https://cdn.discordapp.com/attachments/485070483260440581/984524018738671636/colors.css"//"https://cdn.jsdelivr.net/gh/RedNeath/BetterQwant/colors.css";
	document.head.removeChild(child);
	document.head.insertBefore(style, children[i]);


	//We delete the first div because we don't need an ad for a site we're already on
	var elems = document.getElementsByClassName('Hero-module__HeroContainer___3ZALZ Box-module__relative___1cR1n');
	for (let i = 0; i < elems.length; i++) {
		elems[i].parentNode.removeChild(elems[i]);
	}

	elems = document.getElementsByClassName('Section-module__SectionContainer___1EWww');
	for (let i = elems.length - 1; i >= 0 ; i--) {
		if (i > 0 && i < elems.length - 1) {
			elems[i].parentNode.removeChild(elems[i]);
		} else if (i >= elems.length - 1) {
			elems[i].style = "background-color:var(--grey-500)";
		} else {
			elems[i].style = "";
		}
	}

	let slidingBar = document.getElementsByClassName('SlidingBanner-module__SlidingBanner___2Ew4s')[1];
	slidingBar.parentNode.removeChild(slidingBar);

	elems = document.getElementsByClassName('Section-module__SectionContainer___1EWww Section-module__SectionContainerReverse___1G_zi');
	for (let i = 0; i < elems.length; i++) {
		elems[i].parentNode.removeChild(elems[i]);
	}

	document.getElementsByClassName('CenteredSection-module__CenteredSectionContainer___2xHxM CenteredSection-module__CenteredSectionNoBorder___1ndrW Flex-module__flex___35zId Flex-module__column___1m4v1 Flex-module__center___2VIUB Flex-module__alignCenter___24fCk Box-module__fullWidth___2WLdg')[0].style = "background-color:var(--transp);padding-top:var(--spacing-xl);padding-bottom:var(--spacing-xl)";
	document.getElementsByClassName('Text-module__typo___2-LMx Text-module__heading-6___2E8gc Text-module__familyInter___1R5wN Text-module__center___1f9sU')[0].style = "color:var(--grey-300)";
	document.getElementsByClassName('SectionProducts-module__SectionProducts___2k2yK')[0].style = "background-color:var(--transp)";
	document.getElementsByClassName('Text-module__typo___2-LMx Text-module__caption-1___EYH0z Text-module__secondary___1UMq0 Footer-module__container___vsDRR')[0].style = "color:var(--grey-100);background-color:var(--grey-500)";

	//let top = document.getElementsByClassName('SearchHeader-module__SearchHeader___27RFp SearchHeader-module__SearchHeaderFloating___2z9qx')[0].clientHeight;
	//document.getElementsByClassName('Navbar-module__NavBar___3gNfz SearchHeader-module__SearchHeaderNavBar___1AGhR undefined Flex-module__flex___35zId Flex-module__alignCenter___24fCk')[0].style = "position:relative;top:" + top;
}