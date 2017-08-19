var timer    = null, 
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
    $('h1').before('<h2>"Gone Fishin"</h2>')
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

function loopInterval(slideCount) {
  console.log(count)
  if (count == slideCount) {
    count = 1
  } else {
    $('.slide').fadeOut('slow', function() {
      $('.slide').attr('src', 'assets/img/' + count + '.jpg')
    })
    $('.slide').fadeIn('slow')
    count++
  }
}

function slideshowLoop(slideCount, slideTransitions) {
  console.log('looping')
  $("#loop").click(function() {
    // if timer is set break
    if (timer !== null) {
      return
    } else {
      timer = setInterval(function() {
        loopInterval(slideCount)
      }, slideTransitions)  
    }
  });
}

$(document).ready(function(){
  backgroundSlideShow(46, 6890)
  slideshowLoop(46, 11000)
})