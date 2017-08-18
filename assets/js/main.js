function backgroundSlideShow(wallpaperCount, slideTransitions) {
  var count = 1
  setInterval(function(){
    if (count > (wallpaperCount - 1)) {
      count = 1
    } else {
      $('.slide').fadeOut('slow', function() {
        $('.slide').attr('src', 'assets/img/' + count + '.jpg')
      })
      $('.slide').fadeIn('slow')
      count++
      console.log(count)
    }
  }, slideTransitions) 
}

$(document).ready(function(){
  backgroundSlideShow(5, 8000)
})

// https://stackoverflow.com/questions/41756542/how-to-toggle-setinterval-on-click-javascript