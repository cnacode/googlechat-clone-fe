
# Table of Contents
  - [Project Style](#project-style)
  - [Folder Structure](#folder-structure)

## Project Style
The project is following
https://angular.io/guide/styleguide


## Folder Structure

    |-- app
        |-- modules
        |-- home
            |-- [+] components
            |-- [+] pages
            |-- home-routing.module.ts
            |-- home.module.ts
        |-- core
        |-- [+] authentication
        |-- [+] footer
        |-- [+] guards
        |-- [+] http
        |-- [+] interceptors
        |-- [+] mocks
        |-- [+] services
        |-- [+] header
        |-- core.module.ts
        |-- ensureModuleLoadedOnceGuard.ts
        |-- logger.service.ts
        |
        |-- shared
            |-- [+] components
            |-- [+] directives
            |-- [+] pipes
            |-- [+] models
        |
        |-- [+] configs
    |-- assets
        |-- scss
            |-- [+] partials
            |-- _base.scss
            |-- styles.scss