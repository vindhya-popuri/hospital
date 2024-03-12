document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var phoneNumber = document.getElementById("phone").value;
    
    var phoneRegex = /^[0-9]{10}$/;

    if(phoneRegex.test(phoneNumber)) {
        
        alert("Appointment booked successfully!");
        window.location.href = "index.html"; 
    } else {
        alert("Please enter a valid 10-digit phone number.");
    }
});