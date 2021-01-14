
# Table of Contents
  - [Project Code Style](#project-code-style)
  - [Project Structure](#project-structure)

## Project Code Style
The project is following
https://angular.io/guide/styleguide

# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Project Code Style](#project-code-style)
- [Table of Contents](#table-of-contents-1)
- [Purpose and Principals:](#purpose-and-principals)
- [API Specifications](#api-specifications)
- [Implementations](#implementations)
  - [Frontend Implementation](#frontend-implementation)
  - [Backend Implementation](#backend-implementation)
- [User Stories](#user-stories)
- [Entities](#entities)
- [Project Structure](#project-structure)

# Purpose and Principals:

The aim of the task is to create a simple single-page application allowing users to create a message timeline where
users post and reply to messages. The frontend part should be developed using Angular 8 and Bootstrap, the backend using Sails node.js framework and a MongoDB database.

The application should show a list (timeline) of messages and provide users' the ability to add new messages to the timeline or comment on existing messages. The form should be kept simple, allowing users to post new messages. Each message in the timeline should display who wrote the message, when the message was sent and the content of the message itself.

Technology requirements:

- Angular 8
- Bootstrap 3 or 4
  Assessment:
- Overall quality of the code
- Tests
- Design of the REST API
- Use of Angular best practices

# API Specifications

https://app.swaggerhub.com/apis/cnacode/message-board/1.0.0

# Implementations

## Frontend Implementation

https://github.com/cnacode/fe-message-board

## Backend Implementation

https://github.com/cnacode/be-message-board

# User Stories

- Users are created through signup form.
- Users can login through login form.
- Users can create a new post through create-new-post form.
- Users can reply to a post through reply-to-post form.
- Users can delete their post.
- Users can delete their reply.
- Users can view number of replies to a post.

# Entities

- [Entities and Relationships](ENTITIES.md)


# Project Structure
    |-- app
        |-- Components
            UI components ready to be used in pages
        |-- Core
            Services, Utilities, Interceptors etc. Go here
        |-- Page
            Application pages go here. Highest level of logic
        |-- Shared
            tiny bits of ui logic, designed to be reusable in Components