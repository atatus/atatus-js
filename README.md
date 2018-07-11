# Atatus-JS

[Atatus](https://www.atatus.com) Real User Monitoring and Advanced error tracking plugin for web.

[Signup for Atatus](https://www.atatus.com/signup).

## Getting Started

### With Bower

Run `bower install atatus-js`

### With NPM

Run `npm install atatus-js --save`

## Usage

In your web page:

```html
<script type="text/javascript" src="/PATH_TO_ATATUS/atatus.min.js"></script>
<script>
  atatus.config('YOUR_API_KEY').install();
</script>
```

For more advanced options, refer [our documentation](https://www.atatus.com/docs).


### CDN

Atatus is also available from our content delivery network:

```html
<script type="text/javascript" src="https://dmc1acwvwny3.cloudfront.net/atatus.js"></script>
<script>
  atatus.config('YOUR_API_KEY').install();
</script>
```

### Module loaders (CommonJS)

Atatus can be loaded using a module loader like Browserify or Webpack.

```javascript
var atatus = require('atatus-js');
atatus.config('YOUR_API_KEY').install();
```

