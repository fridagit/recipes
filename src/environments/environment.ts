// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDWmvSPaxGMXn5ZGYkCeR6XSdx-h18n6TM',
    authDomain: 'recipes-2018.firebaseapp.com',
    databaseURL: 'https://recipes-2018.firebaseio.com',
    projectId: 'recipes-2018',
    storageBucket: 'recipes-2018.appspot.com',
    messagingSenderId: '420898221301'
  }
};
