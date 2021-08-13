var campsites = [{name: "Cougar Rock", location: "Mount Rainier National Park", type: "National Park", feature: "Mountains", description: "Elevation of 3,180 ft., 173 sites, $20 fee, Season is late May-September. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm", coordinates: "46.806000165618194, -121.7983992590337"},
 {name: "Ohanapecosh", location: "Mount Rainier National Park", type: "National Park", feature: "Mountains", description: "Elevation of 1,914 ft., 188 sites, $20 fee, Season is late May-September. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm", coordinates: "46.776800984941566, -121.5697919144425"}, 
 {name: "White River", location: "Mount Rainier National Park", type: "National Park", feature: "Mountains", description: "Elevation of 4,400 ft., 112 sites, $20 fee, Season is late June-September. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm", coordinates: "46.948405654537474, -121.63045442266582"}, 
 {name: "Mowich Lake", location: "Mount Rainier National Park", type: "National Park", feature: "Mountains", description: "Elevation of 4,929 ft., 13 sites, no fee, Season is early July-October. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm", coordinates: "46.98039255966651, -121.8632452357795"}, 
 {name: "Deer Park", location: "Olympic National Park", type: "National Park", feature: "Mountains", description: "Elevation of 5,400 ft., 14 sites, $15 fee, Season is June to mid October. Website: https://www.nps.gov/olym/planyourvisit/camping.htm", coordinates: "47.99526023326804, -123.26839105165804"},
 {name: "Hoh Campground", location: "Olympic National Park", type: "National Park", feature: "Rain Forest", description: "Located in Hoh Rain Forest, 72 sites, $24 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm", "coordinates": "47.85740467763709, -123.93548645763256"}, 
 {name: "Kalaloch", location: "Olympic National Park", type: "National Park", feature: "Ocean", description: "Overlooking Pacific Ocean, 170 sites, $24 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm", coordinates: "47.61316485535686, -124.37621482879122"}, 
 {name: "Mora", location: "Olympic National Park", type: "National Park", feature: "Rain Forest", description: "94 sites, $24 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm", coordinates: "47.91807138874722, -124.608658184612"}, 
 {name: "Ozette", location: "Olympic National Park", type: "National Park", feature: "Lake", description: "Next to Lake Ozette. 15 sites, $20 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm", coordinates: "48.152905953988714, -124.66657722879373"}, 
 {name: "Newhalem Creek", location: "North Cascades National Park", type: "National Park", feature: "Mountains", description: "Elevation 500 feet, 107 sites, website: https://www.nps.gov/noca/planyourvisit/camping.htm", coordinates: "48.6758233746402, -121.25982173509183"}, 
 {name: "Goodell Creek", location: "North Cascades National Park", type: "National Park", feature: "Mountains", description: "Elevation 500 feet, 19 sites, website: https://www.nps.gov/noca/planyourvisit/camping.htm", coordinates: "48.67627677748922, -121.26771815834053"}, 
 {name: "Gorge Lake", location: "North Cascades National Park", type: "National Park", feature: "Lake", description: "Elevation 900 feet, 8 sites, website: https://www.nps.gov/noca/planyourvisit/camping.htm", coordinates: "48.71666766754367, -121.15181284371491"}, 
 {name: "Colonial Creek North", location: "North Cascades National Park", type: "National Park", feature: "Mountains", "description": "Elevation 1200 feet, 41 sites, website: https://www.nps.gov/noca/planyourvisit/camping.htm", coordinates: "48.71666766754367, -121.15181284371491"}, 
 {name: "29 Pines", location: "Kittitas County", type: "Public Land", feature: "Mountains", description: "No fee, currently closed.", coordinates: "47.401469090882884, -120.82949961837365"}, 
 {name: "Beaver Plant Lake", location: "Snohomish County", type: "Public Land", feature: "Lake", description: "No fee, currently open.", coordinates: "48.87540643347537, -118.96523826231757"}, 
 {name: "Bruni's Snow Bowl Hut", location: "Lewis County", type: "Public Land", feature: "Mountains", description: "No fee, currently closed.", coordinates: "46.731951700452186, -122.02213210361322"}, 
 {name: "High Hut", location: "Lewis County", type: "Public Land", feature: "Mountains", description: "No fee, currently closed.", coordinates: "46.749920277419, -122.03927744927135"}, 
 {name: "Hoh Oxbow", location: "Jefferson County", type: "Public Land", feature: "Rain Forest", description: "No fee, currently open.", coordinates: "47.9238652595263, -124.22845437594817"}, 
 {name: "Alta Lake", location: "Alta Lake State Park", type: "State Park", feature: "Lake", description: "93 campsites, $27 t0 $37, reserve at: https://washington.goingtocamp.com/ ", coordinates: "48.0763605633329, -119.94540279708727"}, 
 {name: "Matia Island", location: "Matia Island State Park", type: "State Park", feature: "Ocean", description: "6 campsites, $27 t0 $37, reserve at: https://washington.goingtocamp.com/", coordinates: "48.747907076236565, -122.83847013792361"}, 
 {name: "Deception Pass", location: "Deception Pass State Park", type: "State Park", feature: "Ocean", description: "172 campsites, $27 t0 $37, reserve at: https://washington.goingtocamp.com/ ", coordinates: "48.439340508741935, -122.63639819538656"}, 
 {name: "Lake Chelan", location: "Lake Chelan State Park", type: "State Park", feature: "Lake", description: "103 campsites, $27 t0 $37, reserve at: https://washington.goingtocamp.com/ ", coordinates: "47.8939760468158, -120.18702109556115"}, 
 {name: "Mount Pilchuck", location: "Mount Pilchuck State Park", type: "State Park", feature: "Mountains", description: "Small camping area near trailhead, no dedicated campsites.", coordinates: "48.08019690431177, -121.79582529263438"}, 
 {name: "Bay Center Koa", location: "Bay Center, WA", type: "Private Land", feature: "Ocean", description: "Located on Willipa Bay, rates vary.", coordinates: "46.7010812166819, -123.98321999177026"}, 
 {name: "Winthrop/N. Cascades National Park Koa", location: "Winthrop, WA", type: "Private Land", feature: "Mountains", description: "Located in Winthrop WA near North Cascades National Park, rates vary.", coordinates: "48.470648877073934, -120.16895120113134"}, 
 {name: "Olympic Peninsula/Port Angeles Koa", location: "Port Angeles, WA", type: "Private Land", feature: "Mountains", description: "Located in Port Angeles near Olympic National Park, rates vary.", coordinates: "48.169179497691125, -123.31698459269744"}, 
 {name: "Spokane Koa", location: "Spokane, WA", type: "Private Land", feature: "Mountains", description: "Located in Spokane, WA, rates vary", coordinates: "47.73115732243329, -117.17144032381725"}, 
 {name: "Burlington/Anacortes Koa", location: "Anacortes, WA", type: "Private Land", feature: "Ocean", description: "Located in Anacortes, WA, rates vary", coordinates: "48.61036376323884, -122.33596785309513"}]

var locations = ["Mount Rainier National Park", "Olympic National Park", "Kittitas County", "Bay Center, WA", "Alta Lake State Park", "Kittitas County", "Snohomish County", "Lewis County", "Jefferson County", "Matia Island State Park", "Deception Pass State Park", "Lake Chelan State Park", "Mount Pilchuck State Park", "Bay Center, WA", "Winthrop, WA", "Port Angeles, WA", "Spokane, WA", "Anacortes, WA"]


var mainContainer = document.getElementById("browse_sites");
for (let i = 0; i < campsites.length; i++) {
	var div = document.createElement("div");
	div.innerHTML = campsites[i].name + " at " + campsites[i].location + " featuring " + campsites[i].feature;
	mainContainer.appendChild(div); 
}


function displayRadioValue() {
	var mainContainer = document.getElementById("results");
	var ele = document.getElementsByName('site_type');
	var search_term = document.getElementById('text_search').value;
	for(i = 0; i < ele.length; i++) {
		if(ele[i].checked) {
			var my_type = ele[i].value;
			for(i = 0; i < campsites.length; i++) {
				if(campsites[i].type == my_type || campsites[i].feature == my_type) {
					var div = document.createElement("div");
					div.innerHTML = campsites[i].name + " at " + campsites[i].location + " featuring " + campsites[i].feature;
					mainContainer.appendChild(div);

				}
			}
		}
	}
	for(i = 0; i < campsites.length; i++) {
		if(campsites[i].location == search_term) {
			var div = document.createElement("div");
			div.innerHTML = campsites[i].name + " at " + campsites[i].location + " featuring " + campsites[i].feature;
			mainContainer.appendChild(div);
		}
	}
}
