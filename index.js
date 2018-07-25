const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: 'AIzaSyDa-FOmtA-JGwwrkjv9twJzBxEqueiGzuo',
    q: `${searchTerm} in:name`,
    per_page: 5
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}
$('#js-search-form').submit(function (event) {
  event.preventDefault();
  const listItem = $('.js-search-input').val();
  console.log(listItem);
  getDataFromApi(listItem, renderResult);
}
);
function renderResult(data, items) {

  for (let i = 0; i < data.items.length; i++) {
    $('.js-output').append(`Title<li>${data.items[i].snippet.title}<\li><div> Description</div>${data.items[i].snippet.description}</div><div><img src= ${data.items[i].snippet.thumbnails.medium.url}></div>`);
  }
    outputElem
    .prop('hidden', false)
    .html(errMsg);
}
