// js here.
import 'bootstrap/dist/css/bootstrap.min.css'

import { getAstronautList } from './api/astronaut'
/*
I want to use the api
the space devs
https://ll.thespacedevs.com/docs/#/astronauts/astronauts_list

use the base api url
https://lldev.thespacedevs.com

we have the endpoint we want to use
https://lldev.thespacedevs.com/2.3.0/astronauts/?mode=list

*/

const loadAndRenderAstronauts = async () => {
  // perform all of the fetch that we did in
  // the file
  const data = await getAstronautList()

  // getting the first item
  console.log(data.results[0].name)
}

// fire when the page is loaded
document.addEventListener("DOMContentLoaded", async ()=> {
  loadAndRenderAstronauts()
})