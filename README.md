###INSTALLATIONS

##TestCafe
To run the tests in this repository you will need to install the following:

For testcafe and the functional tests:
npm install -g testcafe

For the visual comparison tests you will need the above, and the following:
npm i testcafe-blink-diff --save-dev

In some cases, running the visual comparison tests will give an error saying that it cannot find testcafe. If this occurs, run the following command:
npm link testcafe

For reporting, I recommend installing the following, this gives a very clear report including run time, total passes and fails. It also shows every test that has passed, and for every test that has failed, it also gives a screenshot along with the line of code that has failed, allowing you to debug easier.
npm i testcafe-reporter-html

##Jest
This was my tool of choice for unit testing. Please note, this is not something I have done before, so my decision to use this tool was based on looking at ease of set up and ease of use, along with tutorials that I could easily follow.

To install Jest, please go into the UnitTesting folder and do the following

Initiate a new Node application:
npm init -y

Install the jest module
npm I –dev jest

The package.json file created in the unitTesting directory will need some tweaks. Please alter the following:

"name": "jest-test"
"main": "main.js"
"test": "jest --verbose ./UnitTesting"


###TEST ORGANISATION

The tests / programmes are organised into the following folders within the github repo

Main Econ Folder
Contains the page-model.js file which holds all of the selectors used within the tests
Contains the navBarData.json file which is the dataset used for the navigation bar test
Contains the jobSectorsData.json file which is the dataset for checking the correct jobs appear on the correct pages
Contains the jobSearchData.json file which is the dataset for typing in manual searches

Functional tests
Contains the functional tests, all of which are named Functional_xxx.js

Visual Tests
Contains the visual tests, all of which are named Visual_xxx.js

VisualComparisonScreenshots
This is the folder where testcafe-blink-diff will store the screenshots for visual testing. You can create a separate folder if preferred.

Generated
This is where the comparison report will appear after running the visual comparison command for the visual tests.

Programmes
This holds the simplecalculator.js file which is a simple program that asks the user for 2 inputs and the calculation type, then returns the result. Originally I had misread the brief for the unit testing and so wrote this program, and was then going to write tests on it. However, as I’d already written it, I left it in the repo.

UnitTesting
This holds 2 files:
simpleCalc.js which holds 4 simple calculator functions
simpleCalc-test.js which holds the unit testing for the above file


###RUNNING THE TESTS/ PROGRAMMES

##Functional Tests:
For the functional tests you can run each script individually, or all together. In each case I suggest adding the following to the command for the reporting:
--reporter html:Report_Name.html

This will automatically generate a report within the Econ folder with that name. Within your file browser, open the report to see all passes / fails.

I also recommend adding:
--skip-js-errors

To run all functional tests together, while in the Econ folder, use the following command:
testcafe chrome ./Functional/*Functional* --skip-js-errors --reporter html:Report_Name.html

To run individual tests while in the Econ folder:
testcafe chrome ./Functional/Functional_xxx --skip-js-errors --reporter html:Report_Name.html

Replace xxx with any of the following tests
TopNav.js
SignIn_CreateAccount.js
SectorListings.js
JobSearch.js

##Visual Tests:
To run the visual tests while in the Econ folder, use the following commands in order:

1. This will take the base screenshots, i.e. the screenshot is taken when you are happy that the screen looks as expected

Note that the “VisualComparisonScreenshots” part of the command is the folder name where testcafe will store the screenshots. You can use any folder name you prefer

npx testcafe chrome ./Visual/Visual_JobPage.js -s VisualComparisonScreenshots --take-snapshot base --skip-js-errors

2. This will take the actual screenshots, i.e the screenshot is taken typically after a deployment, and when you want to check that the screen has not unintentionally changed.

Note that if you altered the folder name to store the screenshots, you must alter the name in this command too as the base and actual screenshots must be collated in the same folder.

npx testcafe chrome ./Visual/Visual_JobPage.js -s VisualComparisonScreenshots --take-snapshot actual --skip-js-errors

3. This will compare the base to the actual screenshot and generate a report that will highlight percentage amount of differences, and allow you to view those differences.

Note that you can alter the threshold to any value you choose, the value in the command below allows for a small percentage amount of changes.

npx testcafe-blink-diff VisualComparisonScreenshots --compare base:actual --open --threshold 0.03 --skip-js-errors

4. The report can be seen in the “generated” folder, called inex.html. Launch this from windows explorer to open in your preferred browser.

In the example that I have left in the repo, you can see the first of the 2 tests failed with nearly 8% of differences, however, those differences are purely due to the advert at the top of the job page. The test itself has not failed. If you wish, you could alter the threshold to 0.08 in the command line and the report will pass the test.

There are 2 tests in the visual script. One is for the page as seen by a user when the page loads, i.e, only that which is above the fold.

The second test takes an image of the entire page. I would expect this to fail at times as the number of jobs alter, and as images alter.

##Programmes:
Holds the SimpleCalculator.js program

To run this while in the Econ folder, use the following command:
node ./Programmes/SimpleCalculator.js

##Unit Testing:
Holds the simpleCalc.js file with the mathematical functions
Holds the simpleCalc.test.js file with the tests

While in the unitTesting folder, run the following command
Npm test


