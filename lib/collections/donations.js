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
        optional: false,
        autoValue: function() {
            if (Meteor.user()) {
                return Meteor.user()._id;
            } else {
                throw Meteor.Error(403, "You are not authorized to donate");
            }
        }
    },
    date: {
        type: Date,
        label: 'Date of Donation',
        optional: false,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date
                };
            } else {
                this.unset();
            }
        }
    }
});

Donations = new Mongo.Collection('donations');
Donations.attachSchema(Schemas.Donation);
//ExampleCollection = new Mongo.Collection('ExampleCollection');
//ExampleCollection.attachSchema(Schemas.ExampleCollection);
