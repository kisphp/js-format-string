let test = require('unit.js');

require('../src/format-string.js');

describe('Check format string with object', function(){
    it('change one simple value', function(){
        let template = 'hello {name}';

        test
            .string(template.formatString({"name": "world"}))
            .endsWith('world')
            .match(/[a-z]/);
    });

    it('change multiple values from object', function(){
        let template = '<h1>{title}</h1><p>{description}</p>';

        let replaceWith = {
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
        let template = 'Name: {name}, email: {name}@{domain}';

        let replaceWith = {
            "name": "John",
            "domain": "doe.com"
        };

        test
            .string(template.formatString(replaceWith))
            .contains('John')
            .contains('John@doe.com')
        ;
    });


    it('if variable does not exists, it should not display undefined', function(){
        let template = 'row id: {id}, row title: {title}';

        let replaceWith = {
            id: 1
        };

        test.string(template.formatString(replaceWith))
            .contains('row id: 1')
            .notContains('undefined')
        ;
    });
});

describe('check format string with no object parameters', function(){
    it('change one simple value', function(){
        let template = 'hello {0}';

        test
            .string(template.formatString("world"))
            .endsWith('world')
            .match(/[a-z]/);
    });

    it('change multiple values from object', function(){
        let template = '<h1>{0}</h1><p>{1}</p>';

        let replaceWith = ["Google", "Search engine application"];

        test
            .string(template.formatString(replaceWith))
            .contains('Google')
            .contains('Search engine application')
        ;
    });

    it('change a value multiple times', function(){
        let template = 'Name: {0}, email: {0}@{1}';

        test
            .string(template.formatString('john', 'doe.com'))
            .contains('john')
            .contains('john@doe.com')
        ;
    });
});
