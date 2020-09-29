var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's rest", 
            image: "https://www.reserveamerica.com/webphotos/NRSO/pid70095/0/540x360.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Deserts mesa", 
            image: "https://site.utah.gov/stateparks/wp-content/uploads/sites/13/2016/01/Biking-Access.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Canyon floor", 
            image: "https://www.gouldings.com/wp-content/uploads/2017/03/Campground-6.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];

function seedDB(){
    Campground.remove({}, function(err){
       if(err){
           console.log("err");
       } 
      console.log("removed campground");
      data.forEach(function(seed){
             Campground.create(seed, function(err, campground){
                 if(err) {
                     console.log(err);
                 }else{
                     console.log("Added Campground");
                     Comment.create({
                         text: "This place is good, but I wish there was a internet",
                         author: "DK"
                     }, function(err, comment){
                         if(err){
                             console.log(err);
                         }else{
                         campground.comments.push(comment);
                         campground.save();
                         console.log("created a new comment");
                         }
                     });
                 }
             });
      });
    });
  
}

module.exports = seedDB;