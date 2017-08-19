// var start;
// function backgroundSlideShow(wallpaperCount, slideTransitions) {
//   var count = 1,
//       timer = null,

//   $('').on('click', function(){
//     setInterval(function(wallpaperCount, slideTransitions){
//       if (count > (wallpaperCount - 1)) {
//         count = 1
//       } else {
//         $('.slide').fadeOut('slow', function() {
//           $('.slide').attr('src', 'assets/img/' + count + '.jpg')
//         })
//         $('.slide').fadeIn('slow')
//         count++
//         console.log(count)
//       }
//     }, slideTransitions) 
//   });
// }

// https://stackoverflow.com/questions/41756542/how-to-toggle-setinterval-on-click-javascript

var timer    = null, 
    interval = 1000,
    value    = 0,
    count    = 1
    audio    = document.getElementById("audio")

function backgroundSlideShow(slideCount, slideTransitions) {

  console.log(count)
  $("#start").click(function() {
    console.log('firing')
    audio.play()
    // if timer is set break
    if (timer !== null) {
      return
    } else {
      timer = setInterval(function() {
        slideInterval(slideCount)
      }, slideTransitions)  
    }
  });

  $("#stop").click(function() {
    audio.pause()
    clearInterval(timer);
    timer = null
  });
}

function slideInterval(slideCount) {
  console.log(count)
  if (count == slideCount) {
    count = 1
    $('h1').html('"Gone Fishin"')
    clearInterval(timer);
    timer = null
  } else {
    $('.slide').fadeOut('slow', function() {
      $('.slide').attr('src', 'assets/img/' + count + '.jpg')
    })
    $('.slide').fadeIn('slow')
    count++
  }
}

$(document).ready(function(){
  backgroundSlideShow(5, 8000)
})