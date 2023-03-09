window.Apex = {
  dataLabels: {
    enabled: false
  }
};




///////////End of Trending Videos/////////
//////////////////////////////////////////


//Featured Videos


////////CHARTS//////


//Line chart
(function NewCase() {
  console.log('THIS IS RUNNING ITSELF'); 


  var spark1 = {
     series: [{
            name: "Seats",
            data: [9,29,17,3,7,12,7,4,7,8]
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          colors: ['#d0021b']
        },
        markers: {
          size: 5,
          colors: ['#d0021b']
        },
        title: {
            text: 'Vaccant National Assembly & Council Seats',
            align: 'left',
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#ffffff'
            }
        },
        grid: {
            show: true,
            borderColor: '#90A4AE',
            xaxis: {
                    lines: {
                    show: true
                    }
                },   
            yaxis: {
                lines: {
                    show: true
                }
                },
            row: {
                colors: ['#ebebeb   '], // takes an array which will be repeated on columns
                opacity: 1
            },
        },
        xaxis: {
           categories: ['Bulawayo','Harare','Manicaland','Mashonaland Central','Mashonaland East','Mashonaland West','Masvingo','Matabeleland North','Matabeleland South','Midlands'],
            rotate: -45,
            labels: {
                 style: {
              colors: '#ffffff',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          }
            }
             
        }
  };
  new ApexCharts(document.querySelector("#spark1"), spark1).render();

}
)();




(function Circ1Case() {
  console.log('THIS IS RUNNING ITSELF'); 


  var optionsDonutTop = {
    chart: {      
      type: "donut",
      
    },
    plotOptions: {
      pie: {
        customScale: 0.96,
        donut: {
          size: "60%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "12"
            },
            value: {
              show: true,
              fontSize: "12"
            }
          }
        },
        dataLabels: {
          enabled: true
        }
      }
    },
    
    colors: ['#b7d6db',    '#48575b',    '#677679',    '#97a5a8',    '#0d9da3',    '#0fb4bb',    '#e66b4d',    '#fa8163',    '#628186',    '#94b3b8'],
     title: {
            text: '%National Assembly Seats',
            align: 'left',
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',                
                color:  '#black'
            }
        },
    series: [9,29,17,3,7,12,7,4,7,8],
    labels: ['Bulawayo','Harare','Manicaland','Mashonaland Central','Mashonaland East','Mashonaland West','Masvingo','Matabeleland North','Matabeleland South','Midlands'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        labels: {
            colors: 'black'        
        }
    }
  };


  var chartDonut2 = new ApexCharts( document.querySelector("#Circ1Case"), optionsDonutTop );
  chartDonut2.render().then(function () {});

}
)();



(function Circ2Case() {
  console.log('THIS IS RUNNING ITSELF'); 


  var optionsDonutTop = {
    chart: {      
      type: "donut",
      
    },
    plotOptions: {
      pie: {
        customScale: 0.96,
        donut: {
          size: "60%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "12"
            },
            value: {
              show: true,
              fontSize: "12"
            }
          }
        },
        dataLabels: {
          enabled: true
        }
      }
    },
    
    colors: ['#b7d6db',    '#48575b',    '#677679',    '#97a5a8',    '#0d9da3',    '#0fb4bb',    '#e66b4d',    '#fa8163',    '#628186',    '#94b3b8'],
     title: {
            text: '%National Assembly Seats',
            align: 'left',
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',                
                color:  '#000000'
            }
        },
    series: [9,29,17,3,7,12,7,4,7,8],
    labels: ['Bulawayo','Harare','Manicaland','Mashonaland Central','Mashonaland East','Mashonaland West','Masvingo','Matabeleland North','Matabeleland South','Midlands'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        labels: {
            colors: 'black'        
        }
    }
  };

  

  

  var chartDonut2 = new ApexCharts( document.querySelector("#Circ2Case"), optionsDonutTop );
  chartDonut2.render().then(function () {});

}
)();






(function Barchat() {
 

  var optionsBar = {
    chart: {
      type: "bar",
      height: 250,
      width: "100%",
      stacked: true,
      foreColor: "#999"
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        },
        columnWidth: "75%",
        horizontal: true
        //endingShape: 'rounded'
      }
    },
    colors: ["#d0021b"],
    series: [
      {
        name: "1st Dose",
        //data: first_dose2
        data: [22,22,19,6,5,2,2,2,1,1,1,1,1,1,1]
      }
    ],
    //labels: dateData2,
    labels: ['CCC','ZANU PF','MDC ALLIANCE','UDA','Independent','LEAD','Patriotic Zimbabwe','UZA','NPF','MAAT','Federation of African States','Zimbabwe Labour','Free Zimbabwe Congress','NPP','ZAPU' ],
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        show: false
      },
      labels: {
        show: true,
        style: {
          fontSize: "14px"
        }
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: true
      }
    },
    legend: {
      floating: true,
      position: "bottom",
      horizontalAlign: "right"
      //offsetY: -36
    },
    title: {
      text: "By Elections Candidates By Party",
      align: "left",
      style: {
                fontSize:  '16px',
                fontWeight:  'bold',                
                color:  '#black'
            }
    },

    /*subtitle: {
      text: 'Sessions and Views'
    },*/
    tooltip: {
      shared: true
    }
  };

  var chartBar = new ApexCharts(    document.querySelector("#barvaccine"),    optionsBar  );
  chartBar.render();
}
)();