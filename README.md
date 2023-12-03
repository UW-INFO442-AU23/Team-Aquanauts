<h1 align="center"> The AquaPod </h1>

<h2 align="center"> Group 5: Aquanauts </h2>

## Members 
Taiga Hijikata, Emily Olshan, Cindy Yang, Jianna Braza, Joseph Sarsozo

## Website Link 
https://uw-info442-au23.github.io/aquanauts/

## Purpose
This project focuses on Goal 6 from the UN SDGS: Clean Water and Sanitation. This issue arises due to water resources, specifically sanitized and clean drinking water, are not easily accessible to the majority of people. As the UN explains, “2.2 billion people still lacked safely managed drinking water services, 3.5 billion lacked safely managed sanitation services, and 2.0 billion lacked basic hygiene services in 2022” (Water and Sanitation - United Nations Sustainable Development). Although access to water is a basic human right, the resources and supplies may not be publicly known, which can be a major barrier for those in need of them. Likewise, there are many capable people who could help donate these supplies or uncover services. However, many people are unaware of how they can assist in this issue.


## Problem Statement
How might we educate the people of King County on water facilities to ensure they can locate necessary sanitation resources and opportunities to donate?


## Features (functional requirements)


P0 - Must have
- List of places you can access clean water (free)
- Donation resources (list of places that provide access to free water and how you can donate)
- Information on places (hours of operation, qualifiers, address)
- Homepage direction (user direction to provider vs resource seeker screens)


P1 - Should have
- Services available at each place (ex. Sinks, showers, water bottle refill stations, etc.)
- Filter by donation type (volunteer, donate money, donate resources)
- Filter by service type or facility type
- Geo-location + filter by distance (Ex. 10 miles away or less)


P2 - Nice to have
- Places that provide free sanitation/hygiene products
- Favorited places/saved places
- Education page (stats within King County, link to other outside sources)

## Testing Protocols


|               | **Feature 1: Zip Code Search** | **Feature 2: Education** |
| ------------- | ------------- | ------------- |
| Requirement Specification | Users will enter a 5-digit zip code within the king county range. | Users will access the Education page to learn about King County Water quality issues and facts. |
| Testing Cases  | **Valid zip code:** Enter zip code to the search bar that is within the King County range **Invalid zip code:** Enter zip code that is outside of King County | Users will discover a page to test how they can obtain further information from the 6 topics being listed. Users will then click on the link they found to move to an external website.|
| Expected Results  | **Valid Zip code:** website renders only the locations that fall into that area **Invalid Zip code:** renders an appropriate error message | Users will hover over the card to see the information flip. Users will find the link after the card flips and moves to the next website.|
| Expected Deficiency  | The search results may take time to process the location even if the valid zip code was entered. | Even if the user hover over the card, the item does not flip. The “click me” link does not allow users to move to the external website. |
| Unexpected Results  | The user enters an in-area code and then the page either fails to render anything, does not filter out any locations, or shows locations that are not in that zip code. | The user clicks the button but does not move to the external website. |

## Start Local Host
In order to run the application, start by installing npm packages to rurn. 

`npm install`

`npm start`

`Ctrl + c` to cancel 

## References
Icon images and data used in our website were from the following sources:

Icon Images from https://github.com/coiger/fill-water-animation

Resources Page - King County Groundwater Sources from https://gis-kingcounty.opendata.arcgis.com/datasets/b0d7d658e4894ae1ab4da6c01b9e1831_194/about

Donation Page - Organization promoting water & sanitation access from https://www.digdeep.org/wash-sector

Zip Code Information for King County from https://www.ciclt.net/sn/clt/capitolimpact/gw_ziplist.aspx?FIPS=53033
