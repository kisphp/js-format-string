# Javascript Format String

[![Build Status](https://travis-ci.org/kisphp/js-format-string.svg?branch=master)](https://travis-ci.org/kisphp/js-format-string)

This repository started as a need to replace text in javascript 
in tiny templates without a framework.

## Installation

```
npm install --save kisphp-format-string
```

## Integrate script

```javascript
require('kisphp-format-string');

// or simply include the js file in your browser
// <script async src="node_modules/kisphp-format-string/src/format-string.js"></script>
```

## Usage

```javascript
var data = {
    name: "John Doe",
    info: "Software Engineer"
};

var template_1 = '<div><h3>{name}</h3><h5>{info}</h5></div>';
var template_2 = '<div><h3>{0}</h3><h5>{1}</h5></div>';

// use with object 
console.log(template_1.formatString(data));

// use with direct elements
console.log(template_2.formatString(data.name, data.info));

// use with array
console.log(template_2.formatString([
    data.name, 
    data.info
]));
```
