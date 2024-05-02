# interview-task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5

## Outline 
This project contains a basic application to create reusable checklists e.g. for holiday packing lists. It allows you to create a list and add items to a list. Furthermore, basic functionality like editing and deleting lists and items are available. 

## Angular CLI

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Tasks
- Implement a functionality that allows you to add tags to a list, like "Holiday".
- Implement a search to retrieve lists that contain the search expression in the title.
- Implement a sort function for the list items. Lists items shall be ordered according to a custom priority number that can be assigned on creation or edit. If two items have the same priority they shall be sorted alphabetically. Items that have no assigned priority come at the end.
- Add a basic styling for the application.