# React Redux Connectors and Providers

## Overview

This project involves integrating Redux with a React application. It includes creating connectors and providers, managing state using Redux, handling async actions with Redux Thunk, and optimizing the application with memoized selectors using Reselect.

## Requirements

- Node.js 12.x.x and npm 6.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the folder is mandatory
- All files will be interpreted/compiled on Ubuntu 18.04 LTS
- Push all files, including `package.json` and `.babelrc`
- All functions must be exported

## Files

- `dashboard/dist/courses.json`
- `dashboard/dist/login-success.json`
- `dashboard/dist/notifications.json`

## Tasks

### 0. Write mapStateToProps

**File: task_0/dashboard/src/App/App.js**

- Create a `mapStateToProps` function to connect the `uiReducer` state and the `isLoggedIn` property.
- Import `connect` from Redux and connect `mapStateToProps` to the component.

### 1. Create a small store

**File: task_0/dashboard/src/index.js**

- Create a store using `createStore` from Redux containing the `uiReducer` state.
- Implement a `Provider` passing the created store to the main `App`.

### 2. Test mapStateToProps

**File: task_0/dashboard/src/App/App.test.js**

- Export the `mapStateToProps` function.
- Create a test suite to verify that `mapStateToProps` returns the correct object from the state.

### 3. Update mapStateToProps

**File: task_1/dashboard/src/App/App.js**

- Update `mapStateToProps` to pass the `displayDrawer` value to the component.
- Update the render function to use the `displayDrawer` value from props.

### 4. Connect your action creators

**File: task_1/dashboard/src/App/App.js**

- Connect `displayNotificationDrawer` and `hideNotificationDrawer` action creators to the component.
- Update the render function to use the functions from props.

### 5. Refactor your code

**File: task_1/dashboard/src/App/App.js**

- Remove old functions `handleDisplayDrawer` and `handleHideDrawer`.
- Remove state properties related to the display of the drawer.
- Define `propTypes` and `defaultProps` for the component.

### 6. Update your tests

**File: task_1/dashboard/src/App/App.test.js**

- Refactor tests to support the new attributes.
- Remove tests for `handleDisplayDrawer` and `handleHideDrawer`.

### 7. Async actions & Thunk middleware

**File: task_2/dashboard/src/index.js**

- Install `redux-thunk`.
- Apply the middleware to the store in `index.js`.

### 8. Connect LoginRequest to the App

**File: task_2/dashboard/src/App/App.js**

- Connect the `loginRequest` action creator and map it to the `login` prop.
- Modify the component to use the new `login` function from props.

### 9. Connect user state to the Footer

**File: task_2/dashboard/src/Footer/Footer.js**

- Create a `mapStateToProps` function.
- Map the `user` prop to the user state in Redux.
- Connect the `Footer` component to the function.

### 10. Connect Logout action creator to the Header

**File: task_2/dashboard/src/Header/Header.js**

- Create a `mapStateToProps` function.
- Map the `user` prop to the user state in Redux.
- Connect the `Header` component to the function and the `logout` action creator.

### 11. Modify the uiReducer

**File: task_2/dashboard/src/reducers/uiReducer.js**

- Update the reducer to set the user within the state on `LOGIN` and set the user to null on `LOGOUT`.

### 12. Modify the test suites

**Files:**

- `task_2/dashboard/src/reducers/uiReducer.test.js`
- `task_2/dashboard/src/App/App.test.js`
- `task_2/dashboard/src/Footer/Footer.test.js`
- `task_2/dashboard/src/Header/Header.test.js`

- Refactor tests to support the new attributes and default state.
- Remove tests related to login and logout functions within `App` and `Header`.

### 13. Understand how to use the Redux Chrome extension

**File: task_3/dashboard/src/index.js**

- Install the Redux DevTools extension.
- Modify `index.js` to support the extension.

### 14. Combine store: Root reducer

**File: task_4/dashboard/src/reducers/rootReducer.js**

- Create a root reducer combining `courseReducer`, `notificationReducer`, and `uiReducer`.

### 15. Combine store: modify the application

**File: task_4/dashboard/src/index.js**

