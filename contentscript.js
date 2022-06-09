function prettify() {
	////////////////////////////////////////////
	// DECLARATION
	////////////////////////////////////////////

	// Constants :
	const sStylePath = "https://cdn.jsdelivr.net/gh/RedNeath/BetterQwant@1.0.4/colors.css";
	const sTopDiv	 = "Hero-module__HeroContainer___3ZALZ Box-module__relative___1cR1n";
	const sContDivs	 = "Section-module__SectionContainer___1EWww";
	const sRvrsCont	 = "Section-module__SectionContainer___1EWww Section-module__SectionContainerReverse___1G_zi";
	const sSlideBar	 = "SlidingBanner-module__SlidingBanner___2Ew4s";

	const sInfoDiv		= "CenteredSection-module__CenteredSectionContainer___2xHxM CenteredSection-module__CenteredSectionNoBorder___1ndrW Flex-module__flex___35zId Flex-module__column___1m4v1 Flex-module__center___2VIUB Flex-module__alignCenter___24fCk Box-module__fullWidth___2WLdg";
	const sInfoDivStyle	= "background-color:var(--transp);padding-top:var(--spacing-xl);padding-bottom:var(--spacing-xl)";
	const sInfoTxt		= "Text-module__typo___2-LMx Text-module__heading-6___2E8gc Text-module__familyInter___1R5wN Text-module__center___1f9sU";
	const sInfoTxtStyle	= "color:var(--grey-300)";

	const sPdctDiv		= "SectionProducts-module__SectionProducts___2k2yK";
	const sPdctDivStyle	= "background-color:var(--transp)";

	const sFterDiv		= "Text-module__typo___2-LMx Text-module__caption-1___EYH0z Text-module__secondary___1UMq0 Footer-module__container___vsDRR";
	const sFterDivStyle	= "color:var(--grey-100);background-color:var(--grey-500)";

	// Variables :
	let bStyleFound;
	let iStylePlace;
	let aChildren;
	let aElements;
	let nOldStyle;
	let nNewStyle;


	////////////////////////////////////////////
	// INITIALIZATION
	////////////////////////////////////////////
	bStyleFound = false;
	iStylePlace	= 0;
	aChildren	= document.head.children;
	nNewStyle	= document.createElement("link");


	////////////////////////////////////////////
	// PROCESS
	////////////////////////////////////////////

	// Changing the css style :
	// -> We retrieve the style node
	while (iStylePlace < aChildren.length && !bStyleFound) {
		if (aChildren[iStylePlace].localName === "link" && aChildren[iStylePlace].rel === "stylesheet") {

			nOldStyle = aChildren[iStylePlace];
			bStyleFound = true;

		} else {
			iStylePlace++;
		}
	}
	// -> We create the node that will replace it
	nNewStyle.rel	= "stylesheet";
	nNewStyle.href	= sStylePath;
	// -> We replace the old node by the new one
	document.head.removeChild(nOldStyle);
	document.head.insertBefore(nNewStyle, aChildren[iStylePlace]);
	///////////////////////////

	// Arranging the page :
	// -> We delete the top node of the welcome page
	aElements = document.getElementsByClassName(sTopDiv);
	while (aElements.length > 0) {
		aElements[0].parentNode.removeChild(aElements[0]);
	}
	// -> We keep first and last feed nodes and change their style
	aElements = document.getElementsByClassName(sContDivs);
	for (let i = aElements.length - 1; i >= 0 ; i--) {
		if (i > 0 && i < aElements.length - 1) {
			aElements[i].parentNode.removeChild(aElements[i]);
		} else if (i >= aElements.length - 1) {
			aElements[i].style = "background-color:var(--grey-500)";
		} else {
			aElements[i].style = "";
		}
	}
	// -> We delete the reversed feed note of the welcome page
	aElements = document.getElementsByClassName(sRvrsCont);
	while (aElements.length > 0) {
		aElements[0].parentNode.removeChild(aElements[0]);
	}
	// -> We delete the second sliding bar of the welcome page
	aElements = document.getElementsByClassName(sSlideBar);
	if (aElements.length > 0) {
		aElements[1].parentNode.removeChild(aElements[1]);
	}
	// -> We change the style of elements that has it 'hardcoded'
	document.getElementsByClassName(sInfoDiv)[0].style = sInfoDivStyle;
	document.getElementsByClassName(sInfoTxt)[0].style = sInfoTxtStyle;
	document.getElementsByClassName(sPdctDiv)[0].style = sPdctDivStyle;
	document.getElementsByClassName(sFterDiv)[0].style = sFterDivStyle;
	///////////////////////
}

prettify();