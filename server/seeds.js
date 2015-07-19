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
    var addresses = ['250 W 43rd St, New York, NY, 10036', '250 W 43rd St New York, NY, 10036', '345 W 35th St, New York, NY, 10001',
        '70 Park Ave, New York, NY, 10016', '300 w 30th St, New York, NY, 10001', '4 W 31st St, New York, NY, 10001',
        '355 W 16th St, New York, NY, 10011', '102 Charles St, New York, NY, 10014', '225 E 17th St, New York, NY, 10003',
        '27 W 11th St, New York, NY, 10011'
    ];
    var titles = ['Web Developer', 'Graphic Designer', 'Fashion Designer',
        'Hotel Manager'
    ];
    _.each(_.range(10), function() {
        Jobs.insert({
            title: titles[Math.floor(Math.random() * titles.length)],
            company: faker.company.companyName(),
            location: addresses[Math.floor(Math.random() * addresses.length)],
            path: 'Technology',
            start: new Date()
        });
    });
}
