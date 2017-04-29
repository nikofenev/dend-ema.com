function initMap() {
    var uluru = {lat: 41.525439, lng: 25.41076069999997};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
        
    var infowindow = new google.maps.InfoWindow({
      content:'<strong>Модно ателие "ДенД"</strong><br /><br />ул. Гюмюрджинска 54 етаж 2, гр. Момчилград, България<br />'
    });
        
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
<<<<<<< HEAD
}
=======
}
>>>>>>> 740b9f997348442cf54a74a19a6a5d5dbadcccf4
