jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Windows Chart
  var doughnutData = [{
      value: 90,
      color: "#1abc9c"
    },
    {
      value: 10,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("windows").getContext("2d")).Doughnut(doughnutData);

  // Linux Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("linux").getContext("2d")).Doughnut(doughnutData);

  // Cloud Chart
  var doughnutData = [{
    value: 20,
    color: "#1abc9c"
  },
  {
    value: 80,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("cloud").getContext("2d")).Doughnut(doughnutData);

  // Project Management Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("project_mgmt").getContext("2d")).Doughnut(doughnutData);

  // Troubleshooting Chart
  var doughnutData = [{
    value: 95,
    color: "#1abc9c"
  },
  {
    value: 5,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("troubleshooting").getContext("2d")).Doughnut(doughnutData);

  // DevOps Chart
  var doughnutData = [{
    value: 10,
    color: "#1abc9c"
  },
  {
    value: 90,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("devops").getContext("2d")).Doughnut(doughnutData);
});
