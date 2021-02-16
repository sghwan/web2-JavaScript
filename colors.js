var Links = {
  setColor: function(color) {
    //   var link = document.querySelectorAll('a');
    //
    //   for (var i = 0; i < link.length; i++) {
    //     link[i].style.color = color;
    //   }
    $('a').css('color', color);
  }
}

var Body = {
  setColor: function(color) {
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) {

  if (self.value === 'night') {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Links.setColor('white');
    self.value = 'day';
  } else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Links.setColor('black');
    self.value = 'night';
  }
}
