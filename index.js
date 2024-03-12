function appConfirm() {
    var txt;
    if (confirm("Are you sure to proceed with the appointment?")) {
      alert("Our staff will contact you soon");
    } else {
      alert("You have cancelled the appointement");
    }
    document.innerHTML = "Confirm";
  }