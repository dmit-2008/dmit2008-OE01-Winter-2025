import { BASE_URL } from './base.js'


export const getReviews = () => {
  return fetch(`${BASE_URL}/reviews/`, {
    method: "GET",
    header: {
      'Content-Type': 'application/json',
    }
    })
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })
}
