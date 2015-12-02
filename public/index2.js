$(document).ready(function() {
var search;
  $('#submit').click(function() {
    search = $('#search_term').val();
    search1 = $('#exclude').val();

  var getter = $.ajax ({
    url: "https://www.reddit.com/subreddits/search.json?q="+search,
    method: 'GET',
    dataType: 'json'
  });

  getter.done(function(returned) {
    var reject = "cannot display"
    for (var i = 0; i < returned['data']['children'].length; i++) {
        var inside = returned['data']['children'][i]['data']['title'];
        var insider = returned['data']['children'][i]['data']['url'];
          $('#tabl').append('<tr><td>'+inside+'</td></tr>');
          $('#tabl').append('<tr><td>'+insider+'</td></tr>');
      }
    })
  })
})
