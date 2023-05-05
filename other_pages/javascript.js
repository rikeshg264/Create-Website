function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Contact Page
  function initMap() {
    var myLatLng = {lat: 37.7749, lng: -122.4194};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'My Location'
    });
  }
  
  // Add a listener for form submission
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the values from the form inputs
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;
  
    // Send the data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-contact-form");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Thanks for contacting us!");
        form.reset();
      } else {
        alert("Oops, something went wrong. Please try again.");
      }
    };
    xhr.send(JSON.stringify({
      name: name,
      email: email,
      message: message
    }));
  });