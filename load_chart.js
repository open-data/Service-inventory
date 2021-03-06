Chart.plugins.unregister(ChartDataLabels);

function drawDoughnutChart(targets_met, targets_total) {
  var data = {
    datasets: [
      {
        data: [
          (targets_met / targets_total) * 100,
          100 - (targets_met / targets_total) * 100,
        ],
        backgroundColor: ["green", "#D3D3D3"],
      },
    ],
  };

  var ctx = document.getElementById("chart1");

  // And for a doughnut chart
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
      legend: {
        position: "bottom",
        fullWidth: true,
        display: true,
        labels: {
          fontSize: 18,
          fontColor: "black",
        },
      },
      title: {
        display: true,
        position: "top",
        padding: 20,
        fontSize: 22,
        color: "black",
        text: fr_page
          ? "Rendement des Normes Relatives aux Services"
          : "Service Standards Performance",
      },
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      cutoutPercentage: 80,
      tooltips: {
        enabled: false,
      },
    },
  });

  $(".donut-inner h2").text(targets_met + " / " + targets_total);
  if (targets_met > 1) {
    fr_page
      ? $("#target").html(
          "Les objectifs liés aux normes relatives aux services ont été atteints"
        )
      : $("#target").html("service standard targets were met");
  } else {
    fr_page
      ? $("#target").html(
          "L’objectif lié aux normes relatives aux services a été atteint"
        )
      : $("#target").html("service standard target was met");
  }
}

function drawBarChart(serviceSums, yr_labels) {
  var ctx = document.getElementById("chart2");
  ctx.height = 54;
  maxYearSum = _.max(serviceSums);

  var data = {
    labels: yr_labels,
    datasets: [
      {
        data: serviceSums,
        backgroundColor: "#006699",
      },
    ],
  };

  var options = {
    title: {
      display: false,
      position: "top",
      padding: 0,
      fontSize: 22,
      // fontColor: 'black'
    },
    legend: {
      display: false,
      position: "bottom",
      onClick: function (e) {
        e.stopPropagation();
      },
    },
    animation: {
      duration: 1500,
    },
    devicePixelRatio: 1.5,
    scales: {
      xAxes: [
        {
          barPercentage: 0.8,
          categoryPercentage: 1,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontColor: "black",
            fontSize: 16,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
            suggestedMin: 0,
            suggestedMax: maxYearSum * 1.1,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        // color: 'black',
        anchor: "end",
        align: "top",
        font: {
          size: "20",
        },
        formatter: function (value, context) {
          return formatNumberMini(value);
        },
      },
    },
  };

  var myBarChart = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: "bar",
    data: data,
    options: options,
  });
}
