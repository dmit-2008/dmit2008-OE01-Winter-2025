// js here.
import 'bootstrap/dist/css/bootstrap.min.css'

import { getAstronautList } from './api/astronaut'
import { renderAstronaut } from './dom/astronaut'
/*
I want to use the api
the space devs
https://ll.thespacedevs.com/docs/#/astronauts/astronauts_list

use the base api url
https://lldev.thespacedevs.com

we have the endpoint we want to use
https://lldev.thespacedevs.com/2.3.0/astronauts/?mode=list

*/

// next class, we'll wrap up this example
// by adding the search functionilty
// using the api endpoint
//https://lldev.thespacedevs.com/2.3.0/astronauts/?mode=detailed&search=Aldrin
// where essentially we're adding search


const loadAndRenderAstronauts = async () => {
  // let's select the astronaut list we'll need
  let astronautListContainer = document.querySelector(".astronaut-list")

  // perform all of the fetch that we did in
  // the file
  const data = await getAstronautList()
  console.log(data)

  // we are going to render these astronauts.
  // we need to loop through the results key
  // from the data
  data.results.map((astronaut)=> {
    console.log(astronaut)
    // let's call our renderAstronaut and the
    // the html of the list item
    let listItem = renderAstronaut(astronaut)
    // let's render it to the page.
    astronautListContainer.innerHTML += listItem
  })
}

// fire when the page is loaded
document.addEventListener("DOMContentLoaded", async ()=> {
  await loadAndRenderAstronauts()
})