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
      var litem = document.createElement('li')
      var candi = data.candidates[i]
      var form = document.createElement('form');
      var submitButt = document.createElement('button');
      var invisible = document.createElement('input');

      form.method = 'POST';
      form.action="https://bb-election-api.herokuapp.com/vote";
      litem.innerHTML = candi.name + ' Votes: ' + candi.votes
      litem.append(form);
      candidate.append(litem)

    }
  });
});


//
