const API_URL = `http://${window.location.hostname}:5000`
let chart1 = document.getElementById('myChart1')
let chart2 = document.getElementById('myChart2')
let chart3 = document.getElementById('myChart3')
let topCasesTable = document.getElementById('casesTableBody')

let charts = {chart1: null, chart2: null, chart3:null , chart4: null}


function renderMultiChart(chartObject, chartId, chartTitle ,chartType, data){

    if(charts[chartId]){
        charts[chartId].destroy()
    }

    charts[chartId] = new Chart(chartObject, {
        type: chartType,
        data: {
	labels:data.labels,
        datasets:
		[{
            		label: data.titles[0],
            		data: data.dataClusters[data.titles[0]],
            		borderWidth: 1
        	},
		{
                        label: data.titles[1],
                        data: data.dataClusters[data.titles[1]],
                        borderWidth: 1
                },

	]
        },
        options: {
            scales: { y: {beginAtZero: true } }
        }
    });

}

function renderChart(chartObject, chartId, chartTitle ,chartType, labels, data){

    if(charts[chartId]){
	charts[chartId].destroy()
    }

    charts[chartId] = new Chart(chartObject, {
        type: chartType,
        data: {
        labels: labels,
        datasets: [{
            label: chartTitle,
            data: data,
            borderWidth: 1
        }]
        },
        options: {
            scales: { y: {beginAtZero: true } }
        }
    });
}

function processTrigger(){
	$.getJSON(`${API_URL}/process`, data => {
		console.log(data.message)
	})
}

function dataCaptureTrigger(){

	function renderCasesEnumerationData(data){

		let labels = Object.keys(data)
		let values = []

		for (let index = 0; index<labels.length; index++){
			values[labels.indexOf(labels[index])] = data[labels[index]]
		}

		renderChart(	chart1,
				'chart1',
				'Number of Cases',
				'bar',
				labels,
				values)
	}

	function renderAverageCasesReported(data){
		renderMultiChart(chart2,
				'chart2',
				'Case Distribution based on Gender',
				'line',
				data)
	}

	function renderGenderDistributionData(data){
                renderChart(	chart3,
				'chart3',
				'Gender Distribution',
				'pie',
				['Male', 'Female'],
				[data.male, data.female])
	}

	function renderTopCasesData(data){
		let index = 1
		topCasesTable.innerHTML = ''
		data.forEach(record => {
			topCasesTable.innerHTML += `<tr><th scope="row">${record[0]}</th><td>${record[1]}</td><td>${record[2]}</td><td>${record[3]}</td><td>${record[4]}</td><td>${record[5]}</td><td>${record[6]}</td><td>${record[7].substring(0,100)}</td></tr>`
			index++
		})
	}

	$.getJSON(`${API_URL}/data`, data => {
		renderCasesEnumerationData(data.data.caseDistribution)
		renderAverageCasesReported(data.data.averageCasesDistribution)
		renderGenderDistributionData(data.data.genderDistribution)
		renderTopCasesData(data.data.topCasesData)
	})
}


renderChart(chart1, 'chart1', 'Number of Cases' ,'bar', ['Verbal', 'Physical'], [20, 19])
renderChart(chart2, 'chart2', 'Case Distribution based on Gender' ,'line', ['Verbal', 'Physical'], [20, 19])
renderChart(chart3, 'chart3', 'Gender Distribution' ,'pie', ['Male', 'Female'], [300, 1000])

setInterval(processTrigger, 5000)
setInterval(dataCaptureTrigger, 10000)
