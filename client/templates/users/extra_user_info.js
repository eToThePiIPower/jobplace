Template.extraUserInfo.events({
    'click #fund-intern' : function () {
        var user = Meteor.user();
        Roles.addUsersToRoles(user._id, ['donator']);
        $('.modal-backdrop').remove();
    },
    'click #be-intern' : function () {
        var user = Meteor.user();
        Roles.addUsersToRoles(user._id, ['intern']);
        $('.modal-backdrop').remove();
    }
});

Template.extraUserInfo.rendered = function () {
    $('#user-type').modal('show');
}