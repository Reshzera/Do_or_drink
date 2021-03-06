# Do or drink
This project is a mobile app developed with React Native. It is an app that the user can create his/her own [Do or Drink game](https://do-or-drink.com/?_atid=aNklPgO7jl26pMwm4ZOHseSM9ogYlR) (A very popular game among college students) and play with his friends directlly of his/her phone.

<div>
  <h2>Game / Create Game</h2>
  
  <img height="450px" src="https://github.com/Reshzera/Do_or_drink/blob/main/do_or_drink2.gif?raw=true"/>
  <img height="450px" style="{margin-left: 30px;}" src="https://github.com/Reshzera/Do_or_drink/blob/main/do_or_drink1.gif?raw=true"/>
</div>
  
## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App.

