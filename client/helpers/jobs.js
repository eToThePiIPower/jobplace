Template.jobs.helpers({
    jobs: function() {
        return Jobs.find({}, {});
    },
    date: function(id) {
        var date = Jobs.findOne(id).start;
        return moment(date).format('MMMM Do');
    },
    year: function(id) {
        var date = Jobs.findOne(id).start;
        return moment(date).format('YYYY');
    }
});
