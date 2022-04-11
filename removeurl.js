// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  let index = url.indexOf("#");
  return index === -1 ? url : url.slice(0, index);
}
