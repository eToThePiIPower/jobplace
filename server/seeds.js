// Create in 25 fake users.

// If the user count ever falls below 25 this code will
// make sure that you ALWAYS have 25 fresh users to
// do with what you will. Be sure to place this
// in your Meteor.startup or a Tracker.deps block
if (Meteor.users.find().count() < 25) {
    Accounts.createUser({
        username: "admin",
        password: "admin",
        email: "admin@example.com"
    });

    _.each(_.range(25), function() {
        var randomName = faker.name.findName();
        var randomEmail = faker.internet.email(randomName);
        var userName = faker.internet.userName(randomName).replace(/\./g, '').substring(0, 15);
        Accounts.createUser({
            username: userName,
            profile: {
                name: randomName,
            },
            email: randomEmail,
            password: 'password'
        });
    });
}
