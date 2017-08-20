var timer    = null, 
    count    = 1
    audio    = document.getElementById("audio")

function slideAnimation() {
  $('.slide').fadeOut('slow', function() {
    $('.slide').attr('src', 'assets/img/' + count + '.jpg')
  })
  $('.slide').fadeIn('slow')
}

function slideInterval(slideCount) {
  console.log(count)
  if (count == slideCount) {
    count = 1
    $('h1').html('Gone Fishing...')
    clearInterval(timer);
    timer = null
    setTimeout(function() {
      window.location.reload()
    }, 10000)
  } else {
    slideAnimation(count)
    count++
  }
}

function loopInterval(slideCount) {
  if (count == slideCount) {
    count = 1
  } else {
    slideAnimation(count)
    count++
  }
}

function backgroundSlideShow(slideCount, slideTransitions) {
  $("#start").click(function() {
    console.log('slideshow started')
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

function slideshowLoop(slideCount, slideTransitions) {
  $("#loop").click(function() {
    console.log('looping')
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