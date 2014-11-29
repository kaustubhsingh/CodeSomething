
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    
    
    var $city = $("#city").val();
    var $street = $("#street").val();
    var address = $street + ', ' + $city;

    // YOUR CODE GOES HERE!
    $body.append('<img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=address"/>');

    return false;
};

$('#form-container').submit(loadData);

// loadData();
