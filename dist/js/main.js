

// fixed header
window.addEventListener('scroll', function () {

    var header = document.getElementById('main-header');
    var arrowUp = document.getElementById('arrow-up');
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {

        header.classList.add("sticky");
        header.classList.add("sticky-nav");

        // arrow-up show 
        arrowUp.style.display = "block";

    } else {
        header.classList.remove("sticky");

        // arrow-up hidden
        arrowUp.style.display = "none";

    }

});


// google map
function initMap() {

    var lat = parseFloat('44.8095');
    var lng = parseFloat('20.4324');

    var map = new google.maps.Map(document.getElementById('map'), {

        center: { lat: lat, lng: lng },
        zoom: 10,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    });

    var marker = new google.maps.Marker({
        map: map,
        position: { lat: lat, lng: lng },
        title: 'Studio 77'
    });

}



// dropdown items
$(document).ready(function () {

    // dropdown novosti
    $('.fifth-section-content-1 li').click(function () {
        $(this).find('.drop-div').toggle(500);
    });


    // dropdown map
    $('#sixth-section').click(function () {
        // $('#location-icon').css("transform", "rotate(90deg)");
        $('#map').toggle(800);
    });

    // arrow up functionality
    $('#arrow-up').click(function () {
        $('html, body').animate({ scrollTop: 0 });
    });

    $('#arrow-down').on('click', () => {
      $('html, body').animate({ scrollTop: 800 });
  });

})







