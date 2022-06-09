console.log("TEST!!");

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
style.href = "https://cdn.jsdelivr.net/gh/RedNeath/BetterQwant/colors.css";
document.head.removeChild(child);
document.head.insertBefore(style, children[i]);


//We delete the main picture (because it has an integrated background color)
var elems = document.getElementsByClassName('Hero-module__HeroPart___3YcuN Hero-module__HeroPartImage___sxOXJ Hero-module__HeroImageBottom___33H2i Flex-module__flex___35zId Flex-module__column___1m4v1 Flex-module__center___2VIUB Flex-module__alignCenter___24fCk');
for (let i = 0; i < elems.length; i++) {
	elems[i].parentNode.removeChild(elems[i]);
}