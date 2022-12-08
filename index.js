new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Gary Chan", "Suzanne", "Josh", "Daniel", "Phoebe", "Danny"],
      datasets: [{
        label: "Pizza Slices eaten (dozens)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FFFFFF"],
        data: [15,14,18,12,19]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Pizza Slices Eaten (Dozens)'
      }
    }
});

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Gary Chan", "Suzanne", "Josh", "Daniel", "Phoebe"],
      datasets: [
        {
          label: "Movies Watched in a Month",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [14,11,16,24,13]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Movies Watched In a Month'
      }
    }
});