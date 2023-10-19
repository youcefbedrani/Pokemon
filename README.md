# Pokemon Characteristics App

Welcome to the Pokemon Characteristics App! This React application allows users to explore information about Pokemon characters, including their abilities and base stats.

## Table of Contents
- [Overview](#overview)
- [Components](#components)
- [Styling](#styling)
- [How to Run](#how-to-run)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a React application that provides a user-friendly interface to browse and learn about different Pokemon. It includes the following components:

- **App**: The main entry point of the application.
- **Main**: Fetches and displays Pokemon data, including a grid of Pokemon cards and detailed information about a selected Pokemon.
- **Navbar**: The navigation bar component displaying the application logo and title.
- **Card**: Reusable component to display Pokemon cards.
- **Pokeinfo**: Component showing detailed information about a selected Pokemon.
- **LoadingSpinner**: A loading spinner component for visual indication of loading content.
- **Footer**: Component including the application logo, author information, and version details.

## Components

### `App`

The main entry point of the application. It renders the `Navbar` and the `Main` component.

### `Main`

The main component responsible for fetching and displaying Pokemon data. It includes a `Card` component to display a grid of Pokemon cards and a `Pokeinfo` component to show detailed information about a selected Pokemon.

### `Navbar`

The navigation bar component that displays the application logo and title.

### `Card`

A reusable component to display Pokemon cards. It takes an array of Pokemon data as a prop and renders individual cards for each Pokemon. It also includes a loading spinner while the data is being fetched.

### `Pokeinfo`

Component to display detailed information about a selected Pokemon. It shows the Pokemon's name, image, abilities, and base stats.

### `LoadingSpinner`

A loading spinner component that uses the `react-spinners` library to provide a visual indication of loading content.

### `Footer`

The footer component that includes the application logo, author information, and version details.

## Styling

The styling is implemented using a combination of custom SCSS styles and the Tailwind CSS framework. The application uses responsive design to ensure a consistent and visually appealing layout on various screen sizes.

## How to Run

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and navigate to `http://localhost:3000`.

Feel free to explore different Pokemon and enjoy the app! If you encounter any issues or have suggestions for improvements, please don't hesitate to open an issue or contribute to the project.

## Contributing

Contributions are welcome! If you have suggestions or find issues, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
