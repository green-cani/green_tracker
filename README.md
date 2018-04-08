# TO DO
- [ ] How to implement tests using testing libraries
- [ ] Make sure knex migrations work
- [ ] Insert control to avoid error of 'duplicate key' in register user
- [x] Check if including create_bot into functions creates problems by instantiating the bot more than once
- [x] Delete bot token from create_token, and correctly set it on heroku (see https://github.com/volodymyrlut/heroku-node-telegram-bot)
- [x] Implement the question menu (as the main menu. Optional: refactor the code in such a way of just having to write a list of names for defining a menu, without duplicating the 'menu generating' part of the code)
- [x] Reorganized bot callbacks using all actions
- [x] Put actions in a actions directory, menus in a menus directory, etc.
- [x] Implement the button actions for the main menu and the question menu
- [x] Write "if action ==== ..." part of the callbacks in run_bot.js
- [x] Structure for button actions as separate, importable files
- [x] Structure for menus as separate, importable files
- [x] Separate logic for bot's creation, bot's behavior, menus, and actions
# DEVELOPMENT GUIDELINES
### 2 Branches
Work on the 'master' branch.

Main releases are pushed onto the 'deploy-heroku' branch. Only deploy here when a new big, working and tested feature was implemented.

### Pull and read, push and write
When working on the project, stick to the points:
1. inform the others (if you are working alone)
2. pull from master branch (optionally, run all the tests)
3. if you have no tasks to do, pick some new task from the TO DO list (at the top of this README) and work on it
4. when you complete a task, mark it as done in this README ([ ] becomes [x])
5. push your code
6. if new problems or new ideas arose, convert them into new tasks, and add them ON TOP of the TO DO list (at the top of this README), so that they will be noticed immediately by anyone else working on the project next. *New on top, old on the bottom*
If a task is big, you can (and should) separate it into smaller tasks, and assign the whole block a name or a label.

### Braid scheme
To make the teamwork more efficient, let's stick to a braid-like scheme:
![Braid scheme](/images/braid.jpg)

2 people at a time will work together on a **big task**, while the other member will work alone on a **small task**. From time to time (for example, upon completions of tasks), the 'outsider' and one of the 'insiders' will swap place, new teams will be formed, and new tasks will be assigned.

Examples of **big tasks**:
* working on a main feature (many files, many topics)
* deciding the design/structure of a new feature
Examples of **small tasks**:
* working on a small feature (single files, single functions)
* manteinance (refactoring, tweaking functionalities, cleaning ugly code, documenting)
* writing tests
* studying a new topic, and how to implement a new functionality

### Document!
Remember to comment and document what you write! You will certainly lose time, but the others in the team will gain a lot of time!

### Test!
After a new part was implemented, write tests for testing the functionalities of that component! (A time-saving advice is: start writing tests at the same time (or even before) of writing the main implementation)
After that, run the tests!
![Testing cycle](/images/testing.png)
