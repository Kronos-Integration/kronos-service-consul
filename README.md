[![npm](https://img.shields.io/npm/v/kronos-service-consul.svg)](https://www.npmjs.com/package/kronos-service-consul)
[![Greenkeeper](https://badges.greenkeeper.io/Kronos-Integration/kronos-service-consul.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/Kronos-Integration/kronos-service-consul)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://secure.travis-ci.org/Kronos-Integration/kronos-service-consul.png)](http://travis-ci.org/Kronos-Integration/kronos-service-consul)
[![codecov.io](http://codecov.io/github/Kronos-Integration/kronos-service-consul/coverage.svg?branch=master)](http://codecov.io/github/Kronos-Integration/kronos-service-consul?branch=master)
[![Coverage Status](https://coveralls.io/repos/Kronos-Integration/kronos-service-consul/badge.svg)](https://coveralls.io/r/Kronos-Integration/kronos-service-consul)
[![Known Vulnerabilities](https://snyk.io/test/github/Kronos-Integration/kronos-service-consul/badge.svg)](https://snyk.io/test/github/Kronos-Integration/kronos-service-consul)
[![GitHub Issues](https://img.shields.io/github/issues/Kronos-Integration/kronos-service-consul.svg?style=flat-square)](https://github.com/Kronos-Integration/kronos-service-consul/issues)
[![Stories in Ready](https://badge.waffle.io/Kronos-Integration/kronos-service-consul.svg?label=ready&title=Ready)](http://waffle.io/Kronos-Integration/kronos-service-consul)
[![Dependency Status](https://david-dm.org/Kronos-Integration/kronos-service-consul.svg)](https://david-dm.org/Kronos-Integration/kronos-service-consul)
[![devDependency Status](https://david-dm.org/Kronos-Integration/kronos-service-consul/dev-status.svg)](https://david-dm.org/Kronos-Integration/kronos-service-consul#info=devDependencies)
[![docs](http://inch-ci.org/github/Kronos-Integration/kronos-service-consul.svg?branch=master)](http://inch-ci.org/github/Kronos-Integration/kronos-service-consul)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![downloads](http://img.shields.io/npm/dm/kronos-service-consul.svg?style=flat-square)](https://npmjs.org/package/kronos-service-consul)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# consul support for kronos

consul: - as a config provider - for service discovery

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ServiceConsul](#serviceconsul)
    -   [autostart](#autostart)
    -   [\_start](#_start)
    -   [\_stop](#_stop)
    -   [update](#update)
    -   [name](#name)

## ServiceConsul

**Extends Service**

service building a bridge to consul

**Parameters**

-   `config`  
-   `owner`  

### autostart

Start immediate

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true

### \_start

Register the kronos service in consul

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** that fullfills on succesfull startup

### \_stop

Deregister the service from consul

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** that fullfills when the deregistering has finished

### update

Update service definition in consul

**Parameters**

-   `delay` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** time to wait before doing the unregister/register action

### name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'consul'

# install

With [npm](http://npmjs.org) do:

```shell
npm install kronos-service-consul
```

# license

BSD-2-Clause
