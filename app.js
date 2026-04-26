function signalChecker() {
    let color = document.getElementById("colorInput").value.toLowerCase();
    let message = document.getElementById("message");

    if (color === "red") {
        message.innerHTML = "Must stop";
    } else if (color === "yellow") {
        message.innerHTML = "Ready to go";
    } else if (color === "green") {
        message.innerHTML = "Move now";
    } else {
        message.innerHTML = "Invalid Color! Please enter signal color (Red, Yellow, Green)";
    }
}
