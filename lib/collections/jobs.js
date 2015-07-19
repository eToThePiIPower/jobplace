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
    path: {
        type: String,
        label: 'Career Path',
        min: 3,
        max: 140
    },
    start: {
        type: Date,
        label: 'Start Date',
    },
});

Jobs = new Mongo.Collection('jobs');
Jobs.attachSchema(Schemas.Jobs);
