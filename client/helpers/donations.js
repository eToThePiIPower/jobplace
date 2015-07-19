Template.home.helpers({
    donations: function() {
        return Donations.find({}, {
            limit: 3,
            sort: {
                date: -1
            }
        });
    },
    donator_name: function(id) {
        return Meteor.users.findOne(id).username;
    }
});
