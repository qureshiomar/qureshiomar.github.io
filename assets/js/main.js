$(document).ready(function() {
    console.log("Page loaded!");
    $('[data-toggle="tooltip"]').tooltip()
})

document.getElementById("email").addEventListener("click", function() {
    $('#myModal').modal('show')
})

document.getElementById("CTC").addEventListener("click", function() {
    var copyText = document.getElementById("emailTxt");
    copyText.select();
    document.execCommand("Copy");
    swal({
        title: "Copied to Clipboard",
        timer: 1000,
        icon: "success",
        buttons: false
    });
})
