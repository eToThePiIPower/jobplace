Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate : 'notFound',
    waitOn : function () {
        return //[Meteor.subscribe('collectionName')];
    }
});

Router.route('/', {
    name : 'home',
    data : function () {
        return; //collection.find();
    }
});