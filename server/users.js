Meteor.methods({
    'addDonater': function (params) {
        console.log(params)
        var id = Accounts.createUser(params);
        Roles.addUsersToRoles(id, params.roles);
    }
});