$(document).ready(function(){
  var blinking = false,
    interval,
    $blink = $('.blink');
  $('#blinkbutton').click(function(){
    if (!blinking){
      $('#blinkbutton').html('Click to <strong>stop</strong> blinking');
      interval = setInterval(function(){
        $blink.toggle();
      },200);
      blinking = true;
    }
    else
    {
      clearInterval(interval);
      $('#blinkbutton').html('Click to see <strong>non-compliant</strong> flashing');
      $blink.hide();
      blinking = false;
    }
  });
});
