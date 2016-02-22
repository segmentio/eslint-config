# Legacy Client-Side ESLint Configuration

This directory contains settings specific to legacy client-side (browser) programs, like analytics.js.

It inherits common settings from `@segment/eslint-config` and those from `@segment/eslint-config/browser`.

## Usage

Add the following to your project's `.eslintrc`:

```json
{
  "extends": "@segment/eslint-config/browser/legacy"
}
```
