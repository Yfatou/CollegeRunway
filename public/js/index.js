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
  displayResult: function(url) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: url
    });
  },

  saveTables: function(example, url) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: url,
      data: JSON.stringify(example)
    });
  },

  updateTables: function(example, url) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: url,
      data: JSON.stringify(example)
    });
  },

  getPage: function(url) {
    return $.ajax({
      url: url,
      type: "GET"
    });
  }
};

// handleFormSubmit is called whenever the choices of the user are submitted
var handleFormSubmit = function(event) {
  event.preventDefault();
  // All the brands name are stocked in an array
  var brand = [
    {
      brands: "Express",
      brandid: "1"
    },
    {
      brands: "American Eagle",
      brandid: "2"
    },
    {
      brands: "Nike",
      brandid: "3"
    },
    {
      brands: "H&M",
      brandid: "4"
    },
    {
      brands: "Urban Outfitters",
      brandid: "5"
    }
  ];

  API.saveTables(brand, "/api/addbrand").then(function() {});

  // All the college name are stocked in an array
  var college = [
    {
      name: "Northwestern University",
      collegeid: "1"
    },
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

  API.saveTables(college, "/api/addcollege").then(function() {});

  // All the season name are stocked in an array
  var season = [
    {
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

  API.saveTables(season, "/api/addseason").then(function() {});

  // To store the ids of the college and the season selected by the user
  var userTable = {
    CollegeId: $collegeselect.val().trim(),
    seasonTableId: $seasonselect.val()
  };

  // The sessionStorage setItem method will be used to store the college name selected by the user on the homepage
  // The college name stored will be displayed on the result page
  sessionStorage.setItem(
    "collegename",
    $("#collegeselect option:selected")
      .text()
      .trim()
  );

  API.saveTables(userTable, "/api/adduser").then(function(data) {
    console.log(data.id);

    var url =
      "/" +
      $("#seasonselect option:selected")
        .text()
        .trim() +
      "/" +
      data.id;

    location.href = url;
    console.log(userid);
  });
};

// HandleFormSeasonSubmit is called when the user submit the choices made on a season page
var handleFormSeasonSubmit = function() {
  var BrandChoice = {
    Tops: $("#top").val(),
    Bottoms: $("#bottom").val(),
    Shoes: $("#shoe").val(),
    Accessories: $("#accessory").val()
  };

  // Get the season from the url
  var season = pathArray[1];
  // Get the id from the url
  var id = pathArray[2];
  // Call the updateTables method for the season and the id
  API.updateTables(BrandChoice, "/api/" + season + "/" + id).then(function(data) {
    // refreshExamples();
  });

  API.getPage("/api/college/" + id).then(function(data) {
    location.href = "/resultspage/" + data.CollegeId;
  });
};

// Event listeners to the submit button for the homepage
$submitBtn.on("click", handleFormSubmit);

// Event listener on the submit button for the seasons page
$submitButtonId.on("click", handleFormSeasonSubmit);

// If the url contains resultspage ==> the resut page will be displayed,
if (pathArray[1] === "resultspage") {
  // The college stored from the session storage is displayed
  var collegename = sessionStorage.getItem("collegename");
  $("#resultspagecollege").append("<p>" + collegename + "</p>");
  var temptotal = 0;
  // The most popular top is displayed
  API.displayResult("/api/results/mosttopsview").then(function(data) {
    var collegeid = pathArray[2];
    for (var i = 0; i < data.length; i++) {
      // for the college selected by the user
      if (data[i].name === collegename) {
        temptotal = parseInt(data[i].Total);
        $("#tops").append("<hr><hr><p>tops  -" + " " + data[i].Tops + "</p>");
        $("#tops").append("<hr>");
      }
    }
    console.log(data);
  });

  temptotal = 0;
  // The most popular brand of bottom is displayed
  API.displayResult("/api/results/mostbottomsview").then(function(data) {
    for (var i = 0; i < data.length; i++) {
      // for the college selected by the user
      if (data[i].name === collegename) {
        temptotal = parseInt(data[i].Total);
        $("#bottoms").append("<p>bottoms  -" + " " + data[i].bottoms + "</p>");
        $("#bottoms").append("<hr>");
      }
    }
    console.log(data);
  });

  temptotal = 0;
  // The most popular brand of shoes is displayed
  API.displayResult("/api/results/mostshoesview").then(function(data) {
    for (var i = 0; i < data.length; i++) {
      // for the college selected by the user
      if (data[i].name === collegename) {
        temptotal = parseInt(data[i].Total);
        $("#shoes").append("<p>shoes  -" + " " + data[i].shoes + "</p>");
        $("#shoes").append("<hr>");
      }
    }
    console.log(data);
  });

  temptotal = 0;
  // The most popular brand of accessories is displayed
  API.displayResult("/api/results/mostaccessoriesview").then(function(data) {
    for (var i = 0; i < data.length; i++) {
      // for the collede selected by the user
      if (data[i].name === collegename) {
        temptotal = parseInt(data[i].Total);
        $("#accessories").append(
          "<p>accessories  -" + " " + data[i].Accessories + "</p>"
        );
        $("#accessories").append("<hr>");
      }
    }

    console.log(data);
  });
}
