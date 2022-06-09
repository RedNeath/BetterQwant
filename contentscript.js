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
style.href = "https://cdn.discordapp.com/attachments/485070483260440581/984272042054545418/colors.css"//"https://cdn.jsdelivr.net/gh/RedNeath/BetterQwant/colors.css";
document.head.removeChild(child);
document.head.insertBefore(style, children[i]);


//We delete the first div because we don't need an ad for a site we're already on
var elems = document.getElementsByClassName('Hero-module__HeroContainer___3ZALZ Box-module__relative___1cR1n');
for (let i = 0; i < elems.length; i++) {
	elems[i].parentNode.removeChild(elems[i]);
}

elems = document.getElementsByClassName('Section-module__SectionContainer___1EWww');
for (let i = 0; i < elems.length; i++) {
	elems[i].style = "";
}