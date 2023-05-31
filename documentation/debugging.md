# Debugging with Visual Studio Code

Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.

Create a **.vscode** folder in the project root.

Create a **launch.json** file in the folder.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/app",
      "sourceMapPathOverrides": {
        "webpack:///./app/*": "${webRoot}/*",
        "webpack:///app/*": "${webRoot}/*"
      }
    }
  ]
}
```
Start the development server with ```yarn start```.

Launch the VS Code debugger with the **Launch Chrome** configuration.

[Back to index](../README.md)
