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
- Added eslint for a more consistent project and a better development experience
- Added eslint stylistic for the deprecated rules that were moved to the external library

## Available scripts
- `npm start` - Starts the development server (with ts-node and nodemon)
- `npm build` - Builds all of the TS files into one JS file in the folder dist
- `npm run lint` - Executes the linting rules for the entire project

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

### Shop - Products
| Route                 | Method | Purpose                       |
| :-------------------- | :----- | :---------------------------- |
| /products             | GET    | Get all products              |
| /product/create       | POST   | Create a product              |
| /product/edit/:id     | POST   | Edit a specific product by id |
| /product/delete/:id   | POST   | Delete a product by id        |
| /product/:id          | GET    | Get a specific product by id  |

## TO DO
- Add a mailing service and implement it for user contacts and other notifications
- Create API documentation - Route name, method, expected data
- Add a testing library and write tests
- Add a logging service, remove all console logs and add a log rule to eslint
- Move the config files to a more secure place
- Implement admins to be able to edit and delete everything, not only specific creator IDs
