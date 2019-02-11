// Get references to page elements
// pathArray will contains all the element of the url
var pathArray = window.location.pathname.split("/");

// The season selected by the user in the dropdown list
var $seasonselect = $("#seasonselect");

// Submit button on the homepage after choice of university and season
var $submitBtn = $("#searchBtn");

// College selected by the user in the dropdown list
var $collegeselect = $("#collegeselect");

// Submit button on the season pages after selecion of brands for clothing items
var $submitButtonId = $("#submitButtonId");

// The API object contains methods for each kind of request that will be made
var API = {
  displayResult: function (url) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: url
    });
  },
  saveTables: function (example, url) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: url,
      data: JSON.stringify(example)
    });
  },

  updateTables: function (example, url) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: url,
      data: JSON.stringify(example)
    });
  },
  getPage: function (url) {
    return $.ajax({
      url: url,
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();
  var brand = [
    {
      brands: "Brand X",
      brandid: "1"
    },
    {
      brands: "Brand Y",
      brandid: "2"
    },
    {
      brands: "Brand A",
      brandid: "3"
    },
    {
      brands: "Brand F",
      brandid: "4"
    },
    {
      brands: "Brand P",
      brandid: "5"
    }
  ]

  API.saveTables(brand, "/api/addbrand").then(function () {
    // refreshExamples();
  });

  var college = [{
    name: "Northwestern University",
    collegeid: "1"
  }
    ,
  {
    name: "Chicago State University",
    collegeid: "2"
  },
  {
    name: "Loyola University",
    collegeid: "3"
  },
  {
    name: "Depaul University",
    collegeid: "4"
  },
  {
    name: "Columbia College",
    collegeid: "5"
  }
  ];

  API.saveTables(college, "/api/addcollege").then(function () {
    // refreshExamples();
  });


  var season = [{
    seasonname: "Spring",
    seasonTableId: "1"
  },
  {
    seasonname: "Summer",
    seasonTableId: "2"
  },
  {
    seasonname: "Autumn",
    seasonTableId: "3"
  },
  {
    seasonname: "Winter",
    seasonTableId: "4"
  }
  ];

  API.saveTables(season, "/api/addseason").then(function () {
    // refreshExamples();
  });





  var userTable = {
    CollegeId: $collegeselect.val().trim(),
    seasonTableId: $seasonselect.val()
  };

  sessionStorage.setItem("collegename", $("#collegeselect option:selected").text().trim());
  
  API.saveTables(userTable, "/api/adduser").then(function (data) {
    // refreshExamples();

    console.log(data.id);

    var url = "/" + $("#seasonselect option:selected").text().trim() + "/" + data.id;


    location.href = url;
    console.log(userid);

  });




  // API.getPage(url).then(function () {
  //   // refreshExamples();
  // });




};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

var handleFormSeasonSubmit = function () {

  var BrandChoice = {
    Tops: $("#top").val(),
    Bottoms: $("#bottom").val(),
    Shoes: $("#shoe").val(),
    Accessories: $("#accessory").val()
  };



  //alert(pathArray[1]+" "+pathArray[2]);
  var season = pathArray[1];
  var id = pathArray[2];
  API.updateTables(BrandChoice, "/api/" + season + "/" + id).then(function (data) {
    // refreshExamples();
  });

  API.getPage("/api/college/" + id).then(function (data) {

    location.href = "/resultspage/" + data.CollegeId;
  });


};
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
$submitButtonId.on("click", handleFormSeasonSubmit);

if (pathArray[1] === "resultspage") {
 
  var collegename=sessionStorage.getItem("collegename");
  $("#tops").append("<h3>" + collegename + "</h3>");
  var temptotal = 0;
  API.displayResult("/api/results/mosttopsview").then(function (data) {
    var collegeid = pathArray[2];
    for (var i = 0; i < data.length; i++) {
       if (   data[i].name  === collegename) {

     //   if (parseInt(data[i].Total) > temptotal) {
        temptotal = parseInt(data[i].Total);
         
      
        $("#tops").append("<h3>Tops:" + data[i].Tops + "</h3>");
        $("#tops").append("<h3>Total: " + data[i].Total + "</h3>");
        $("#tops").append("<hr>");


      }

    }

    console.log(data);
  });
  temptotal = 0;
  API.displayResult("/api/results/mostbottomsview").then(function (data) {


    for (var i = 0; i < data.length; i++) {
      if (   data[i].name  === collegename){
       // if (parseInt(data[i].Total) > temptotal) {
        temptotal = parseInt(data[i].Total);
        // $("#bottoms").append("<h3>College:" + data[i].name + "</h3>");
        $("#bottoms").append("<h3>bottoms: " + data[i].bottoms + "</h3>");
        $("#bottoms").append("<h3>Total: " + data[i].Total + "</h3>");
        $("#bottoms").append("<hr>");
      }

      // }

    }

    console.log(data);
  });
  temptotal = 0;
  API.displayResult("/api/results/mostshoesview").then(function (data) {
    for (var i = 0; i < data.length; i++) {
      if (  data[i].name  === collegename){
      //  if (parseInt(data[i].Total) > temptotal) {
        temptotal = parseInt(data[i].Total);
        // $("#shoes").append("<h3>College:" + data[i].name + "</h3>");
        $("#shoes").append("<h3>shoes:" + data[i].shoes + "</h3>");
        $("#shoes").append("<h3>Total: " + data[i].Total + "</h3>");
        $("#shoes").append("<hr>");
     // }
      }
    }

    console.log(data);
  });
  temptotal = 0;
  API.displayResult("/api/results/mostaccessoriesview").then(function (data) {
    for (var i = 0; i < data.length; i++) {
      if (   data[i].name  === collegename){
     // if (parseInt(data[i].Total) > temptotal) {
        temptotal = parseInt(data[i].Total);
        // $("#accessories").append("<h3>College:" + data[i].name + "</h3>");
        $("#accessories").append("<h3>accessories:" + data[i].Accessories + "</h3>");
        $("#accessories").append("<h3>Total: " + data[i].Total + "</h3>");
        $("#accessories").append("<hr>");
     // }
      }
    }

    console.log(data);
  });
}
