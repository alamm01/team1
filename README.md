# team1
Day 1

Title


Description


User Story:
wAs a traveler
I want to check real time weather (i.e., for the place I am interested to travel) so that I can plan my entertainment
Benefits: plan more effcitively (e.g., weather allows me to do the kind of activites I am interested in)

Wireframe


Third-party APIs
<weather API>
https://apidocs.geoapify.com/docs/places/#categories
https://apidocs.geoapify.com/playground/places/

Tasks/Activity List

Day 2:

Goal: Make sure the APIs are accessable and we can fetch data
Accomplishments: Tested the APIs and confirmed that we are able to fetch data
Obstacles: We need to figure out exactly how we are going to use the API inputs and outputs


var entertainment = [zoo[item1, item2, item3], cinema[cin1, cin2, cin3], blah, ['abc', 'def]]



User Stories:
1. As a traveler, based on the weather, I want to find
	Entertainment
	Within a certain Radius
	On certain day
	On a certain City

User interface: 
Map displayed on the left side.
User interacts on the right side, can set Radius, Date, City name
Clicks "Search"
Options are displayed on a bubble on top of the map
User clicks the bubble to get more details (address, phone, website)
When the user selects the Address, that lunches the GPS for navigation

MVP: Minumally Viable Product

1. Break down the Entertainment category
	Extract the category information from the combo box so that we can put these into an Array
2. Find if there's other categories that could be relevant, but need to be careful to not have a lot of options

3. Need to figure out out to overlay a map and then crate bubbles based on the featched data.
	find this out

4. Featch data from Weather API, refine that data so that we can produce (temp, rainy)	
	4.1 Call the API
	4.2 Fetch the data
	4.3 Seperate the data we need and store them inside a few variables (temp, rain)
		70 F, no rain (outdoor or indoor)
		Most cases it can go eithe or except for rainy or too cold/hot

Now we have a list of categories. (Commericial->Store, Entertainment->Bowling, Catering->Fast Food)


5. Call Geopify with the rigth category (loop and call the API for each category)   

6. After we are done retreiving all the data, we populate the Map surface with bubbles

7. User can click then more details show up including Address, website, phone

8. User clicks Address, lunches GPS, and navigates (outside our app)

#. Store information in the Local Storage

#.

9. HTML and JavaScript

CSS 
Publish at github
Polished README with screenshots, links, How To instructions, title, description, etc.

Presentation slides, speech preperation	
	











