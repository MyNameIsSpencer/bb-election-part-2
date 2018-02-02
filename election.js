document.addEventListener("DOMContentLoaded", function() {
  var candidate = document.querySelector('#jsonyStuff')
  // Imagination!
  $.ajax({
    url:  'https://bb-election-api.herokuapp.com/',
    method:  'GET' ,
    data:   {}  ,
    datatype: 'JSON',
  }).done(function(data){
    for (var i = 0; i < data.candidates.length; i ++) {
      var litem = document.createElement('li');
      var candi = data.candidates[i];
      var form = data.createElement('form');
      var submitButt = data.createElement('button');
      var invisible = data.createElement('input');
      litem.innerHTML = candi.name + ' Votes: ' + candi.votes;
      candidate.append(litem);
    }
  });
});


//
