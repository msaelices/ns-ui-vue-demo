# NativeScript UI Vue Demo App

> NativeScript UI Vue Demo App

## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```

## Screencast

![ns-ui-demo](https://user-images.githubusercontent.com/136875/46014244-e0ac8a00-c0ce-11e8-87c3-6eb100c936d7.gif)


## Using Vue Devtools

Vue DevTools will be installed locally when you execute `npm install`, but if you'd like to easily access Vue Devtools, you can install it globally:

``` bash
npm install -g @vue/devtools@beta
```

Before running the app, it needs to have started the Vue Devtools:

``` bash
# if installed globally
vue-devtools
# or
npx vue-devtools
```

Now you can run the app and you should see the component tree.
