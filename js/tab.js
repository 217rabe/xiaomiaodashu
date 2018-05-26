$(function () { 
  var tab = new auiTab({
    element: document.getElementById("footer"),
    index: 1,
    repeatClick: false
  }, function (ret) {
    console.log(ret.index - 1)
    $('main>section').eq(ret.index - 1).fadeIn().siblings().hide()
  });
})