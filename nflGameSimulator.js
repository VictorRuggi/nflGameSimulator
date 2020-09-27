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
	teamButtons = [ document.getElementById("bears"), document.getElementById("bengals"), document.getElementById("bills"), document.getElementById("broncos"), 
					document.getElementById("browns"), document.getElementById("buccaneers"), document.getElementById("cardinals"), document.getElementById("chargers"), 
					document.getElementById("chiefs"), document.getElementById("colts"), document.getElementById("cowboys"), document.getElementById("dolphins"),
					document.getElementById("eagles"), document.getElementById("falcons"), document.getElementById("giants"), document.getElementById("jaguars"),
					document.getElementById("jets"), document.getElementById("lions"), document.getElementById("packers"), document.getElementById("panthers"),
					document.getElementById("patriots"), document.getElementById("footballteam"), document.getElementById("raiders"), document.getElementById("rams"),
					document.getElementById("ravens"), document.getElementById("saints"), document.getElementById("seahawks"), document.getElementById("steelers"),
					document.getElementById("texans"), document.getElementById("titans"), document.getElementById("vikings"), document.getElementById("49ers") ];
	
	team1 = [null, 0, null, null];
	team2 = [null, 0, null, null];
	
	for(var i=0; i<teamButtons.length; i++){
		addEvent(teamButtons[i], "click", teamSelect);
	}
	
	addEvent(document.getElementById("reset-btn"), "click", resetAll);
}

function resetAll(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("reset-btn").disabled = true;
	
	team1 = [null, 0, null, null];
	team2 = [null, 0, null, null];
	
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
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "bengals":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "CIN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "bills":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "BUF";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "broncos":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "DEN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "browns":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "CLE";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "buccaneers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "TB";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "cardinals":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "ARI";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "chargers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "LAC";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "chiefs":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "KC";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "colts":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "IND";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "cowboys":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "DAL";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "dolphins":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "MIA";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "eagles":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "PHI";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "falcons":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "ATL";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "giants":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NYG";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "jaguars":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "JAX";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "jets":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NYJ";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "lions":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "DET";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "packers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "GB";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "panthers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "CAR";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "patriots":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NE";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "raiders":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "LV";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "rams":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "LAR";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "ravens":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "BAL";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "footballteam":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "WSH";
				team1[0] = "football team";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "saints":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "NO";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "seahawks":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "SEA";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "steelers":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "PIT";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "texans":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "HOU";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "titans":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "TEN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "vikings":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "MIN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			default:
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[3] = "SF";
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
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "bengals":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "CIN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "bills":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "BUF";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "broncos":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "DEN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "browns":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "CLE";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "buccaneers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "TB";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "cardinals":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "ARI";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "chargers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "LAC";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "chiefs":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "KC";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "colts":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "IND";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "cowboys":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "DAL";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "dolphins":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "MIA";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "eagles":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "PHI";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "falcons":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "ATL";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "giants":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NYG";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "jaguars":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "JAX";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "jets":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NYJ";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "lions":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "DET";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "packers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "GB";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "panthers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "CAR";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "patriots":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NE";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "raiders":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "LV";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "rams":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "LAR";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "ravens":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "BAL";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "footballteam":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "WSH";
				team2[0] = "football team";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "saints":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "NO";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "seahawks":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "SEA";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "steelers":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "PIT";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "texans":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "HOU";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "titans":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "TEN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "vikings":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "MIN";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			default:
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[3] = "SF";
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
		
		/*document.getElementById("header-text").innerHTML = "<p>Game On! Read the Simulation Below</p>" + "<ul><li>" + "<img src=\"" + team1[3] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[3] + "\"></img>" + "</li></ul></div>";*/
		//firstPeriod(team1, team2);
	}
}

function coinToss(team1, team2){
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
			firstQuarter(team1, team2);
		}
		else
		{
			//HOME TEAM KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " will receive to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			firstQuarter(team1, team2);
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
			firstQuarter(team1, team2);
		}
		else
		{
			//AWAY TEAM KICKS TO BEGIN
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will receive to start</p></b><br/><b>SCORING DRIVES</b><br/><b>FIRST QUARTER</b></p>";
			firstQuarter(team1, team2);
		}
	}	
}

