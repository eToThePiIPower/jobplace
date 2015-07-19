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

Router.route('/post', {
    name: 'jobPost',
    data: function() {
        return; //collection.find();
    }
});

Router.route('/jobs', {
    name: 'jobs',
    data: function() {
        return;
    }
});

Router.route('/donate', {
    name: 'donate',
    data: function() {
        return;
    }
});
