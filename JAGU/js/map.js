$('#hendi1').on('click', function () {
    google.maps.event.trigger(gmarkers[0], 'click');
})
$('#hendi2').on('click', function () {
    google.maps.event.trigger(gmarkers[1], 'click');
})
$('#hendi3').on('click', function () {
    google.maps.event.trigger(gmarkers[2], 'click');
})


// custom functions
var gmarkers = [];
var locations = []
for (var i = 0; i < dataItem.length; i++) {
    locations.push(dataItem[i])
}

function initMap() {

    var mapOptions = {
        center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {

        var data = locations[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title,
        });

        gmarkers.push(marker);
        //Attach click event to the marker.
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.

                var myvar = '<div data-slick=\'{"slidesToShow": 1, "slidesToScroll": 1}\'>' +
                    '    <div class="responsive" style = "width:200px;min-height:40px;font-weight:bold;text-align:center; padding: 0 0 20px 0;">' +
                    '      <img src="images/' + data.img1 + '">' +
                    '      <img src="images/' + data.img2 + '">' +
                    '      <img src="images/' + data.img3 + '">' +
                    '    </div>' +
                    '  </div>';

                infoWindow.setContent(myvar + "<div style = 'width:200px;min-height:40px;font-weight:bold;text-align:center;'>" + data.address1 + "<br>" + data.address2 + "<br>" + data.open + "</div>")

                google.maps.event.addListenerOnce(infoWindow, 'domready', function () {

                    $('.responsive').slick({
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 1,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: true,
                                    centerMode: true,
                                    centerPadding: '0',
                                    slidesToShow: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    arrows: true,
                                    centerMode: true,
                                    centerPadding: '0',
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });

                });

                infoWindow.open(map, marker);
            });
        })(marker, data);
    }

}