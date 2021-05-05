# About
Since you made it this far, I believe it is fair of me to tell you what this app all about. **Flow** is a minimalist browser extension for taking notes, writing down ideas or anything
else you can think of - all in one click, in one place.
# Build
The app is built with Algolia and the help of Browserify.
Due to the current Front-end nature of this project, it is compulsory to add your own API key in order to access the app - you have to sign up for Algolia. The following steps show you
how to use the extension:
1. Change the App and Admin API key in `bundle.js`. Get your own keys by going to [Algolia Dashboard](algolia.com/api-keys).
> `bundle.js` is a *Browserified* version of `algoliaModule.mjs`
2. Create an Index UI Demo and use its link to change the search link in popup.html on line 17.
