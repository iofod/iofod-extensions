# UI Library Development Tool

Essential tools for the development of UI library extensions.

## Using

With the help of the system's own component [IFstructContainer](https://doc.iofod.com/#/en/9/03) provided by the expansion SDK, we can easily reuse existing structures.

1. After opening the extension, allow operation permissions and modify the configuration switches of the generated structure according to the actual needs
2. Select the components below the hierarchy level as the active component and the JSON structure will be automatically generated within the extension according to the configuration
3. Copy to the appropriate location

As an example, we generate the JSON structure as described above and then copy it as the value of IFstructContainer to use.

```js
const { IFstructContainer } = PLUS.components

IFstructContainer({
  dragAndDrop: true,
  value: {...}
})

```

Happy using :)
