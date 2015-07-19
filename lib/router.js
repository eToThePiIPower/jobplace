Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return //[Meteor.subscribe('collectionName')];
    }
});

Router.route('/', {
    name: 'home',
    data: function() {
        return; //collection.find();
    }
});

Router.route('/donater', {
    name: 'userDonater',
    data: function() {
        return; //collection.find();
    }
});

Router.route('/donate', {
    name: 'donate',
    data: function() {
        return;
    }
});

Router.onBeforeAction(function() {
    if (!Meteor.user() && Meteor.loggingIn()) {
        this.redirect('/donate');
    } else {
        this.next();
    }
}, {});
