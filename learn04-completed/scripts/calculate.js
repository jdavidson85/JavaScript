function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rooms").value = "";
}

function showScreen() {
    numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById("room2").style.display = "room2";
        document.getElementById("room3").style.display = "room3";
    } else if (numRooms == 2) {
        document.getElementById("room2").style.display = "room2";
        document.getElementById("room3").style.display = "room3";
    } else if (numRooms == 3) {
        document.getElementById("room2").style.display = "room2";
        document.getElementById("room3").style.display = "room3";
    }
}

function estimate() {

    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalsqft = ((length * height * 2) + (length * width *2));
    let cost = (totalsqft * .65);
    document.getElementById("rm1cost").value = cost;

    var totalCost = cost;
    document.getElementById("estimate").innerHTML = (name + ", your estimate is " + totalCost);
}