const FollowToggle = require("./follow_toggle.js");

// $((function)=>{
//     $('button.follow-toggle').each((i, btn) =>{
//        window.FollowToggle = new FollowToggle(btn,{});
//     });
// });


$(()=> {
    $('button.follow-toggle').each(function(i, el){
        // debugger;
        new FollowToggle(el);
    })
});