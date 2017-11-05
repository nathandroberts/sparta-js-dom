

  var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];

  function addListItem(value) {

    $(listItems).each(function(index, item){
      $('#list').append('<li>'+item+'</li>')
      console.log('hello');

    })

  }
  addListItem()
  evenOrOdd()
  setCountSpan()
  function evenOrOdd() {
    $('li').each(function(index){
      console.log(index);
      if (index % 2 !== 0) {
        // debugger
        $(this).addClass('even')
      }
    })
  }
function setCountSpan() {
  var $length = $( "li" ).length;
  $('#count').html($length)
}

  // write append loop here


  // write the class loop here
