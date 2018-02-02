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
      form.method = 'POST';
      form.action = "https://bb-election-api.herokuapp.com/vote";

      var submitter = document.createElement('button');
      submitter.setAttribute('type', 'submit')
      form.append(submitter)
      submitter.innerText = "Vote for " + candi.name

      var invisible = document.createElement('input');
      invisible.setAttribute('hidden', 'true');
      invisible.setAttribute('name', 'name');
      invisible.value = candi.name;
      form.append(invisible);

      litem.innerHTML = candi.name + ' Votes: ' + candi.votes
      litem.append(form);
      candidate.append(litem)

    }
  });
});


//
