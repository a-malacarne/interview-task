# Interview Tasks

1. Fork this repository to your own account.
2. Try to understand the code, especially the state management. (More info under [Outline](#outline))
3. Implement at least two of the tasks listed below.
4. Open a pull request to merge your changes back into this repository.

## Tasks

- [ ] Implement a feature to add tags to a list, such as "Holiday."
- [ ] Add a search feature to find lists that include the search term in the title.
- [ ] Include a sorting function for list items. Items should be ordered based on a custom priority number assigned upon creation or editing. If two items have the same priority, sort them alphabetically. Items without an assigned priority should appear at the end.
- [ ] Apply nice styling to the application. Feel free to use any libraries or frameworks if you like.

## Outline

This project contains a basic application to create reusable checklists e.g. for holiday packing lists. It allows you to create a list and add items to a list. Furthermore, basic functionality like editing and deleting lists and items are available.

### Folder Structure

The application follows the following structure to organize the components:

- `/data-access/` → Contains everything related to data, especially state services
- `/ui/` → Contains dumb components or representational component

### State Management

The implementation of state management is more or less based on the Redux principle with a `State`, `Sources (Actions)`, `Reducers` and `Selectors`, but does not use any library and uses Angular Signals to maintain the State.
The approach as well as the whole application is based on the approach teached by Joshua Morony in this video: [Joshua Morony State Management](https://www.youtube.com/watch?v=R4Ff2bPiWh4)

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
