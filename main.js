var url = 'https://openapi.etsy.com/v2/listings/active.js?api_key=g8kq6qqfmw13aie55awl1d28&keywords=foghornleghorn&includes=Images,Shop'
$.ajax({
    type: 'GET',
    url: url,
    dataType: 'jsonp',
    success: function(data, status, xhr) {
        console.log(data);

    }
});

function boss(data) {
    var contain = $('#someThing');
    data.results.forEach(function(val, i, arr) {
        // Create <div>
        var inputDiv = $('<div></div>');
        // What is in the <div>
        var $image = $('<img/>', {
            src: val.Images[0].url_170x135
        });
        var $details = $('< p class = "details" > < /p>', {
            'data-id': val.id
        }).html(val.title);
        var $price = $('< p class "price" > < /p>', {
            'data-id': val.id
        }).html('$' + val.price);
        var $link = $('<a></a>', {
            href: val.url
        });
        var $shop = $('< p class = "shop" > < /p>', {
            'data-id': val.id
        }).html(val.Shop.shop_name);
        $link.append($image);
        // Inserting <p class""> and <a> into <div>
        inputDiv.append($details);
        inputDiv.append($shop);
        inputDiv.append($price);
        inputDiv.append($link);

        contain.appen(inputDiv)
    })
};
// I am lost at getting the code to appear on screen.
