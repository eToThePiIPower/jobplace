Template.extraUserInfo.events({
    'click #fund-intern' : function () {
        var user = Meteor.user();
        Roles.addUsersToRoles(user._id, ['donator']);
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    },
    'click #be-intern' : function () {
        var user = Meteor.user();
        Roles.addUsersToRoles(user._id, ['intern']);
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    }
});

Template.extraUserInfo.rendered = function () {
    $('#user-type').modal('show');
}