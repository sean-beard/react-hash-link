# 🖇react-hash-link🖇

> Painless hash link routing for React applications.

[![npm](https://img.shields.io/npm/dt/react-hash-link)](https://www.npmjs.com/package/react-hash-link)

The `HashLinkObserver` component can be rendered at any level of your component tree and will watch for hash fragments in your URL. When a hash link is encountered, the `HashLinkObserver` will scroll to the corresponding element on the page with `id="Your-Hash-ID"`.

Contrary to the popular solutions for routing directly to elements on a page in a React application, `HashLinkObserver` will work as expected in **all** of the following scenarios.

✔ Navigating to a URL with a hash fragment and corresponding element on the page

✔ Opening qualifying URLs/pages in a new browser tab or window

✔ Forward browser navigation

✔ Backward browser navigation

✔ Page reload

✔ Works with `react-router` but not dependent on it

✔ Works with server-side rendering

✔ All of the above scenarios function correctly when used across all major browsers (including IE)

## Getting Started

Navigate to the directory containing your `package.json` file

Install `react-hash-link`

```shell
npm install react-hash-link
```

or

```shell
yarn add react-hash-link
```

Render the `HashLinkObserver` component

```javascript
// ...
import HashLinkObserver from "react-hash-link";
// ...
export const AnyOfMyAppComponents = () => {
  // ...
  return (
    <div>
      <AnyOtherComponents />
      <HashLinkObserver />
      <AnyOtherComponents />
    </div>
  );
};
// ...
```

Add an `id` to an element on a page.

```javascript
// ...
export const AnyOfMyComponents = () => {
  // ...
  return <div id="example">Scroll To Me On Load</div>;
};
// ...
```

Visit that page and use the element's `id` as your hash fragment.

`https://my-site.com/example-page#example`

You're done, enjoy!

## Server-side Rendering

When leveraging SSR, use the `AsyncHashLinkObserver` component identically to `HashLinkObserver`.

```javascript
// ...
import {AsyncHashLinkObserver} from "react-hash-link";
// ...
export const AnyOfMyAppComponents = () => {
  // ...
  return (
    <div>
      <AnyOtherComponents />
      <AsyncHashLinkObserver />
      <AnyOtherComponents />
    </div>
  );
};
// ...
```

That's it!

## API Reference

### `HashLinkObserver` / `AsyncHashLinkObserver` Properties

**isPageLoading** - An optional boolean value designating whether or not the page is still loading. The `HashLinkObserver` won't try to scroll to the target element when the value is `true` and will wait until value is `false` before attempting.

_Note:_ The `isPageLoading` prop can be useful in certain situations such as waiting for an API response to resolve before rendering content on the page. The element you'd like to scroll into view may already be rendered while your data is loading, however, the content rendered as a result of the API call may increase the distance needed to scroll directly to the target element.

**smoothScroll** - An optional boolean designating whether or not there is a smooth scrolling animation on [supported browsers](https://caniuse.com/#feat=scrollintoview). Defaults to `true`.
