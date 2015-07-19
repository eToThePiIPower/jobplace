Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.Jobs = new SimpleSchema({
    title: {
        type: String,
        label: 'Job title',
        min: 3,
        max: 140
    },
    company: {
        type: String,
        label: 'Company Name',
        min: 3,
        max: 140
    },
    city: {
        type: String,
        label: 'City',
        min: 3,
        max: 140
    },
    province: {
        type: String,
        label: 'State or Province',
        min: 2,
        max: 140
    },
    country: {
        type: String,
        label: 'Country',
        min: 3,
        max: 140
    }
});

Jobs = new Mongo.Collection('jobs');
Jobs.attachSchema(Schemas.Jobs);
