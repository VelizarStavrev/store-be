# store-be
 This is the main repository for the store project (BE) with Node.js. 

## Functionality
- Added TypeScript for typing and an overall better development experience
- Added nodemon for live reloads when changes are saved
- Added ts-node to complie TS files while developing instead of recompiling everything every time
- Added node types to get all of the node library types
- Added express.js for an easier API development
- Added express types to get all of the express library types
- Added mongoose.js for an easier DB connection and schemas
- Added bcrypt for password encryption and verification
- Added bcrypt types to get all of the bcrypt library types
- Added jsonwebtoken for token creation and verification 
- Added jsonwebtoken types to get all of the jsonwebtoken library types

## Available scripts
- `npm start` - starts the development server (with ts-node and nodemon)
- `npm build` - builds all of the TS files into one JS file in the folder dist

## Available routes
### User
| Route                 | Method | Purpose                       |
| :-------------------- | :----- | :---------------------------- |
| /                     | GET    | Check if the server is online |
| /user/register        | POST   | Register the user             |
| /user/login           | POST   | Login the user                |
| /user/data            | GET    | Get the current user data     |
| /user/change/data     | GET    | Change the user profile data  |
| /user/change/password | GET    | Change the user profile data  |

## TO DO
- Add a mailing service and implement it for user contacts and other notifications
- Create API documentation - Route name, method, expected data
- Add a testing library and write tests
- Add DB saved logging
- Move the config files to a more secure place