function firstQuarter(team1, team2){
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 12 + 1);

		if(driveResult == 1) //Touchdown
		{
			away=7;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 2) //Field goal
		{
			away=3;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 11) //Safety
		{
			home=2;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 5) //Touchdown
		{
			home=7;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 6) //Field goal
		{
			home=3;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 12) //Safety
		{
			away=2;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	secondQuarter(team1, team2);
}
	

function secondQuarter(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><br/><b>SECOND QUARTER</b></p>";
	
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 12 + 1);

		if(driveResult == 1) //Touchdown
		{
			away=7;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 2) //Field goal
		{
			away=3;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 11) //Safety
		{
			home=2;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 5) //Touchdown
		{
			home=7;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 6) //Field goal
		{
			home=3;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 12) //Safety
		{
			away=2;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	
	thirdQuarter(team1, team2);
}

function thirdQuarter(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><br/><b>THIRD QUARTER</b></p>";
	
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 12 + 1);

		if(driveResult == 1) //Touchdown
		{
			away=7;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 2) //Field goal
		{
			away=3;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 11) //Safety
		{
			home=2;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 5) //Touchdown
		{
			home=7;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 6) //Field goal
		{
			home=3;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 12) //Safety
		{
			away=2;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	fourthQuarter(team1, team2);
}

function fourthQuarter(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><br/><b>FOURTH QUARTER</b></p>";
	
	for (var i = 0; i < (Math.floor)(Math.random() * 3 + 5); i++)
	{
		var away=0;
		var home=0;
		var driveResult = Math.floor(Math.random() * 12 + 1);

		if(driveResult == 1) //Touchdown
		{
			away=7;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 2) //Field goal
		{
			away=3;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 11) //Safety
		{
			home=2;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		}
		else if(driveResult == 5) //Touchdown
		{
			home=7;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown and extra point</p>";
		}
		else if(driveResult == 6) //Field goal
		{
			home=3;
			team2[1] += home;
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		}
		else if(driveResult == 12) //Safety
		{
			away=2;
			team1[1] += away;
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		}
		else //Punt or missed field goal
		{
			team1[1] +=0;
			team2[1] +=0;
		}
	}
	
	if( team1[1] == team2[1] ) {
		otCoinToss(team1, team2);
	}
	else {
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
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
			overtime(team1, team2);
		}
		else
		{
			document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " will receive to start</p></b><br/><b>OVERTIME</b></p>";
			overtime(team1, team2);
		}
	}
	else
	{
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " wins the toss</p>";
		var picker = Math.floor(Math.random() * 2);

		if(picker == 0)
		{
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will kick to start</p></b><br/><b>OVERTIME</b></p>";
			overtime(team1, team2);
		}
		else
		{
			document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " will receive to start</p></b><br/><b>OVERTIME</b></p>";
			overtime(team1, team2);
		}
	}
}

function overtime(team1, team2){
	
	var picker = Math.floor(Math.random() * 7 + 1);

	if(picker == 1)
	{
		team1[1] += 6;
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " touchdown</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 2)
	{
		team1[1] += 3;
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 3)
	{
		team2[1] += 2;
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " record the safety</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 4)
	{
		team2[1] += 6;
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " touchdown</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 5)
	{
		team2[2] += 3;
		document.getElementById("simulation").innerHTML += "<p>" + team2[3] + " field goal kick is good from " + (Math.floor(Math.random() * 31) + 20) + " yards out</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else if(picker == 6)
	{
		team1[1] += 2;
		document.getElementById("simulation").innerHTML += "<p>" + team1[3] + " record the safety</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	else
	{
		document.getElementById("simulation").innerHTML += "<p>-</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>" + "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	}
	document.getElementById("reset-btn").disabled = false;
}

function resume1(){
	document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";
}

function resume2(){
	coinToss(team1, team2);
}

window.onload = init;
var team1;
var team2;
var teamButtons;
var coinToss;
var awayKick;
var homeKick;