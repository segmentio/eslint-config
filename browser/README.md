# Client-Side ESLint Configuration

This directory contains settings specific to client-side (browser) programs.

It inherits all common settings from `@segment/eslint-config`.

## Usage

Add the following to your project's `.eslintrc`:

```json
{
  "extends": "@segment/eslint-config/browser"
}
```

## Sub-Configurations

The following subdirectories

- `deku`: For use in projects that use Deku
- `legacy`: For use in projects that need legacy (ES3) browser compatibility (e.g. `analytics.js-*` projects)
