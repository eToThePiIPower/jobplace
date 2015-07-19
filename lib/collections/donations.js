Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.Donation = new SimpleSchema({
    amount: {
        type: Number,
        label: 'Amount donated',
        min: 1
    },
    donator: {
        type: String,
        label: 'id of donator',
        regEx: SimpleSchema.RegEx.Id,
        optional: false
    },
    date: {
        type: Date,
        label: 'Date of Donation',
        optional: false
    }
});

Donations = new Mongo.Collection('donations');
Donations.attachSchema(Schemas.Donation);
//ExampleCollection = new Mongo.Collection('ExampleCollection');
//ExampleCollection.attachSchema(Schemas.ExampleCollection);
