# HelloBlog

* Blog realized with ember.js and express.js technologies.
* It allows to create new account and login.
* Registered user can create articles and edit his oun articles.
* Registered user can save any article to his bookmarks.

## Table of Contents

- [Installation](#installation)
- [Development mode](#development-mode)
- [Summary](#summary)

## Installation

**Note:** Make sure NodeJs and NPM are installed

**Note:** Don't forget about MongoDB database

For project building in production mode execute command:
```sh
./depoy.sh
```

The http server starting will happen automatically on port 8080.

Check `localhost:8080`.

## Development mode

* Install dependencies for frontend side and backend side

```bash
cd blog-ember-express/back
npm install
cd blog-ember-express/front
npm install
bower install
```

* Start backend server on 8080 port

```bash
node back/bin/www
```

* Start frontend server
```bash
cd blog-ember-express/front
ember s
```

* Check `localhost:4200`

## Summary

* Controllers on the backend side are extended from one base class.
That approach is useful for code reusing and easy extending.

**On the frontend side noteworthy:** 

* `addons/chngeset-route` - route and controller
* `authenticated-route` and `confirm-modal-mixin` mixins
* `bookmarks` and `session` services
* working with CORS and Cookies in development mode
