# Testing

The Test harness is implemented with [Jest](https://jestjs.io/) and [Testing Library - React](https://testing-library.com/docs/react-testing-library/intro).  

If you use the [Code Generation](scaffolding.md) to create your container or component stub test files are created with the stubbed out container or component. These will be detected and run automatically by the test framework.

To create test files from scratch just give them the ```.test.js``` extension and they will be detected and run.

## Custom Render

There may be a requirement for a Custom render method that includes the global context providers as described in the [testing library](https://testing-library.com/docs/react-testing-library/setup/#custom-render) documentation.  

## References

[CRA Docs](https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/testing)  

[How to use React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library)  

[Example](https://testing-library.com/docs/react-testing-library/example-intro/)  

[Redux - Writing Tests](https://redux.js.org/recipes/writing-tests)

[Back to index](../README.md)
