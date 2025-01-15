// change the version from 2.2.0 to 2.3.0
const BASE_URL = "https://lldev.thespacedevs.com/2.3.0"

// api functions here.
// create an api function that
// returns the data from the server
const getAstronautList = async () => {
  // I'm going to make the request
  const URL = `${BASE_URL}/astronauts/?mode=list`
  // let's make the fetch request
  const response = await fetch(URL, {
    method: "GET" // we don't need to add this as a default
    // we'll use this object when we post or patch
    // or change any headers
  })
  // hey if this is not a 200 response status we don't it.
  if (!response.ok) {
    throw Error ("Error fetching response.")
  }
  // we are awaiting response json because it's a promise.
  const data = await response.json()

  return data
}

// export and import in to index.js
export { getAstronautList }
