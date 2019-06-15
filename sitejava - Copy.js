var downable = 0;


function getpassw(pass=0)
{
	
	if (pass) {window.location.href="kahHE87EGEg76.html";return 0;}
	
	var pattempt = prompt("Enter Leader Password");
	if (Math.log(5184)/Math.log(pattempt)==2) 
		{window.location.href="kahHE87EGEg76.html";}
	else {music('VO/SC web inc passw.wav');}
}


function music(song)
{
	var audio = new Audio(song);audio.play();
}


var ian = 0;
function allian(graphic)
{
	if (ian==0) {
		graphic.src='ian.jpg';ian=1;}
	else {
		graphic.src='g photo.jpg';ian=0;}
}


var Edna = 0;
function EdnaMode(graphic)
{
	if (Edna==0) {
		graphic.src='No Capes.jpg';Edna=1;}
	else {
		graphic.src='ogs.jpg';Edna=0;}
}


function welcomecomp()
{
	var audio = new Audio("winxp.mp3");audio.play();
}


function startcomp(pass=0)
{
	if (pass) {window.location.href="comp.html";return 0;}
	var pattempt = prompt("Enter competition password");
	if (pattempt.toLowerCase()=="showutility")
	{
		window.location.href="comp.html";
	}
	else
	{
		music('VO/SC web inc passw.wav');
	}
}


function darken(elem)
{
	elem.style.backgroundColor='#555555';
}


function lighten(elem)
{
	elem.style.backgroundColor='#ebebeb';
}


function unhidecomp()
{
	document.getElementById("comphid").style="visibility:visible";downable=1;
}


function filedown(patha)
{
	if (downable) {alert("The next area isn't finished yet. You'll be told when the next part is ready :)")} //{window.location.href=patha;}
}

function stonks(image)
{
	music('creepymusic.mp3');
	image.src = 'CreepyImage.jpg';
	image.style="cursor:auto";
}