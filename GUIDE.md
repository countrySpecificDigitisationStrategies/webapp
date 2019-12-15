# Development Guide

Before you're getting started to work on this project, it might be helpful to get a good overview first before diving in too deep.
In the following sections the project's setup, the used technologies and our best practices will be explained.

## Workflow and External Tools

### Trello

We mostly rely on [Trello](https://trello.com/) for coordinating ourselves.
So if you want to contribute, please ask us for access to our board and then assign yourself to one of the tickets there.

### Figma

We draft our mockups with [Figma](https://www.figma.com/). Please ask us for access to our project there.

When developing something, please keep in mind, that our Webapp should follow the guidelines of our mockups.
Most of the visual components can be implemented by using and adapting Material Ui Components (see [below](#material-ui)).

### Pull Requests

When you finished your work, please [open a new PR request](https://github.com/countrySpecificDigitisationStrategies/webapp/pulls) in our Github repository against the develop branch.
As soon as a reviewer approves your changes they can be merged into the develop branch and your branch will be deleted.
Please keep in mind, that over time merge conflicts can appear that you will need to resolve. If there are conflicts, PRs cannot be approved.

## Technologies

In our project we use the following technologies.
When starting off, you might not need to know everything about every technology listed, but it might help you to get a quick overview about everything that is used.

### TypeScript

The project ist written entirely in [Typescript](https://www.typescriptlang.org/). Typescript is a superset of conventional ECMAScript.
That means that you can write basic JavaScript, but have additional functionality, especially type safety.

### Webpack & Babel

We use [Webpack](https://webpack.js.org/) as a bundler and [Babel](https://babeljs.io/) as a compiler.
You don't need to know why or what or how to start developing, but it might be nice to know as soon as you run into build-/compile-errors.
Additionally this setup lets you write all the latest JavaScript (ES6, ES7), while not having to worry about browser compatibility.

### Eslint, Prettier & Husky

For linting we use [prettier](https://prettier.io/) and [eslint](https://eslint.org/) with the recommended presets for typescript and react.
You should be able to configure or find plugins for your IDE to enable inspections and support automatic reformatting accoding to these rules.

When committing, the linter will check your staged changes and automatically fix anything it can.
If you still have code style issues, your commit will fail.
This is done by using the tools [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

### React

The project is built using [React](https://reactjs.org/) as the main UI library.
React is a component based library and if you've never worked with it before, there are a lot of tutorials, that can help you get started, e.g. [the official one](https://reactjs.org/tutorial/tutorial.html).

The App-Component gets bootstrapped in [src/index.tsx](src/index.tsx) and from there all the other components of the app are composed together.
To get a overview of the app's structure have a look [below](#project-structure).

### Material UI

The project uses [Material UI](https://material-ui.com/) as a component library.
"MUI" comes with a variety of predefined icons, colors and components, that all adhere to Google's [Material Design Guidelines](https://material.io/).
If you want to implement a visual component, a good starting point is often one (or more) of their components, that can be used, enhanced and combined as needed.

### Styling

For styling we are using a CSS-preprocessor called [Stylus](http://stylus-lang.com/).
All `.styl` files are included in `src/index.styl` and get compiled to normal CSS by [Webpack](#webpack--babel) that can be interpreted by browsers.

Because we are using [Material UI](#material-ui), we are also making use of their powerful [theming](https://material-ui.com/customization/theming/).
The MUI-Theme enables us to get a consistent look across all components all over the whole app.
It is defined in [src/theme.ts](src/theme.ts) and can be used in every component that should include the app's theme.

### Redux

[Redux](https://redux.js.org/) is a framework agnostic library for managing the application state.
That means, that every piece of data that somehow changes the state of the application should be managed through the redux store.
Think of: authentication status of the user, data received from an API, application-wide UI state,...

There should be exactly one redux store per application, which consists of different slices.
Each of the slices represents one part of the application, combining pieces of data that belong together.
To update the data in the store, you need to (1) dispatch actions, which are essentially just plain objects, that have a `type` property.
Every action will be processed by the applied (2) middleware and thereafter handed to all combined (3) reducers.
If a reducer listens to a certain action, it will react to it by (4) changing the data held by the store to represent the new state.
One of the core concepts of redux is immutability, so that the store data is never manipulated.
To change the state, a new state object must be created by cloning the previous state and making changes to the new object.

This data flow is always adhered to, which makes state changes very predictable and debugging really easy.
Have a look at the [redux devtools](https://github.com/zalmoxisus/redux-devtools-extension) to understand what events trigger which state change.
For a more in depth explanation have a look at the [official redux docs](https://redux.js.org/introduction/getting-started) or have a look at one of the many tutorials.

### React-Redux

Since Redux is not specific to React, another library enables an optimal integration of both: [React-Redux](https://react-redux.js.org/)
React-Redux provides React-specific Features, such as a Provider, some HOCs and Hooks to let Components dispatch actions and react to changes in the redux store.

## Best Practices

### Absolute paths

To be able to more easily be able to tell where something was imported from, absolute paths should be used where reasonable.
So, e.g., when using an action in a feature-component, it makes sense to keep the import as a relational path, as those belong together wherever the folder of the feature is located.
But when importing the `post()` function from the api, the same feature-component should import it with an absolute path, as it's not directly related to it's functionality and the service directory could be anywhere.

You will probably have to configure your IDE to support absolute paths.

- For VSCode you need to set `importModuleSpecifier` to `"non-relative"` (see [release notes](https://code.visualstudio.com/updates/v1_24#_preferences-for-auto-imports-and-generated-code))
- For JetBrains IDEs you need to check "Use Paths relative to tsconfig.json" (see [this support post](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360000613964-Typescript-How-to-auto-import-with-absolute-paths-if-baseUrl-is-set-in-tsconfig-json))

### Components

- Every Components should only serve exactly one purpose.
  Split big components into smaller ones (if it makes sense).
  Most of the time, smaller components are easier to read and to maintain.

- Don't combine view components with business logic.
  As a rule of thumb, don't write markup where you're doing stuff with data (fetching, filtering, combining,...).
  Hand it to another component, that is responsible for representing any kind of data.

- Use functional components rather than class components.

- Use Hooks rather than HOCs.
  This does not always work, but if you don't need to render anything, try to go with Hooks.

## Project Structure

The project follows a directory structure, that is loosely based on the [Fractal App Structure](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af), but amended in a few ways. The structure is described below:

```YAML
index.tsx # entry point, renders the react app
app # core directory, that includes everything directly needed for our app
  app.tsx # root component, initialises all providers and routes
  layout # includes components that are only used once for layouting the app
    index.ts # exports all layout components
    content / navigation / toolbar / ...
      Content.tsx / Navigation.tsx / ToolBar.tsx / ...
   routes.ts # defines all routes that exist in the app
  service # everything related to the communication with the api
    api.ts # defines all endpoints and includes a facade for all outgoing request operations (post, get,...)
    authentication.ts # handles everything related to the AuthToken
    error.ts # defines a custom ApiError to throw when a request fails
   store
      index.ts # initialises the redux store
      middleware.ts # provides all (custom) middleware
      reducers.ts # combines all of the feature's reducers into one rootReducer
pages # includes all main layout components, as used by the router
  index.ts # index exports all pages, so none are used "directly" somewhere else
  Home.tsx / Login.tsx / Register.tsx / ... # the pages only display and layout other components, but should not have any advanced logic in them
features # includes modularized "features", each representing a slice in the redux store
  authentication / strategies/ ui / ...
    components # components belonging to the specific feature, that actively represent the store's state or modify it through actions
      LoginForm.tsx / LogoutButton.tsx / ...
      index.ts # index exports all components, as well as the store's selectors, which can be used from "the outside"
    store # everything related to the feature's store slice
      actions.ts # includes all actions that are needed to modify the state; can be dispatched by the feature's components
      actions.login.ts # if more than one type of action is required by the feature, those can be split
      actions.logout.ts
      index.ts # index exports everything needed for the outside
      reducer.ts # the reducer for this specific slice of the store
      selectors.ts # selector functions needed by components to get a certain state from the store
      types.ts # type definitions for the stored data (state of the slice) and any expected action payload
shared # everything shared across the app, not specific to one feature or the service
  components # any "dumb" component that can be used to display (!) data, that was handed to them via props
    index.ts # exports all included Components
    NavBar.tsx
  hooks # provides hooks, that can be used by shared- or feature-components
    index.ts # currently only includes one useLoginStatus()-Hook (--> might be better suited in feature directory?)
```
