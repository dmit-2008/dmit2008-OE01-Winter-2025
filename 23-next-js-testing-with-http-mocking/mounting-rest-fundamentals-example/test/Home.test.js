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
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'

import 'isomorphic-fetch'                        // needed to fix 'fetch' runtime errors; see explanation above
import { http, HttpResponse } from 'msw';        // this will mock http requests & responses
import { setupServer } from 'msw/node';          // we'll set up a "mocked" server that simulates low-level HTTP interaction

import { BASE_URL } from '../utils/api/base.js'; // we'll need this for our "mocked" HTTP server / REST API
import Home from '../pages/index.js'


// mock data ----------------------------------------------------------------------------
const QUOTE = "All I required to be happy was friendship and people I could admire."
const AUTHOR = "Charles Baudelaire"


// server setup -------------------------------------------------------------------------
//              https://jestjs.io/docs/setup-teardown#one-time-setup
const server = setupServer(

  // here, i'm mocking one possible API endpoint — for multiple endpoints, write more of these as arguments!
  http.get(
    `${BASE_URL}/api/random_quote`,
    () => {
      // now we're going to respond using a mocked JSON body
      return HttpResponse.json({
        quote: QUOTE,
        author: AUTHOR,
      })
    }
  )

);

// now that we have the server set up, 'run' it before our actual tests get called!
// for further reference: https://mswjs.io/docs/getting-started#step-3-integrate
beforeAll(() => {
  server.listen();  // before all tests run, simulate server starting & listening for requests
});

afterAll(() => {
  server.close();  // after all tests are finished, simulate server stopping
});


/* tests --------------------------------------------------------------------------------

     - Since we're testing code that involves async HTTP reqs, all our tests must use async/await!
       Otherwise, the test will run/finish *before* the promise is resolved (or rejected).

     - If you want to force a test to fail, you can quickly chain the expectation with ".not"!
         e.g. expect(something).not.toHaveTextContext("expected value")

     - To test the outcome of replacement data coming in *after* initial load — e.g. on button click —
       we can write a new req/res mocker INSIDE that test's scope.

     - We can also create a grouped context for a series of related unit tests — https://jestjs.io/docs/api#describename-fn
       Whether you use these at all, and/or stick to test(), is totally up to you:
         describe() : collects a group of tests 
         it()       : is an alias for test() that allows more human-readable test code, e.g. it("should work")

*/

describe("a random quote via API", () => {

  it("should load when page initially loads / Home component mounts", async () => {
    /* Let's start by verbalising what behaviour we want to see out of this test first.

      1. First, render the component.
         BECAUSE IT HAS AN IMMEDIATE STATE CHANGE WHEN MOUNTING, we have to:
           - *await* the component render
           - *act*   in order to do so — because the component is stateful, and its state changes on mount!
         Otherwise, we have no idea if everything's loaded by the time the test runs.

      2. Then, grab the elements we need in order to simulate interaction & observe the outcome of code behaviour.

      3. Finally, declare what we expect to happen. Then we're all done!

    */

  });

  it("should load with new data when New Quote button is clicked", async () => {

  });

});
