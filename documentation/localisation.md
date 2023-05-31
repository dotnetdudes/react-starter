# Localisation

Localisation is implemented using the [React-Intl](https://github.com/formatjs/react-intl) library in tandem with [Applanga](https://www.applanga.com/). The **React Intl** library provides React components and an API to format dates, numbers, and strings, including pluralization using the browser [Intl api](https://www.i18next.com/translation-function/formatting) and handling translations.

## Workflow

This section outlines the process to keep Applanga and the local translations in sync.

Components and Containers created using the code generator, [yarn generate](scaffolding.md), will have an optional **messages.js** file which is used to define text values for use in the component.

## Export Local Translations

There is a utility, ```yarn extract-messages``` which will extract the entries from the message files throughout the application and consolidate them all in a ```{language-code}\translation.json``` file. The ```en/translation.json``` file will have the values fully populated, for the additional languages the files will be populated with any new keys along with empty values for those keys.  

## Import to Applanga

The files exported from the **extract-messages** script can be directly imported into applanga using the **React Simple Json** format. This will update any existing keys and add any new ones.

## Export from Applanga

A language bundle can be exported using the applanga user interface. Exporting to **React Simple JSON** which can be directly unzipped into the ```locales``` folder within the application.

## Adding a language

There are a couple of steps to add a new language.  

1. Add a folder in the ```locales``` folder for the language you wish to add.  
2. Add an entry in ```internals/i18next-scanner.config.js```, **lngs** array.  

## References
[Format.Js](https://formatjs.io/docs/getting-started/installation/)  
[Applanga](https://www.applanga.com/docs)  
[i18next](https://www.i18next.com/)  
[Polyfills](https://formatjs.io/docs/polyfills/)  

[Back to index](../README.md)  
