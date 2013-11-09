
if (Meteor.isClient) {

  Session.setDefault('container','page1');
  var page1 = function () {
    // -> COMMENT THIS OUT (to test only template switching)
    // clean the database
    _.each(DB.collection.find({}).fetch(), function(item){
        DB.collection.remove({_id: item._id});
    });
    // -> COMMENT THESE OUT *END*

    Session.set('container','page1');
  };

  var page2 = function () {
    // -> COMMENT THIS OUT (to test only template switching)
    // fill the collection, on each page visit
    for (var i = 0; i < 100; i++) {
      DB.collection.insert({
        text: 'Some Text from the Collection'
      });
    };
    // -> COMMENT THESE OUT *END*

    Session.set('container','page2');
  };


  // template container
  Template.container.addPage = function () {
    return Template[Session.get('container')];
  };


  Template.page1.greeting = function () {
    return "Lorem ipsum Sint fugiat eiusmod aliquip irure ea dolore. Lorem ipsum Nostrud cillum ea cupidatat sint labore quis mollit culpa id. Lorem ipsum Do velit mollit dolore consequat consectetur in consectetur laborum minim minim deserunt id. Lorem ipsum Cupidatat officia sint ut Excepteur pariatur eiusmod et id anim minim Duis. Lorem ipsum Magna veniam enim veniam nulla quis occaecat dolor proident aute voluptate Duis adipisicing. Lorem ipsum Occaecat ut laboris officia magna non aute dolore nulla. Lorem ipsum Elit fugiat enim aliquip elit Excepteur ut.Lorem ipsum Adipisicing ut qui qui Lorem ipsum Cillum ad exercitation commodo aute qui voluptate in in qui. Lorem ipsum Consequat in dolor ut minim est sint voluptate do Duis commodo non. Lorem ipsum Cillum culpa velit aliquip aute aute pariatur.aliquip nisi officia dolor dolore exercitation nisi. Lorem ipsum Velit do reprehenderit mollit in eu non ut laborum sed in ut. Lorem ipsum Consequat sint anim occaecat in anim amet nulla. Lorem ipsum Dolore aliqua non occaecat fugiat consequat pariatur eiusmod cupidatat.";
  };

  Template.page2.data = function () {
    return DB.collection.find();
  };


  // EVENTS
  UI.body.events({
    'click button.page1' : function () {
      console.log('switched to page 1');
      page1();
    },
    'click button.page2' : function () {
      console.log('switched to page 2');
      page2();
    },
    'click button.start': function () {
      var startTime = +new Date;
      // switch back and forth for 60 seconds.
      setInterval(function () {
        if ((+new Date) - startTime > 60 * 1000)
          return;

        page1();
        setTimeout(function () {
          page2();
        }, 200);
      }, 500);
    }
  });


}

// create collection
DB = {};
DB.collection = new Meteor.Collection(null);








// dont need that

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }
