$(document).ready(function() {
var search;
  $('#submit').click(function() {
    search = $('#search_term').val();
    //  $('tr').remove;
    search1 = $('#exclude').val();

  var getter = $.ajax ({
    url: "https://www.reddit.com/subreddits/search.json?q="+search,
    method: 'GET',
    dataType: 'json'
  });

  getter.done(function(returned) {
    for (var i = 0; i < returned['data']['children'].length; i++) {
      for (var obj in returned)
        var stuff = returned['data']['children'][i]
        var inside = stuff['data']['title'];
        var insider = stuff['data']['url'];
          $('.tabletitle').append('<tr><td>'+inside+'</td></tr>');
          $('.tableurl').append('<tr><td>'+insider+'</td></tr>');
      }
    })
  })
})
