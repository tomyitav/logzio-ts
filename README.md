# Logzio-Ts

[![Build Status](https://travis-ci.org/tomyitav/logzio-ts.svg?branch=master)](https://travis-ci.org/tomyitav/logzio-ts)
[![npm](https://img.shields.io/npm/v/logzio-ts.svg)](https://www.npmjs.com/package/logzio-ts)

Integrate logzio logging from your browser, using Typescript. 

## Installation

`npm i --save logzio-ts`

## How to use in app code

In order to use `angular-logz-io` in your module, add the following definitions:

```js
import {LogzioTs} from 'logzio-ts';

this.logger = new LogzioTs('YOUR_LOGZIO_TOKEN');
```

You can log your data by using the log function
