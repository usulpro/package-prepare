# Package-Prepare

[npm: `@usulpro/package-prepare`](https://www.npmjs.com/package/@usulpro/package-prepare)

[github: `package-prepare`](https://github.com/UsulPro/package-prepare)

Opinionately compiles ./src -> ./dist. Zero config

## Quick start

```shell
npx @usulpro/package-prepare
```

it will compile your `src` to `dist` folder

## Install

```shell
yarn add --dev @usulpro/package-prepare
```

## Usage

```shell
package-prepare
```

Example:

```json
{
  "scripts": {
    "prepare": "package-prepare"
  }
}
```

Additional options:


```json
{
  "scripts": {
    "prepare": "package-prepare"
  },
  "packagePrepare": {
    "src": "src"
  },
}
```


## Credits

<div align="left" style="height: 16px;">Created with ❤︎ to Javascript by <a href="https://twitter.com/UsulPro">Oleg Proskurin</a>  [<a href="https://github.com/react-theming">React Theming</a>]
</div>
