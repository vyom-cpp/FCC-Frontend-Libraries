1. Create a Redux Store

```jsx
const reducer = (state = 5) => {
  return state;
};

const store = Redux.createStore(reducer);

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
```

2. Get State from the Redux Store

```jsx
const store = Redux.createStore((state = 5) => state);

// Change code below this line
const currentState = store.getState();
```

3. Define a Redux Action

```jsx
// Define an action here:
const action = {};

action.type = "LOGIN";
```

4. Define an Action Creator

```jsx
// An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

const action = {
  type: "LOGIN",
};
// Define an action creator here:
function actionCreator() {
  return action;
}
```

5. Dispatch an Action Event

```jsx
// dispatch method is what you use to dispatch actions to the Redux store.

const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
store.dispatch(loginAction());
store.disptach({ type: "LOGIN" });
```

6. Handle an Action in the Store

```jsx
// After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to actions.

// Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly.

const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN") {
    return {
      login: true,
    };
  } else {
    return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};
```

7. Use a Switch Statement to Handle Multiple Actions

```jsx
const defaultState = {
  authenticated: false,
};

// console.log(defaultState.authenticated);

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true,
      };
    case "LOGOUT":
      return {
        authenticated: false,
      };
    default:
      return defaultState;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
```

8. Use const for Action Types

```jsx
// change code below this line
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
// change code above this line

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };

    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
```

9.  Register a Store Listener

```jsx
// store.subscribe()
// This method allows to subscribe listener functions to the store, which are called whenever an action is dispatched
// Use:- Subscribe a function to your store that simply logs a message every time an action is received and the store is updated.


```

10. Combine Multiple Reducers

```jsx

```

11. Send Action Data to the Store

```jsx

```

12. Use Middleware to Handle Asynchronous Actions

```jsx

```

13. Write a Counter with Redux

```jsx

```

14. Never Mutate State

```jsx

```

15. Use the Spread Operator on Arrays

```jsx

```

16. Remove an Item from an Array

```jsx

```

17. Copy an Object with Object.assign

```jsx

```
