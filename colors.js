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

var Ol = {
  setLineColor: function(color) {
    document.querySelector('ol').style.borderRightColor = color;
    //$('body').css('color', color);
  }
}

var H1 = {
  setLineColor: function(color) {
    document.querySelector('h1').style.borderBottomColor = color;
    //$('body').css('color', color);
  }
}

var Line = {
  setLineColor: function(color) {
    document.querySelector('#line').style.borderRightColor = color;
    //$('body').css('color', color);
  }
}

function nightDayHandler(self) {

  if (self.value === 'night') {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Links.setColor('white');
    Ol.setLineColor('white');
    H1.setLineColor('white');
    Line.setLineColor('white');
    self.value = 'day';
  } else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Links.setColor('black');
    Ol.setLineColor('black');
    H1.setLineColor('black');
    Line.setLineColor('black');
    self.value = 'night';
  }
}