- Create the store using the root reducer in `index.js`.

### 16. Combine store: write the tests

**Files:**

- `task_4/dashboard/src/reducers/rootReducer.test.js`
- `task_4/dashboard/src/App/App.test.js`

- Update tests to support the new format of the reducer.

### 17. Connect notifications: New Action Creator

**File: task_5/dashboard/src/actions/notificationActionCreators.js**

- Add action creators `setLoadingState`, `setNotifications`, and `fetchNotifications`.

### 18. Connect notifications: Improve reducer

**File: task_5/dashboard/src/reducers/notificationReducer.js**

- Add a loading attribute to the initial state.
- Create a `SET_LOADING_STATE` case.
- Modify the `FETCH_NOTIFICATIONS_SUCCESS` case to perform a `mergeDeep` with the data.

### 19. Connect notifications to the reducer

**File: task_5/dashboard/src/Notifications/Notifications.js**

- Map the `listNotifications` prop to the messages within the notifications state.
- Map the `fetchNotifications` action to the component.
- Call `fetchNotifications` in `componentDidMount`.

### 20. Connect notifications: clean up

**File: task_5/dashboard/src/App/App.js**

- Remove old functions and test data related to notifications.

### 21. Connect notifications: update the test suites

**Files:**

- `task_5/dashboard/src/reducers/notificationReducer.test.js`
- `task_5/dashboard/src/App/App.test.js`
- `task_5/dashboard/src/Notifications/Notifications.js`
- `task_5/dashboard/src/Notifications/Notifications.test.js`
- `task_5/dashboard/src/actions/notificationActionCreators.test.js`

- Update and clean up tests for the new attributes and behavior.

### 22. Selectors

**File: task_6/dashboard/src/Notifications/Notifications.js**

- Update `Notifications.js` to use `getUnreadNotifications` selector.
- Map `markAsRead` action creator to the component.

### 23. Connect courses: create a course selector

**File: task_7/dashboard/src/selectors/courseSelector.js**

- Create a selector to get all course entities and return a list using `valueSeq` from Immutable.

**File: task_7/dashboard/src/selectors/courseSelector.test.js**

- Test the selector to verify it works correctly.

### 24. Connect courses: create a fetch courses function

**File: task_7/dashboard/src/actions/courseActionCreators.js**

- Create `fetchCourses` function to query the API and dispatch `setCourses`.

**File: task_7/dashboard/src/actions/courseActionCreators.test.js**

- Test `fetchCourses` to verify it dispatches the correct actions.

### 25. Connect the courses component

**File: task_7/dashboard/src/CourseList/CourseList.js**

- Connect the component to `fetchCourses`, `selectCourse`, and `unSelectCourse`.
- Connect the data to the list of courses using `getListCourses`.
- Call `fetchCourses` in `componentDidMount`.
- Create `onChangeRow` function to handle course selection.

**File: task_7/dashboard/src/CourseList/CourseList.test.js**

- Test `fetchCourses` and `onChangeRow` functions.

### 26. Memoized selectors: Redux Reselect

**File: task_8/dashboard/src/selectors/notificationSelector.js**

- Create `getUnreadNotificationsByType` selector using Reselect.

### 27. Memoized selectors: update the UI

**File: task_8/dashboard/src/Notifications/Notifications.js**

- Update the component to use the new selector.
- Add buttons to set notification filters.

### 28. Memoized selectors: update the test suite

**Files:**

- `task_8/dashboard/src/Notifications/Notifications.test.js`
- `task_8/dashboard/src/selectors/notificationSelector.test.js`

- Add tests for new selector and button click actions.

### 29. Container/Component

**Files:**

- `task_9/dashboard/src/Notifications/NotificationsContainer.js`
- `task_9/dashboard/src/Notifications/Notifications.js`
- `task_9/dashboard/src/Notifications/NotificationsContainer.test.js`
- `task_9/dashboard/src/Notifications/Notifications.test.js`

- Create `NotificationsContainer` to handle state connections and fetching.
- Update `Notifications` to be a functional component.
- Add tests for `NotificationsContainer`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/alx-react.git
   cd alx-react/0x09-react_redux_connectors_and_providers
