function loadData() {
  $.get("https://aimtell.com/files/sites.json", function (data, status) {
    console.log(data);
    $("button").html("Next Step...");
  });
}
