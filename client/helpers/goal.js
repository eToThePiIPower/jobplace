Template.home.helpers({
    goal: function() {
        var total = 0;
        var GOAL = 10000.00;
        Donations.find().map(function(donation) {
            total += donation.amount;
        });
        return Math.floor((total / GOAL) * 100);
    }
});
