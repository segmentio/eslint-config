5.0.0 / 2019-06-07
==================

  * Update to ESLint 5
  * Update server config to use Airbnb and Prettier


4.0.0 / 2018-06-20
==================

  * Update to ESLint 4
  * Migrate to CircleCI 2

3.5.0 / 2017-04-11
==================

  * Remove class restriction

3.4.0 / 2016-09-01
==================

  * Disable generator-star-spacing given its inconsistency with other rules
    https://github.com/eslint/eslint/issues/6195

3.3.0 / 2016-08-08
==================

  * Stop requiring jsdoc param descriptions (#59)

3.2.1 / 2016-05-20
==================

* Update installation instructions

3.2.0 / 2016-05-20
==================

* Disallow use of global `JSON` in legacy environments
* Increase severity of `consistent-this`, `eqeqeq`, `prefer-const` rules to errors

3.1.1 / 2016-05-16
==================

* Fix `circle.yml` npm authentication configuration

3.1.0 / 2016-05-16
==================

* Add ES3 configuration to `browser/legacy` config
* Replace CommonJS `globals` in `browser` config with `env.commonjs: true`

3.0.0 / 2016-02-23
========================

* Upgrade from ESLint 2.x to 3.x
* Update configs to work with new ESLint version
* Reorganize configurations to be more in line with actual usage at Segment
* Move project to a scoped package (from `eslint-config-segment` to `@segment/eslint-config`; closes https://github.com/segmentio/eslint-config/issues/1)

### `2.x` to `3.x` Upgrade Guide

Updating from 2.x to 3.x

To upgrade your existing configurations, first upgrade your eslint-config dependency:

```sh
$ npm uninstall --save eslint-config-segment
$ npm install --save @segment/eslint-config@3
```

You will also need to update all peer dependencies. The easiest way to do so is to follow the prompts you get when running `npm install @segment/eslint-config` (basically you just need to update any existing peer dependencies and install any new peer deps).

Finally, you'll need to update all your `.eslintrc` files' `extends` directives to point at the new configuration. Here's an example migration:

```json
// Old
{
"extends": "segment/browser-es6"
}

// New
{
"extends": "@segment/eslint-config/browser"
}

// New (if you're using Deku)
{
"extends": "@segment/eslint-config/browser/deku"
}
```

For all possible configurations, investigate each of the subdirectories in this repository. Each has a `README.md` describing what the configuration is for and how to use it.
