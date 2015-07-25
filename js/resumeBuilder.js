/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$('#main').append('Kat');

/*var awesomeThoughts = "My name is Kat and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);

$('#main').append(funThoughts);*/

//Bracket notation practice
/*var education = {}
	education['school'] = 'Thundera University';
	education['years'] = '1985-1989';*/

var bio = {
	"name": "Cheetara",
	"role": "Thunderian",
	"contact": {
		"home": "Thundera",
		"location": "Third Earth",
		"email": "cheetara@example.com",
		"twitter": "thundercatCheetara"		
	},
	"welcomeMessage": "Fortune favors the bold.",
	"bioPic": "http://vignette1.wikia.nocookie.net/thundercats/images/d/d1/2vlcsnap-2014-03-12-21h52m56s154.jpg/revision/latest/scale-to-width-down/225?cb=20140322205105",
	"skills": ["Combat", "Bravery", "Speed", "Sewing leotards"]
}

var work = {
	"jobs": [
	{
	"title": "Noblewoman",
	"employer": "Thundera Government",
	"location": "Washington DC, United States",
	"desc": "Leader of the people of Thundera before our planet was destroyed. Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawlways. Electromagnetic and subspace wave fronts approaching synchronization."},
	{
	"title": "Warrior",
	"employer": "ThunderCats",
	"location": "Bali, India",
	"desc": "Fighting with the ThunderCats from evildoers. Computer, run a level-two diagnostic on warp-drive systems. Antimatter containment positive. Warp drive within normal parameters. Detecting some unusual fluctuations in subspace frequencies.  The wormhole's size and short period would make this a local phenomenon. "}
]}

var projects = {
	"projects": [
	{
	"title": "Winning a marathon",
	"dates": "1980",
	"image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Thundercats_no_1.png/200px-Thundercats_no_1.png",
	"desc": "Used my speed to beat the competition. Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawlways. Electromagnetic and subspace wave fronts approaching synchronization."},
	{
	"title": "Destroy evildoers in battle",
	"dates": "1985",
	"image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/ThunderCats_Video_Game.jpg/256px-ThunderCats_Video_Game.jpg",
	"desc": "Used my staff skills to combat evil. Computer, run a level-two diagnostic on warp-drive systems. Antimatter containment positive. Warp drive within normal parameters. Detecting some unusual fluctuations in subspace frequencies.  The wormhole's size and short period would make this a local phenomenon. "}
]}

var education = {
	"schools": [
	{
	"school": "Thundera University",
	"years": "1985-1989",
	"majors": ["Combat", "Computer Science"]},
	{
	"school": "Thundera High School",
	"years": "1981-1985",
	"majors": ["Track", "Mathlete"]}
]}

//Add object values to the HTML document

//HEADER
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

$('#header').prepend(formattedName);
$('#header').append(formattedRole);

//var formattedContactGeneric = HTMLcontactGeneric.replace('%contact%', 'home', '%data%', bio.contact.home);
var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contact.twitter);

//$('#header').append(formattedContactGeneric);
$('#header').append(formattedLocation);
$('#header').append(formattedEmail);
$('#header').append(formattedTwitter);

var formattedPic = HTMLbioPic.replace('%data', bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').append(formattedPic);
$('#header').append(formattedWelcome);

if(bio.skills.length > 0){
	$('#header').append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace('%data%',bio.skills[0]);
	$('#skills:last').append(formattedSkills);
	formattedSkills = HTMLskills.replace('%data%',bio.skills[1]);
	$('#skills:last').append(formattedSkills);
	formattedSkills = HTMLskills.replace('%data%',bio.skills[2]);
	$('#skills:last').append(formattedSkills);
	formattedSkills = HTMLskills.replace('%data%',bio.skills[3]);
	$('#skills:last').append(formattedSkills);
}

//WORK
var displayWork = function(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDesc = HTMLworkDescription.replace('%data%', work.jobs[job].desc);
		$('.work-entry:last').append(formattedEmployer);
		$('.work-entry:last').append(formattedTitle);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDesc);	
	};
}

displayWork();

//PROJECTS
projects.display = function(){
	$('#projects').append(HTMLprojectStart);
	
	for(project in projects.projects){
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedProjectDesc = HTMLprojectDescription.replace('%data%', projects.projects[project].desc);
		var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDesc);
		$('.project-entry:last').append(formattedProjectImage);
	}
}
projects.display();

//EDUCATION
var formattedSchool = HTMLschoolName.replace('%data%', education.schools[0].school);
var formattedSchoolYears = HTMLschoolDates.replace('%data%', education.schools[0].years);
$('#education').append(HTMLschoolStart);
$('.education-entry:last').append(formattedSchool);
$('.education-entry:last').append(formattedSchoolYears);

//MAP
$('#mapDiv').append(googleMap);

//LOCALIZATION
/*$("#main").append(internationalizeButton);

var inName = function(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
}

inName(Cameron Pittman);*/

//LOCATIONS OF WORK PLACES


//CLICK LOCATION FUNCTION
/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});*/


