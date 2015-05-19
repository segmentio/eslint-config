# eslint-config-segment

Segment's ESLint configurations.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint eslint-config-segment
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary using ESLint's [shareable configs][] feature.

This package includes the following configurations:

- `segment` 
- `segment/browser` 
- `segment/node` 

### Examples

A barebones `.eslintrc` looks like this:

```json
{
  "extends": "segment"
}
```

Is your test suite throwing all sorts of Mocha-related errors? Throw this in your `test/.eslintrc` (it'll inherit all your root `.eslintrc` settings, so no need to duplicate them here):

```json
{
  "env": {
    "mocha": true
  }
}
```

If your project is an integration worker, your `.eslintrc` might look something like this:

```json
{
  "extends": "segment/node"
}
```

Likewise, if your project is a browser project that exposes the `analytics` global, your `.eslintrc` might look something like this:

```json
{
  "extends": "segment/browser",

  "globals": {
    "analytics": true
  }
}
```

For more details about how shareable configs work, see the [ESLint documentation][shareable configs].


[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs
