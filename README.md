# Footnote

### Resources:
* Jira: https://badamiec.atlassian.net/jira/software/projects/CAF/boards/3/backlog
* Front-End Code Repo: https://github.com/badamiec3/CRUD-Project-Front-End
* Back-End Code Repo:https://github.com/badamiec3/CRUD-Project

## Contents
* [Footnote](#footnote)
   * [Functionality](#functionality)
   * [Additional Requirements](#additional-requirements)
   * [My Approach](#my-approach)
* [Architecture](#architecture)
* [Project Tracking](#project-tracking)
* [Risk Assessment](#risk-assessment)
* [Version Control System](#version-control-system)
* [Spring Boot](#spring-boot)
* [Testing](#testing)
* [Front-End Design](#front-end-design)
* [Known Issues](#known-issues)
* [Future Improvements](#future-improvements)
* [Authors](#authors)

## Footnote

### Functionality
Footnote is an interactive application which allows users to create custom note cards on which they can record a book title, author, genre and description. The users can also choose a custom card colour and tick a box to show whether they have read/bought the book already. The user can also view all the created notes, update existing notes, and remove notes. 

The application was created for a project with the following objective:

"To create a CRUD application with utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training."

In other words, the objective is to create an application which utilises create, read, update and delete functions and can be interacted with using front-end and back-end tools, technologies and programming languages covered during training.

### Additional Requirements
The requirements for the project are as follows:
* A Jira Board with full expansion on user stories, use cases and tasks needed to complete the project;
* Clear Documentation from a design phase describing the architecture used for the project;
* A detailed Risk Assessment created at the beginning of the project;
* A relational database used to store data for the project; 
* A functional application created in the OOP language, following best practices and design principles covered during training;
* The application needs to meet the requirements set on the Kanban Board;
* The application must have a functioning front-end website and integrated API;
* Fully designed test suites for the application, as well as automated tests for validation of the application;
* Meeting an acceptable level of test coverage in the back-end and providing consistent reports and evidence of having fulfilled this requirement;
* Code fully integrated into a Version Control System.

### My Approach
To meet these requirements, I have created an app which lets the user do the following:
* Create a book note card which stores:
   * *Title*
   * *Author*
   * *Genre*
   * *Description* (satisfies the 'Create' requirement);
* View the created note cards (satisfies the 'Read' requirement);
* Update the note cards (satisfies the 'Update' requirement);
* Delete the note card(s) (satisfies the 'Delete'requirement).

Additionally, I would like to allow the user to:
* Tick a checkbox to signify that they have read or bought the book;
* Select a custom colour for the note card they are creating.

## Architecture
In order to meet the project specifications, the following tools were used:

* Jira Kanban board for project planning;
* In-memory h2 database to store book note data;
* Java programming language and Spring Boot application framework to develop and run back-end code;
* HTML, CSS, JavaScript and Visual Studio Code to develop and run front-end code on a live local server;
* JUnit and Mockito to run unit tests;
* MockMVC to run integration tests;
* Git and GitHub repositories as a Version Control System.

## Project Tracking
The progress of the project was tracked using JiraSoftware.

The following is the link to the Jira board: https://badamiec.atlassian.net/jira/software/projects/CAF/boards/3/backlog

The state of the board reflects the current state of the project. Old sprints and information on past progress can be accessed in the reports section.

The template used was a Kanban board, and a snapshot of the first sprint is shown below.


![jira][jira]

The design of the project was split up into three epics:
* Create CRUD Book Note Application
* Apply Testing To Application
* Create Documentation and Present

Each epic has assigned to it user stories with requirements which must be met before an epic can be marked as complete. The user stories detail discrete functionalities necessary to ensure a smooth user experience. The user stories themselves have associated tasks, or 'child issues', which must be completed before a sprint can be completed. They are more technical and specific to what must be done in order to meet the functionality requirememnts. 

The child issues of a user story from the first epic are shown below. 

![childIssues][childIssues]

The user stories and child issues were assigned story points to assess the expected difficulty and time needed to complete them.

The sprint associated with testing is shown below.

![testSprint][testSprint]

The final sprint, which is currently in progress, is shown below.

![finalSprint][finalSprint]
   
The state of the board as this documentation is being compiled is shown below.

![finalJira][finalJira]


## Risk Assessment
Below is a table of circumstances which could inhibit the ability to achieve the project goals, the assessment of their likelihood and severity, as well as the current and proposed mitigations, repsonses and tolerances. 

![riskAssessment][riskAssessment]

## Version Control System
Git was used as the version control system for this project, with two GitHub repositories utilised to store and back up code:
* CRUD-Project-Front-End: a repository for the HTML, JavaScript and CSS code used to design the front-end user interface;
* CRUD-Project: a repository for the Java-based Spring Boot code and test suites.

The links to these repositories can be found at the top of this page.

The commit history for the front-end code is shown below, with progress on the basic CRUD functionality taking place on the dev branch eventually merged onto the main branch, and additional features developed in the feature branch before merging to the main branch.

![gitFront][gitFront]

Similarly, the commit history for the back-end code is shown below. Several branches were created progressively as functionality was developed to meet the requirements on the Jira board with user stories completed step by step. The final branch was merged to the main branch once all user story requirements were met.

![gitBack][gitBack]

## Spring Boot
Spring Boot is a Java-based framework which allows for easy deployment of Java applications.

The documentation can be accessed here: https://spring.io/projects/spring-boot

A working view of the Spring IDE is shown below along with the controller class for Footnote's back-end.

![springIDE][springIDE]

## Testing
Testing the functionality of the service class was done using the testing framework Mockito. It allows for testing without establishing connections through using mock objects which return mock data. The integration tests on the controller class were conducted using MockMVC which supports Spring MVC. JUnit, an in-built test framework for Java applications, was used to run the tests. JUnit produces a report on the status and outcome of each test, detailing which were successful, which had errors, and showing any failure traces in a console.

![tests][tests]

JUnit also tracks the coverage of the tests to show the percentage of the code in the application which has been tested. The aim for this project was 80% coverage, and in reality 97.5% was achieved as shown below.

![coverage][coverage]

## Front-End Design
Using a Visual Studio Code extension, the front end HTML can be opened on a live local server. Running the Footnote package back-end code with Spring Boot will host the in-memory h2 database from the local machine port detailed in the application-dev properties. The user can then interact with the database by making post, put, delete and get requests through the front-end.

The font-end design of the Footnote application was built with HTML, CSS and Bootstrap. The scripts allowing for the interaction between the front-end and the database/backend were written in JavaScript. 
Upon access, the user is directed to the following screen:

![appGif][appGif]

The user can then enter the title, author, and description of the book, select a colour of the note card, and tick a checkbox if they have read/bought the book already, as shown below.

![createNote][createNote]

Upon hitting the 'Create' button, a new note card is generated displaying the user input, as shown below. 

![newNote][newNote]

As well as creating more notes, the user may change the information on the existing notes by entering the new information directly into the fields and using the 'Update' button. Note cards can be removed using the bin icon towards the bottom of the note. Ticking or un-ticking the 'Read' checkbox updates the database 'nowRead' attribute for each book note and sets it as a default for the existing note.

## Known Issues
The are a few known bugs which have occured during the development stages, and might occur for the user:
* A small grey pixel appears on the colour inputs. The cause of this is unknown, but its presence does not detrimentally affect the functionality of the application. 
* Very rarely the update button has been observed to update the database but not the user display. This is usually fixed immediately by reloading the page.

## Future Improvements
There are several features of the application I would like to improve:
* Currently, the drop-down list for genre options is only available on the "Create" card. When a user wants to update the genre on an existing card, currently there is no drop-down list available after clicking on the input element. A possible future improvement would be to create this functionality.
* Due to the fact that the element displaying the description on an existing card is an input, there is no possibility to set an overflow attribute to scroll for longer descriptions. Instead, the user has to move along the input box to read the book description. A future improvement would be to turn the description element into a paragraph, making it possible to change the overflow attribute to display longer descriptions more clearly.
* Due to time constraints the database currently used is the h2 in-memory database. Migrating onto a cloud-based MySQL database would allow for persistent storage of note cards, which would make them accessible after the back-end and database access is restarted.
* Improving the aesthetical appearance of the front-end further is also on the agenda for future improvements using Bootstrap.
* A section could be added along the top of the page allowing the user to customise and personalise their profile picture and personal details.


## Author
Basia Adamiec

[riskAssessment]:https://i.imgur.com/Px1ammc.png
[jira]:https://i.imgur.com/UAMKolj.png
[appGif]:https://i.imgur.com/1AISLGQ.gif
[createNote]:https://i.imgur.com/1ZRRAJH.png
[newNote]:https://i.imgur.com/HVriQlx.png
[coverage]:https://i.imgur.com/kRlWrnl.png
[finalJira]:https://i.imgur.com/sc0DBAW.png
[childIssues]:https://i.imgur.com/7OINaUk.png
[testSprint]:https://i.imgur.com/FARjsuE.png
[finalSprint]:https://i.imgur.com/Q75My2B.png
[tests]:https://i.imgur.com/j63yWBO.png
[gitFront]:https://i.imgur.com/Ltf6KM2.png
[gitBack]:https://i.imgur.com/cdZx6q1.png
[springIDE]:https://i.imgur.com/sE2H0f8.png
