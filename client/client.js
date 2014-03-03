if (Meteor.isClient) {
  Meteor.subscribe("courses");
  Template.hello.greeting = function () {
    return "Welcome to bookingapp.";
  };
  Template.courses.courses = function() {
    return Courses.find({});
  };

  var AllCourses = function() {
    Courses.find({});
  };

  Template.hello.rendered = function () {

  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    },
    'click .submit' : function (e) {
      e.preventDefault();
      if ($( 'form' ).parsley( 'validate' )) {
        Courses.insert({ 
          course_name: $("#course_name").val(),
          start_date: $("#start_date").val(), 
          start_time: $("#start_time").val(), 
          end_time: $("#end_time").val() });
      }
    }
  });

  Template.courses.events({ 
    'click .delete' : function (e) {
      e.preventDefault();
      Courses.remove(this._id);
    }
  });

}

