# cloudySearchAlgorithm
React setup for cloudy search algorithm for an input field.

## Instructions to Start
1) Fork or clone down copy of repo and `cd` into repo. After, type the following from inside the directory "npm install".
2) To run database server using JSON-Server, "npm run db-server".
3) Build project using "npm run build". Note, this will continue to watch for changes.
4) To start project, "npm run start". Navigate to http://localhost:8080 to view project. Type values and rows will filter.

## Note
Search is dependent on continuous string and can't type in space-separated search. Search is EXACT filtered.
### Example - search for "45" returns:
{ amount: `45`.00, date: '10-02-2018T02:34', card_last_four: '0110' },
{ amount: 13`45`.98, date: '22-06-2017T10:33', card_last_four: '0059' },
{ amount: 0.`45`, date: '01-12-2017T9:36', card_last_four: '4434' }

### Example - search for "45." returns:
{ amount: `45.`00, date: '10-02-2018T02:34', card_last_four: '0110' },
{ amount: 13`45.`98, date: '22-06-2017T10:33', card_last_four: '0059' }
