# Server-Side/Node ESLint Configuration

This directory contains settings specific to server-side (specifically, node) programs.

It inherits all common settings from `@segment/eslint-config`.

> Note: This configuration tracks the current LTS node release. For non-LTS versions of node, you may need to add or override rules to your local ESLint configuration.

## Usage

Add the following to your project's `.eslintrc`:

```json
{
  "extends": "@segment/eslint-config/server"
}
```
