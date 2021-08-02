var campsites = [{name: "Cougar Rock", location: "Mount Rainier National Park", type: "National Park",
                feature: "Mountains",
                description: "Elevation of 3,180 ft., 173 sites, $20 fee, Season is late May-September. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm",
                coordinates: "46.806000165618194, -121.7983992590337"},
               {name: "Ohanapecosh", location: "Mount Rainier National Park", type: "National Park",
                "feature": "Mountains",
                description: "Elevation of 1,914 ft., 188 sites, $20 fee, Season is late May-September. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm",
                coordinates: "46.776800984941566, -121.5697919144425"},
               {name: "White River", location: "Mount Rainier National Park", type: "National Park",
                feature: "Mountains",
                description: "Elevation of 4,400 ft., 112 sites, $20 fee, Season is late June-September. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm",
                coordinates: "46.948405654537474, -121.63045442266582"},
               {name: "Mowich Lake", location: "Mount Rainier National Park", type: "National Park",
                feature: "Mountains",
                description: "Elevation of 4,929 ft., 13 sites, no fee, Season is early July-October. Website: https://www.nps.gov/mora/planyourvisit/campgrounds.htm",
                coordinates: "46.98039255966651, -121.8632452357795"}, 
                {name: "Deer Park", location: "Olympic National Park", type: "National Park",
                feature: "Mountains",
                description: "Elevation of 5,400 ft., 14 sites, $15 fee, Season is June to mid October. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
                coordinates: "47.99526023326804, -123.26839105165804"},
              {name: "Dosewallips", location: "Olympic National Park", type: "National Park",
               feature: "Mountains",
               description: "No fee, Season is year round, hike in. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "47.773529875400314, -123.16912550889381"},
              {name: "Fairholme", location: "Olympic National Park", type: "National Park",
               feature: "Lake",
               description: "Neighboring Lake Crescent, 88 sites, $10 fee, Season is April-September. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "48.07025642288027, -123.9137408287979"},
              {name: "Graves Creek", location: "Olympic National Park", type: "National Park",
               feature: "Rain Forest",
               description: "Located in Quinault Rain Forest, 30 sites, $20 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "47.574111575629296, -123.57923756926861"},
              {name: "Heart O' the Hills", location: "Olympic National Park", type: "National Park",
               feature: "Rain Forest",
               description: "Located in Quinault Rain Forest, 105 sites, $24 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "48.03649584812918, -123.42976702881015"},
              {name: "Hoh Campground", location: "Olympic National Park", type: "National Park",
               feature: "Rain Forest",
               description: "Located in Hoh Rain Forest, 72 sites, $24 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "47.85740467763709, -123.93548645763256"},
              {name: "Kalaloch", location: "Olympic National Park", type: "National Park",
               feature: "Ocean",
               description: "Overlooking Pacific Ocean, 170 sites, $24 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "47.61316485535686, -124.37621482879122"},
              {name: "Mora", location: "Olympic National Park", type: "National Park",
               feature: "Rain Forest",
               description: "94 sites, $24 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "47.91807138874722, -124.608658184612"},
              {name: "North Fork", location: "Olympic National Park", type: "National Park",
               feature: "Rain Forest",
               description: "9 sites, $20 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "47.56980139594967, -123.65076731345616"},
              {name: "Ozette", location: "Olympic National Park", type: "National Park",
               feature: "Lake",
               description: "Next to Lake Ozette. 15 sites, $20 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "48.152905953988714, -124.66657722879373"},
              {name: "Queets", location: "Olympic National Park", type: "National Park",
               feature: "Lake",
               description: "Next to Lake Ozette. 15 sites, $20 fee, Season is year round. Website: https://www.nps.gov/olym/planyourvisit/camping.htm",
               coordinates: "48.152905953988714, -124.66657722879373"}]

var locations = ["Mount Rainier National Park", "Olympic National Park"]


var mainContainer = document.getElementById("browse_sites");
for (let i = 0; i < campsites.length; i++) {
	var div = document.createElement("div");
	div.innerHTML = campsites[i].name + " at " + campsites[i].location + " featuring " + campsites[i].feature;
	mainContainer.appendChild(div); 
}

//function displayRadioValue() {
	//var ele = document.getElementsByName('site_type');
	//for(i = 0; i < ele.length; i++) {
		//if(ele[i].checked) {

			//document.getElementById("results").innerHTML = "Your search results: " + ele[i].value;
		//}
	//}
//}


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
