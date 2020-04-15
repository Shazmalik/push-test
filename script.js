function loadData() {
  $.get("https://aimtell.com/files/sites.json", function (data, status) {
    let previewData = data.sites.map(s => {
      return { id: s.id, name: s.name, url: s.url };
    });
    console.log(previewData);

    // Get the text for the Handlebars template from the script element.
    let templateText = $("#tableTemplate").html();

    // Compile the Handlebars template.
    let tableTemplate = Handlebars.compile(templateText);
    $("#data").html(tableTemplate({ array: previewData }));

    $("button").html("Data Loaded");
  });
}
