# manatal-challenge-vue

**This application's purpose is to showcase my skills in Vue and other related technologies**

Type ***wrong*** into the search bar to trigger an unauthorized API call and display an error message.

We have to use [https://newsapi.org/](https://newsapi.org/) to fetch news, but it seems we are limited to 3 queries
with specific query parameters.

There are a few things (among others) that are not exactly specified:
- Is the string based querying exclusive from the source based querying, should they work together at the same time? if so
   query parameters are available for both...
- should querying all sources include include headlines without a `source.id`?
- should we compare headlines based on  `source.id` and `source.name`?
- **Top headlines** endpoint is paginated, it always retrieves up to 20 pages, always first page (This is just nice to know)
- when querying with a search string parameter, upon entering zero non empty characters should we retrieve no headline or should we switch to a query without the search string param? Cause empty search string param returns error status. 

Just some random thoughts about the assignment, sharing my 2 cents.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
