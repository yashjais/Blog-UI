## Ticket Master

Ticket Master is a ticketing Application, which provides an interface through which a user can generate tickets. A ticket is generated when a customer have a complain about a certain service, then that ticket can be assigned to a employer based on the department and a priority can be given based on the urgency of the matter.

## Dependencies

axios: "^0.19.2", // npm install --save axios
bootstrap: "^4.4.1", // npm install bootstrap
react: "^16.12.0", // npm i react
react-dom: "^16.12.0", 
react-redux: "^7.1.3", // npm install react-redux
react-router-dom: "^5.1.2", // npm install --save react-router-dom
react-scripts: "3.3.0", 
reactstrap: "^8.4.1", // npm i reactstrap
redux: "^4.0.5", // npm i redux
redux-thunk: "^2.3.0" // npm i redux thunk

## Important Files and Folders

home
│   README.md   
│
└───src
       actions      
          comments
          posts
          users
       components      
          ListingPosts.js
          ListingUsers.js
          Post.js 
          User.js
          UserDetails.js
       image
       reducers
          comments
          posts
          users
       Store
          configureStore
       App.js
       Home.js
       index.js
       
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
