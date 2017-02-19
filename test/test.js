var test = require('unit.js');

require('../src/format-string.js');

describe('Check format string with object', function(){
    it('change one simple value', function(){
        var template = 'hello {name}';

        test
            .string(template.formatString({"name": "world"}))
            .endsWith('world')
            .match(/[a-z]/);
    });

    it('change multiple values from object', function(){
        var template = '<h1>{title}</h1><p>{description}</p>';

        var replaceWith = {
            "title": "Google",
            "description": "Search engine application"
        };

        test
            .string(template.formatString(replaceWith))
            .contains('Google')
            .contains('Search engine application')
        ;
    });

    it('change a value multiple times', function(){
        var template = 'Name: {name}, email: {name}@{domain}';

        var replaceWith = {
            "name": "John",
            "domain": "doe.com"
        };

        test
            .string(template.formatString(replaceWith))
            .contains('John')
            .contains('John@doe.com')
        ;
    });
});

describe('check format string with no object parameters', function(){
    it('change one simple value', function(){
        var template = 'hello {0}';

        test
            .string(template.formatString("world"))
            .endsWith('world')
            .match(/[a-z]/);
    });

    it('change multiple values from object', function(){
        var template = '<h1>{0}</h1><p>{1}</p>';

        var replaceWith = ["Google", "Search engine application"];

        test
            .string(template.formatString(replaceWith))
            .contains('Google')
            .contains('Search engine application')
        ;
    });

    it('change a value multiple times', function(){
        var template = 'Name: {0}, email: {0}@{1}';

        test
            .string(template.formatString('john', 'doe.com'))
            .contains('john')
            .contains('john@doe.com')
        ;
    });
});
