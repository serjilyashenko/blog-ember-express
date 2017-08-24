# HelloBlog.

* Blog realized with ember.js and express.js technologies.

## Table of Contents

- [Installation](#installation)
- [Summary](#summary)

## Installation

**Note:** Make sure NodeJs and NPM are installed

**Note:** Don't forget about MongoDB database

For project building execute command:
```sh
./depoy.sh
```

The http server starting will happen automatically on port 8080.

Check `localhost:8080`.

## Summary

* Controllers on the backend side are extended from one base class.
That approach is useful for code reusing and easy extending.

**On the frontend side noteworthy:** 

* `addons/chngeset-route` - route and controller
* `authenticated-route` and `confirm-modal-mixin` mixins
* `bookmarks` and `session` services
* working with CORS and Cookies in development mode
