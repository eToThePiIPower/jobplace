// Create in 25 fake users.

// If the user count ever falls below 25 this code will
// make sure that you ALWAYS have 25 fresh users to
// do with what you will. Be sure to place this
// in your Meteor.startup or a Tracker.deps block
if (Meteor.users.find().count() < 25) {
    var id = Accounts.createUser({
        username: "admin",
        password: "admin",
        email: "admin@example.com",
    });
    Roles.addUsersToRoles(id, ['admin']);

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

if (Orgs.find().count() < 5) {
    _.each(_.range(5), function() {
        var randomName = faker.company.companyName();
        var randomBuzz = faker.company.bs();
        var randomDescription = faker.lorem.paragraphs(3);
        var randomLocation = 'New York City'
        var images = ['complogo1.jpg', 'complogo2.jpg', 'complogo3.jpg', 'complogo4.jpg', 'complogo5.jpg'];
        var randomLogo = '/imgs/' + images[Math.floor(Math.random() * 5)];
        Orgs.insert({
            name: randomName,
            buzz: randomBuzz,
            location: randomLocation,
            description: randomDescription,
            logo: randomLogo
        });
    });
}

if (Jobs.find().count() < 10) {
    _.each(_.range(10), function() {
        var titles = ['Web Developer', 'Graphic Designer', 'Fashion Designer',
            'Hotel Manager'
        ];
        Jobs.insert({
            title: 'Web Developer',
            company: 'ArgInternet',
            location: '1 Penn Plaza, New York, NY 10001',
            path: 'Technology',
            start: new Date()
        });
    });
}
