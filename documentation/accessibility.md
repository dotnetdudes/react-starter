# Accessibility

There are a couple of utilities included to assist with implementing and monitoring [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) comnpliance.  

## Implementation

This is achieved using;  

### eslint-plugin-jsx-a11y

The [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) library is implemented as a development dependency. This plugin will highlight WCAG problems in the development environment and suggest fixes. It is configured to implement *plugin:jsx-a11y/strict*.  

### @axe-core/react

The [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) library is also implemented as a development dependency. This is the standard accessibility testing library for React applications. Results will show in the Chrome DevTools console.   

[Back to index](../README.md)
