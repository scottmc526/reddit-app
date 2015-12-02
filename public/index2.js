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
    $('tr:not(".head")').remove()
    for (var i = 0; i < returned['data']['children'].length; i++) {
      for (var obj in returned)
        var stuff = returned['data']['children'][i]
        var inside = stuff['data']['title'];
        var insider = stuff['data']['url'];
          $('table').append('<tr></tr>');
          $('tr:last-of-type').append('<td>' + inside + '</td>');
          $('tr:last-of-type').append('<td>'+ insider + '</td>');
      }
    })
  })
})
