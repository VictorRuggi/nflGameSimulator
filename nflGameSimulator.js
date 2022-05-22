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
	
	teamButtons = [ document.getElementById("bears"), document.getElementById("bengals"), document.getElementById("bills"), document.getElementById("broncos"), 
					document.getElementById("browns"), document.getElementById("buccaneers"), document.getElementById("cardinals"), document.getElementById("chargers"), 
					document.getElementById("chiefs"), document.getElementById("colts"), document.getElementById("cowboys"), document.getElementById("dolphins"),
					document.getElementById("eagles"), document.getElementById("falcons"), document.getElementById("giants"), document.getElementById("jaguars"),
					document.getElementById("jets"), document.getElementById("lions"), document.getElementById("packers"), document.getElementById("panthers"),
					document.getElementById("patriots"), document.getElementById("footballteam"), document.getElementById("raiders"), document.getElementById("rams"),
					document.getElementById("ravens"), document.getElementById("saints"), document.getElementById("seahawks"), document.getElementById("steelers"),
					document.getElementById("texans"), document.getElementById("titans"), document.getElementById("vikings"), document.getElementById("49ers") ];
					
	/*TEAM QUARTERBACKS*/
	CHIqbs = [ "Trevor Siemian", "Nathan Peterman", "Justin Fields" ];
	CINqbs = [ "Joe Burrow", "Brandon Allen", "Jake Browning" ];
	BUFqbs = [ "Josh Allen", "Matt Barkley", "Case Keenum" ];
	DENqbs = [ "Russell Wilson", "Teddy Bridgewater", "Brett Rypien" ];
	CLEqbs = [ "Baker Mayfield", "Deshaun Watson", "Joshua Dobbs" ];
	TBqbs = [ "Tom Brady", "Kyle Trask", "Blaine Gabbert" ];
	ARIqbs = [ "Kyler Murray", "Trace McSorley", "Colt McCoy" ];
	LACqbs = [ "Justin Herbert", "Chase Daniel", "Easton Stick" ];
	KCqbs = [ "Patrick Mahomes", "Chad Henne", "Shane Buechele" ];
	INDqbs = [ "Matt Ryan", "Sam Ehlinger", "James Morgan"  ];
	DALqbs = [ "Dak Prescott", "Cooper Rush", "Will Grier" ];
	MIAqbs = [ "Tua Tagovailoa", "Jacoby Brissett", "Jake Luton" ];
	PHIqbs = [ "Jalen Hurts", "Gardner Minshew", "Reid Sinnett" ];
	ATLqbs = [ "Feleipe Franks", "Marcus Mariota", "Josh Rosen" ];
	NYGqbs = [ "Daniel Jones", "Tyrod Taylor", "Davis Webb" ];
	JAXqbs = [ "Trevor Lawrence", "C.J. Beathard", "Danny Etling" ];
	NYJqbs = [ "Zach Wilson", "Joe Flacco", "Mike White" ];
	DETqbs = [ "Jared Goff", "Tim Boyle", "David Blough" ];
	GBqbs = [ "Aaron Rodgers", "Jordan Love", "Kurt Benkert" ];
	CARqbs = [ "Cam Newton", "Sam Darnold", "P.J. Walker" ];
	NEqbs = [ "Mac Jones", "Brian Hoyer", "Bailey Zappe" ];
	WASqbs = [ "Carson Wentz", "Taylor Heinicke", "Sam Howell" ];
	LVqbs = [ "Derek Carr", "Nick Mullens", "Jarrett Stidham" ];
	LARqbs = [ "Matthew Stafford", "John Wolford", "Bryce Perkins" ];
	BALqbs = [ "Lamar Jackson", "Tyler Huntley", "Josh Johnson" ];
	NOqbs = [ "Taysom Hill", "Andy Dalton", "Ian Book" ];
	SEAqbs = [ "Drew Lock", "Geno Smith", "Jacob Eason" ];
	PITqbs = [ "Mason Rudolph", "Mitchell Trubisky", "Kenny Pickett" ];
	HOUqbs = [ "Kyle Allen", "Kevin Hogan", "Davis Mills" ];
	TENqbs = [ "Ryan Tannehill", "Logan Woodside", "Malik Willis" ];
	MINqbs = [ "Kirk Cousins", "Sean Mannion", "Kellen Mond" ];
	SFqbs = [ "Jimmy Garoppolo", "Trey Lance", "Tyler Bray" ];
	
	/*TEAM O-LINES*/
	CHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Khalil Herbert", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "David Montgomery", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ryan Nall", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Damien Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Damiere Byrd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquise Goodwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jakeem Grant", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Darnell Mooney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Allen Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jimmy Graham", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.P. Holtz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jesper Horsted", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jesse James", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cole Kmet", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cairo Santos", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	CINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Evans", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Joe Mixon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Samaje Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Trayveon Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Boyd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ja&#39;Marr Chase", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tee Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Stanley Morgan Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Thomas", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Drew Sample", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "C.J. Uzomah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mitchell Wilcox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Evan McPherson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	BUFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matt Breida", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Reggie Gilliam", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Taiwan Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zack Moss", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devin Singletary", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cole Beasley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gabriel Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Stefon Diggs", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jake Kumerow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Isaiah McKenzie", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Emmanuel Sanders", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquez Stevenson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dawson Knox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tommy Sweeney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Bass", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	DENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Boone", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Melvin Gordon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Javonte Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kendall Hinton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Diontae Spencer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Courtland Sutton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Albert Okwuegbunam", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andrew Beck", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Shaun Beyer", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Eric Tomlinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon McManus", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	CLEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Chubb", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Demetric Felton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kareem Hunt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andy Janovich", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Ernest Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ja&#39;Marcus Bradley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rashard Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jarvis Landry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Donovan Peoples-Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Anthony Schwartz", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Amari Cooper", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Harrison Bryant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Austin Hooper", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "David Njoku", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chase McLaughlin", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	TBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenjon Barner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Le&#39;Veon Bell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ronald Jones II", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ke&#39;Shawn Vaughn", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Leonard Fournette", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Evans", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cyril Grayson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Scotty Miller", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Breshad Perriman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Godwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Watson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cameron Brate", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rob Gronkowski", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "O.J. Howard", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ryan Succop", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	ARIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Eno Benjamin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James Conner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chase Edmonds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonathan Ward", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Dortch", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "A.J. Green", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andy Isabella", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Christian Kirk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rondale Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Antoine Wesley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquise Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Darrell Daniels", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zach Ertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Demetrius Harris", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matt Prater", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	LACoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Austin Ekeler", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Joshua Kelley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gabe Nabers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Larry Rountree III", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Keenan Allen", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jalen Guyton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Palmer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andre Roberts", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Stephen Anderson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tre&#39; McKitty", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dustin Hopkins", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	KCoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Burton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Clyde Edwards-Helaire", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Derrick Gore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jerick McKinnon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Darrel Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Gordon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mecole Hardman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marcus Kemp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Byron Pringle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Demarcus Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Blake Bell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Noah Gray", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Travis Kelce", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Harrison Butker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	INDoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nyheim Hines", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Deon Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marlon Mack", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonathan Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Parris Campbell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "T.Y. Hilton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dezmon Patmon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Pittman Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Strachan", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mo Alie-Cox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kylen Granson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rodrigo Blankenship", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	DALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Corey Clement", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ezekiel Elliott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tony Pollard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Noah Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Simi Fehoko", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Gallup", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "CeeDee Lamb", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Malik Turner", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cedrick Wilson Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James Washington", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sean McKeon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dalton Schultz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeremy Sprinkle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Zuerlein", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	MIAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Salvon Ahmed", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Myles Gaskin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Duke Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Phillip Lindsay", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Isaiah Ford", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mack Hollins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeVante Parker", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jaylen Waddle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Preston Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Albert Wilson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyreek Hill", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cethan Carter", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Gesicki", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Hunter Long", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Shaheen", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Durham Smythe", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Sanders", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	PHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenneth Gainwell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Miles Sanders", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jordan Howard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Boston Scott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.J. Arcega-Whiteside", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jalen Reagor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeVonta Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Ward", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Quez Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zach Pascal", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "A.J. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyree Jackson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Croom", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dallas Goedert", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jack Stoll", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jake Elliott", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	ATLoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Davis", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Qadree Ollison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cordarrelle Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Keith Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Christian Blake", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Frank Darby", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Russell Gage", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Olamide Zaccheaus", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kyle Pitts", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Lee Smith", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Younghoe Koo", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NYGoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Saquon Barkley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devontae Booker", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cullen Gillaspia", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Elijhaa Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenny Golladay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Collin Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "John Ross", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kadarius Toney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Evan Engram", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Myarick", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kyle Rudolph", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Graham Gano", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	JAXoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ryquell Armstead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dare Ogunbowale", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mekhi Sargent", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tavon Austin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marvin Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Laviska Shenault", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Laquon Treadwell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Luke Farrell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Manhertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James O&#39;Shaughnessy", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kahale Warring", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matthew Wright", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NYJoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Bawden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Carter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ty Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "La&#39;Mical Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Austin Walter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Braxton Berrios", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Keelan Cole", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jamison Crowder", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Denzel Mims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeff Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenny Yeboah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Eddy Pi&ntilde;eiro", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	DEToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Cabinda", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Godwin Igwebuike", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jermar Jefferson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Craig Reynolds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Andre Swift", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jamaal Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Trinity Benson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "KhaDarel Hodge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tom Kennedy", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Reynolds", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Amon-Ra St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jared Pinkney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brock Wright", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Riley Patterson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	GBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "A.J. Dillon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Aaron Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Patrick Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Allen Lazard", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Equanimeous St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquez Valdes-Scantling", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Juwann Winfree", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dominique Dafney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Davis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josiah Deguara", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marcedes Lewis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mason Crosby", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	CARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ameer Abdullah", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chuba Hubbard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Giovanni Ricci", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Robby Anderson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alex Erickson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Terrace Marshall Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D.J. Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Shi Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon Zylstra", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ian Thomas", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Lirim Hajrullahu", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon Bolden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Damien Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jakob Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rhamondre Stevenson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.J. Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nelson Agholor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kendrick Bourne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "N&#39;Keal Harry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jakobi Meyers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gunner Olszewski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matthew Slater", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devin Asiasi", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Hunter Henry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonnu Smith", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Folk", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	WASoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jaret Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonathan Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Antonio Gibson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.D. McKissic", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dyami Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeAndre Carter", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Humphries", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Terry McLaurin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dax Milne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Curtis Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cam Sims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "John Bates", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sammis Reyes", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ricky Seals-Jones", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Joey Slye", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	LVoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Peyton Barber", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Jacobs", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jalen Richard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sutton Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Davante Adams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Bryan Edwards", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeSean Jackson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zay Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Hunter Renfrow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Bowers", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Daniel Helm", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Foster Moreau", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Daniel Carlson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	LARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cam Akers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jake Funk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Buddy Howell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sony Michel", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Odell Beckham Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Van Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.J. Koski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cooper Kupp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ben Skowronek", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kendall Blanton", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Higbee", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brycen Hopkins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matt Gay", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	BALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devonta Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Latavius Murray", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Patrick Ricard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ty&#39;Son Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rashod Bateman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Miles Boykin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devin Duvernay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James Proche", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sammy Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tylan Wallace", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mark Andrews", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Boyle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Oliver", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tony Poljan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Tucker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NOoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mark Ingram Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tony Jones Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alvin Kamara", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Prentice", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dwayne Washington", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquez Callaway", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Deonte Harris", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Lil&#39;Jordan Humphrey", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ty Montgomery", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tre&#39;Quan Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenny Stills", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Juwan Johnson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Trautman", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brett Maher", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	SEAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Bellore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alex Collins", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeeJay Dallas", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Travis Homer", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rashaad Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Wayne Eskridge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Penny Hart", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Lockett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DK Metcalf", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Freddie Swain", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Will Dissly", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gerald Everett", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Colby Parkinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Noah Fant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Myers", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	PIToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kalen Ballage", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Najee Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Benny Snell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Derek Watt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chase Claypool", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Diontae Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ray-Ray McCloud", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cody White", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Pat Freiermuth", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zach Gentry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kevin Rader", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Boswell", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	HOUoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rex Burkhead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Royce Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "David Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Scottie Phillips", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Danny Amendola", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Davion Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Phillip Dorsett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nico Collins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Conley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandin Cooks", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jordan Akins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Pharoah Brown", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brevin Jordan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Antony Auclair", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeff Driskel", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ka&#39;imi Fairbairn", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	TENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Khari Blasingame", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Onta Foreman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dontrell Hilliard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeremy McNichols", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dez Fitzpatrick", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Julio Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Racey McMath", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chester Rogers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Westbrook-Ikhine", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Anthony Firkser", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Geoff Swaim", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Randy Bullock", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	MINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dalvin Cook", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Wayne Gallman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "C.J. Ham", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alexander Mattison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kene Nwangwu", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dan Chisena", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "K.J. Osborn", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ihmir Smith-Marsette", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dede Westbrook", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Conklin", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Herndon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Luke Stocker", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Joseph", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	SFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "JaMycal Hasty", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kyle Juszczyk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Elijah Mitchell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeff Wilson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon Aiyuk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Travis Benjamin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "River Cracraft", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jauan Jennings", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Deebo Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Trent Sherfield", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ross Dwelley", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tanner Hudson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "George Kittle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Charlie Woerner", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Robbie Gould", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
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
	
	team1 = [null, 0, null, null, null, null, null, null];
	team2 = [null, 0, null, null, null, null, null, null];
	
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
					  {song: "Oh No", artist: "Goodbye June", src: "playlist/track10.mp3", songLength: 223} ];
	
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
	
	document.getElementById("reset-btn").disabled = true;
	
	//HIDE THE BOX SCORE
	document.getElementById("box-score").innerHTML = "";
	document.getElementById("box-score").style.visibility = "hidden";
	
	/*REINITIALIZE THE QUARTERBACKS*/
	CHIqbs = [ "Trevor Siemian", "Nathan Peterman", "Justin Fields" ];
	CINqbs = [ "Joe Burrow", "Brandon Allen", "Jake Browning" ];
	BUFqbs = [ "Josh Allen", "Matt Barkley", "Case Keenum" ];
	DENqbs = [ "Russell Wilson", "Teddy Bridgewater", "Brett Rypien" ];
	CLEqbs = [ "Baker Mayfield", "Deshaun Watson", "Joshua Dobbs" ];
	TBqbs = [ "Tom Brady", "Kyle Trask", "Blaine Gabbert" ];
	ARIqbs = [ "Kyler Murray", "Trace McSorley", "Colt McCoy" ];
	LACqbs = [ "Justin Herbert", "Chase Daniel", "Easton Stick" ];
	KCqbs = [ "Patrick Mahomes", "Chad Henne", "Shane Buechele" ];
	INDqbs = [ "Matt Ryan", "Sam Ehlinger", "James Morgan"  ];
	DALqbs = [ "Dak Prescott", "Cooper Rush", "Will Grier" ];
	MIAqbs = [ "Tua Tagovailoa", "Jacoby Brissett", "Jake Luton" ];
	PHIqbs = [ "Jalen Hurts", "Gardner Minshew", "Reid Sinnett" ];
	ATLqbs = [ "Feleipe Franks", "Marcus Mariota", "Josh Rosen" ];
	NYGqbs = [ "Daniel Jones", "Tyrod Taylor", "Davis Webb" ];
	JAXqbs = [ "Trevor Lawrence", "C.J. Beathard", "Danny Etling" ];
	NYJqbs = [ "Zach Wilson", "Joe Flacco", "Mike White" ];
	DETqbs = [ "Jared Goff", "Tim Boyle", "David Blough" ];
	GBqbs = [ "Aaron Rodgers", "Jordan Love", "Kurt Benkert" ];
	CARqbs = [ "Cam Newton", "Sam Darnold", "P.J. Walker" ];
	NEqbs = [ "Mac Jones", "Brian Hoyer", "Bailey Zappe" ];
	WASqbs = [ "Carson Wentz", "Taylor Heinicke", "Sam Howell" ];
	LVqbs = [ "Derek Carr", "Nick Mullens", "Jarrett Stidham" ];
	LARqbs = [ "Matthew Stafford", "John Wolford", "Bryce Perkins" ];
	BALqbs = [ "Lamar Jackson", "Tyler Huntley", "Josh Johnson" ];
	NOqbs = [ "Taysom Hill", "Andy Dalton", "Ian Book" ];
	SEAqbs = [ "Drew Lock", "Geno Smith", "Jacob Eason" ];
	PITqbs = [ "Mason Rudolph", "Mitchell Trubisky", "Kenny Pickett" ];
	HOUqbs = [ "Kyle Allen", "Kevin Hogan", "Davis Mills" ];
	TENqbs = [ "Ryan Tannehill", "Logan Woodside", "Malik Willis" ];
	MINqbs = [ "Kirk Cousins", "Sean Mannion", "Kellen Mond" ];
	SFqbs = [ "Jimmy Garoppolo", "Trey Lance", "Tyler Bray" ];
	
	/*REINITIALIZE THE ROSTERS*/
	CHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Khalil Herbert", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "David Montgomery", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ryan Nall", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Damien Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Damiere Byrd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquise Goodwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jakeem Grant", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Darnell Mooney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Allen Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jimmy Graham", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.P. Holtz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jesper Horsted", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jesse James", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cole Kmet", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cairo Santos", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	CINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Evans", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Joe Mixon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Samaje Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Trayveon Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Boyd", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ja&#39;Marr Chase", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tee Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Stanley Morgan Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Thomas", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Drew Sample", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "C.J. Uzomah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mitchell Wilcox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Evan McPherson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	BUFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matt Breida", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Reggie Gilliam", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Taiwan Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zack Moss", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devin Singletary", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cole Beasley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gabriel Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Stefon Diggs", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jake Kumerow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Isaiah McKenzie", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Emmanuel Sanders", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquez Stevenson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dawson Knox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tommy Sweeney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Bass", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	DENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Boone", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Melvin Gordon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Javonte Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kendall Hinton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Diontae Spencer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Courtland Sutton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Albert Okwuegbunam", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andrew Beck", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Shaun Beyer", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Eric Tomlinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon McManus", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	CLEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Chubb", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Demetric Felton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kareem Hunt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andy Janovich", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Ernest Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ja&#39;Marcus Bradley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rashard Higgins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jarvis Landry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Donovan Peoples-Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Anthony Schwartz", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Amari Cooper", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Harrison Bryant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Austin Hooper", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "David Njoku", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chase McLaughlin", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	TBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenjon Barner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Le&#39;Veon Bell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ronald Jones II", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ke&#39;Shawn Vaughn", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Leonard Fournette", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Evans", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cyril Grayson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Scotty Miller", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Breshad Perriman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Godwin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Watson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cameron Brate", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rob Gronkowski", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "O.J. Howard", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ryan Succop", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	ARIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Eno Benjamin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James Conner", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chase Edmonds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonathan Ward", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Dortch", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "A.J. Green", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andy Isabella", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Christian Kirk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rondale Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Antoine Wesley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquise Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Darrell Daniels", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zach Ertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Demetrius Harris", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matt Prater", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	LACoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Austin Ekeler", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Joshua Kelley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gabe Nabers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Larry Rountree III", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Keenan Allen", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jalen Guyton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Palmer", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Andre Roberts", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Stephen Anderson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tre&#39; McKitty", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dustin Hopkins", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	KCoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Burton", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Clyde Edwards-Helaire", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Derrick Gore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jerick McKinnon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Darrel Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Gordon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mecole Hardman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marcus Kemp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Byron Pringle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Demarcus Robinson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Blake Bell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Noah Gray", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Travis Kelce", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Harrison Butker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	INDoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nyheim Hines", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Deon Jackson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marlon Mack", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonathan Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Parris Campbell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "T.Y. Hilton", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dezmon Patmon", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Pittman Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Strachan", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mo Alie-Cox", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kylen Granson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rodrigo Blankenship", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	DALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Corey Clement", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ezekiel Elliott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tony Pollard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Noah Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Simi Fehoko", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Gallup", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "CeeDee Lamb", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Malik Turner", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cedrick Wilson Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James Washington", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sean McKeon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dalton Schultz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeremy Sprinkle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Zuerlein", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	MIAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Salvon Ahmed", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Myles Gaskin", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Duke Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Phillip Lindsay", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Isaiah Ford", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mack Hollins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeVante Parker", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jaylen Waddle", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Preston Williams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Albert Wilson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyreek Hill", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cethan Carter", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Gesicki", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Hunter Long", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Shaheen", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Durham Smythe", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Sanders", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	PHIoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenneth Gainwell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Miles Sanders", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jordan Howard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Boston Scott", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.J. Arcega-Whiteside", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jalen Reagor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeVonta Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Ward", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Quez Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zach Pascal", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "A.J. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyree Jackson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Croom", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dallas Goedert", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jack Stoll", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jake Elliott", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	ATLoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mike Davis", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Qadree Ollison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cordarrelle Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Keith Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Christian Blake", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Frank Darby", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Russell Gage", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Olamide Zaccheaus", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kyle Pitts", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Lee Smith", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Younghoe Koo", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NYGoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Saquon Barkley", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devontae Booker", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cullen Gillaspia", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Elijhaa Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenny Golladay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Collin Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "John Ross", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kadarius Toney", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Evan Engram", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Myarick", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kyle Rudolph", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Graham Gano", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	JAXoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ryquell Armstead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dare Ogunbowale", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mekhi Sargent", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tavon Austin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marvin Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Laviska Shenault", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Laquon Treadwell", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Luke Farrell", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Manhertz", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James O&#39;Shaughnessy", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kahale Warring", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matthew Wright", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NYJoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Bawden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Michael Carter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ty Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "La&#39;Mical Perine", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Austin Walter", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Braxton Berrios", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Keelan Cole", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jamison Crowder", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Denzel Mims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeff Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenny Yeboah", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Eddy Pi&ntilde;eiro", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	DEToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Cabinda", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Godwin Igwebuike", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jermar Jefferson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Craig Reynolds", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Andre Swift", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jamaal Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Trinity Benson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "KhaDarel Hodge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tom Kennedy", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Reynolds", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Amon-Ra St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jared Pinkney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brock Wright", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Riley Patterson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	GBoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "A.J. Dillon", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Aaron Jones", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Patrick Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Allen Lazard", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Equanimeous St. Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquez Valdes-Scantling", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Juwann Winfree", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dominique Dafney", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Davis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josiah Deguara", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marcedes Lewis", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mason Crosby", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	CARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ameer Abdullah", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chuba Hubbard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Giovanni Ricci", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Robby Anderson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alex Erickson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Terrace Marshall Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D.J. Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Shi Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon Zylstra", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ian Thomas", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Lirim Hajrullahu", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NEoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon Bolden", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Damien Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jakob Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rhamondre Stevenson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.J. Taylor", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nelson Agholor", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kendrick Bourne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "N&#39;Keal Harry", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jakobi Meyers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gunner Olszewski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matthew Slater", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devin Asiasi", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Hunter Henry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonnu Smith", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Folk", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	WASoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jaret Patterson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jonathan Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Antonio Gibson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.D. McKissic", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dyami Brown", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeAndre Carter", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Humphries", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Terry McLaurin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dax Milne", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Curtis Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cam Sims", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "John Bates", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sammis Reyes", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ricky Seals-Jones", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Joey Slye", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	LVoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Peyton Barber", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Jacobs", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jalen Richard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sutton Smith", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Davante Adams", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Bryan Edwards", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeSean Jackson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zay Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Hunter Renfrow", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Bowers", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Daniel Helm", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Foster Moreau", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Daniel Carlson", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	LARoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cam Akers", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jake Funk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Buddy Howell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sony Michel", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Odell Beckham Jr.", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Van Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "J.J. Koski", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cooper Kupp", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ben Skowronek", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kendall Blanton", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Higbee", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brycen Hopkins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Matt Gay", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	BALoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devonta Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Latavius Murray", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Patrick Ricard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ty&#39;Son Williams", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rashod Bateman", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Miles Boykin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Devin Duvernay", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "James Proche", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Sammy Watkins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tylan Wallace", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mark Andrews", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Boyle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Josh Oliver", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tony Poljan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Tucker", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	NOoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Mark Ingram Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tony Jones Jr.", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alvin Kamara", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Prentice", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dwayne Washington", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Marquez Callaway", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Deonte Harris", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Lil&#39;Jordan Humphrey", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ty Montgomery", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tre&#39;Quan Smith", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kenny Stills", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Juwan Johnson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Adam Trautman", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brett Maher", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	SEAoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Bellore", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alex Collins", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DeeJay Dallas", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Travis Homer", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rashaad Penny", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Wayne Eskridge", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Penny Hart", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Lockett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "DK Metcalf", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Freddie Swain", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Will Dissly", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Gerald Everett", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Colby Parkinson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Noah Fant", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jason Myers", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	PIToffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kalen Ballage", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Najee Harris", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Benny Snell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Derek Watt", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chase Claypool", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Diontae Johnson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ray-Ray McCloud", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Cody White", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Pat Freiermuth", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Zach Gentry", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kevin Rader", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Boswell", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	HOUoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Rex Burkhead", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Royce Freeman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "David Johnson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Scottie Phillips", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Danny Amendola", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Davion Davis", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Phillip Dorsett", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Moore", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nico Collins", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Conley", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandin Cooks", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jordan Akins", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Pharoah Brown", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brevin Jordan", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Antony Auclair", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeff Driskel", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ka&#39;imi Fairbairn", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	TENoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Khari Blasingame", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "D&#39;Onta Foreman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dontrell Hilliard", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeremy McNichols", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dez Fitzpatrick", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Julio Jones", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Racey McMath", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chester Rogers", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Nick Westbrook-Ikhine", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Anthony Firkser", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Geoff Swaim", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Randy Bullock", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	MINoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dalvin Cook", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Wayne Gallman", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "C.J. Ham", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Alexander Mattison", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kene Nwangwu", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dan Chisena", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Justin Jefferson", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "K.J. Osborn", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ihmir Smith-Marsette", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Dede Westbrook", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tyler Conklin", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Chris Herndon", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Luke Stocker", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Greg Joseph", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
	SFoffense = [ {name: "", pos: "QB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "JaMycal Hasty", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Kyle Juszczyk", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Elijah Mitchell", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jeff Wilson", pos: "RB", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Brandon Aiyuk", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Travis Benjamin", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "River Cracraft", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Jauan Jennings", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Deebo Samuel", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Trent Sherfield", pos: "WR", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Ross Dwelley", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Tanner Hudson", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "George Kittle", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Charlie Woerner", pos: "TE", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0},
	{name: "Robbie Gould", pos: "K", points: 0, passTD: 0, rushTD: 0, recTD: 0, fg: 0, xp: 0} ];
	
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
	
	team1 = [null, 0, null, null, null, null, null, null];
	team2 = [null, 0, null, null, null, null, null, null];
	
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
			venueInWords = "Heinz Field - Pittsburgh, PA";
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
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
			setTimeout(firstQuarterStart, 1000);
			//firstQuarter(team1, team2);
		}
		else
		{
			//HOME TEAM KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " will receive to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
			setTimeout(firstQuarterStart, 1000);
			//firstQuarter(team1, team2);
		}
		else
		{
			//AWAY TEAM KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will receive to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
		var driveResult = Math.floor(Math.random() * 40 + 1);

		if(driveResult == 1 || driveResult == 2) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
			team1[4][randomPlayerIndex].points = team1[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team1[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team1[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team1[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team1[4][randomPlayerIndex].rushTD++;
				}
				else {
					team1[4][randomPlayerIndex].recTD++;
					team1[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team1[4][randomPlayerIndex].recTD++;
				team1[4][0].passTD++;
			}
			
			var playerName = team1[4][randomPlayerIndex];
			
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
		else if(driveResult == 3) //Field goal
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
		else if(driveResult == 5 || driveResult == 6) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
			team2[4][randomPlayerIndex].points = team2[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team2[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team2[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team2[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team2[4][randomPlayerIndex].rushTD++;
				}
				else {
					team2[4][randomPlayerIndex].recTD++;
					team2[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team2[4][randomPlayerIndex].recTD++;
				team2[4][0].passTD++;
			}
			
			var playerName = team2[4][randomPlayerIndex];
			
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
		else if(driveResult == 7) //Field goal
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
	document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
		var driveResult = Math.floor(Math.random() * 40 + 1);

		if(driveResult == 1 || driveResult == 2) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
			team1[4][randomPlayerIndex].points = team1[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team1[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team1[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team1[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team1[4][randomPlayerIndex].rushTD++;
				}
				else {
					team1[4][randomPlayerIndex].recTD++;
					team1[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team1[4][randomPlayerIndex].recTD++;
				team1[4][0].passTD++;
			}
			
			var playerName = team1[4][randomPlayerIndex];
			
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
		else if(driveResult == 3) //Field goal
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
		else if(driveResult == 5 || driveResult == 6) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
			team2[4][randomPlayerIndex].points = team2[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team2[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team2[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team2[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team2[4][randomPlayerIndex].rushTD++;
				}
				else {
					team2[4][randomPlayerIndex].recTD++;
					team2[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team2[4][randomPlayerIndex].recTD++;
				team2[4][0].passTD++;
			}
			
			var playerName = team2[4][randomPlayerIndex];
			
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
		else if(driveResult == 7) //Field goal
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
	document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
		var driveResult = Math.floor(Math.random() * 40 + 1);

		if(driveResult == 1 || driveResult == 2) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
			team1[4][randomPlayerIndex].points = team1[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team1[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team1[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team1[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team1[4][randomPlayerIndex].rushTD++;
				}
				else {
					team1[4][randomPlayerIndex].recTD++;
					team1[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team1[4][randomPlayerIndex].recTD++;
				team1[4][0].passTD++;
			}
			
			var playerName = team1[4][randomPlayerIndex];
			
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
		else if(driveResult == 3) //Field goal
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
		else if(driveResult == 5 || driveResult == 6) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
			team2[4][randomPlayerIndex].points = team2[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team2[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team2[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team2[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team2[4][randomPlayerIndex].rushTD++;
				}
				else {
					team2[4][randomPlayerIndex].recTD++;
					team2[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team2[4][randomPlayerIndex].recTD++;
				team2[4][0].passTD++;
			}
			
			var playerName = team2[4][randomPlayerIndex];
			
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
		else if(driveResult == 7) //Field goal
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
	document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
		var driveResult = Math.floor(Math.random() * 40 + 1);

		if(driveResult == 1 || driveResult == 2) //Touchdown
		{
			away=7;
			team1[1] += away;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
			team1[4][randomPlayerIndex].points = team1[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team1[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team1[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team1[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team1[4][randomPlayerIndex].rushTD++;
				}
				else {
					team1[4][randomPlayerIndex].recTD++;
					team1[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team1[4][randomPlayerIndex].recTD++;
				team1[4][0].passTD++;
			}
			
			var playerName = team1[4][randomPlayerIndex];
			
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
		else if(driveResult == 3) //Field goal
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
		else if(driveResult == 5 || driveResult == 6) //Touchdown
		{
			home=7;
			team2[1] += home;
			
			/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
			team2[4][randomPlayerIndex].points = team2[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team2[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team2[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team2[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team2[4][randomPlayerIndex].rushTD++;
				}
				else {
					team2[4][randomPlayerIndex].recTD++;
					team2[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team2[4][randomPlayerIndex].recTD++;
				team2[4][0].passTD++;
			}
			
			var playerName = team2[4][randomPlayerIndex];
			
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
		else if(driveResult == 7) //Field goal
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
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
		otCoinToss(team1, team2);
	}
	else {
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
		/*BOX SCORE*/
		document.getElementById("box-score").style.visibility = "visible";
		document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
		document.getElementById("box-score").innerHTML += "<h3>"+team1[6]+" "+team1[0].toUpperCase()+"</h3>";
		document.getElementById("box-score").innerHTML += "<table>";
		document.getElementById("box-score").innerHTML += "<br/>";
		for(var i=0; i<team1[4].length; i++){
			if(team1[4][i].pos.valueOf() == "K"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team1[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
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
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team2[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
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
		
		/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team1[4].length - 1));
			team1[4][randomPlayerIndex].points = team1[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team1[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team1[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team1[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team1[4][randomPlayerIndex].rushTD++;
				}
				else {
					team1[4][randomPlayerIndex].recTD++;
					team1[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team1[4][randomPlayerIndex].recTD++;
				team1[4][0].passTD++;
			}
			
			var playerName = team1[4][randomPlayerIndex];
			
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
			
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 2)
	{
		team1[1] += 3;
		
		/*FIELD GOAL*/
			team1[4][team1[4].length - 1].points = team1[4][team1[4].length - 1].points + 3;
			team1[4][team1[4].length - 1].fg++;
			
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick from " + team1[4][team1[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 3)
	{
		team2[1] += 2;
		team2[5][0].points = team2[5][0].points + 2;
		team2[5][0].safeties++;
		
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 4)
	{
		team2[1] += 6;
		
		/*TOUCHDOWN*/
			var randomPlayerIndex = Math.floor(Math.random() * (team2[4].length - 1));
			team2[4][randomPlayerIndex].points = team2[4][randomPlayerIndex].points + 6;
			
			/*ALL TOUCHDOWNS SCORED BY THE QUARTERBACK ARE RUSHING TOUCHDOWNS. WHILE A QB PASSING TO HIMSELF IS POSSIBLE, IT IS VERY RARE AND NOT TRACKED HERE.*/
			if(team2[4][randomPlayerIndex].pos.valueOf() == "QB"){
				team2[4][randomPlayerIndex].rushTD++;
			}
			/*RUNNING BACKS CAN SCORE TOUCHDOWNS BY THEMSELVES ON THE GROUND OR VIA A QUARTERBACK PASS RECEPTION INTO THE END ZONE.*/
			else if (team2[4][randomPlayerIndex].pos.valueOf() == "RB"){
				rbTDnumber = Math.floor(Math.random() * 2);
				if(rbTDnumber == 0){ //IF 0, RUNNING BACK SCORES RUSHING TD. IF 1, RUNNING BACK SCORES A RECEIVING TD, WITH THE QB BEING CREDITED WITH A TOUCHDOWN PASS
					team2[4][randomPlayerIndex].rushTD++;
				}
				else {
					team2[4][randomPlayerIndex].recTD++;
					team2[4][0].passTD++;
				}
			}
			/*WIDE RECEIVERS AND TIGHT ENDS ONLY SCORE TOUCHDOWNS IF THE BALL IS PASSED TO THEM. 
			THEREFORE, THEY GET CREDITED WITH A RECEIVING TD AND THE QB WITH A PASSING TD*/
			else{
				team2[4][randomPlayerIndex].recTD++;
				team2[4][0].passTD++;
			}
			
			var playerName = team2[4][randomPlayerIndex];
			
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
			
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 5)
	{
		team2[1] += 3;
		
		/*FIELD GOAL*/
			team2[4][team2[4].length - 1].points = team2[4][team2[4].length - 1].points + 3;
			team2[4][team2[4].length - 1].fg++;
			
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick from " + team2[4][team2[4].length - 1].name + " is good from " + (Math.floor(Math.random() * 36) + 20) + " yards out</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 6)
	{
		team1[1] += 2;
		team1[5][0].points = team1[5][0].points + 2;
		team1[5][0].safeties++;
		
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
		
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
		
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else
	{
		document.getElementById("simulation").innerHTML += "<p>-</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result - "+venueInWords+"</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
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
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team1[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if(team1[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team1[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team1[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team1[4][i].recTD+"</b> REC TD</td></tr><br/>";
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
				document.getElementById("box-score").innerHTML += "<tr><td><b>SPECIAL TEAMS</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].fg+"</b> FG</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].xp+"</b> XP</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "QB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>OFFENSE</b><br/><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td>(<b>"+team2[4][i].passTD+"</b> PASS TD)</td></tr><br/>";
			}
			else if (team2[4][i].pos.valueOf() == "RB"){
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].rushTD+"</b> RUSH TD</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
			}
			else{
				document.getElementById("box-score").innerHTML += "<tr><td><b>"+team2[4][i].name+"</b></td>&emsp;&emsp;&emsp;<td>"+team2[4][i].pos+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].points+"</b> PTS &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+team2[4][i].recTD+"</b> REC TD</td></tr><br/>";
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
	
	document.getElementById("welcome-to-the-game").innerHTML = "<p><b>WELCOME TO THE GAME. THIS GAME WILL OPPOSE THE " + team1[6] + " " + team1[0].toUpperCase() + " AND THE " + team2[6] + " " + team2[0].toUpperCase() + ".<br/>PLEASE SELECT THE STARTING QUARTERBACKS FOR THIS MATCHUP. THEN CLICK SUBMIT TO KICKOFF THE GAME.</b><br/><br/></p>";
	
	document.getElementById("awayTeam").innerHTML = "<p><b>"+team1[6] + " " + team1[0].toUpperCase() + "</b></p>";
	
	document.getElementById("team1qb1").innerHTML = "<p>Click <b>1</b> to name <b>"+team1[7][0]+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team1qb2").innerHTML = "<p>Click <b>2</b> to name <b>"+team1[7][1]+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team1qb3").innerHTML = "<p>Click <b>3</b> to name <b>"+team1[7][2]+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	
	document.getElementById("homeTeam").innerHTML = "<br/><p><b>"+team2[6] + " " + team2[0].toUpperCase() + "</b></p>";
	
	document.getElementById("team2qb1").innerHTML = "<p>Click <b>1</b> to name <b>"+team2[7][0]+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team2qb2").innerHTML = "<p>Click <b>2</b> to name <b>"+team2[7][1]+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
	document.getElementById("team2qb3").innerHTML = "<p>Click <b>3</b> to name <b>"+team2[7][2]+"</b> your starting quarterback. &nbsp;&nbsp;</p>";
}

function awayqb1(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	team1[4][0].name = team1[7][0];
	document.getElementById("header-text").innerHTML = "<p>"+team1[3]+" has named "+team1[7][0]+" their starting quarterback</p>";
	
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
	
	team1[4][0].name = team1[7][1];
	document.getElementById("header-text").innerHTML = "<p>"+team1[3]+" has named "+team1[7][1]+" their starting quarterback</p>";
	
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
	
	team1[4][0].name = team1[7][2];
	document.getElementById("header-text").innerHTML = "<p>"+team1[3]+" has named "+team1[7][2]+" their starting quarterback</p>";
	
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
	
	team2[4][0].name = team2[7][0];
	document.getElementById("header-text").innerHTML = "<p>"+team2[3]+" has named "+team2[7][0]+" their starting quarterback</p>";
	
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
	
	team2[4][0].name = team2[7][1];
	document.getElementById("header-text").innerHTML = "<p>"+team2[3]+" has named "+team2[7][1]+" their starting quarterback</p>";
	
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
	
	team2[4][0].name = team2[7][2];
	document.getElementById("header-text").innerHTML = "<p>"+team2[3]+" has named "+team2[7][2]+" their starting quarterback</p>";
	
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
