Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.Orgs = new SimpleSchema({
    name: {
        type: String,
        min: 2,
        max: 140
    },
    location: {
        type: String,
        min: 2,
        max: 140
    },
    description: {
        type: String,
        min: 140,
        max: 1400
    },
    buzz: {
        type: String
    },
    logo: {
        type: String,
        optional: true
    }
});


Orgs = new Mongo.Collection('orgs');
Orgs.attachSchema(Schemas.Orgs);
