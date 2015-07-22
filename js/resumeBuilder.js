/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$('#main').append('Kat');

/*var awesomeThoughts = "My name is Kat and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);

$('#main').append(funThoughts);*/

var bio = {
	'name': 'Cheetara',
	'role': 'Thunderian Noble',
	'contact': {
		'home': 'Thundera',
		'location': 'Third Earth'		
	},
	'welcomeMessage': 'Fortune favors the bold.',
	'bioPic': 'http://vignette1.wikia.nocookie.net/thundercats/images/d/d1/2vlcsnap-2014-03-12-21h52m56s154.jpg/revision/latest/scale-to-width-down/225?cb=20140322205105',
	'skills': ['Combat', 'Bravery', 'Speed', 'Sewing leotards']
}

var work = {}
	work.title = 'Warrior';
	work.employer = 'ThunderCats';
	work.weapon = 'Staff';

/*var education = {}
	education['school'] = 'Thundera University';
	education['years'] = '1985-1989';*/

var education = {
	"school": "Thundera University",
	"years": "1985-1989",
	"majors": ["Combat", "Calculus"]
}

//Add object values to the HTML document
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedPic = HTMLbioPic.replace('%data', bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').prepend(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedPic);
$('#header').append(formattedWelcome);

var formattedSkills = HTMLskills.replace('%data%',bio.skills);
$('#workExperience').prepend(formattedSkills);
$('#workExperience').prepend(HTMLskillsStart);

var formattedEmployer = HTMLworkEmployer.replace('%data%', work.employer);
var formattedTitle = HTMLworkTitle.replace('%data%', work.title);
$('#workExperience').append(HTMLworkStart);
$('#workExperience').append(formattedEmployer);
$('#workExperience').append(formattedTitle);

var formattedSchool = HTMLschoolName.replace('%data%', education.school);
var formattedSchoolYears = HTMLschoolDates.replace('%data%', education.years);
$('#education').append(HTMLschoolStart);
$('#education').append(formattedSchool);
$('#education').append(formattedSchoolYears);

//var formattedContactGeneric = HTMLcontactGeneric.replace('%contact%', 'home', '%data%', bio.contact.home);
var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
//$('#lets-connect').append(formattedContactGeneric);
$('#lets-connect').append(formattedLocation);