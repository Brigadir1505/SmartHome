const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {

        labels: ['20', '21', '22', '23', '24', '25', '26', '27'],
        datasets: [{
            label: 'August',
            data: [30, 40, 50, 75, 68, 70, 90, 80],
            borderWidth: 1,
            parsing: {
                yAxisKey: '$'
            }
        },
        {
            label: 'September',
            data: [12, 19, 25, 30, 28, 40, 39, 30],
            borderWidth: 1,
            parsing: {
                yAxisKey: '$'
            }
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});