function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function init(){
	venue = "";
	venueInWords = "";
	overUnder = Number(Number(0).toFixed(1));
	overUnderDiff = Number(Number(0).toFixed(1));
	
	teamButtons = [ document.getElementById("bears"), document.getElementById("bengals"), document.getElementById("bills"), document.getElementById("broncos"), 
					document.getElementById("browns"), document.getElementById("buccaneers"), document.getElementById("cardinals"), document.getElementById("chargers"), 
					document.getElementById("chiefs"), document.getElementById("colts"), document.getElementById("cowboys"), document.getElementById("dolphins"),
					document.getElementById("eagles"), document.getElementById("falcons"), document.getElementById("giants"), document.getElementById("jaguars"),
					document.getElementById("jets"), document.getElementById("lions"), document.getElementById("packers"), document.getElementById("panthers"),
					document.getElementById("patriots"), document.getElementById("footballteam"), document.getElementById("raiders"), document.getElementById("rams"),
					document.getElementById("ravens"), document.getElementById("saints"), document.getElementById("seahawks"), document.getElementById("steelers"),
					document.getElementById("texans"), document.getElementById("titans"), document.getElementById("vikings"), document.getElementById("49ers") ];
					
	/*TEAM QUARTERBACKS*/
	CHIqbs = [ {name: "Trevor Siemian", college: "Northwestern", dropOff: Number(Number(0).toFixed(1))}, {name: "Nathan Peterman", college: "Pittsburgh", dropOff: Number(Number(5).toFixed(1))}, {name: "Justin Fields", college: "Ohio State", dropOff: Number(Number(3.5).toFixed(1))} ];
	CINqbs = [ {name: "Joe Burrow", college: "LSU", dropOff: Number(Number(0).toFixed(1))}, {name: "Brandon Allen", college: "Arkansas", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Jake Browning", college: "Washington", dropOff: Number(Number(6).toFixed(1))} ];
	BUFqbs = [ {name: "Josh Allen", college: "Wyoming", dropOff: Number(Number(0).toFixed(1))}, {name: "Matt Barkley", college: "USC", dropOff: Number(Number(4).toFixed(1))}, {name: "Case Keenum", college: "Houston", dropOff: Number(Number(4).toFixed(1))} ];
	DENqbs = [ {name: "Russell Wilson", college: "Wisconsin", dropOff: Number(Number(0).toFixed(1))}, {name: "Teddy Bridgewater", college: "Louisville", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Brett Rypien", college: "Boise State", dropOff: Number(Number(6.5).toFixed(1))} ];
	CLEqbs = [ {name: "Deshaun Watson", college: "Clemson", dropOff: Number(Number(0).toFixed(1))}, {name: "Joshua Dobbs", college: "Tennessee", dropOff: Number(Number(4).toFixed(1))}, {name: "Josh Rosen", college: "UCLA", dropOff: Number(Number(6.5).toFixed(1))} ];
	TBqbs = [ {name: "Tom Brady", college: "Michigan", dropOff: Number(Number(0).toFixed(1))}, {name: "Kyle Trask", college: "Florida", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Blaine Gabbert", college: "Missouri", dropOff: Number(Number(7).toFixed(1))} ];
	ARIqbs = [ {name: "Kyler Murray", college: "Oklahoma", dropOff: Number(Number(0).toFixed(1))}, {name: "Trace McSorley", college: "Penn State", dropOff: Number(Number(4).toFixed(1))}, {name: "Colt McCoy", college: "Texas", dropOff: Number(Number(6).toFixed(1))} ];
	LACqbs = [ {name: "Justin Herbert", college: "Oregon", dropOff: Number(Number(0).toFixed(1))}, {name: "Chase Daniel", college: "Missouri", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Easton Stick", college: "North Dakota State", dropOff: Number(Number(6).toFixed(1))} ];
	KCqbs = [ {name: "Patrick Mahomes", college: "Texas Tech", dropOff: Number(Number(0).toFixed(1))}, {name: "Chad Henne", college: "Michigan", dropOff: Number(Number(3).toFixed(1))}, {name: "Shane Buechele", college: "SMU", dropOff: Number(Number(5.5).toFixed(1))} ];
	INDqbs = [ {name: "Matt Ryan", college: "Boston College", dropOff: Number(Number(0).toFixed(1))}, {name: "Sam Ehlinger", college: "Texas", dropOff: Number(Number(3).toFixed(1))}, {name: "James Morgan", college: "FIU", dropOff: Number(Number(5).toFixed(1))}  ];
	DALqbs = [ {name: "Dak Prescott", college: "Mississippi State", dropOff: Number(Number(0).toFixed(1))}, {name: "Cooper Rush", college: "Central Michigan", dropOff: Number(Number(4).toFixed(1))}, {name: "Will Grier", college: "West Virginia", dropOff: Number(Number(6.5).toFixed(1))} ];
	MIAqbs = [ {name: "Tua Tagovailoa", college: "Alabama", dropOff: Number(Number(0).toFixed(1))}, {name: "Jacoby Brissett", college: "NC State", dropOff: Number(Number(3).toFixed(1))}, {name: "Jake Luton", college: "Oregon State", dropOff: Number(Number(5.5).toFixed(1))} ];
	PHIqbs = [ {name: "Jalen Hurts", college: "Oklahoma", dropOff: Number(Number(0).toFixed(1))}, {name: "Gardner Minshew", college: "Washington State", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Reid Sinnett", college: "San Diego", dropOff: Number(Number(6).toFixed(1))} ];
	ATLqbs = [ {name: "Feleipe Franks", college: "Arkansas", dropOff: Number(Number(0).toFixed(1))}, {name: "Marcus Mariota", college: "Oregon", dropOff: Number(Number(2).toFixed(1))}, {name: "Desmond Ridder", college: "Cincinnati", dropOff: Number(Number(5).toFixed(1))} ];
	NYGqbs = [ {name: "Daniel Jones", college: "Duke", dropOff: Number(Number(0).toFixed(1))}, {name: "Tyrod Taylor", college: "Virginia Tech", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Davis Webb", college: "California", dropOff: Number(Number(6.5).toFixed(1))} ];
	JAXqbs = [ {name: "Trevor Lawrence", college: "Clemson", dropOff: Number(Number(0).toFixed(1))}, {name: "C.J. Beathard", college: "Iowa", dropOff: Number(Number(4).toFixed(1))}, {name: "Danny Etling", college: "LSU", dropOff: Number(Number(6.5).toFixed(1))} ];
	NYJqbs = [ {name: "Zach Wilson", college: "BYU", dropOff: Number(Number(0).toFixed(1))}, {name: "Joe Flacco", college: "Delaware", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Mike White", college: "Western Kentucky", dropOff: Number(Number(6).toFixed(1))} ];
	DETqbs = [ {name: "Jared Goff", college: "California", dropOff: Number(Number(0).toFixed(1))}, {name: "Tim Boyle", college: "Eastern Kentucky", dropOff: Number(Number(4).toFixed(1))}, {name: "David Blough", college: "Purdue", dropOff: Number(Number(6.5).toFixed(1))} ];
	GBqbs = [ {name: "Aaron Rodgers", college: "California", dropOff: Number(Number(0).toFixed(1))}, {name: "Jordan Love", college: "Utah State", dropOff: Number(Number(5).toFixed(1))}, {name: "Kurt Benkert", college: "Virginia", dropOff: Number(Number(7.5).toFixed(1))} ];
	CARqbs = [ {name: "Baker Mayfield", college: "Oklahoma", dropOff: Number(Number(0).toFixed(1))}, {name: "Cam Newton", college: "Auburn", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Sam Darnold", college: "USC", dropOff: Number(Number(3).toFixed(1))} ];
	NEqbs = [ {name: "Mac Jones", college: "Alabama", dropOff: Number(Number(0).toFixed(1))}, {name: "Brian Hoyer", college: "Michigan State", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Bailey Zappe", college: "Western Kentucky", dropOff: Number(Number(5.5).toFixed(1))} ];
	WASqbs = [ {name: "Carson Wentz", college: "North Dakota State", dropOff: Number(Number(0).toFixed(1))}, {name: "Taylor Heinicke", college: "Old Dominion", dropOff: Number(Number(2).toFixed(1))}, {name: "Sam Howell", college: "North Carolina", dropOff: Number(Number(4.5).toFixed(1))} ];
	LVqbs = [ {name: "Derek Carr", college: "Fresno State", dropOff: Number(Number(0).toFixed(1))}, {name: "Nick Mullens", college: "Southern Miss", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Jarrett Stidham", college: "Auburn", dropOff: Number(Number(5.5).toFixed(1))} ];
	LARqbs = [ {name: "Matthew Stafford", college: "Georgia", dropOff: Number(Number(0).toFixed(1))}, {name: "John Wolford", college: "Wake Forest", dropOff: Number(Number(3).toFixed(1))}, {name: "Bryce Perkins", college: "Virginia", dropOff: Number(Number(6).toFixed(1))} ];
	BALqbs = [ {name: "Lamar Jackson", college: "Louisville", dropOff: Number(Number(0).toFixed(1))}, {name: "Tyler Huntley", college: "Utah", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Josh Johnson", college: "San Diego", dropOff: Number(Number(5).toFixed(1))} ];
	NOqbs = [ {name: "Taysom Hill", college: "BYU", dropOff: Number(Number(0).toFixed(1))}, {name: "Andy Dalton", college: "TCU", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Ian Book", college: "Notre Dame", dropOff: Number(Number(4.5).toFixed(1))} ];
	SEAqbs = [ {name: "Drew Lock", college: "Missouri", dropOff: Number(Number(0).toFixed(1))}, {name: "Geno Smith", college: "West Virginia", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Jacob Eason", college: "Washington", dropOff: Number(Number(7).toFixed(1))} ];
	PITqbs = [ {name: "Mason Rudolph", college: "Oklahoma State", dropOff: Number(Number(0).toFixed(1))}, {name: "Mitchell Trubisky", college: "North Carolina", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Kenny Pickett", college: "Pittsburgh", dropOff: Number(Number(4.5).toFixed(1))} ];
	HOUqbs = [ {name: "Kyle Allen", college: "Houston", dropOff: Number(Number(0).toFixed(1))}, {name: "Kevin Hogan", college: "Stanford", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Davis Mills", college: "Stanford", dropOff: Number(Number(6).toFixed(1))} ];
	TENqbs = [ {name: "Ryan Tannehill", college: "Texas A&amp;M", dropOff: Number(Number(0).toFixed(1))}, {name: "Logan Woodside", college: "Toledo", dropOff: Number(Number(4).toFixed(1))}, {name: "Malik Willis", college: "Liberty", dropOff: Number(Number(6.5).toFixed(1))} ];
	MINqbs = [ {name: "Kirk Cousins", college: "Michigan State", dropOff: Number(Number(0).toFixed(1))}, {name: "Sean Mannion", college: "Oregon State", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Kellen Mond", college: "Texas A&amp;M", dropOff: Number(Number(6).toFixed(1))} ];
	SFqbs = [ {name: "Jimmy Garoppolo", college: "Eastern Illinois", dropOff: Number(Number(0).toFixed(1))}, {name: "Trey Lance", college: "North Dakota State", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Brock Purdy", college: "Iowa State", dropOff: Number(Number(6).toFixed(1))} ];
	
	/*TEAM O-LINES*/
	CHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Khalil Herbert", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Virginia Tech"},
	{name: "David Montgomery", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Iowa State"},
	{name: "Khari Blasingame", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Vanderbilt"},
	{name: "Darnell Mooney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Tulane"},
	{name: "Chase Claypool", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Notre Dame"},
	{name: "Byron Pringle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kansas State"},
	{name: "Equanimeous St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "N&#39;Keal Harry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Jimmy Graham", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Jesse James", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Cole Kmet", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "James O&#39;Shaughnessy", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Illinois State"},
	{name: "Cairo Santos", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tulane"} ];
	
	CINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Chris Evans", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Michigan"},
	{name: "Joe Mixon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Oklahoma"},
	{name: "Samaje Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Trayveon Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"},
	{name: "Tyler Boyd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Pittsburgh"},
	{name: "Ja&#39;Marr Chase", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "LSU"},
	{name: "Tee Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Clemson"},
	{name: "Stanley Morgan Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Mike Thomas", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Miss"},
	{name: "Drew Sample", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Mitchell Wilcox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Evan McPherson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"} ];
	
	BUFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Reggie Gilliam", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Toledo"},
	{name: "Taiwan Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Eastern Washington"},
	{name: "Zack Moss", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Utah"},
	{name: "Devin Singletary", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida Atlantic"},
	{name: "Duke Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Cole Beasley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "SMU"},
	{name: "Gabriel Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "UCF"},
	{name: "Stefon Diggs", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Maryland"},
	{name: "Jake Kumerow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin-Whitewater"},
	{name: "Isaiah McKenzie", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Emmanuel Sanders", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "SMU"},
	{name: "Marquez Stevenson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Houston"},
	{name: "Tavon Austin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "West Virginia"},
	{name: "Jamison Crowder", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Duke"},
	{name: "Dawson Knox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Tommy Sweeney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boston College"},
	{name: "O.J. Howard", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Tyler Bass", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Southern"} ];
	
	DENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Mike Boone", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Melvin Gordon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Wisconsin"},
	{name: "Javonte Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "North Carolina"},
	{name: "Kendall Hinton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wake Forest"},
	{name: "Diontae Spencer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "McNeese State"},
	{name: "Courtland Sutton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "SMU"},
	{name: "Jerry Jeudy", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Alabama"},
	{name: "Albert Okwuegbunam", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri"},
	{name: "Andrew Beck", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Eric Tomlinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UTEP"},
	{name: "Brandon McManus", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Temple"} ];
	
	CLEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nick Chubb", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Georgia"},
	{name: "Demetric Felton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Kareem Hunt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Toledo"},
	{name: "D&#39;Ernest Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Ja&#39;Marcus Bradley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana-Lafayette"},
	{name: "Donovan Peoples-Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Michigan"},
	{name: "Anthony Schwartz", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"},
	{name: "Amari Cooper", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Alabama"},
	{name: "Jakeem Grant", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas Tech"},
	{name: "Harrison Bryant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida Atlantic"},
	{name: "David Njoku", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Chase McLaughlin", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Illinois"} ];
	
	TBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Kenjon Barner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "Le&#39;Veon Bell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan State"},
	{name: "Ke&#39;Shawn Vaughn", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Vanderbilt"},
	{name: "Leonard Fournette", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "LSU"},
	{name: "Mike Evans", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Texas A&amp;M"},
	{name: "Cyril Grayson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Tyler Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Minnesota"},
	{name: "Scotty Miller", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Bowling Green"},
	{name: "Breshad Perriman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Chris Godwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Penn State"},
	{name: "Russell Gage", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Julio Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Cameron Brate", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Harvard"},
	{name: "Kyle Rudolph", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Ryan Succop", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"} ];
	
	ARIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Eno Benjamin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Arizona State"},
	{name: "James Conner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Pittsburgh"},
	{name: "Jonathan Ward", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Central Michigan"},
	{name: "Darrel Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Greg Dortch", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wake Forest"},
	{name: "A.J. Green", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "DeAndre Hopkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Clemson"},
	{name: "Andy Isabella", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Massachusetts"},
	{name: "Rondale Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Purdue"},
	{name: "Antoine Wesley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas Tech"},
	{name: "Marquise Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Oklahoma"},
	{name: "Christian Blake", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northern Illinois"},
	{name: "Darrell Daniels", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Zach Ertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Demetrius Harris", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin-Milwaukee"},
	{name: "Stephen Anderson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "California"},
	{name: "Matt Prater", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"} ];
	
	LACoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Austin Ekeler", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Western Colorado"},
	{name: "Joshua Kelley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Gabe Nabers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Florida State"},
	{name: "Larry Rountree III", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri"},
	{name: "Keenan Allen", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "California"},
	{name: "Jalen Guyton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Texas"},
	{name: "Josh Palmer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Mike Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Clemson"},
	{name: "DeAndre Carter", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Sacramento State"},
	{name: "Tre&#39; McKitty", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Gerald Everett", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Alabama"},
	{name: "Dustin Hopkins", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida State"} ];
	
	KCoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Michael Burton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Rutgers"},
	{name: "Clyde Edwards-Helaire", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Derrick Gore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana-Monroe"},
	{name: "Jerick McKinnon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Georgia Southern"},
	{name: "Ronald Jones II", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "USC"},
	{name: "Isiah Pacheco", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Rutgers"},
	{name: "Josh Gordon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Baylor"},
	{name: "Mecole Hardman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Georgia"},
	{name: "JuJu Smith-Schuster", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Georgia"},
	{name: "Justin Watson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn"},
	{name: "Marquez Valdes-Scantling", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Kadarius Toney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Blake Bell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Noah Gray", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Duke"},
	{name: "Travis Kelce", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Harrison Butker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Tech"} ];
	
	INDoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nyheim Hines", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "NC State"},
	{name: "Deon Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Duke"},
	{name: "Jonathan Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Wisconsin"},
	{name: "Phillip Lindsay", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado"},
	{name: "Ty&#39;Son Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "BYU"},
	{name: "Parris Campbell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Ohio State"},
	{name: "T.Y. Hilton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "FIU"},
	{name: "Dezmon Patmon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington State"},
	{name: "Michael Pittman Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "USC"},
	{name: "Michael Strachan", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Charleston WV"},
	{name: "Isaiah Ford", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia Tech"},
	{name: "Mo Alie-Cox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "VCU"},
	{name: "Kylen Granson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "SMU"},
	{name: "Rodrigo Blankenship", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"} ];
	
	DALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Ezekiel Elliott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Ohio State"},
	{name: "Tony Pollard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Memphis"},
	{name: "Ryan Nall", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon State"},
	{name: "Noah Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ohio State"},
	{name: "Simi Fehoko", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Michael Gallup", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Colorado State"},
	{name: "CeeDee Lamb", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Oklahoma"},
	{name: "James Washington", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma State"},
	{name: "Sean McKeon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan"},
	{name: "Dalton Schultz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Jeremy Sprinkle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Brett Maher", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"} ];
	
	MIAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Salvon Ahmed", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Myles Gaskin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Chase Edmonds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Fordham"},
	{name: "Raheem Mostert", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Purdue"},
	{name: "Sony Michel", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Jaylen Waddle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Alabama"},
	{name: "Preston Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado State"},
	{name: "Tyreek Hill", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "West Alabama"},
	{name: "Cedrick Wilson Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boise State"},
	{name: "River Cracraft", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington State"},
	{name: "Trent Sherfield", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Vanderbilt"},
	{name: "Cethan Carter", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Mike Gesicki", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Hunter Long", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boston College"},
	{name: "Adam Shaheen", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ashland"},
	{name: "Durham Smythe", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Jason Sanders", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "New Mexico"} ];
	
	PHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Kenneth Gainwell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Memphis"},
	{name: "Miles Sanders", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Penn State"},
	{name: "Jordan Howard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Indiana"},
	{name: "Boston Scott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana Tech"},
	{name: "Trey Sermon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ohio State"},
	{name: "DeVonta Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Alabama"},
	{name: "Greg Ward", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Houston"},
	{name: "Quez Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Miss"},
	{name: "Zach Pascal", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Old Dominion"},
	{name: "A.J. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ole Miss"},
	{name: "Tyree Jackson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Buffalo"},
	{name: "Jason Croom", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Dallas Goedert", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Dakota State"},
	{name: "Jack Stoll", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Jake Elliott", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Memphis"} ];
	
	ATLoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Qadree Ollison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Pittsburgh"},
	{name: "Cordarrelle Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Tennessee"},
	{name: "Keith Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "San Jose State"},
	{name: "Damien Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Frank Darby", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Olamide Zaccheaus", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Virginia"},
	{name: "Damiere Byrd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"},
	{name: "KhaDarel Hodge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Prairie View A&amp;M"},
	{name: "Bryan Edwards", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "South Carolina"},
	{name: "Kyle Pitts", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Anthony Firkser", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Harvard"},
	{name: "Younghoe Koo", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Southern"} ];
	
	NYGoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Saquon Barkley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Penn State"},
	{name: "Devontae Booker", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Utah"},
	{name: "Cullen Gillaspia", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"},
	{name: "Elijhaa Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Idaho"},
	{name: "Matt Breida", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Southern"},
	{name: "Kenny Golladay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Northern Illinois"},
	{name: "Collin Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "John Ross", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Marcus Kemp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Hawaii"},
	{name: "Chris Myarick", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Temple"},
	{name: "Ricky Seals-Jones", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"},
	{name: "Jordan Akins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Graham Gano", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida State"} ];
	
	JAXoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Ryquell Armstead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Temple"},
	{name: "Travis Etienne", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Clemson"},
	{name: "Darrell Henderson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Memphis"},
	{name: "Marvin Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "California"},
	{name: "Laviska Shenault", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Colorado"},
	{name: "Laquon Treadwell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Christian Kirk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Texas A&amp;M"},
	{name: "Zay Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "East Carolina"},
	{name: "Luke Farrell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ohio State"},
	{name: "Chris Manhertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Canisius"},
	{name: "Kahale Warring", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "San Diego State"},
	{name: "Evan Engram", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Matthew Wright", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"} ];
	
	NYJoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nick Bawden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "San Diego State"},
	{name: "Michael Carter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "North Carolina"},
	{name: "Ty Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Maryland"},
	{name: "La&#39;Mical Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Braxton Berrios", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Miami FL"},
	{name: "Denzel Mims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Baylor"},
	{name: "Jeff Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boston College"},
	{name: "Kenny Yeboah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "C.J. Uzomah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"},
	{name: "Tyler Conklin", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Central Michigan"},
	{name: "Greg Zuerlein", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri Western"}	];
	
	DEToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Jason Cabinda", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Godwin Igwebuike", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northwestern"},
	{name: "Jermar Jefferson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon State"},
	{name: "Craig Reynolds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kutztown"},
	{name: "D&#39;Andre Swift", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Georgia"},
	{name: "Jamaal Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "BYU"},
	{name: "Justin Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northwestern"},
	{name: "Trinity Benson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "East Central"},
	{name: "Tom Kennedy", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Bryant"},
	{name: "Josh Reynolds", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Texas A&amp;M"},
	{name: "Amon-Ra St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "USC"},
	{name: "Brock Wright", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Riley Patterson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Memphis"} ];
	
	GBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "A.J. Dillon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Boston College"},
	{name: "Aaron Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "UTEP"},
	{name: "Patrick Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Memphis"},
	{name: "Allen Lazard", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Iowa State"},
	{name: "Juwann Winfree", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado"},
	{name: "Randall Cobb", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kentucky"},
	{name: "Sammy Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "Christian Watson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "North Dakota State"},
	{name: "Dominique Dafney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Indiana State"},
	{name: "Tyler Davis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Tech"},
	{name: "Josiah Deguara", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Marcedes Lewis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Mason Crosby", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado"} ];
	
	CARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Chuba Hubbard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Oklahoma State"},
	{name: "Giovanni Ricci", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Western Michigan"},
	{name: "D&#39;Onta Foreman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Texas"},
	{name: "Robby Anderson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Temple"},
	{name: "Terrace Marshall Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "D.J. Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Maryland"},
	{name: "Shi Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "South Carolina"},
	{name: "Brandon Zylstra", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Concordia-Moorhead"},
	{name: "Rashard Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado State"},
	{name: "Andre Roberts", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "The Citadel"},
	{name: "Ian Thomas", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Indiana"},
	{name: "Zane Gonzalez", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"} ];
	
	NEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Damien Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Alabama"},
	{name: "Rhamondre Stevenson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Oklahoma"},
	{name: "J.J. Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona"},
	{name: "Nelson Agholor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "USC"},
	{name: "Kendrick Bourne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Eastern Washington"},
	{name: "Jakobi Meyers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "NC State"},
	{name: "Matthew Slater", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "DeVante Parker", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisville"},
	{name: "Lil&#39;Jordan Humphrey", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Ty Montgomery", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Devin Asiasi", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Hunter Henry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Jonnu Smith", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "FIU"},
	{name: "Nick Folk", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona"} ];
	
	WASoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Jaret Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Buffalo"},
	{name: "Jonathan Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Antonio Gibson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Memphis"},
	{name: "J.D. McKissic", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas State"},
	{name: "Dyami Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Carolina"},
	{name: "Adam Humphries", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "Terry McLaurin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ohio State"},
	{name: "Dax Milne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "BYU"},
	{name: "Curtis Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Ohio State"},
	{name: "Cam Sims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Alex Erickson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin"},
	{name: "John Bates", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boise State"},
	{name: "Sammis Reyes", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Loyola-New Orleans"},
	{name: "Joey Slye", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia Tech"} ];
	
	LVoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Peyton Barber", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"},
	{name: "Josh Jacobs", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Alabama"},
	{name: "Jalen Richard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Miss"},
	{name: "Sutton Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northern Illinois"},
	{name: "Austin Walter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Rice"},
	{name: "Ameer Abdullah", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Nebraska"},
	{name: "Brandon Bolden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Jakob Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Davante Adams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Fresno State"},
	{name: "DeSean Jackson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "California"},
	{name: "Hunter Renfrow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Clemson"},
	{name: "Demarcus Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Mack Hollins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Carolina"},
	{name: "Keelan Cole", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kentucky Wesleyan"},
	{name: "Nick Bowers", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Daniel Helm", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Duke"},
	{name: "Foster Moreau", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Jesper Horsted", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Princeton"},
	{name: "Daniel Carlson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"} ];
	
	LARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Cam Akers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida State"},
	{name: "Jake Funk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Maryland"},
	{name: "Buddy Howell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Florida Atlantic"},
	{name: "Odell Beckham Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Van Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "J.J. Koski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cal Poly"},
	{name: "Cooper Kupp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Eastern Washington"},
	{name: "Ben Skowronek", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Allen Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Penn State"},
	{name: "Kendall Blanton", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri"},
	{name: "Tyler Higbee", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Western Kentucky"},
	{name: "Brycen Hopkins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Purdue"},
	{name: "Jared Pinkney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Vanderbilt"},
	{name: "Matt Gay", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Utah"} ];
	
	BALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Devonta Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida State"},
	{name: "Latavius Murray", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Patrick Ricard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Maine"},
	{name: "Corey Clement", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin"},
	{name: "Mike Davis", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"},
	{name: "Rashod Bateman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Minnesota"},
	{name: "Devin Duvernay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Texas"},
	{name: "James Proche", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "SMU"},
	{name: "Tylan Wallace", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma State"},
	{name: "Mark Andrews", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Nick Boyle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Delaware"},
	{name: "Josh Oliver", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "San Jose State"},
	{name: "Tony Poljan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia"},
	{name: "Justin Tucker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"} ];
	
	NOoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Mark Ingram Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Tony Jones Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Notre Dame"},
	{name: "Alvin Kamara", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Tennessee"},
	{name: "Adam Prentice", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"},
	{name: "Dwayne Washington", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Marquez Callaway", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Tennessee"},
	{name: "Chris Olave", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ohio State"},
	{name: "Deonte Harty", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Assumption"},
	{name: "Tre&#39;Quan Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Kenny Stills", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Jarvis Landry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Juwan Johnson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "Adam Trautman", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Dayton"},
	{name: "J.P. Holtz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Pittsburgh"},
	{name: "Chris Herndon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Wil Lutz", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia State"} ];
	
	SEAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nick Bellore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Central Michigan"},
	{name: "Alex Collins", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "DeeJay Dallas", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Travis Homer", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Rashaad Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "San Diego State"},
	{name: "Kenneth Walker III", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Michigan State"},
	{name: "D&#39;Wayne Eskridge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Western Michigan"},
	{name: "Penny Hart", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia State"},
	{name: "Tyler Lockett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Kansas State"},
	{name: "DK Metcalf", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ole Miss"},
	{name: "Freddie Swain", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Marquise Goodwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Will Dissly", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Colby Parkinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Noah Fant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Jason Myers", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Marist"} ];
	
	PIToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Kalen Ballage", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Najee Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Alabama"},
	{name: "Benny Snell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kentucky"},
	{name: "Derek Watt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Wisconsin"},
	{name: "Jeremy McNichols", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boise State"},
	{name: "Diontae Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Toledo"},
	{name: "Cody White", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan State"},
	{name: "Gunner Olszewski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Bemidji State"},
	{name: "Miles Boykin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Pat Freiermuth", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Zach Gentry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan"},
	{name: "Kevin Rader", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Youngstown State"},
	{name: "Chris Boswell", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Rice"} ];
	
	HOUoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Rex Burkhead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Nebraska"},
	{name: "Dameon Pierce", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida"},
	{name: "Royce Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "David Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northern Iowa"},
	{name: "Scottie Phillips", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Andy Janovich", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Marlon Mack", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Dare Ogunbowale", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin"},
	{name: "Danny Amendola", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas Tech"},
	{name: "Davion Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Sam Houston State"},
	{name: "Phillip Dorsett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Chris Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Nico Collins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan"},
	{name: "Chris Conley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Georgia"},
	{name: "Brandin Cooks", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Oregon State"},
	{name: "Chester Rogers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Grambling State"},
	{name: "Pharoah Brown", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "Brevin Jordan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Antony Auclair", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Laval"},
	{name: "Jeff Driskel", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana Tech"},
	{name: "Ka&#39;imi Fairbairn", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"} ];
	
	TENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Dontrell Hilliard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Tulane"},
	{name: "Trenton Cannon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia State"},
	{name: "Tory Carter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Derrick Henry", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Alabama"},
	{name: "Jordan Wilkins", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Dez Fitzpatrick", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisville"},
	{name: "Racey McMath", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Nick Westbrook-Ikhine", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Indiana"},
	{name: "Terry Godwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Cody Hollister", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Mason Kinsey", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Berry College"},
	{name: "Josh Malone", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Robert Woods", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "USC"},
	{name: "Geoff Swaim", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Austin Hooper", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Tommy Hudson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Briley Moore", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kansas State"},
	{name: "Randy Bullock", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"} ];
	
	MINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Dalvin Cook", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida State"},
	{name: "Wayne Gallman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "C.J. Ham", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Augustana SD"},
	{name: "Alexander Mattison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Boise State"},
	{name: "Kene Nwangwu", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa State"},
	{name: "Dan Chisena", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Justin Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "LSU"},
	{name: "Adam Thielen", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Minnesota State"},
	{name: "K.J. Osborn", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Ihmir Smith-Marsette", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Dede Westbrook", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Albert Wilson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia State"},
	{name: "Jalen Reagor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "TCU"},
	{name: "Luke Stocker", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Shaun Beyer", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Greg Joseph", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida Atlantic"} ];
	
	SFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "JaMycal Hasty", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Baylor"},
	{name: "Kyle Juszczyk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Harvard"},
	{name: "Elijah Mitchell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Louisiana-Lafayette"},
	{name: "Jeff Wilson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Texas"},
	{name: "Christian McCaffrey", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Stanford"},
	{name: "Brandon Aiyuk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Arizona State"},
	{name: "Travis Benjamin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Jauan Jennings", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Deebo Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "South Carolina"},
	{name: "Malik Turner", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Illinois"},
	{name: "Ray-Ray McCloud", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "Ross Dwelley", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "San Diego"},
	{name: "Tanner Hudson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Arkansas"},
	{name: "George Kittle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Charlie Woerner", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Robbie Gould", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"} ];
	
	/*TEAM D-LINES*/
	CHIdefense = [ {name: "Bears Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	CINdefense = [ {name: "Bengals Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	BUFdefense = [ {name: "Bills Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	DENdefense = [ {name: "Broncos Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	CLEdefense = [ {name: "Browns Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	TBdefense = [ {name: "Buccaneers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	ARIdefense = [ {name: "Cardinals Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	LACdefense = [ {name: "Chargers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	KCdefense = [ {name: "Chiefs Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	INDdefense = [ {name: "Colts Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	DALdefense = [ {name: "Cowboys Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	MIAdefense = [ {name: "Dolphins Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	PHIdefense = [ {name: "Eagles Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	ATLdefense = [ {name: "Falcons Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NYGdefense = [ {name: "Giants Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	JAXdefense = [ {name: "Jaguars Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NYJdefense = [ {name: "Jets Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	DETdefense = [ {name: "Lions Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	GBdefense = [ {name: "Packers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	CARdefense = [ {name: "Panthers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NEdefense = [ {name: "Patriots Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	WASdefense = [ {name: "Football Team Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	LVdefense = [ {name: "Raiders Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	LARdefense = [ {name: "Rams Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	BALdefense = [ {name: "Ravens Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NOdefense = [ {name: "Saints Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	SEAdefense = [ {name: "Seahawks Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	PITdefense = [ {name: "Steelers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	HOUdefense = [ {name: "Texans Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	TENdefense = [ {name: "Titans Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	MINdefense = [ {name: "Vikings Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	SFdefense = [ {name: "49ers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	
	team1 = [null, 0, null, null, null, null, null, null, null, null];
	team2 = [null, 0, null, null, null, null, null, null, null, null];
	
	for(var i=0; i<teamButtons.length; i++){
		addEvent(teamButtons[i], "click", teamSelect);
	}
	
	addEvent(document.getElementById("reset-btn"), "click", resetAll);
	
	/*STARTING QBS*/
	addEvent(document.getElementById("awayqb1"), "click", awayqb1);
	addEvent(document.getElementById("awayqb2"), "click", awayqb2);
	addEvent(document.getElementById("awayqb3"), "click", awayqb3);
	addEvent(document.getElementById("homeqb1"), "click", homeqb1);
	addEvent(document.getElementById("homeqb2"), "click", homeqb2);
	addEvent(document.getElementById("homeqb3"), "click", homeqb3);
	addEvent(document.getElementById("starting-quarterbacks-submit"), "click", startingQBsSubmit);
	
	/*INITIALIZE THE PLAYLIST*/
	musicPlaylist = [ {song: "Trophies (feat. Drake)", artist: "Young Money", src: "playlist/track01.mp3", songLength: 190},
					  {song: "Release (feat. Justin Timberlake)", artist: "Timbaland", src: "playlist/track02.mp3", songLength: 207},
					  {song: "East Jesus Nowhere", artist: "Green Day", src: "playlist/track03.mp3", songLength: 277},
					  {song: "Party Hard", artist: "Andrew W.K.", src: "playlist/track04.mp3", songLength: 184.973061},
					  {song: "According to You", artist: "Orianthi", src: "playlist/track05.mp3", songLength: 198.138776},
					  {song: "Whats Poppin (Remix) (feat. DaBaby, Tory Lanez & Lil Wayne)", artist: "Jack Harlow", src: "playlist/track06.mp3", songLength: 229},
					  {song: "Straightenin", artist: "Migos", src: "playlist/track07.mp3", songLength: 259},
					  {song: "Somethin&#39; Bad (feat. Carrie Underwood)", artist: "Miranda Lambert", src: "playlist/track08.mp3", songLength: 171},
					  {song: "Spin", artist: "Taking Back Sunday", src: "playlist/track09.mp3", songLength: 222},
					  {song: "Oh No", artist: "Goodbye June", src: "playlist/track10.mp3", songLength: 223},
					  {song: "The Pope of Green Bay", artist: "David Robidoux", src: "playlist/track11.mp3", songLength: 187} ];
	
	/*CHOOSE A SONG TO PLAY*/
	songPicker = Math.floor(Math.random() * musicPlaylist.length);
	songTime = 0;
	
	document.getElementById("downVol").disabled = true;
	document.getElementById("upVol").disabled = true;
	
	document.getElementById("shuffleMusic").disabled = true;
}

function aboutMusic(){
	alert("Click on the Play Music button to listen to my custom music playlist for a truly unique experience. Or you could still use this app without listening to the music. It's your call!");
}

function playMusic(){
	document.getElementById("downVol").disabled = false;
	document.getElementById("upVol").disabled = true;
	document.getElementById("playMusic").disabled = true;
	document.getElementById("shuffleMusic").disabled = false;
	document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+"0 sec"+"</p>";
	document.getElementById("trackDescription").style.visibility = "visible";
	document.getElementById("volumeMeter").style.visibility = "visible";
	bgMusic = new Audio(musicPlaylist[songPicker].src);
	bgMusic.play();
	document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
	song = setInterval(songInProgress, 1000);
}

function songInProgress(){
	if(songTime != Math.floor(musicPlaylist[songPicker].songLength) + 1){
		songTime++;
		document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+songTime+" sec</p>";
		document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
	}
	else {
		clearInterval(song);
		songTime = 0;
		songPicker = Math.floor(Math.random() * musicPlaylist.length);
		document.getElementById("playMusic").disabled = true;
		document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+"0 sec"+"</p>";
		bgMusic = new Audio(musicPlaylist[songPicker].src);
		bgMusic.play();
		document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		song = setInterval(songInProgress, 1000);
	}
	
	/*VOLUME CHECK*/
	switch (bgMusic.volume){
		case 0.0:
		{
			document.getElementById("downVol").disabled = true;
			document.getElementById("upVol").disabled = false;
			break;
		}
		case 1.0:
		{
			document.getElementById("upVol").disabled = true;
			document.getElementById("downVol").disabled = false;
			break;
		}
		default:
		{
			document.getElementById("upVol").disabled = false;
			document.getElementById("downVol").disabled = false;
			break;
		}
	}
}

function shuffleMusic(){
	bgMusic.pause();
	bgMusic.currentTime = 0;
	songTime = 0;
	songPicker = Math.floor(Math.random() * musicPlaylist.length);
	document.getElementById("playMusic").disabled = true;
	document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+"0 sec"+"</p>";
	bgMusic = new Audio(musicPlaylist[songPicker].src);
	bgMusic.play();
	document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
}

function showSongInfo(){
	document.getElementById("trackDescription").style.visibility = "visible";
}

function hideSongInfo(){
	document.getElementById("trackDescription").style.visibility = "hidden";
}

function downVol(){
	if(bgMusic.volume != 0.00){
		if(bgMusic.volume == 0.02){
			bgMusic.volume = 0.00;
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
		else{
			bgMusic.volume = Number((bgMusic.volume - 0.02).toFixed(2));
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
	}
	else {
		document.getElementById("downVol").disabled = true;
	}
}

function upVol(){
	if(bgMusic.volume != 1.00){
		if(bgMusic.volume == 0.98){
			bgMusic.volume = 1.00;
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
		else {
			bgMusic.volume = Number((bgMusic.volume + 0.02).toFixed(2));
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
	}
	else {
		document.getElementById("upVol").disabled = true;
	}
}

function resetAll(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	overUnder = Number(0).toFixed(1);
	overUnderDiff = Number(0).toFixed(1);
	
	document.getElementById("reset-btn").disabled = true;
	
	//HIDE THE BOX SCORE
	document.getElementById("box-score").innerHTML = "";
	document.getElementById("box-score").style.visibility = "hidden";
	
	/*REINITIALIZE THE QUARTERBACKS*/
	CHIqbs = [ {name: "Trevor Siemian", college: "Northwestern", dropOff: Number(Number(0).toFixed(1))}, {name: "Nathan Peterman", college: "Pittsburgh", dropOff: Number(Number(5).toFixed(1))}, {name: "Justin Fields", college: "Ohio State", dropOff: Number(Number(3.5).toFixed(1))} ];
	CINqbs = [ {name: "Joe Burrow", college: "LSU", dropOff: Number(Number(0).toFixed(1))}, {name: "Brandon Allen", college: "Arkansas", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Jake Browning", college: "Washington", dropOff: Number(Number(6).toFixed(1))} ];
	BUFqbs = [ {name: "Josh Allen", college: "Wyoming", dropOff: Number(Number(0).toFixed(1))}, {name: "Matt Barkley", college: "USC", dropOff: Number(Number(4).toFixed(1))}, {name: "Case Keenum", college: "Houston", dropOff: Number(Number(4).toFixed(1))} ];
	DENqbs = [ {name: "Russell Wilson", college: "Wisconsin", dropOff: Number(Number(0).toFixed(1))}, {name: "Teddy Bridgewater", college: "Louisville", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Brett Rypien", college: "Boise State", dropOff: Number(Number(6.5).toFixed(1))} ];
	CLEqbs = [ {name: "Deshaun Watson", college: "Clemson", dropOff: Number(Number(0).toFixed(1))}, {name: "Joshua Dobbs", college: "Tennessee", dropOff: Number(Number(4).toFixed(1))}, {name: "Josh Rosen", college: "UCLA", dropOff: Number(Number(6.5).toFixed(1))} ];
	TBqbs = [ {name: "Tom Brady", college: "Michigan", dropOff: Number(Number(0).toFixed(1))}, {name: "Kyle Trask", college: "Florida", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Blaine Gabbert", college: "Missouri", dropOff: Number(Number(7).toFixed(1))} ];
	ARIqbs = [ {name: "Kyler Murray", college: "Oklahoma", dropOff: Number(Number(0).toFixed(1))}, {name: "Trace McSorley", college: "Penn State", dropOff: Number(Number(4).toFixed(1))}, {name: "Colt McCoy", college: "Texas", dropOff: Number(Number(6).toFixed(1))} ];
	LACqbs = [ {name: "Justin Herbert", college: "Oregon", dropOff: Number(Number(0).toFixed(1))}, {name: "Chase Daniel", college: "Missouri", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Easton Stick", college: "North Dakota State", dropOff: Number(Number(6).toFixed(1))} ];
	KCqbs = [ {name: "Patrick Mahomes", college: "Texas Tech", dropOff: Number(Number(0).toFixed(1))}, {name: "Chad Henne", college: "Michigan", dropOff: Number(Number(3).toFixed(1))}, {name: "Shane Buechele", college: "SMU", dropOff: Number(Number(5.5).toFixed(1))} ];
	INDqbs = [ {name: "Matt Ryan", college: "Boston College", dropOff: Number(Number(0).toFixed(1))}, {name: "Sam Ehlinger", college: "Texas", dropOff: Number(Number(3).toFixed(1))}, {name: "James Morgan", college: "FIU", dropOff: Number(Number(5).toFixed(1))}  ];
	DALqbs = [ {name: "Dak Prescott", college: "Mississippi State", dropOff: Number(Number(0).toFixed(1))}, {name: "Cooper Rush", college: "Central Michigan", dropOff: Number(Number(4).toFixed(1))}, {name: "Will Grier", college: "West Virginia", dropOff: Number(Number(6.5).toFixed(1))} ];
	MIAqbs = [ {name: "Tua Tagovailoa", college: "Alabama", dropOff: Number(Number(0).toFixed(1))}, {name: "Jacoby Brissett", college: "NC State", dropOff: Number(Number(3).toFixed(1))}, {name: "Jake Luton", college: "Oregon State", dropOff: Number(Number(5.5).toFixed(1))} ];
	PHIqbs = [ {name: "Jalen Hurts", college: "Oklahoma", dropOff: Number(Number(0).toFixed(1))}, {name: "Gardner Minshew", college: "Washington State", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Reid Sinnett", college: "San Diego", dropOff: Number(Number(6).toFixed(1))} ];
	ATLqbs = [ {name: "Feleipe Franks", college: "Arkansas", dropOff: Number(Number(0).toFixed(1))}, {name: "Marcus Mariota", college: "Oregon", dropOff: Number(Number(2).toFixed(1))}, {name: "Desmond Ridder", college: "Cincinnati", dropOff: Number(Number(5).toFixed(1))} ];
	NYGqbs = [ {name: "Daniel Jones", college: "Duke", dropOff: Number(Number(0).toFixed(1))}, {name: "Tyrod Taylor", college: "Virginia Tech", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Davis Webb", college: "California", dropOff: Number(Number(6.5).toFixed(1))} ];
	JAXqbs = [ {name: "Trevor Lawrence", college: "Clemson", dropOff: Number(Number(0).toFixed(1))}, {name: "C.J. Beathard", college: "Iowa", dropOff: Number(Number(4).toFixed(1))}, {name: "Danny Etling", college: "LSU", dropOff: Number(Number(6.5).toFixed(1))} ];
	NYJqbs = [ {name: "Zach Wilson", college: "BYU", dropOff: Number(Number(0).toFixed(1))}, {name: "Joe Flacco", college: "Delaware", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Mike White", college: "Western Kentucky", dropOff: Number(Number(6).toFixed(1))} ];
	DETqbs = [ {name: "Jared Goff", college: "California", dropOff: Number(Number(0).toFixed(1))}, {name: "Tim Boyle", college: "Eastern Kentucky", dropOff: Number(Number(4).toFixed(1))}, {name: "David Blough", college: "Purdue", dropOff: Number(Number(6.5).toFixed(1))} ];
	GBqbs = [ {name: "Aaron Rodgers", college: "California", dropOff: Number(Number(0).toFixed(1))}, {name: "Jordan Love", college: "Utah State", dropOff: Number(Number(5).toFixed(1))}, {name: "Kurt Benkert", college: "Virginia", dropOff: Number(Number(7.5).toFixed(1))} ];
	CARqbs = [ {name: "Baker Mayfield", college: "Oklahoma", dropOff: Number(Number(0).toFixed(1))}, {name: "Cam Newton", college: "Auburn", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Sam Darnold", college: "USC", dropOff: Number(Number(3).toFixed(1))} ];
	NEqbs = [ {name: "Mac Jones", college: "Alabama", dropOff: Number(Number(0).toFixed(1))}, {name: "Brian Hoyer", college: "Michigan State", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Bailey Zappe", college: "Western Kentucky", dropOff: Number(Number(5.5).toFixed(1))} ];
	WASqbs = [ {name: "Carson Wentz", college: "North Dakota State", dropOff: Number(Number(0).toFixed(1))}, {name: "Taylor Heinicke", college: "Old Dominion", dropOff: Number(Number(2).toFixed(1))}, {name: "Sam Howell", college: "North Carolina", dropOff: Number(Number(4.5).toFixed(1))} ];
	LVqbs = [ {name: "Derek Carr", college: "Fresno State", dropOff: Number(Number(0).toFixed(1))}, {name: "Nick Mullens", college: "Southern Miss", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Jarrett Stidham", college: "Auburn", dropOff: Number(Number(5.5).toFixed(1))} ];
	LARqbs = [ {name: "Matthew Stafford", college: "Georgia", dropOff: Number(Number(0).toFixed(1))}, {name: "John Wolford", college: "Wake Forest", dropOff: Number(Number(3).toFixed(1))}, {name: "Bryce Perkins", college: "Virginia", dropOff: Number(Number(6).toFixed(1))} ];
	BALqbs = [ {name: "Lamar Jackson", college: "Louisville", dropOff: Number(Number(0).toFixed(1))}, {name: "Tyler Huntley", college: "Utah", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Josh Johnson", college: "San Diego", dropOff: Number(Number(5).toFixed(1))} ];
	NOqbs = [ {name: "Taysom Hill", college: "BYU", dropOff: Number(Number(0).toFixed(1))}, {name: "Andy Dalton", college: "TCU", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Ian Book", college: "Notre Dame", dropOff: Number(Number(4.5).toFixed(1))} ];
	SEAqbs = [ {name: "Drew Lock", college: "Missouri", dropOff: Number(Number(0).toFixed(1))}, {name: "Geno Smith", college: "West Virginia", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Jacob Eason", college: "Washington", dropOff: Number(Number(7).toFixed(1))} ];
	PITqbs = [ {name: "Mason Rudolph", college: "Oklahoma State", dropOff: Number(Number(0).toFixed(1))}, {name: "Mitchell Trubisky", college: "North Carolina", dropOff: Number(Number(2.5).toFixed(1))}, {name: "Kenny Pickett", college: "Pittsburgh", dropOff: Number(Number(4.5).toFixed(1))} ];
	HOUqbs = [ {name: "Kyle Allen", college: "Houston", dropOff: Number(Number(0).toFixed(1))}, {name: "Kevin Hogan", college: "Stanford", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Davis Mills", college: "Stanford", dropOff: Number(Number(6).toFixed(1))} ];
	TENqbs = [ {name: "Ryan Tannehill", college: "Texas A&amp;M", dropOff: Number(Number(0).toFixed(1))}, {name: "Logan Woodside", college: "Toledo", dropOff: Number(Number(4).toFixed(1))}, {name: "Malik Willis", college: "Liberty", dropOff: Number(Number(6.5).toFixed(1))} ];
	MINqbs = [ {name: "Kirk Cousins", college: "Michigan State", dropOff: Number(Number(0).toFixed(1))}, {name: "Sean Mannion", college: "Oregon State", dropOff: Number(Number(4.5).toFixed(1))}, {name: "Kellen Mond", college: "Texas A&amp;M", dropOff: Number(Number(6).toFixed(1))} ];
	SFqbs = [ {name: "Jimmy Garoppolo", college: "Eastern Illinois", dropOff: Number(Number(0).toFixed(1))}, {name: "Trey Lance", college: "North Dakota State", dropOff: Number(Number(3.5).toFixed(1))}, {name: "Brock Purdy", college: "Iowa State", dropOff: Number(Number(6).toFixed(1))} ];
	
	/*REINITIALIZE THE ROSTERS*/
	CHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Khalil Herbert", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Virginia Tech"},
	{name: "David Montgomery", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Iowa State"},
	{name: "Khari Blasingame", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Vanderbilt"},
	{name: "Darnell Mooney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Tulane"},
	{name: "Chase Claypool", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Notre Dame"},
	{name: "Byron Pringle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kansas State"},
	{name: "Equanimeous St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "N&#39;Keal Harry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Jimmy Graham", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Jesse James", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Cole Kmet", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "James O&#39;Shaughnessy", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Illinois State"},
	{name: "Cairo Santos", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tulane"} ];
	
	CINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Chris Evans", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Michigan"},
	{name: "Joe Mixon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Oklahoma"},
	{name: "Samaje Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Trayveon Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"},
	{name: "Tyler Boyd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Pittsburgh"},
	{name: "Ja&#39;Marr Chase", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "LSU"},
	{name: "Tee Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Clemson"},
	{name: "Stanley Morgan Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Mike Thomas", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Miss"},
	{name: "Drew Sample", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Mitchell Wilcox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Evan McPherson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"} ];
	
	BUFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Reggie Gilliam", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Toledo"},
	{name: "Taiwan Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Eastern Washington"},
	{name: "Zack Moss", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Utah"},
	{name: "Devin Singletary", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida Atlantic"},
	{name: "Duke Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Cole Beasley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "SMU"},
	{name: "Gabriel Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "UCF"},
	{name: "Stefon Diggs", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Maryland"},
	{name: "Jake Kumerow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin-Whitewater"},
	{name: "Isaiah McKenzie", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Emmanuel Sanders", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "SMU"},
	{name: "Marquez Stevenson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Houston"},
	{name: "Tavon Austin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "West Virginia"},
	{name: "Jamison Crowder", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Duke"},
	{name: "Dawson Knox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Tommy Sweeney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boston College"},
	{name: "O.J. Howard", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Tyler Bass", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Southern"} ];
	
	DENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Mike Boone", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Melvin Gordon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Wisconsin"},
	{name: "Javonte Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "North Carolina"},
	{name: "Kendall Hinton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wake Forest"},
	{name: "Diontae Spencer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "McNeese State"},
	{name: "Courtland Sutton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "SMU"},
	{name: "Jerry Jeudy", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Alabama"},
	{name: "Albert Okwuegbunam", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri"},
	{name: "Andrew Beck", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Eric Tomlinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UTEP"},
	{name: "Brandon McManus", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Temple"} ];
	
	CLEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nick Chubb", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Georgia"},
	{name: "Demetric Felton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Kareem Hunt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Toledo"},
	{name: "D&#39;Ernest Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Ja&#39;Marcus Bradley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana-Lafayette"},
	{name: "Donovan Peoples-Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Michigan"},
	{name: "Anthony Schwartz", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"},
	{name: "Amari Cooper", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Alabama"},
	{name: "Jakeem Grant", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas Tech"},
	{name: "Harrison Bryant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida Atlantic"},
	{name: "David Njoku", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Chase McLaughlin", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Illinois"} ];
	
	TBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Kenjon Barner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "Le&#39;Veon Bell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan State"},
	{name: "Ke&#39;Shawn Vaughn", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Vanderbilt"},
	{name: "Leonard Fournette", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "LSU"},
	{name: "Mike Evans", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Texas A&amp;M"},
	{name: "Cyril Grayson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Tyler Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Minnesota"},
	{name: "Scotty Miller", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Bowling Green"},
	{name: "Breshad Perriman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Chris Godwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Penn State"},
	{name: "Russell Gage", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Julio Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Cameron Brate", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Harvard"},
	{name: "Kyle Rudolph", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Ryan Succop", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"} ];
	
	ARIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Eno Benjamin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Arizona State"},
	{name: "James Conner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Pittsburgh"},
	{name: "Jonathan Ward", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Central Michigan"},
	{name: "Darrel Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Greg Dortch", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wake Forest"},
	{name: "A.J. Green", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "DeAndre Hopkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Clemson"},
	{name: "Andy Isabella", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Massachusetts"},
	{name: "Rondale Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Purdue"},
	{name: "Antoine Wesley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas Tech"},
	{name: "Marquise Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Oklahoma"},
	{name: "Christian Blake", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northern Illinois"},
	{name: "Darrell Daniels", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Zach Ertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Demetrius Harris", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin-Milwaukee"},
	{name: "Stephen Anderson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "California"},
	{name: "Matt Prater", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"} ];
	
	LACoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Austin Ekeler", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Western Colorado"},
	{name: "Joshua Kelley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Gabe Nabers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Florida State"},
	{name: "Larry Rountree III", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri"},
	{name: "Keenan Allen", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "California"},
	{name: "Jalen Guyton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Texas"},
	{name: "Josh Palmer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Mike Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Clemson"},
	{name: "DeAndre Carter", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Sacramento State"},
	{name: "Tre&#39; McKitty", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Gerald Everett", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Alabama"},
	{name: "Dustin Hopkins", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida State"} ];
	
	KCoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Michael Burton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Rutgers"},
	{name: "Clyde Edwards-Helaire", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Derrick Gore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana-Monroe"},
	{name: "Jerick McKinnon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Georgia Southern"},
	{name: "Ronald Jones II", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "USC"},
	{name: "Isiah Pacheco", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Rutgers"},
	{name: "Josh Gordon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Baylor"},
	{name: "Mecole Hardman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Georgia"},
	{name: "JuJu Smith-Schuster", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Georgia"},
	{name: "Justin Watson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn"},
	{name: "Marquez Valdes-Scantling", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Kadarius Toney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Blake Bell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Noah Gray", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Duke"},
	{name: "Travis Kelce", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Harrison Butker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Tech"} ];
	
	INDoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nyheim Hines", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "NC State"},
	{name: "Deon Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Duke"},
	{name: "Jonathan Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Wisconsin"},
	{name: "Phillip Lindsay", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado"},
	{name: "Ty&#39;Son Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "BYU"},
	{name: "Parris Campbell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Ohio State"},
	{name: "T.Y. Hilton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "FIU"},
	{name: "Dezmon Patmon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington State"},
	{name: "Michael Pittman Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "USC"},
	{name: "Michael Strachan", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Charleston WV"},
	{name: "Isaiah Ford", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia Tech"},
	{name: "Mo Alie-Cox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "VCU"},
	{name: "Kylen Granson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "SMU"},
	{name: "Rodrigo Blankenship", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"} ];
	
	DALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Ezekiel Elliott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Ohio State"},
	{name: "Tony Pollard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Memphis"},
	{name: "Ryan Nall", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon State"},
	{name: "Noah Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ohio State"},
	{name: "Simi Fehoko", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Michael Gallup", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Colorado State"},
	{name: "CeeDee Lamb", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Oklahoma"},
	{name: "James Washington", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma State"},
	{name: "Sean McKeon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan"},
	{name: "Dalton Schultz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Jeremy Sprinkle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Brett Maher", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"} ];
	
	MIAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Salvon Ahmed", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Myles Gaskin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Chase Edmonds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Fordham"},
	{name: "Raheem Mostert", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Purdue"},
	{name: "Sony Michel", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Jaylen Waddle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Alabama"},
	{name: "Preston Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado State"},
	{name: "Tyreek Hill", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "West Alabama"},
	{name: "Cedrick Wilson Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boise State"},
	{name: "River Cracraft", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington State"},
	{name: "Trent Sherfield", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Vanderbilt"},
	{name: "Cethan Carter", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Mike Gesicki", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Hunter Long", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boston College"},
	{name: "Adam Shaheen", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ashland"},
	{name: "Durham Smythe", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Jason Sanders", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "New Mexico"} ];
	
	PHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Kenneth Gainwell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Memphis"},
	{name: "Miles Sanders", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Penn State"},
	{name: "Jordan Howard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Indiana"},
	{name: "Boston Scott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana Tech"},
	{name: "Trey Sermon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ohio State"},
	{name: "DeVonta Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Alabama"},
	{name: "Greg Ward", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Houston"},
	{name: "Quez Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Miss"},
	{name: "Zach Pascal", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Old Dominion"},
	{name: "A.J. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ole Miss"},
	{name: "Tyree Jackson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Buffalo"},
	{name: "Jason Croom", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Dallas Goedert", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Dakota State"},
	{name: "Jack Stoll", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Jake Elliott", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Memphis"} ];
	
	ATLoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Qadree Ollison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Pittsburgh"},
	{name: "Cordarrelle Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Tennessee"},
	{name: "Keith Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "San Jose State"},
	{name: "Damien Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Frank Darby", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Olamide Zaccheaus", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Virginia"},
	{name: "Damiere Byrd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"},
	{name: "KhaDarel Hodge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Prairie View A&amp;M"},
	{name: "Bryan Edwards", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "South Carolina"},
	{name: "Kyle Pitts", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Anthony Firkser", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Harvard"},
	{name: "Younghoe Koo", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Southern"} ];
	
	NYGoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Saquon Barkley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Penn State"},
	{name: "Devontae Booker", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Utah"},
	{name: "Cullen Gillaspia", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"},
	{name: "Elijhaa Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Idaho"},
	{name: "Matt Breida", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Southern"},
	{name: "Kenny Golladay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Northern Illinois"},
	{name: "Collin Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "John Ross", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Marcus Kemp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Hawaii"},
	{name: "Chris Myarick", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Temple"},
	{name: "Ricky Seals-Jones", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"},
	{name: "Jordan Akins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Graham Gano", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida State"} ];
	
	JAXoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Ryquell Armstead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Temple"},
	{name: "Travis Etienne", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Clemson"},
	{name: "Darrell Henderson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Memphis"},
	{name: "Marvin Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "California"},
	{name: "Laviska Shenault", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Colorado"},
	{name: "Laquon Treadwell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Christian Kirk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Texas A&amp;M"},
	{name: "Zay Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "East Carolina"},
	{name: "Luke Farrell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ohio State"},
	{name: "Chris Manhertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Canisius"},
	{name: "Kahale Warring", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "San Diego State"},
	{name: "Evan Engram", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Matthew Wright", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"} ];
	
	NYJoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nick Bawden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "San Diego State"},
	{name: "Michael Carter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "North Carolina"},
	{name: "Ty Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Maryland"},
	{name: "La&#39;Mical Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Braxton Berrios", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Miami FL"},
	{name: "Denzel Mims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Baylor"},
	{name: "Jeff Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boston College"},
	{name: "Kenny Yeboah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "C.J. Uzomah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"},
	{name: "Tyler Conklin", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Central Michigan"},
	{name: "Greg Zuerlein", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri Western"}	];
	
	DEToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Jason Cabinda", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Godwin Igwebuike", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northwestern"},
	{name: "Jermar Jefferson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon State"},
	{name: "Craig Reynolds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kutztown"},
	{name: "D&#39;Andre Swift", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Georgia"},
	{name: "Jamaal Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "BYU"},
	{name: "Justin Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northwestern"},
	{name: "Trinity Benson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "East Central"},
	{name: "Tom Kennedy", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Bryant"},
	{name: "Josh Reynolds", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Texas A&amp;M"},
	{name: "Amon-Ra St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "USC"},
	{name: "Brock Wright", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Riley Patterson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Memphis"} ];
	
	GBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "A.J. Dillon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Boston College"},
	{name: "Aaron Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "UTEP"},
	{name: "Patrick Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Memphis"},
	{name: "Allen Lazard", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Iowa State"},
	{name: "Juwann Winfree", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado"},
	{name: "Randall Cobb", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kentucky"},
	{name: "Sammy Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "Christian Watson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "North Dakota State"},
	{name: "Dominique Dafney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Indiana State"},
	{name: "Tyler Davis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia Tech"},
	{name: "Josiah Deguara", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Marcedes Lewis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Mason Crosby", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado"} ];
	
	CARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Chuba Hubbard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Oklahoma State"},
	{name: "Giovanni Ricci", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Western Michigan"},
	{name: "D&#39;Onta Foreman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Texas"},
	{name: "Robby Anderson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Temple"},
	{name: "Terrace Marshall Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "D.J. Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Maryland"},
	{name: "Shi Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "South Carolina"},
	{name: "Brandon Zylstra", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Concordia-Moorhead"},
	{name: "Rashard Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Colorado State"},
	{name: "Andre Roberts", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "The Citadel"},
	{name: "Ian Thomas", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Indiana"},
	{name: "Zane Gonzalez", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"} ];
	
	NEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Damien Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Alabama"},
	{name: "Rhamondre Stevenson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Oklahoma"},
	{name: "J.J. Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona"},
	{name: "Nelson Agholor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "USC"},
	{name: "Kendrick Bourne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Eastern Washington"},
	{name: "Jakobi Meyers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "NC State"},
	{name: "Matthew Slater", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "DeVante Parker", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisville"},
	{name: "Lil&#39;Jordan Humphrey", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Ty Montgomery", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Devin Asiasi", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"},
	{name: "Hunter Henry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Jonnu Smith", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "FIU"},
	{name: "Nick Folk", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona"} ];
	
	WASoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Jaret Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Buffalo"},
	{name: "Jonathan Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Antonio Gibson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Memphis"},
	{name: "J.D. McKissic", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas State"},
	{name: "Dyami Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Carolina"},
	{name: "Adam Humphries", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "Terry McLaurin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ohio State"},
	{name: "Dax Milne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "BYU"},
	{name: "Curtis Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Ohio State"},
	{name: "Cam Sims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Alex Erickson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin"},
	{name: "John Bates", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boise State"},
	{name: "Sammis Reyes", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Loyola-New Orleans"},
	{name: "Joey Slye", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia Tech"} ];
	
	LVoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Peyton Barber", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"},
	{name: "Josh Jacobs", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Alabama"},
	{name: "Jalen Richard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Miss"},
	{name: "Sutton Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northern Illinois"},
	{name: "Austin Walter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Rice"},
	{name: "Ameer Abdullah", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Nebraska"},
	{name: "Brandon Bolden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Jakob Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Davante Adams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Fresno State"},
	{name: "DeSean Jackson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "California"},
	{name: "Hunter Renfrow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Clemson"},
	{name: "Demarcus Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Mack Hollins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Carolina"},
	{name: "Keelan Cole", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kentucky Wesleyan"},
	{name: "Nick Bowers", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Daniel Helm", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Duke"},
	{name: "Foster Moreau", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Jesper Horsted", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Princeton"},
	{name: "Daniel Carlson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Auburn"} ];
	
	LARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Cam Akers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida State"},
	{name: "Jake Funk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Maryland"},
	{name: "Buddy Howell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Florida Atlantic"},
	{name: "Odell Beckham Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Van Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "J.J. Koski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cal Poly"},
	{name: "Cooper Kupp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Eastern Washington"},
	{name: "Ben Skowronek", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Allen Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Penn State"},
	{name: "Kendall Blanton", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Missouri"},
	{name: "Tyler Higbee", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Western Kentucky"},
	{name: "Brycen Hopkins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Purdue"},
	{name: "Jared Pinkney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Vanderbilt"},
	{name: "Matt Gay", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Utah"} ];
	
	BALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Devonta Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida State"},
	{name: "Latavius Murray", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Patrick Ricard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Maine"},
	{name: "Corey Clement", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin"},
	{name: "Mike Davis", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"},
	{name: "Rashod Bateman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Minnesota"},
	{name: "Devin Duvernay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Texas"},
	{name: "James Proche", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "SMU"},
	{name: "Tylan Wallace", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma State"},
	{name: "Mark Andrews", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Nick Boyle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Delaware"},
	{name: "Josh Oliver", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "San Jose State"},
	{name: "Tony Poljan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia"},
	{name: "Justin Tucker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"} ];
	
	NOoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Mark Ingram Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Alabama"},
	{name: "Tony Jones Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Notre Dame"},
	{name: "Alvin Kamara", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Tennessee"},
	{name: "Adam Prentice", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Carolina"},
	{name: "Dwayne Washington", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Marquez Callaway", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Tennessee"},
	{name: "Chris Olave", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ohio State"},
	{name: "Deonte Harty", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Assumption"},
	{name: "Tre&#39;Quan Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCF"},
	{name: "Kenny Stills", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Jarvis Landry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Juwan Johnson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "Adam Trautman", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Dayton"},
	{name: "J.P. Holtz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Pittsburgh"},
	{name: "Chris Herndon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Wil Lutz", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia State"} ];
	
	SEAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Nick Bellore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Central Michigan"},
	{name: "Alex Collins", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "DeeJay Dallas", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Travis Homer", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Rashaad Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "San Diego State"},
	{name: "Kenneth Walker III", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Michigan State"},
	{name: "D&#39;Wayne Eskridge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Western Michigan"},
	{name: "Penny Hart", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia State"},
	{name: "Tyler Lockett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Kansas State"},
	{name: "DK Metcalf", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Ole Miss"},
	{name: "Freddie Swain", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida"},
	{name: "Marquise Goodwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Will Dissly", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Washington"},
	{name: "Colby Parkinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Noah Fant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Jason Myers", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Marist"} ];
	
	PIToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Kalen Ballage", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Najee Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Alabama"},
	{name: "Benny Snell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kentucky"},
	{name: "Derek Watt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Wisconsin"},
	{name: "Jeremy McNichols", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Boise State"},
	{name: "Diontae Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Toledo"},
	{name: "Cody White", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan State"},
	{name: "Gunner Olszewski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Bemidji State"},
	{name: "Miles Boykin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Notre Dame"},
	{name: "Pat Freiermuth", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Zach Gentry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan"},
	{name: "Kevin Rader", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Youngstown State"},
	{name: "Chris Boswell", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Rice"} ];
	
	HOUoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Rex Burkhead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Nebraska"},
	{name: "Dameon Pierce", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida"},
	{name: "Royce Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "David Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Northern Iowa"},
	{name: "Scottie Phillips", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Andy Janovich", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Nebraska"},
	{name: "Marlon Mack", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "South Florida"},
	{name: "Dare Ogunbowale", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Wisconsin"},
	{name: "Danny Amendola", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas Tech"},
	{name: "Davion Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Sam Houston State"},
	{name: "Phillip Dorsett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Chris Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Cincinnati"},
	{name: "Nico Collins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Michigan"},
	{name: "Chris Conley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Georgia"},
	{name: "Brandin Cooks", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "Oregon State"},
	{name: "Chester Rogers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Grambling State"},
	{name: "Pharoah Brown", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oregon"},
	{name: "Brevin Jordan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Antony Auclair", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Laval"},
	{name: "Jeff Driskel", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisiana Tech"},
	{name: "Ka&#39;imi Fairbairn", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "UCLA"} ];
	
	TENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Dontrell Hilliard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Tulane"},
	{name: "Trenton Cannon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Virginia State"},
	{name: "Tory Carter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Derrick Henry", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Alabama"},
	{name: "Jordan Wilkins", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Ole Miss"},
	{name: "Dez Fitzpatrick", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Louisville"},
	{name: "Racey McMath", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "LSU"},
	{name: "Nick Westbrook-Ikhine", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Indiana"},
	{name: "Terry Godwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Cody Hollister", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arkansas"},
	{name: "Mason Kinsey", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Berry College"},
	{name: "Josh Malone", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Robert Woods", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "USC"},
	{name: "Geoff Swaim", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas"},
	{name: "Austin Hooper", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Stanford"},
	{name: "Tommy Hudson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Arizona State"},
	{name: "Briley Moore", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Kansas State"},
	{name: "Randy Bullock", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Texas A&amp;M"} ];
	
	MINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "Dalvin Cook", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Florida State"},
	{name: "Wayne Gallman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "C.J. Ham", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Augustana SD"},
	{name: "Alexander Mattison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Boise State"},
	{name: "Kene Nwangwu", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa State"},
	{name: "Dan Chisena", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"},
	{name: "Justin Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "LSU"},
	{name: "Adam Thielen", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Minnesota State"},
	{name: "K.J. Osborn", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Ihmir Smith-Marsette", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Dede Westbrook", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Oklahoma"},
	{name: "Albert Wilson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia State"},
	{name: "Jalen Reagor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "TCU"},
	{name: "Luke Stocker", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Shaun Beyer", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Greg Joseph", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Florida Atlantic"} ];
	
	SFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: ""},
	{name: "JaMycal Hasty", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Baylor"},
	{name: "Kyle Juszczyk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Harvard"},
	{name: "Elijah Mitchell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB2",  college: "Louisiana-Lafayette"},
	{name: "Jeff Wilson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "North Texas"},
	{name: "Christian McCaffrey", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "RB1",  college: "Stanford"},
	{name: "Brandon Aiyuk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR2",  college: "Arizona State"},
	{name: "Travis Benjamin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Miami FL"},
	{name: "Jauan Jennings", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Tennessee"},
	{name: "Deebo Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "WR1",  college: "South Carolina"},
	{name: "Malik Turner", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Illinois"},
	{name: "Ray-Ray McCloud", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Clemson"},
	{name: "Ross Dwelley", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "San Diego"},
	{name: "Tanner Hudson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Southern Arkansas"},
	{name: "George Kittle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Iowa"},
	{name: "Charlie Woerner", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Georgia"},
	{name: "Robbie Gould", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0, rank: "",  college: "Penn State"} ];
	
	CHIdefense = [ {name: "Bears Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	CINdefense = [ {name: "Bengals Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	BUFdefense = [ {name: "Bills Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	DENdefense = [ {name: "Broncos Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	CLEdefense = [ {name: "Browns Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	TBdefense = [ {name: "Buccaneers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	ARIdefense = [ {name: "Cardinals Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	LACdefense = [ {name: "Chargers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	KCdefense = [ {name: "Chiefs Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	INDdefense = [ {name: "Colts Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	DALdefense = [ {name: "Cowboys Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	MIAdefense = [ {name: "Dolphins Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	PHIdefense = [ {name: "Eagles Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	ATLdefense = [ {name: "Falcons Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NYGdefense = [ {name: "Giants Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	JAXdefense = [ {name: "Jaguars Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NYJdefense = [ {name: "Jets Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	DETdefense = [ {name: "Lions Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	GBdefense = [ {name: "Packers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	CARdefense = [ {name: "Panthers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NEdefense = [ {name: "Patriots Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	WASdefense = [ {name: "Football Team Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	LVdefense = [ {name: "Raiders Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	LARdefense = [ {name: "Rams Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	BALdefense = [ {name: "Ravens Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	NOdefense = [ {name: "Saints Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	SEAdefense = [ {name: "Seahawks Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	PITdefense = [ {name: "Steelers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	HOUdefense = [ {name: "Texans Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	TENdefense = [ {name: "Titans Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	MINdefense = [ {name: "Vikings Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	SFdefense = [ {name: "49ers Defense", pos: "DEF", points: 0, safeties: 0, defensiveTD: 0} ];
	
	team1 = [null, 0, null, null, null, null, null, null, null, null];
	team2 = [null, 0, null, null, null, null, null, null, null, null];
	
	//CLEAR SIMULATION AREA
	document.getElementById("simulation").innerHTML = "<p id=\"simulation\"></p>";
	document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Select Team 1 (Away)</p>";
	
	for(var i=0; i<teamButtons.length; i++){
		teamButtons[i].disabled = false;
	}
}

function teamSelect(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	var buttonCounter = 0;
	
	/*for(var i=0; i<teamButtons.length; i++){
		if(teamButtons[i].clicked == true){
			teamButtons[i].disabled = true;
		}
	}*/
	
	/*Get the teams ready! Team 1 is away and Team 2 is home*/
	/*Check how many buttons are still open*/
	for(var i=0; i<teamButtons.length; i++){
		if(teamButtons[i].disabled == false)
		{
			buttonCounter++;
		}
	}
	
	/*One team is ready*/
	if (buttonCounter == teamButtons.length)
	{
		team1[0] = t.id;
		team1[1] = 0;
		
		/*Team 1 Roster*/
		switch (team1[0])
		{
			case "bears":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "CHI";
				team1[4] = CHIoffense;
				team1[5] = CHIdefense;
				team1[6] = "Chicago".toUpperCase();
				team1[7] = CHIqbs;
				team1[8] = Number(18.5).toFixed(1);
				team1[9] = Number(-5.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "bengals":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "CIN";
				team1[4] = CINoffense;
				team1[5] = CINdefense;
				team1[6] = "Cincinnati".toUpperCase();
				team1[7] = CINqbs;
				team1[8] = Number(27).toFixed(1);
				team1[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "bills":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "BUF";
				team1[4] = BUFoffense;
				team1[5] = BUFdefense;
				team1[6] = "Buffalo".toUpperCase();
				team1[7] = BUFqbs;
				team1[8] = Number(28.5).toFixed(1);
				team1[9] = Number(11.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "broncos":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "DEN";
				team1[4] = DENoffense;
				team1[5] = DENdefense;
				team1[6] = "Denver".toUpperCase();
				team1[7] = DENqbs;
				team1[8] = Number(19.5).toFixed(1);
				team1[9] = Number(0.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "browns":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "CLE";
				team1[4] = CLEoffense;
				team1[5] = CLEdefense;
				team1[6] = "Cleveland".toUpperCase();
				team1[7] = CLEqbs;
				team1[8] = Number(20.5).toFixed(1);
				team1[9] = Number(-1.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "buccaneers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "TB";
				team1[4] = TBoffense;
				team1[5] = TBdefense;
				team1[6] = "Tampa Bay".toUpperCase();
				team1[7] = TBqbs;
				team1[8] = Number(30).toFixed(1);
				team1[9] = Number(9).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "cardinals":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "ARI";
				team1[4] = ARIoffense;
				team1[5] = ARIdefense;
				team1[6] = "Arizona".toUpperCase();
				team1[7] = ARIqbs;
				team1[8] = Number(26.5).toFixed(1);
				team1[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "chargers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "LAC";
				team1[4] = LACoffense;
				team1[5] = LACdefense;
				team1[6] = "Los Angeles".toUpperCase();
				team1[7] = LACqbs;
				team1[8] = Number(28).toFixed(1);
				team1[9] = Number(1).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "chiefs":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "KC";
				team1[4] = KCoffense;
				team1[5] = KCdefense;
				team1[6] = "Kansas City".toUpperCase();
				team1[7] = KCqbs;
				team1[8] = Number(28).toFixed(1);
				team1[9] = Number(6.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "colts":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "IND";
				team1[4] = INDoffense;
				team1[5] = INDdefense;
				team1[6] = "Indianapolis".toUpperCase();
				team1[7] = INDqbs;
				team1[8] = Number(26.5).toFixed(1);
				team1[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "cowboys":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "DAL";
				team1[4] = DALoffense;
				team1[5] = DALdefense;
				team1[6] = "Dallas".toUpperCase();
				team1[7] = DALqbs;
				team1[8] = Number(31).toFixed(1);
				team1[9] = Number(10).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "dolphins":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "MIA";
				team1[4] = MIAoffense;
				team1[5] = MIAdefense;
				team1[6] = "Miami".toUpperCase();
				team1[7] = MIAqbs;
				team1[8] = Number(20).toFixed(1);
				team1[9] = Number(-2).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "eagles":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "PHI";
				team1[4] = PHIoffense;
				team1[5] = PHIdefense;
				team1[6] = "Philadelphia".toUpperCase();
				team1[7] = PHIqbs;
				team1[8] = Number(26).toFixed(1);
				team1[9] = Number(3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "falcons":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "ATL";
				team1[4] = ATLoffense;
				team1[5] = ATLdefense;
				team1[6] = "Atlanta".toUpperCase();
				team1[7] = ATLqbs;
				team1[8] = Number(18.5).toFixed(1);
				team1[9] = Number(-8.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "giants":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NYG";
				team1[4] = NYGoffense;
				team1[5] = NYGdefense;
				team1[6] = "New York".toUpperCase();
				team1[7] = NYGqbs;
				team1[8] = Number(15).toFixed(1);
				team1[9] = Number(-9.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "jaguars":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "JAX";
				team1[4] = JAXoffense;
				team1[5] = JAXdefense;
				team1[6] = "Jacksonville".toUpperCase();
				team1[7] = JAXqbs;
				team1[8] = Number(15).toFixed(1);
				team1[9] = Number(-12).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "jets":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NYJ";
				team1[4] = NYJoffense;
				team1[5] = NYJdefense;
				team1[6] = "New York".toUpperCase();
				team1[7] = NYJqbs;
				team1[8] = Number(18).toFixed(1);
				team1[9] = Number(-11.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "lions":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "DET";
				team1[4] = DEToffense;
				team1[5] = DETdefense;
				team1[6]= "Detroit".toUpperCase();
				team1[7] = DETqbs;
				team1[8] = Number(19).toFixed(1);
				team1[9] = Number(-8.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "packers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "GB";
				team1[4] = GBoffense;
				team1[5] = GBdefense;
				team1[6] = "Green Bay".toUpperCase();
				team1[7] = GBqbs;
				team1[8] = Number(26.5).toFixed(1);
				team1[9] = Number(4.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "panthers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "CAR";
				team1[4] = CARoffense;
				team1[5] = CARdefense;
				team1[6] = "Carolina".toUpperCase();
				team1[7] = CARqbs;
				team1[8] = Number(18).toFixed(1);
				team1[9] = Number(-6).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "patriots":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NE";
				team1[4] = NEoffense;
				team1[5] = NEdefense;
				team1[6] = "New England".toUpperCase();
				team1[7] = NEqbs;
				team1[8] = Number(27).toFixed(1);
				team1[9] = Number(9).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "raiders":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "LV";
				team1[4] = LVoffense;
				team1[5] = LVdefense;
				team1[6] = "Las Vegas".toUpperCase();
				team1[7] = LVqbs;
				team1[8] = Number(22).toFixed(1);
				team1[9] = Number(-4).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "rams":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "LAR";
				team1[4] = LARoffense;
				team1[5] = LARdefense;
				team1[6] = "Los Angeles".toUpperCase();
				team1[7] = LARqbs;
				team1[8] = Number(27).toFixed(1);
				team1[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "ravens":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "BAL";
				team1[4] = BALoffense;
				team1[5] = BALdefense;
				team1[6] = "Baltimore".toUpperCase();
				team1[7] = BALqbs;
				team1[8] = Number(23).toFixed(1);
				team1[9] = Number(0).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "footballteam":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "WAS";
				team1[4] = WASoffense;
				team1[5] = WASdefense;
				team1[6] = "Washington".toUpperCase();
				team1[7] = WASqbs;
				team1[8] = Number(19.5).toFixed(1);
				team1[9] = Number(-6).toFixed(1);
				team1[0] = "football team";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "saints":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NO";
				team1[4] = NOoffense;
				team1[5] = NOdefense;
				team1[6] = "New Orleans".toUpperCase();
				team1[7] = NOqbs;
				team1[8] = Number(21.5).toFixed(1);
				team1[9] = Number(2).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "seahawks":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "SEA";
				team1[4] = SEAoffense;
				team1[5] = SEAdefense;
				team1[6] = "Seattle".toUpperCase();
				team1[7] = SEAqbs;
				team1[8] = Number(23).toFixed(1);
				team1[9] = Number(1.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "steelers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "PIT";
				team1[4] = PIToffense;
				team1[5] = PITdefense;
				team1[6] = "Pittsburgh".toUpperCase();
				team1[7] = PITqbs;
				team1[8] = Number(20).toFixed(1);
				team1[9] = Number(-3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "texans":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "HOU";
				team1[4] = HOUoffense;
				team1[5] = HOUdefense;
				team1[6] = "Houston".toUpperCase();
				team1[7] = HOUqbs;
				team1[8] = Number(16.5).toFixed(1);
				team1[9] = Number(-10).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "titans":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "TEN";
				team1[4] = TENoffense;
				team1[5] = TENdefense;
				team1[6] = "Tennessee".toUpperCase();
				team1[7] = TENqbs;
				team1[8] = Number(24.5).toFixed(1);
				team1[9] = Number(3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "vikings":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "MIN";
				team1[4] = MINoffense;
				team1[5] = MINdefense;
				team1[6] = "Minnesota".toUpperCase();
				team1[7] = MINqbs;
				team1[8] = Number(25).toFixed(1);
				team1[9] = Number(0).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			default:
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "SF";
				team1[4] = SFoffense;
				team1[5] = SFdefense;
				team1[6] = "San Francisco".toUpperCase();
				team1[7] = SFqbs;
				team1[8] = Number(25).toFixed(1);
				team1[9] = Number(3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
		}
		
		t.disabled = true;
		//document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";
	}
	/*Both teams are ready! Game On!*/
	else
	{
		team2[0] = t.id;
		team2[1] = 0;
		
		/*Team 2 Roster*/
		switch (team2[0])
		{
			case "bears":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "CHI";
				team2[4] = CHIoffense;
				team2[5] = CHIdefense;
				team2[6] = "Chicago".toUpperCase();
				team2[7] = CHIqbs;
				team2[8] = Number(18.5).toFixed(1);
				team2[9] = Number(-5.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "bengals":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "CIN";
				team2[4] = CINoffense;
				team2[5] = CINdefense;
				team2[6] = "Cincinnati".toUpperCase();
				team2[7] = CINqbs;
				team2[8] = Number(27).toFixed(1);
				team2[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "bills":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "BUF";
				team2[4] = BUFoffense;
				team2[5] = BUFdefense;
				team2[6] = "Buffalo".toUpperCase();
				team2[7] = BUFqbs;
				team2[8] = Number(28.5).toFixed(1);
				team2[9] = Number(11.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "broncos":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "DEN";
				team2[4] = DENoffense;
				team2[5] = DENdefense;
				team2[6] = "Denver".toUpperCase();
				team2[7] = DENqbs;
				team2[8] = Number(19.5).toFixed(1);
				team2[9] = Number(0.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "browns":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "CLE";
				team2[4] = CLEoffense;
				team2[5] = CLEdefense;
				team2[6] = "Cleveland".toUpperCase();
				team2[7] = CLEqbs;
				team2[8] = Number(20.5).toFixed(1);
				team2[9] = Number(-1.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "buccaneers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "TB";
				team2[4] = TBoffense;
				team2[5] = TBdefense;
				team2[6] = "Tampa Bay".toUpperCase();
				team2[7] = TBqbs;
				team2[8] = Number(30).toFixed(1);
				team2[9] = Number(9).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "cardinals":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "ARI";
				team2[4] = ARIoffense;
				team2[5] = ARIdefense;
				team2[6] = "Arizona".toUpperCase();
				team2[7] = ARIqbs;
				team2[8] = Number(26.5).toFixed(1);
				team2[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "chargers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "LAC";
				team2[4] = LACoffense;
				team2[5] = LACdefense;
				team2[6] = "Los Angeles".toUpperCase();
				team2[7] = LACqbs;
				team2[8] = Number(28).toFixed(1);
				team2[9] = Number(1).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "chiefs":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "KC";
				team2[4] = KCoffense;
				team2[5] = KCdefense;
				team2[6] = "Kansas City".toUpperCase();
				team2[7] = KCqbs;
				team2[8] = Number(28).toFixed(1);
				team2[9] = Number(6.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "colts":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "IND";
				team2[4] = INDoffense;
				team2[5] = INDdefense;
				team2[6] = "Indianapolis".toUpperCase();
				team2[7] = INDqbs;
				team2[8] = Number(26.5).toFixed(1);
				team2[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "cowboys":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "DAL";
				team2[4] = DALoffense;
				team2[5] = DALdefense;
				team2[6] = "Dallas".toUpperCase();
				team2[7] = DALqbs;
				team2[8] = Number(31).toFixed(1);
				team2[9] = Number(10).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "dolphins":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "MIA";
				team2[4] = MIAoffense;
				team2[5] = MIAdefense;
				team2[6] = "Miami".toUpperCase();
				team2[7] = MIAqbs;
				team2[8] = Number(20).toFixed(1);
				team2[9] = Number(-2).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "eagles":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "PHI";
				team2[4] = PHIoffense;
				team2[5] = PHIdefense;
				team2[6] = "Philadelphia".toUpperCase();
				team2[7] = PHIqbs;
				team2[8] = Number(26).toFixed(1);
				team2[9] = Number(3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "falcons":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "ATL";
				team2[4] = ATLoffense;
				team2[5] = ATLdefense;
				team2[6] = "Atlanta".toUpperCase();
				team2[7] = ATLqbs;
				team2[8] = Number(18.5).toFixed(1);
				team2[9] = Number(-8.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "giants":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NYG";
				team2[4] = NYGoffense;
				team2[5] = NYGdefense;
				team2[6] = "New York".toUpperCase();
				team2[7] = NYGqbs;
				team2[8] = Number(15).toFixed(1);
				team2[9] = Number(-9.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "jaguars":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "JAX";
				team2[4] = JAXoffense;
				team2[5] = JAXdefense;
				team2[6] = "Jacksonville".toUpperCase();
				team2[7] = JAXqbs;
				team2[8] = Number(15).toFixed(1);
				team2[9] = Number(-12).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "jets":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NYJ";
				team2[4] = NYJoffense;
				team2[5] = NYJdefense;
				team2[6] = "New York".toUpperCase();
				team2[7] = NYJqbs;
				team2[8] = Number(18).toFixed(1);
				team2[9] = Number(-11.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "lions":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "DET";
				team2[4] = DEToffense;
				team2[5] = DETdefense;
				team2[6]= "Detroit".toUpperCase();
				team2[7] = DETqbs;
				team2[8] = Number(19).toFixed(1);
				team2[9] = Number(-8.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "packers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "GB";
				team2[4] = GBoffense;
				team2[5] = GBdefense;
				team2[6] = "Green Bay".toUpperCase();
				team2[7] = GBqbs;
				team2[8] = Number(26.5).toFixed(1);
				team2[9] = Number(4.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "panthers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "CAR";
				team2[4] = CARoffense;
				team2[5] = CARdefense;
				team2[6] = "Carolina".toUpperCase();
				team2[7] = CARqbs;
				team2[8] = Number(18).toFixed(1);
				team2[9] = Number(-6).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "patriots":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NE";
				team2[4] = NEoffense;
				team2[5] = NEdefense;
				team2[6] = "New England".toUpperCase();
				team2[7] = NEqbs;
				team2[8] = Number(27).toFixed(1);
				team2[9] = Number(9).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "raiders":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "LV";
				team2[4] = LVoffense;
				team2[5] = LVdefense;
				team2[6] = "Las Vegas".toUpperCase();
				team2[7] = LVqbs;
				team2[8] = Number(22).toFixed(1);
				team2[9] = Number(-4).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "rams":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "LAR";
				team2[4] = LARoffense;
				team2[5] = LARdefense;
				team2[6] = "Los Angeles".toUpperCase();
				team2[7] = LARqbs;
				team2[8] = Number(27).toFixed(1);
				team2[9] = Number(5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "ravens":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "BAL";
				team2[4] = BALoffense;
				team2[5] = BALdefense;
				team2[6] = "Baltimore".toUpperCase();
				team2[7] = BALqbs;
				team2[8] = Number(23).toFixed(1);
				team2[9] = Number(0).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "footballteam":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "WAS";
				team2[4] = WASoffense;
				team2[5] = WASdefense;
				team2[6] = "Washington".toUpperCase();
				team2[7] = WASqbs;
				team2[8] = Number(19.5).toFixed(1);
				team2[9] = Number(-6).toFixed(1);
				team2[0] = "football team";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "saints":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NO";
				team2[4] = NOoffense;
				team2[5] = NOdefense;
				team2[6] = "New Orleans".toUpperCase();
				team2[7] = NOqbs;
				team2[8] = Number(21.5).toFixed(1);
				team2[9] = Number(2).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "seahawks":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "SEA";
				team2[4] = SEAoffense;
				team2[5] = SEAdefense;
				team2[6] = "Seattle".toUpperCase();
				team2[7] = SEAqbs;
				team2[8] = Number(23).toFixed(1);
				team2[9] = Number(1.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "steelers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "PIT";
				team2[4] = PIToffense;
				team2[5] = PITdefense;
				team2[6] = "Pittsburgh".toUpperCase();
				team2[7] = PITqbs;
				team2[8] = Number(20).toFixed(1);
				team2[9] = Number(-3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "texans":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "HOU";
				team2[4] = HOUoffense;
				team2[5] = HOUdefense;
				team2[6] = "Houston".toUpperCase();
				team2[7] = HOUqbs;
				team2[8] = Number(16.5).toFixed(1);
				team2[9] = Number(-10).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "titans":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "TEN";
				team2[4] = TENoffense;
				team2[5] = TENdefense;
				team2[6] = "Tennessee".toUpperCase();
				team2[7] = TENqbs;
				team2[8] = Number(24.5).toFixed(1);
				team2[9] = Number(3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "vikings":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "MIN";
				team2[4] = MINoffense;
				team2[5] = MINdefense;
				team2[6] = "Minnesota".toUpperCase();
				team2[7] = MINqbs;
				team2[8] = Number(25).toFixed(1);
				team2[9] = Number(0).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			default:
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "SF";
				team2[4] = SFoffense;
				team2[5] = SFdefense;
				team2[6] = "San Francisco".toUpperCase();
				team2[7] = SFqbs;
				team2[8] = Number(25).toFixed(1);
				team2[9] = Number(3.5).toFixed(1);
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
		}

		
		t.disabled = true;
		/*document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";*/
		
		/*DISABLE EVERYTHING ELSE*/
		for(var i=0; i<teamButtons.length; i++){
			teamButtons[i].disabled = true;
		}
		
	}
}

function coinToss(team1, team2){
	switch(document.getElementById("venues").value){
		case "nfl01":{
			venueInWords = "Soldier Field - Chicago, IL";
			break;
		}
		case "nfl02":{
			venueInWords = "Paul Brown Stadium - Cincinnati, OH";
			break;
		}
		case "nfl03":{
			venueInWords = "Highmark Stadium - Orchard Park, NY";
			break;
		}
		case "nfl04":{
			venueInWords = "Empower Field at Mile High - Denver, CO";
			break;
		}
		case "nfl05":{
			venueInWords = "FirstEnergy Stadium - Cleveland, OH";
			break;
		}
		case "nfl06":{
			venueInWords = "Raymond James Stadium - Tampa, FL";
			break;
		}
		case "nfl07":{
			venueInWords = "State Farm Stadium - Glendale, AZ";
			break;
		}
		case "nfl08":{
			venueInWords = "SoFi Stadium - Inglewood, CA";
			break;
		}
		case "nfl09":{
			venueInWords = "GEHA Field at Arrowhead Stadium - Kansas City, MO";
			break;
		}
		case "nfl10":{
			venueInWords = "Lucas Oil Stadium - Indianapolis, IN";
			break;
		}
		case "nfl11":{
			venueInWords = "AT&amp;T Stadium - Arlington, TX";
			break;
		}
		case "nfl12":{
			venueInWords = "Hard Rock Stadium - Miami Gardens, FL";
			break;
		}
		case "nfl13":{
			venueInWords = "Lincoln Financial Field - Philadelphia, PA";
			break;
		}
		case "nfl14":{
			venueInWords = "Mercedes-Benz Stadium - Atlanta, GA";
			break;
		}
		case "nfl15":{
			venueInWords = "MetLife Stadium - East Rutherford, NJ";
			break;
		}
		case "nfl16":{
			venueInWords = "TIAA Bank Field - Jacksonville, FL";
			break;
		}
		case "nfl17":{
			venueInWords = "Ford Field - Detroit, MI";
			break;
		}
		case "nfl18":{
			venueInWords = "Lambeau Field - Green Bay, WI";
			break;
		}
		case "nfl19":{
			venueInWords = "Bank of America Stadium - Charlotte, NC";
			break;
		}
		case "nfl20":{
			venueInWords = "Gillette Stadium - Foxborough, MA";
			break;
		}
		case "nfl21":{
			venueInWords = "FedEx Field - Landover, MD";
			break;
		}
		case "nfl22":{
			venueInWords = "Allegiant Stadium - Las Vegas, NV";
			break;
		}
		case "nfl23":{
			venueInWords = "M&amp;T Bank Stadium - Baltimore, MD";
			break;
		}
		case "nfl24":{
			venueInWords = "Caesars Superdome - New Orleans, LA";
			break;
		}
		case "nfl25":{
			venueInWords = "Lumen Field - Seattle, WA";
			break;
		}
		case "nfl26":{
			venueInWords = "Acrisure Stadium - Pittsburgh, PA";
			break;
		}
		case "nfl27":{
			venueInWords = "NRG Stadium - Houston, TX";
			break;
		}
		case "nfl28":{
			venueInWords = "Nissan Stadium - Nashville, TN";
			break;
		}
		case "nfl29":{
			venueInWords = "U.S. Bank Stadium - Minneapolis, MN";
			break;
		}
		case "nfl30":{
			venueInWords = "Levi&#39;s Stadium - Santa Clara, CA";
			break;
		}
		case "cfl01":{
			venueInWords = "BC Place Stadium - Vancouver, BC, CAN";
			break;
		}
		case "cfl02":{
			venueInWords = "McMahon Stadium - Calgary, AB, CAN";
			break;
		}
		case "cfl03":{
			venueInWords = "The Brick Field at Commonwealth Stadium - Edmonton, AB, CAN";
			break;
		}
		case "cfl04":{
			venueInWords = "Mosaic Stadium - Regina, SK, CAN";
			break;
		}
		case "cfl05":{
			venueInWords = "Investors Group Field - Winnipeg, MB, CAN";
			break;
		}
		case "cfl06":{
			venueInWords = "Tim Hortons Field - Hamilton, ON, CAN";
			break;
		}
		case "cfl07":{
			venueInWords = "BMO Field - Toronto, ON, CAN";
			break;
		}
		case "cfl08":{
			venueInWords = "TD Place Stadium - Ottawa, ON, CAN";
			break;
		}
		case "cfl09":{
			venueInWords = "Percival-Molson Memorial Stadium - Montreal, QC, CAN";
			break;
		}
		case "cfl10":{
			venueInWords = "Rogers Centre - Toronto, ON, CAN";
			break;
		}
		case "cfl11":{
			venueInWords = "Olympic Stadium - Montreal, QC, CAN";
			break;
		}
		case "cfl12":{
			venueInWords = "Croix-Bleue Medavie Stadium - Moncton, NB, CAN";
			break;
		}
		case "cfl13":{
			venueInWords = "Huskies Stadium - Halifax, NS, CAN";
			break;
		}
		case "cfl14":{
			venueInWords = "Raymond Field - Wolfville, NS, CAN";
			break;
		}
		case "int01":{
			venueInWords = "Wembley Stadium - London, UK";
			break;
		}
		case "int02":{
			venueInWords = "Tottenham Hotspur Stadium - London, UK";
			break;
		}
		case "int03":{
			venueInWords = "Twickenham Stadium - London, UK";
			break;
		}
		case "int04":{
			venueInWords = "Estadio Azteca - Mexico City, MEX";
			break;
		}
		case "int05":{
			venueInWords = "Allianz Arena - Munich, DEU";
			break;
		}
		case "alt01":{
			venueInWords = "Tom Benson Hall of Fame Stadium - Canton, OH";
			break;
		}
		case "alt02":{
			venueInWords = "Aloha Stadium - Honolulu, HI";
			break;
		}
	}
	
	document.getElementById("simulation").innerHTML += "<p><br/><b>COIN TOSS</b></p>";
	var coinToss = Math.floor(Math.random() * 2);
	
	
	if(coinToss == 0)
	{
		//AWAY TEAM WINS THE TOSS
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " wins the toss</p>";
		var picker = Math.floor(Math.random() * 2);

		if(picker == 0)
		{
			//AWAY KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " will kick to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
			setTimeout(firstQuarterStart, 1000);
			//firstQuarter(team1, team2);
		}
		else
		{
			//HOME TEAM KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " will receive to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
			setTimeout(firstQuarterStart, 1000);
			//firstQuarter(team1, team2);
		}
	}
	else
	{
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " wins the toss</p>";
		var picker = Math.floor(Math.random() * 2);

		if(picker == 0)
		{
			//HOME TEAM KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will kick to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
			setTimeout(firstQuarterStart, 1000);
			//firstQuarter(team1, team2);
		}
		else
		{
			//AWAY TEAM KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will receive to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
			setTimeout(firstQuarterStart, 1000);
			//firstQuarter(team1, team2);
		}
	}	
}

function firstQuarter(team1, team2){
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 50 + 1);

		if(driveResult >= 1 && driveResult < 4) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team1[4][0].rushTD++;
					team1[4][0].points = team1[4][0].points + 6;
					var playerName = team1[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "RB" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team1[4][rnd].rushTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							var playerName = team1[4][rnd];
						}
						else {
							team1[4][rnd].recTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							team1[4][0].passTD++;
							var playerName = team1[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR1"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR2"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "WR" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						team1[4][rnd].recTD++;
						team1[4][rnd].points = team1[4][rnd].points + 6;
						team1[4][0].passTD++;
						var playerName = team1[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team1[4].length - 1));
					while (!(team1[4][rnd].pos.valueOf() == "TE" && team1[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team1[4].length - 1));
					}
					team1[4][rnd].recTD++;
					team1[4][rnd].points = team1[4][rnd].points + 6;
					team1[4][0].passTD++;
					var playerName = team1[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			var extraPoint = team1[4][team1[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 4) //Field goal
		{
			away=3;
			team1[1] += away;
			
			/*FIELD GOAL*/
			team1[4][team1[4].length - 1].points = team1[4][team1[4].length - 1].points + 3;
			team1[4][team1[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick from " + team1[4][team1[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 23) //Safety
		{
			home=2;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 2;
			team2[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 29) //Defensive TD (Scoop n' Score or Pick Six)
		{
			home=7;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 6;
			team2[5][0].defensiveTD++;
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense recovers the fumble from " + team1[3] + " " + team1[4][randomPlayerIndex].pos + " " + team1[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense intercepts the pass from " + team1[3] + " QB " + team1[4][0].name + " for a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
		}
		else if(driveResult >= 5 && driveResult < 8) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team2[4][0].rushTD++;
					team2[4][0].points = team2[4][0].points + 6;
					var playerName = team2[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "RB" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team2[4][rnd].rushTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							var playerName = team2[4][rnd];
						}
						else {
							team2[4][rnd].recTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							team2[4][0].passTD++;
							var playerName = team2[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR1"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR2"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "WR" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						team2[4][rnd].recTD++;
						team2[4][rnd].points = team2[4][rnd].points + 6;
						team2[4][0].passTD++;
						var playerName = team2[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team2[4].length - 1));
					while (!(team2[4][rnd].pos.valueOf() == "TE" && team2[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team2[4].length - 1));
					}
					team2[4][rnd].recTD++;
					team2[4][rnd].points = team2[4][rnd].points + 6;
					team2[4][0].passTD++;
					var playerName = team2[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			var extraPoint = team2[4][team2[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 8) //Field goal
		{
			home=3;
			team2[1] += home;
			
			/*FIELD GOAL*/
			team2[4][team2[4].length - 1].points = team2[4][team2[4].length - 1].points + 3;
			team2[4][team2[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick from " + team2[4][team2[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 24) //Safety
		{
			away=2;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 2;
			team1[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else if(driveResult == 30) //Defensive TD (Scoop n' Score or Pick Six)
		{
			away=7;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 6;
			team1[5][0].defensiveTD++;
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense recovers the fumble from " + team2[3] + " " + team2[4][randomPlayerIndex].pos + " " + team2[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense intercepts the pass from " + team2[3] + " QB " + team2[4][0].name + " for a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	setTimeout(secondQuarterStart, 250);
	//secondQuarter(team1, team2);
}
	

function secondQuarter(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><br/><b>SECOND QUARTER</b></p>";
	
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 50 + 1);

		if(driveResult >= 1 && driveResult < 4) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team1[4][0].rushTD++;
					team1[4][0].points = team1[4][0].points + 6;
					var playerName = team1[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "RB" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team1[4][rnd].rushTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							var playerName = team1[4][rnd];
						}
						else {
							team1[4][rnd].recTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							team1[4][0].passTD++;
							var playerName = team1[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR1"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR2"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "WR" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						team1[4][rnd].recTD++;
						team1[4][rnd].points = team1[4][rnd].points + 6;
						team1[4][0].passTD++;
						var playerName = team1[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team1[4].length - 1));
					while (!(team1[4][rnd].pos.valueOf() == "TE" && team1[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team1[4].length - 1));
					}
					team1[4][rnd].recTD++;
					team1[4][rnd].points = team1[4][rnd].points + 6;
					team1[4][0].passTD++;
					var playerName = team1[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			var extraPoint = team1[4][team1[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 4) //Field goal
		{
			away=3;
			team1[1] += away;
			
			/*FIELD GOAL*/
			team1[4][team1[4].length - 1].points = team1[4][team1[4].length - 1].points + 3;
			team1[4][team1[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick from " + team1[4][team1[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 23) //Safety
		{
			home=2;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 2;
			team2[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 29) //Defensive TD (Scoop n' Score or Pick Six)
		{
			home=7;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 6;
			team2[5][0].defensiveTD++;
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense recovers the fumble from " + team1[3] + " " + team1[4][randomPlayerIndex].pos + " " + team1[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense intercepts the pass from " + team1[3] + " QB " + team1[4][0].name + " for a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
		}
		else if(driveResult >= 5 && driveResult < 8) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team2[4][0].rushTD++;
					team2[4][0].points = team2[4][0].points + 6;
					var playerName = team2[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "RB" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team2[4][rnd].rushTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							var playerName = team2[4][rnd];
						}
						else {
							team2[4][rnd].recTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							team2[4][0].passTD++;
							var playerName = team2[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR1"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR2"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "WR" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						team2[4][rnd].recTD++;
						team2[4][rnd].points = team2[4][rnd].points + 6;
						team2[4][0].passTD++;
						var playerName = team2[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team2[4].length - 1));
					while (!(team2[4][rnd].pos.valueOf() == "TE" && team2[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team2[4].length - 1));
					}
					team2[4][rnd].recTD++;
					team2[4][rnd].points = team2[4][rnd].points + 6;
					team2[4][0].passTD++;
					var playerName = team2[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			var extraPoint = team2[4][team2[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 8) //Field goal
		{
			home=3;
			team2[1] += home;
			
			/*FIELD GOAL*/
			team2[4][team2[4].length - 1].points = team2[4][team2[4].length - 1].points + 3;
			team2[4][team2[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick from " + team2[4][team2[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 24) //Safety
		{
			away=2;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 2;
			team1[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else if(driveResult == 30) //Defensive TD (Scoop n' Score or Pick Six)
		{
			away=7;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 6;
			team1[5][0].defensiveTD++;
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense recovers the fumble from " + team2[3] + " " + team2[4][randomPlayerIndex].pos + " " + team2[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense intercepts the pass from " + team2[3] + " QB " + team2[4][0].name + " for a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	setTimeout(thirdQuarterStart, 250);
	//thirdQuarter(team1, team2);
}

function thirdQuarter(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><br/><b>THIRD QUARTER</b></p>";
	
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 50 + 1);

		if(driveResult >= 1 && driveResult < 4) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team1[4][0].rushTD++;
					team1[4][0].points = team1[4][0].points + 6;
					var playerName = team1[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "RB" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team1[4][rnd].rushTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							var playerName = team1[4][rnd];
						}
						else {
							team1[4][rnd].recTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							team1[4][0].passTD++;
							var playerName = team1[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR1"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR2"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "WR" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						team1[4][rnd].recTD++;
						team1[4][rnd].points = team1[4][rnd].points + 6;
						team1[4][0].passTD++;
						var playerName = team1[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team1[4].length - 1));
					while (!(team1[4][rnd].pos.valueOf() == "TE" && team1[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team1[4].length - 1));
					}
					team1[4][rnd].recTD++;
					team1[4][rnd].points = team1[4][rnd].points + 6;
					team1[4][0].passTD++;
					var playerName = team1[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			var extraPoint = team1[4][team1[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 4) //Field goal
		{
			away=3;
			team1[1] += away;
			
			/*FIELD GOAL*/
			team1[4][team1[4].length - 1].points = team1[4][team1[4].length - 1].points + 3;
			team1[4][team1[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick from " + team1[4][team1[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 23) //Safety
		{
			home=2;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 2;
			team2[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 29) //Defensive TD (Scoop n' Score or Pick Six)
		{
			home=7;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 6;
			team2[5][0].defensiveTD++;
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense recovers the fumble from " + team1[3] + " " + team1[4][randomPlayerIndex].pos + " " + team1[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense intercepts the pass from " + team1[3] + " QB " + team1[4][0].name + " for a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
		}
		else if(driveResult >= 5 && driveResult < 8) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team2[4][0].rushTD++;
					team2[4][0].points = team2[4][0].points + 6;
					var playerName = team2[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "RB" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team2[4][rnd].rushTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							var playerName = team2[4][rnd];
						}
						else {
							team2[4][rnd].recTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							team2[4][0].passTD++;
							var playerName = team2[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR1"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR2"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "WR" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						team2[4][rnd].recTD++;
						team2[4][rnd].points = team2[4][rnd].points + 6;
						team2[4][0].passTD++;
						var playerName = team2[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team2[4].length - 1));
					while (!(team2[4][rnd].pos.valueOf() == "TE" && team2[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team2[4].length - 1));
					}
					team2[4][rnd].recTD++;
					team2[4][rnd].points = team2[4][rnd].points + 6;
					team2[4][0].passTD++;
					var playerName = team2[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			var extraPoint = team2[4][team2[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 8) //Field goal
		{
			home=3;
			team2[1] += home;
			
			/*FIELD GOAL*/
			team2[4][team2[4].length - 1].points = team2[4][team2[4].length - 1].points + 3;
			team2[4][team2[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick from " + team2[4][team2[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 24) //Safety
		{
			away=2;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 2;
			team1[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else if(driveResult == 30) //Defensive TD (Scoop n' Score or Pick Six)
		{
			away=7;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 6;
			team1[5][0].defensiveTD++;
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense recovers the fumble from " + team2[3] + " " + team2[4][randomPlayerIndex].pos + " " + team2[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense intercepts the pass from " + team2[3] + " QB " + team2[4][0].name + " for a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	setTimeout(fourthQuarterStart, 250);
	//fourthQuarter(team1, team2);
}

function fourthQuarter(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><br/><b>FOURTH QUARTER</b></p>";
	
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 50 + 1);

		if(driveResult >= 1 && driveResult < 4) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team1[4][0].rushTD++;
					team1[4][0].points = team1[4][0].points + 6;
					var playerName = team1[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "RB" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team1[4][rnd].rushTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							var playerName = team1[4][rnd];
						}
						else {
							team1[4][rnd].recTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							team1[4][0].passTD++;
							var playerName = team1[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR1"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR2"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "WR" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						team1[4][rnd].recTD++;
						team1[4][rnd].points = team1[4][rnd].points + 6;
						team1[4][0].passTD++;
						var playerName = team1[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team1[4].length - 1));
					while (!(team1[4][rnd].pos.valueOf() == "TE" && team1[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team1[4].length - 1));
					}
					team1[4][rnd].recTD++;
					team1[4][rnd].points = team1[4][rnd].points + 6;
					team1[4][0].passTD++;
					var playerName = team1[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			var extraPoint = team1[4][team1[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 4) //Field goal
		{
			away=3;
			team1[1] += away;
			
			/*FIELD GOAL*/
			team1[4][team1[4].length - 1].points = team1[4][team1[4].length - 1].points + 3;
			team1[4][team1[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick from " + team1[4][team1[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 23) //Safety
		{
			home=2;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 2;
			team2[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 29) //Defensive TD (Scoop n' Score or Pick Six)
		{
			home=7;
			team2[1] += home;
			
			team2[5][0].points = team2[5][0].points + 6;
			team2[5][0].defensiveTD++;
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense recovers the fumble from " + team1[3] + " " + team1[4][randomPlayerIndex].pos + " " + team1[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense intercepts the pass from " + team1[3] + " QB " + team1[4][0].name + " for a touchdown, extra point from " + team2[4][team2[4].length - 1].name + "</p>";
			}
		}
		else if(driveResult >= 5 && driveResult < 8) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team2[4][0].rushTD++;
					team2[4][0].points = team2[4][0].points + 6;
					var playerName = team2[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "RB" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team2[4][rnd].rushTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							var playerName = team2[4][rnd];
						}
						else {
							team2[4][rnd].recTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							team2[4][0].passTD++;
							var playerName = team2[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR1"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR2"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "WR" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						team2[4][rnd].recTD++;
						team2[4][rnd].points = team2[4][rnd].points + 6;
						team2[4][0].passTD++;
						var playerName = team2[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team2[4].length - 1));
					while (!(team2[4][rnd].pos.valueOf() == "TE" && team2[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team2[4].length - 1));
					}
					team2[4][rnd].recTD++;
					team2[4][rnd].points = team2[4][rnd].points + 6;
					team2[4][0].passTD++;
					var playerName = team2[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
			/*EXTRA POINT; KICKER LAST PLAYER IN ROSTER*/
			team2[4][team2[4].length - 1].points++;
			team2[4][team2[4].length - 1].xp++;
			var extraPoint = team2[4][team2[4].length - 1];
			
			if(playerName.pos.valueOf() == "QB"){
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
			}
			else if(playerName.pos.valueOf() == "RB"){
				if(rbTDnumber == 0){
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + " and extra point from " + extraPoint.name + "</p>";
				}
				else{
					document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
				}
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass and extra point from " + extraPoint.name + "</p>";
			}
		}
		else if(driveResult == 8) //Field goal
		{
			home=3;
			team2[1] += home;
			
			/*FIELD GOAL*/
			team2[4][team2[4].length - 1].points = team2[4][team2[4].length - 1].points + 3;
			team2[4][team2[4].length - 1].fg++;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick from " + team2[4][team2[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		}
		else if(driveResult == 24) //Safety
		{
			away=2;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 2;
			team1[5][0].safeties++;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else if(driveResult == 30) //Defensive TD (Scoop n' Score or Pick Six)
		{
			away=7;
			team1[1] += away;
			
			team1[5][0].points = team1[5][0].points + 6;
			team1[5][0].defensiveTD++;
			team1[4][team1[4].length - 1].points++;
			team1[4][team1[4].length - 1].xp++;
			
			var defensiveTDtype = Math.floor(Math.random() * 2);
			if(defensiveTDtype == 0){ //Scoop n' Score
				var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense recovers the fumble from " + team2[3] + " " + team2[4][randomPlayerIndex].pos + " " + team2[4][randomPlayerIndex].name + " and scores a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
			else{ //Pick Six
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense intercepts the pass from " + team2[3] + " QB " + team2[4][0].name + " for a touchdown, extra point from " + team1[4][team1[4].length - 1].name + "</p>";
			}
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	
	if( team1[1] == team2[1] ) {
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
		otCoinToss(team1, team2);
	}
	else {
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
		/*BOX SCORE*/
		document.getElementById("box-score").style.visibility = "visible";
		document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
		document.getElementById("box-score").innerHTML += "<h3>"+team1[6]+" "+team1[0].toUpperCase()+"</h3>";
		document.getElementById("box-score").innerHTML += "<table>";
		document.getElementById("box-score").innerHTML += "<br/>";
		for(var i=0; i<team1[4].length; i++){
			if(team1[4][i].pos.valueOf() == "K"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team1[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
		}
		document.getElementById("box-score").innerHTML += "<tr><td><b>DEFENSE</b><br/><b>"+team1[5][0].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[5][0].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[5][0].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[5][0].safeties+"</b> SFT</td>&emsp;&emsp;&emsp;<td><b>"+team1[5][0].defensiveTD+"</b> DTD</td></tr><br/>";
		document.getElementById("box-score").innerHTML += "</table>";
		document.getElementById("box-score").innerHTML += "<br/><br/>";
		document.getElementById("box-score").innerHTML += "<h3>"+team2[6]+" "+team2[0].toUpperCase()+"</h3>";
		document.getElementById("box-score").innerHTML += "<table>";
		document.getElementById("box-score").innerHTML += "<br/>";
		for(var i=0; i<team2[4].length; i++){
			if(team2[4][i].pos.valueOf() == "K"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team2[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
		}
		document.getElementById("box-score").innerHTML += "<tr><td><b>DEFENSE</b><br/><b>"+team2[5][0].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[5][0].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[5][0].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[5][0].safeties+"</b> SFT</td>&emsp;&emsp;&emsp;<td><b>"+team2[5][0].defensiveTD+"</b> DTD</td></tr><br/>";
		document.getElementById("box-score").innerHTML += "</table>";
		
		document.getElementById("reset-btn").disabled = false;
	}
}

function otCoinToss(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><br/><b>COIN TOSS</b></p>";
	var otCoinToss = Math.floor(Math.random() * 2);
	
	
	if(otCoinToss == 0)
	{
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " wins the toss</p>";
		var picker = Math.floor(Math.random() * 2);

		if(picker == 0)
		{
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " will kick to start</p></b><br/><b>OVERTIME</b></p>";
			setTimeout(overtimeStart, 1000);
			//overtime(team1, team2);
		}
		else
		{
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " will receive to start</p></b><br/><b>OVERTIME</b></p>";
			setTimeout(overtimeStart, 1000);
			//overtime(team1, team2);
		}
	}
	else
	{
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " wins the toss</p>";
		var picker = Math.floor(Math.random() * 2);

		if(picker == 0)
		{
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will kick to start</p></b><br/><b>OVERTIME</b></p>";
			setTimeout(overtimeStart, 1000);
			//overtime(team1, team2);
		}
		else
		{
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will receive to start</p></b><br/><b>OVERTIME</b></p>";
			setTimeout(overtimeStart, 1000);
			//overtime(team1, team2);
		}
	}
}

function overtime(team1, team2){
	
	var picker = Math.floor(Math.random() * 9 + 1);

	if(picker == 1)
	{
		team1[1] += 6;
		
		var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team1[4][0].rushTD++;
					team1[4][0].points = team1[4][0].points + 6;
					var playerName = team1[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team1[4][i].rushTD++;
									team1[4][i].points = team1[4][i].points + 6;
									var playerName = team1[4][i];
								}
								else {
									team1[4][i].recTD++;
									team1[4][i].points = team1[4][i].points + 6;
									team1[4][0].passTD++;
									var playerName = team1[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "RB" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team1[4][rnd].rushTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							var playerName = team1[4][rnd];
						}
						else {
							team1[4][rnd].recTD++;
							team1[4][rnd].points = team1[4][rnd].points + 6;
							team1[4][0].passTD++;
							var playerName = team1[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR1"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team1[4].length;i++){
							if(team1[4][i].rank.valueOf() == "WR2"){
								team1[4][i].recTD++;
								team1[4][i].points = team1[4][i].points + 6;
								team1[4][0].passTD++;
								var playerName = team1[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team1[4].length - 1));
						while (!(team1[4][rnd].pos.valueOf() == "WR" && team1[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team1[4].length - 1));
						}
						team1[4][rnd].recTD++;
						team1[4][rnd].points = team1[4][rnd].points + 6;
						team1[4][0].passTD++;
						var playerName = team1[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team1[4].length - 1));
					while (!(team1[4][rnd].pos.valueOf() == "TE" && team1[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team1[4].length - 1));
					}
					team1[4][rnd].recTD++;
					team1[4][rnd].points = team1[4][rnd].points + 6;
					team1[4][0].passTD++;
					var playerName = team1[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
		if(playerName.pos.valueOf() == "QB"){
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + "</p>";
		}
		else if(playerName.pos.valueOf() == "RB"){
			if(rbTDnumber == 0){
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " rushing touchdown from " + playerName.name + "</p>";
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass</p>";
			}
		}
		else{
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown reception from " + playerName.name + " from " + team1[4][0].name + " touchdown pass</p>";
		}
			
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 2)
	{
		team1[1] += 3;
		
		/*FIELD GOAL*/
			team1[4][team1[4].length - 1].points = team1[4][team1[4].length - 1].points + 3;
			team1[4][team1[4].length - 1].fg++;
			
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick from " + team1[4][team1[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 3)
	{
		team2[1] += 2;
		team2[5][0].points = team2[5][0].points + 2;
		team2[5][0].safeties++;
		
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 4)
	{
		team2[1] += 6;
		
		var scoringPosition = Math.floor(Math.random() * 10);
			switch (scoringPosition){
				case 0: { //QB
					team2[4][0].rushTD++;
					team2[4][0].points = team2[4][0].points + 6;
					var playerName = team2[4][0];
					break;
				}
				case 1: case 3: case 5: case 7: { //RB
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//RB1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB1"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//RB2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "RB2"){
								rbTDnumber = Math.floor(Math.random() * 2);
								if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
									team2[4][i].rushTD++;
									team2[4][i].points = team2[4][i].points + 6;
									var playerName = team2[4][i];
								}
								else {
									team2[4][i].recTD++;
									team2[4][i].points = team2[4][i].points + 6;
									team2[4][0].passTD++;
									var playerName = team2[4][i];
								}
							}
						}
					}
					else{
						//OTHER RB SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "RB" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						rbTDnumber = Math.floor(Math.random() * 2);
						if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
							team2[4][rnd].rushTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							var playerName = team2[4][rnd];
						}
						else {
							team2[4][rnd].recTD++;
							team2[4][rnd].points = team2[4][rnd].points + 6;
							team2[4][0].passTD++;
							var playerName = team2[4][rnd];
						}
					}
					break;
				}
				case 2: case 4: case 6: case 8: { //WR
					var endZonePlayer = Math.floor(Math.random() * 10);
					if((endZonePlayer >= 0 && endZonePlayer <= 5) || endZonePlayer == 9){
						//WR1 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR1"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else if(endZonePlayer == 6 || endZonePlayer == 7){
						//WR2 SCORES
						for(var i=0;i<team2[4].length;i++){
							if(team2[4][i].rank.valueOf() == "WR2"){
								team2[4][i].recTD++;
								team2[4][i].points = team2[4][i].points + 6;
								team2[4][0].passTD++;
								var playerName = team2[4][i];
							}
						}
					}
					else{
						//OTHER WR SCORES
						var rnd = Math.floor(Math.random() * (team2[4].length - 1));
						while (!(team2[4][rnd].pos.valueOf() == "WR" && team2[4][rnd].rank.valueOf() == "")){
							rnd = Math.floor(Math.random() * (team2[4].length - 1));
						}
						team2[4][rnd].recTD++;
						team2[4][rnd].points = team2[4][rnd].points + 6;
						team2[4][0].passTD++;
						var playerName = team2[4][rnd];
					}
					break;
				}
				case 9: { //TE
					var rnd = Math.floor(Math.random() * (team2[4].length - 1));
					while (!(team2[4][rnd].pos.valueOf() == "TE" && team2[4][rnd].rank.valueOf() == "")){
						rnd = Math.floor(Math.random() * (team2[4].length - 1));
					}
					team2[4][rnd].recTD++;
					team2[4][rnd].points = team2[4][rnd].points + 6;
					team2[4][0].passTD++;
					var playerName = team2[4][rnd];
					break;
				}
			}
			
			/*TOUCHDOWN*/
			
		if(playerName.pos.valueOf() == "QB"){
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + "</p>";
		}
		else if(playerName.pos.valueOf() == "RB"){
			if(rbTDnumber == 0){
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " rushing touchdown from " + playerName.name + "</p>";
			}
			else{
				document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass</p>";
			}
		}
		else{
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown reception from " + playerName.name + " from " + team2[4][0].name + " touchdown pass</p>";
		}
			
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 5)
	{
		team2[1] += 3;
		
		/*FIELD GOAL*/
			team2[4][team2[4].length - 1].points = team2[4][team2[4].length - 1].points + 3;
			team2[4][team2[4].length - 1].fg++;
			
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick from " + team2[4][team2[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 6)
	{
		team1[1] += 2;
		team1[5][0].points = team1[5][0].points + 2;
		team1[5][0].safeties++;
		
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 7)
	{		
		team2[1] += 6;
		team2[5][0].points = team2[5][0].points + 6;
		team2[5][0].defensiveTD++;
		
		var defensiveTDtype = Math.floor(Math.random() * 2);
		if(defensiveTDtype == 0){ //Scoop n' Score
			var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense recovers the fumble from " + team1[3] + " " + team1[4][randomPlayerIndex].pos + " " + team1[4][randomPlayerIndex].name + " and scores a touchdown</p>";
		}
		else{ //Pick Six
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " defense intercepts the pass from " + team1[3] + " QB " + team1[4][0].name + " for a touchdown</p>";
		}
		
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 8)
	{
		team1[1] += 6;
		team1[5][0].points = team1[5][0].points + 6;
		team1[5][0].defensiveTD++;
		
		var defensiveTDtype = Math.floor(Math.random() * 2);
		if(defensiveTDtype == 0){ //Scoop n' Score
			var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense recovers the fumble from " + team2[3] + " " + team2[4][randomPlayerIndex].pos + " " + team2[4][randomPlayerIndex].name + " and scores a touchdown</p>";
		}
		else{ //Pick Six
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " defense intercepts the pass from " + team2[3] + " QB " + team2[4][0].name + " for a touchdown</p>";
		}
		
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else
	{
		document.getElementById("simulation").innerHTML += "<p>-</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"<br/>Projected over-under: "+overUnder+" points</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	/*BOX SCORE*/
		document.getElementById("box-score").style.visibility = "visible";
		document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
		document.getElementById("box-score").innerHTML += "<h3>"+team1[6]+" "+team1[0].toUpperCase()+"</h3>";
		document.getElementById("box-score").innerHTML += "<table>";
		document.getElementById("box-score").innerHTML += "<br/>";
		for(var i=0; i<team1[4].length; i++){
			if(team1[4][i].pos.valueOf() == "K"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team1[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
		}
		document.getElementById("box-score").innerHTML += "<tr><td><b>DEFENSE</b><br/><b>"+team1[5][0].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[5][0].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[5][0].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[5][0].safeties+"</b> SFT</td>&emsp;&emsp;&emsp;<td><b>"+team1[5][0].defensiveTD+"</b> DTD</td></tr><br/>";
		document.getElementById("box-score").innerHTML += "</table>";
		document.getElementById("box-score").innerHTML += "<br/><br/>";
		document.getElementById("box-score").innerHTML += "<h3>"+team2[6]+" "+team2[0].toUpperCase()+"</h3>";
		document.getElementById("box-score").innerHTML += "<table>";
		document.getElementById("box-score").innerHTML += "<br/>";
		for(var i=0; i<team2[4].length; i++){
			if(team2[4][i].pos.valueOf() == "K"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team2[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].college+"</td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
		}
		document.getElementById("box-score").innerHTML += "<tr><td><b>DEFENSE</b><br/><b>"+team2[5][0].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[5][0].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[5][0].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[5][0].safeties+"</b> SFT</td>&emsp;&emsp;&emsp;<td><b>"+team2[5][0].defensiveTD+"</b> DTD</td></tr><br/>";
		document.getElementById("box-score").innerHTML += "</table>";
		
		document.getElementById("reset-btn").disabled = false;
}

function resume1(){
	document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";
}

function resume2(){
	startingQBs(team1, team2);
}

function startingQBs(team1, team2){
	/*OVER-UNDER CALCULATION*/
	overUnder = Number(team1[8]) + Number(team2[8]);
	overUnderDiff = Number(Number((Number(team1[9]) + Number(team2[9])) / 2).toFixed(2));
	
	if(overUnderDiff % 0.5 != 0){
		overUnderDiff = Number(Number(Math.round(overUnderDiff, 0.5)).toFixed(1));
	}
	
	overUnderDiff = Math.abs(overUnderDiff);
	if(overUnderDiff != 0){
		overUnderDiff = Number(Number(Math.round(Math.random() * overUnderDiff, 0.5)).toFixed(1));
	}
	
	if(Math.floor(Math.random() * 2) == 0){
		overUnder += overUnderDiff;
	}
	else{
		overUnder -= overUnderDiff;
	}
	
	document.getElementById("starting-quarterbacks").style.visibility = "visible";
	document.getElementById("venues").style.visibility = "visible";
	
	/*BY DEFAULT, THE GAME WILL BE AT THE HOME TEAM'S VENUE*/
	switch (team2[0]){
		case "bears":{
			venue = "nfl01";
			document.getElementById("venues").value = venue;
			break;
		}
		case "bengals":{
			venue = "nfl02";
			document.getElementById("venues").value = venue;
			break;
		}
		case "bills":{
			venue = "nfl03";
			document.getElementById("venues").value = venue;
			break;
		}
		case "broncos":{
			venue = "nfl04";
			document.getElementById("venues").value = venue;
			break;
		}
		case "browns":{
			venue = "nfl05";
			document.getElementById("venues").value = venue;
			break;
		}
		case "buccaneers":{
			venue = "nfl06";
			document.getElementById("venues").value = venue;
			break;
		}
		case "cardinals":{
			venue = "nfl07";
			document.getElementById("venues").value = venue;
			break;
		}
		case "chargers":{
			venue = "nfl08";
			document.getElementById("venues").value = venue;
			break;
		}
		case "chiefs":{
			venue = "nfl09";
			document.getElementById("venues").value = venue;
			break;
		}
		case "colts":{
			venue = "nfl10";
			document.getElementById("venues").value = venue;
			break;
		}
		case "cowboys":{
			venue = "nfl11";
			document.getElementById("venues").value = venue;
			break;
		}
		case "dolphins":{
			venue = "nfl12";
			document.getElementById("venues").value = venue;
			break;
		}
		case "eagles":{
			venue = "nfl13";
			document.getElementById("venues").value = venue;
			break;
		}
		case "falcons":{
			venue = "nfl14";
			document.getElementById("venues").value = venue;
			break;
		}
		case "giants":{
			venue = "nfl15";
			document.getElementById("venues").value = venue;
			break;
		}
		case "jaguars":{
			venue = "nfl16";
			document.getElementById("venues").value = venue;
			break;
		}
		case "jets":{
			venue = "nfl15";
			document.getElementById("venues").value = venue;
			break;
		}
		case "lions":{
			venue = "nfl17";
			document.getElementById("venues").value = venue;
			break;
		}
		case "packers":{
			venue = "nfl18";
			document.getElementById("venues").value = venue;
			break;
		}
		case "panthers":{
			venue = "nfl19";
			document.getElementById("venues").value = venue;
			break;
		}
		case "patriots":{
			venue = "nfl20";
			document.getElementById("venues").value = venue;
			break;
		}
		case "football team":{
			venue = "nfl21";
			document.getElementById("venues").value = venue;
			break;
		}
		case "raiders":{
			venue = "nfl22";
			document.getElementById("venues").value = venue;
			break;
		}
		case "rams":{
			venue = "nfl08";
			document.getElementById("venues").value = venue;
			break;
		}
		case "ravens":{
			venue = "nfl23";
			document.getElementById("venues").value = venue;
			break;
		}
		case "saints":{
			venue = "nfl24";
			document.getElementById("venues").value = venue;
			break;
		}
		case "seahawks":{
			venue = "nfl25";
			document.getElementById("venues").value = venue;
			break;
		}
		case "steelers":{
			venue = "nfl26";
			document.getElementById("venues").value = venue;
			break;
		}
		case "texans":{
			venue = "nfl27";
			document.getElementById("venues").value = venue;
			break;
		}
		case "titans":{
			venue = "nfl28";
			document.getElementById("venues").value = venue;
			break;
		}
		case "vikings":{
			venue = "nfl29";
			document.getElementById("venues").value = venue;
			break;
		}
		case "49ers":{
			venue = "nfl30";
			document.getElementById("venues").value = venue;
			break;
		}
	}
	document.getElementById("header-text").innerHTML = "<p>Select the starting quarterbacks for this game</p>";
	document.getElementById("awayqb1").disabled = false;
	document.getElementById("awayqb2").disabled = false;
	document.getElementById("awayqb3").disabled = false;
	document.getElementById("homeqb1").disabled = false;
	document.getElementById("homeqb2").disabled = false;
	document.getElementById("homeqb3").disabled = false;
	
	document.getElementById("welcome-to-the-game").innerHTML = "<p><b>WELCOME TO THE GAME. THIS GAME WILL OPPOSE THE " + team1[6] + " " + team1[0].toUpperCase() + " AND THE " + team2[6] + " " + team2[0].toUpperCase() + ".<br/>THE OVER-UNDER FOR THIS GAME IS "+overUnder+" POINTS.<br/>PLEASE SELECT THE STARTING QUARTERBACKS FOR THIS MATCHUP. THEN CLICK SUBMIT TO KICKOFF THE GAME.</b><br/><br/></p>";
	
	document.getElementById("awayTeam").innerHTML = "<p><b>"+team1[6] + " " + team1[0].toUpperCase() + "</b></p>";
	
	document.getElementById("team1qb1").innerHTML = "<p>Click <b>1</b> to name <b>"+team1[7][0].name+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team1qb2").innerHTML = "<p>Click <b>2</b> to name <b>"+team1[7][1].name+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team1qb3").innerHTML = "<p>Click <b>3</b> to name <b>"+team1[7][2].name+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	
	document.getElementById("homeTeam").innerHTML = "<br/><p><b>"+team2[6] + " " + team2[0].toUpperCase() + "</b></p>";
	
	document.getElementById("team2qb1").innerHTML = "<p>Click <b>1</b> to name <b>"+team2[7][0].name+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team2qb2").innerHTML = "<p>Click <b>2</b> to name <b>"+team2[7][1].name+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team2qb3").innerHTML = "<p>Click <b>3</b> to name <b>"+team2[7][2].name+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
}

function awayqb1(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	team1[4][0].name = team1[7][0].name;
	team1[4][0].college = team1[7][0].college;
	document.getElementById("header-text").innerHTML = "<p>"+team1[3]+" has named "+team1[7][0].name+" their starting quarterback</p>";
	
	document.getElementById("awayqb1").disabled = true;
	document.getElementById("awayqb2").disabled = true;
	document.getElementById("awayqb3").disabled = true;
	
	if(team1[4][0].name.valueOf() != "" && team2[4][0].name.valueOf() != ""){
		document.getElementById("starting-quarterbacks-submit").disabled = false;
	}
}

function awayqb2(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	team1[4][0].name = team1[7][1].name;
	team1[4][0].college = team1[7][1].college;
	document.getElementById("header-text").innerHTML = "<p>"+team1[3]+" has named "+team1[7][1].name+" their starting quarterback</p>";
	
	overUnder = overUnder - team1[7][1].dropOff;
	document.getElementById("welcome-to-the-game").innerHTML = "<p><b>WELCOME TO THE GAME. THIS GAME WILL OPPOSE THE " + team1[6] + " " + team1[0].toUpperCase() + " AND THE " + team2[6] + " " + team2[0].toUpperCase() + ".<br/>THE OVER-UNDER FOR THIS GAME IS "+overUnder+" POINTS.<br/>PLEASE SELECT THE STARTING QUARTERBACKS FOR THIS MATCHUP. THEN CLICK SUBMIT TO KICKOFF THE GAME.</b><br/><br/></p>";
	
	document.getElementById("awayqb1").disabled = true;
	document.getElementById("awayqb2").disabled = true;
	document.getElementById("awayqb3").disabled = true;
	
	if(team1[4][0].name.valueOf() != "" && team2[4][0].name.valueOf() != ""){
		document.getElementById("starting-quarterbacks-submit").disabled = false;
	}
}

function awayqb3(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	team1[4][0].name = team1[7][2].name;
	team1[4][0].college = team1[7][2].college;
	document.getElementById("header-text").innerHTML = "<p>"+team1[3]+" has named "+team1[7][2].name+" their starting quarterback</p>";
	
	overUnder = overUnder - team1[7][2].dropOff;
	document.getElementById("welcome-to-the-game").innerHTML = "<p><b>WELCOME TO THE GAME. THIS GAME WILL OPPOSE THE " + team1[6] + " " + team1[0].toUpperCase() + " AND THE " + team2[6] + " " + team2[0].toUpperCase() + ".<br/>THE OVER-UNDER FOR THIS GAME IS "+overUnder+" POINTS.<br/>PLEASE SELECT THE STARTING QUARTERBACKS FOR THIS MATCHUP. THEN CLICK SUBMIT TO KICKOFF THE GAME.</b><br/><br/></p>";
	
	document.getElementById("awayqb1").disabled = true;
	document.getElementById("awayqb2").disabled = true;
	document.getElementById("awayqb3").disabled = true;
	
	if(team1[4][0].name.valueOf() != "" && team2[4][0].name.valueOf() != ""){
		document.getElementById("starting-quarterbacks-submit").disabled = false;
	}
}

function homeqb1(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	team2[4][0].name = team2[7][0].name;
	team2[4][0].college = team2[7][0].college;
	document.getElementById("header-text").innerHTML = "<p>"+team2[3]+" has named "+team2[7][0].name+" their starting quarterback</p>";
	
	document.getElementById("homeqb1").disabled = true;
	document.getElementById("homeqb2").disabled = true;
	document.getElementById("homeqb3").disabled = true;
	
	if(team1[4][0].name.valueOf() != "" && team2[4][0].name.valueOf() != ""){
		document.getElementById("starting-quarterbacks-submit").disabled = false;
	}
}

function homeqb2(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	team2[4][0].name = team2[7][1].name;
	team2[4][0].college = team2[7][1].college;
	document.getElementById("header-text").innerHTML = "<p>"+team2[3]+" has named "+team2[7][1].name+" their starting quarterback</p>";
	
	overUnder = overUnder - team2[7][1].dropOff;
	document.getElementById("welcome-to-the-game").innerHTML = "<p><b>WELCOME TO THE GAME. THIS GAME WILL OPPOSE THE " + team1[6] + " " + team1[0].toUpperCase() + " AND THE " + team2[6] + " " + team2[0].toUpperCase() + ".<br/>THE OVER-UNDER FOR THIS GAME IS "+overUnder+" POINTS.<br/>PLEASE SELECT THE STARTING QUARTERBACKS FOR THIS MATCHUP. THEN CLICK SUBMIT TO KICKOFF THE GAME.</b><br/><br/></p>";
	
	document.getElementById("homeqb1").disabled = true;
	document.getElementById("homeqb2").disabled = true;
	document.getElementById("homeqb3").disabled = true;
	
	if(team1[4][0].name.valueOf() != "" && team2[4][0].name.valueOf() != ""){
		document.getElementById("starting-quarterbacks-submit").disabled = false;
	}
}

function homeqb3(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	team2[4][0].name = team2[7][2].name;
	team2[4][0].college = team2[7][2].college;
	document.getElementById("header-text").innerHTML = "<p>"+team2[3]+" has named "+team2[7][2].name+" their starting quarterback</p>";
	
	overUnder = overUnder - team2[7][2].dropOff;
	document.getElementById("welcome-to-the-game").innerHTML = "<p><b>WELCOME TO THE GAME. THIS GAME WILL OPPOSE THE " + team1[6] + " " + team1[0].toUpperCase() + " AND THE " + team2[6] + " " + team2[0].toUpperCase() + ".<br/>THE OVER-UNDER FOR THIS GAME IS "+overUnder+" POINTS.<br/>PLEASE SELECT THE STARTING QUARTERBACKS FOR THIS MATCHUP. THEN CLICK SUBMIT TO KICKOFF THE GAME.</b><br/><br/></p>";	
	
	document.getElementById("homeqb1").disabled = true;
	document.getElementById("homeqb2").disabled = true;
	document.getElementById("homeqb3").disabled = true;
	
	if(team1[4][0].name.valueOf() != "" && team2[4][0].name.valueOf() != ""){
		document.getElementById("starting-quarterbacks-submit").disabled = false;
	}
}

function startingQBsSubmit(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("starting-quarterbacks").style.visibility = "hidden";
	document.getElementById("venues").style.visibility = "hidden";
	document.getElementById("starting-quarterbacks-submit").disabled = true;
	coinToss(team1, team2);
}

function firstQuarterStart(){
	firstQuarter(team1, team2);
}
function secondQuarterStart(){
	secondQuarter(team1, team2);
}
function thirdQuarterStart(){
	thirdQuarter(team1, team2);
}
function fourthQuarterStart(){
	fourthQuarter(team1, team2);
}
function overtimeStart(){
	overtime(team1, team2);
}

window.onload = init;
var team1;
var team2;
var teamButtons;
var coinToss;
var awayKick;
var homeKick;
var rbTDnumber;

/*TEAM O-LINES*/
var CHIoffense, CINoffense, BUFoffense, DENoffense, CLEoffense, TBoffense, ARIoffense, LACoffense, KCoffense, INDoffense, DALoffense, MIAoffense, PHIoffense, ATLoffense, NYGoffense,
	JAXoffense, NYJoffense, DEToffense, GBoffense, CARoffense, NEoffense, WASoffense, LVoffense, LARoffense, BALoffense, NOoffense, SEAoffense, PIToffense, HOUoffense, TENoffense,
	MINoffense, SFoffense;
/*TEAM D-LINES*/
var CHIdefense, CINdefense, BUFdefense, DENdefense, CLEdefense, TBdefense, ARIdefense, LACdefense, KCdefense, INDdefense, DALdefense, MIAdefense, PHIdefense, ATLdefense, NYGdefense,
	JAXdefense, NYJdefense, DETdefense, GBdefense, CARdefense, NEdefense, WASdefense, LVdefense, LARdefense, BALdefense, NOdefense, SEAdefense, PITdefense, HOUdefense, TENdefense,
	MINdefense, SFdefense;
/*TEAM QUARTERBACKS*/
var CHIqbs, CINqbs, BUFqbs, DENqbs, CLEqbs, TBqbs, ARIqbs, LACqbs, KCqbs, INDqbs, DALqbs, MIAqbs, PHIqbs, ATLqbs, NYGqbs, JAXqbs, NYJqbs, DETqbs, GBqbs, CARqbs, NEqbs, WASqbs, LVqbs,
	LARqbs, BALqbs, NOqbs, SEAqbs, PITqbs, HOUqbs, TENqbs, MINqbs, SFqbs;
/*GAME VENUE*/
var venue;
var venueInWords;
/*OVER-UNDER*/
var overUnder;
/*OVER-UNDER DIFF*/
var overUnderDiff;
