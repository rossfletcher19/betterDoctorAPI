# _A Better Doctor API_

#### _A Better Doctor API that allows a user to enter search params and get results based on those params_

#### By _**Ross Fletcher**_

## _Planning_

## Specs

| Behavior  | input  | output  |
|---|---|---|
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.  | or-portland  | Portland Doctors  |
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query | Smith  | Doctors names containing "Smith"  |
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients  | 30 - pain - or-portland - Smith   | 30 results, for pain, in Portland, named Smith  |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.  | 30 - pain - AOEUA - Smith  | 'There was an error: ${error.message}'  |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria.  | 30 - broken heart - or-portland - Smith  | "no results found"  |
|   |   |   |
|   |   |   |

## Configuration/dependencies
  * NodeJS with full gulp and bower tasks, with Karma testing.
  * Dependencies are declared in package.json and bower.json. Run npm install and bower install.



## Integration
  * Initial boilerplate project folder with all dependencies
  * script files working together with import and export
  * Testing functions for with Karma before front end integration.
  * Integrate features and functions into front end.

## UX/UI
  * Include and modify bootstrap.
  * Develop custom style

## Polish
  * Refactor
  * Delete unused
  * Make README awesome


## Setup/Installation Requirements


* Clone this repo. <br/>
`$ git clone https://github.com/rossfletcher19/betterDoctorAPI.git`
* cd into the cloned repo and create a .env file in the top level of the directory, in the .env file place the following code with your betterDoctorAPI key and save: <br/>
`exports.apiKey = "apiKey";`
* then in the cloned repo run the following command from your terminal: <br/>
`$ npm install && bower install`
* Serve a production version of the web app by running this gulp task: <br/>
`gulp serve --prod`

## Known Bugs

_None Known._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery-3.2.1_
* _npm, gulp, bower_
* _Karma testing_
* _BetterDoctor API_

### License

Copyright (c) 2018 **_Ross Fletcher_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
