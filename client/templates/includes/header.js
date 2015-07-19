Template.header.helpers({
    'userLoggedInWithoutRole': function () {
        var user = Meteor.user();
        return !!user &&
            !(Roles.userIsInRole(user, ['donator']) ||
                Roles.userIsInRole(user, ['intern']));
    }
});