/* Primer on packages needed to mock HTTP & REST API interaction in tests:

    - msw              ->  most popular REST API mocking library in JS
    - isomorphic-fetch ->  makes server- and client-side fetch calls identical
        (browser & node have different internal callstacks for "fetch", messing up test behaviour.
         this library simply creates bindings that make them both behave the same)
    - jest-fixed-dom
        (next.js still has some issues in its testing env & libraries; this is a third-party patch.
         we use this custom jest<-->DOM library by editing the testEnvironment in jest.config.js)

   Feel free to skim/peruse documentation from each library if it helps you familiarise yourself.
*/

// imports ------------------------------------------------------------------------------
import { render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import 'isomorphic-fetch'                        // needed to fix 'fetch' runtime errors; see explanation above
import { rest } from 'msw';                      // this will essentially mock the rest calls.
import { setupServer } from 'msw/node';          // we'll set up a "mocked" server

import { BASE_URL } from '../utils/api/base.js'; // we'll need this for our "mocked" HTTP server / REST API
import Home from '../pages/index.js'


// mock data ----------------------------------------------------------------------------
const QUOTE = "All I required to be happy was friendship and people I could admire."
const AUTHOR = "Charles Baudelaire"


// server setup -------------------------------------------------------------------------
//              https://jestjs.io/docs/setup-teardown#one-time-setup
server = setupServer(

  // here, i'm mocking one possible API call.
  // if i wanted to handle multiple, i'd just... write more of these as setupServer arguments!
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

// now that we have the server set up, 'run' it before our actual tests get called!
// for further reference: https://mswjs.io/docs/getting-started#step-3-integrate
beforeAll(() => {
  server.listen();  // before all tests run, simulate server starting & listening for requests
});

afterAll(() => {
  server.close();  // after all tests are finished, simulate server stopping
});


// tests --------------------------------------------------------------------------------

// i want to...

// 1. test that data first loads in on page load / component mounting

// 2. test that new data is loaded when the New Quote button is clicked