var jobList = {
	jobs: [	
		{
			company: "Collinson Technology Services", 
			role: "Senior Developer",
			started: "Feb 2014",
			ended: "Present",
			duties: [
				{ duty: "worked on insurance purchase portal" },
				{ duty: "build overnight processor for direct debits" }
			]
		},
		{
			company: "AS&K Digital", 
			role: "Senior Developer",
			started: "Nov 2013",
			ended: "Feb 2014",
			duties: [
				{ duty: "led a team of .net developers" },
				{ duty: "setup a build server and moved projects towards continuous delivery" },
				{ duty: "brough up the team to follow Scrum and agile processes" }
			]
		},
		{
			company: "Department of Industry (Australia)", 
			role: "Contract .NET Developer",
			started: "Oct 2012",
			ended: "Jun 2013",
			duties: [
				{ duty: "worked on USI project" },
				{ duty: "build public-facing web services" }
			]
		},
		{
			company: "Department of Industry (Australia)", 
			role: "Contract .NET Developer",
			started: "Mar 2012",
			ended: "Jun 2012",
			duties: [
				{ duty: "worked on VANGuard project" },
				{ duty: "built logging points for data warhousing" },
				{ duty: "fixed event log overkill" }
			]
		},
		{
			company: "Fujitsu Australia Limited", 
			role: ".NET Developer",
			started: "Jun 2009",
			ended: "Mar 2012",
			duties: [
				{ duty: "worked on projects for the Australian Intelligence Community" }
			]
		},
		{
			company: "KAZ Group", 
			role: ".NET Developer",
			started: "Feb 2008",
			ended: "Jun 2009",
			duties: [
				{ duty: "worked on projects for the Australian Intelligence Community" }
			]
		},
		{
			company: "Department of Workplace Relations (Australia)", 
			role: "Release and Technical Support Officer",
			started: "Apr 2008",
			ended: "Dec 2008",
			duties: [
				{ duty: "worked on projects for the Australian Intelligence Community" }
			]
		},
	]
}

Handlebars.registerHelper('list', function(items, options) {
	var out = "<ul>";

	for(var i=0, l=items.length; i<l; i++) {
		out = out + "<li>" + options.fn(items[i]) + "</li>";
	}

	return out + "</ul>";
});

Handlebars.registerHelper('joblist', function(jobs) {
	var out = "";

	for(var i=0, l=jobs.length; i<l; i++) {
		var source   = $("#job-template").html();
		var template = Handlebars.compile(source);

		out = out + template(jobs[i]);
	}

	return out;
});

var skillList = {
	skills: [
		{ skill: "Visual Studio" },
		{ skill: "C#" },
		{ skill: ".NET" },
		{ skill: "MVC" },
		{ skill: "LINQ" },
		{ skill: "WCF" },
		{ skill: "Entity Framework" },
	]
} 

$(function() {
	var source   = $("#job-list-template").html();
	var template = Handlebars.compile(source);
	$('#experience').html(template(jobList));

	//source   = $("#skill-list-template").html();
	//template = Handlebars.compile(source);
	//$('#skills').html(template(skillList));

	$('.section div').hide();
});