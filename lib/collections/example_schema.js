Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.ExampleCollection = new SimpleSchema({
    url : {
        type : String,
        label : 'URL' ,
        regEx: SimpleSchema.RegEx.Url
    }
});

//ExampleCollection = new Mongo.Collection('ExampleCollection');
//ExampleCollection.attachSchema(Schemas.ExampleCollection);