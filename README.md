# Would You Rather App

My implementation of the final assessment project Udacity's React & Redux course. The [reactnd-project-would-you-rather-starter](https://github.com/udacity/reactnd-project-would-you-rather-starter) was used as initial template.

## Extra Feautures

- Loading Bar.
- Dummy JWT-like **Authentication** (due to simple backend setup).
- **Registration** of new users (the `_DATA.js` file was edited in order to support that).
- Persistence of newly created data using browser's **localStorage**.
- Pre-configured avatar selection during account creation.

## Authentication process

 - When a new user is created, the password is stored to the backend in **sha256 hash** format and a new **auth token** is produced and returned to the client. The token is stored by the redux and is used in order to preserve the user's session.
 - In case of login, user enters username and plain password, the backend compares the 2 hashes and returns a new auth token to the client.

## State Preservation
 Due to the simple backend setup, the newly created data couldn't be preserved, so in order to solve this issue, i configured the redux store to use the **localStorage** in order to initialize its data (the first time the initial data are fetched from backend, then from a serialized version of state from browser storage).

## Initial test users/data

The initial testing users are `sarahedo`, `tylermcginnis` and `johndoe`. You can select any of those users and sign in using `1234` as password.

## Disclaimers

The avatar icons are provided by Freepik from www.flaticon.com.

## Setup Instructions

- install all project dependencies with `npm install`
- build with `npm run build`
- start the development server with `npm start`
