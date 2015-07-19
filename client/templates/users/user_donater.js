Template.userDonater.events({
  'submit #reg-form': function(e, t) {
    e.preventDefault();

    var email = e.target.regEmail.value,
        username = e.target.regUsername.value,
        roles = e.target.regRole.value,
        password = e.target.regPw.value;
    
    Meteor.call('addDonater', {
        email: email,
        password: password,
        username: username,
        roles: roles
    }, function (one, err) {
        console.log(one);
        console.log(err);
    });

    return false;
  }
});