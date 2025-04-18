import 'isomorphic-fetch' // needed for no "fetch is not defined errors

import { render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import { rest } from 'msw'; // this will essentially mock the rest calls.
import { setupServer } from 'msw/node'; // we'll set up a "mocked" server

import { BASE_URL } from '../utils/api/base.js'; // we'll need this for our "mocked" server
import Home from '../pages/index.js'


// mock data
const QUOTE = "All I required to be happy was friendship and people I could admire."
const AUTHOR = "Charles Baudelaire"

// server setup
server = setupServer(

  rest.get(
    `${BASE_URL}/random`,
    (req, res, ctx) => {  // request, response, context!
      // now we're going to respond using a mocked JSON body
      return res(
        ctx.json(
            {"_id":"someid",
            "content": QUOTE,
            "author": AUTHOR,
            }
        ))
    })
);


beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});


// tests