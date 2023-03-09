window.Apex = {
  dataLabels: {
    enabled: false
  }
};


//main artcle feed rss
var xhr6 = new XMLHttpRequest();

//xhr6.open("GET", "https://crnpathzwdash.herokuapp.com/elections", true);
xhr6.open("GET", "http://127.0.0.1:8081/elections", true);
xhr6.setRequestHeader("Content-Type", "application/json");
xhr6.send();
xhr6.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log( xhr6.responseText)
    var jsonResponse = JSON.parse(xhr6.responseText);

  let Constituency = jsonResponse.Constituency
  let Province = jsonResponse.Province
  let WinningParty2018 = jsonResponse.WinningParty2018
  let VotesMDCAlliance2018  = jsonResponse.VotesMDCAlliance2018 
  let VotesMDCT2018 = jsonResponse.VotesMDCT2018
  let VotesZANUPF2018 = jsonResponse.VotesZANUPF2018
  let VotesOther2018 = jsonResponse.VotesOther2018
  let VotesCCC2022 = jsonResponse.VotesCCC2022
  let VotesMDCT2022 = jsonResponse.VotesMDCT2022
  let VotesZANUPF2022 = jsonResponse.VotesZANUPF2022
  let VotesOther2022 = jsonResponse.VotesOther2022
    
    Table(Constituency,Province,WinningParty2018,VotesMDCAlliance2018,VotesMDCT2018,VotesZANUPF2018,  VotesOther2018,  VotesCCC2022,  VotesMDCT2022,  VotesZANUPF2022,  VotesOther2022);
    Chart(Constituency,Province,WinningParty2018,VotesMDCAlliance2018,VotesMDCT2018,VotesZANUPF2018,  VotesOther2018,  VotesCCC2022,  VotesMDCT2022,  VotesZANUPF2022,  VotesOther2022);
    Chart2(Constituency,Province,WinningParty2018,VotesMDCAlliance2018,VotesMDCT2018,VotesZANUPF2018,  VotesOther2018,  VotesCCC2022,  VotesMDCT2022,  VotesZANUPF2022,  VotesOther2022);
    //NormalArticle3(OriginalLink, CoverImage, Category, Dates, Title, Para1, AuthorImage, Author);




  }
};

//side article
function Table(Constituency,  Province,  WinningParty2018,  VotesMDCAlliance2018 ,  VotesMDCT2018,  
    VotesZANUPF2018,  VotesOther2018,  VotesCCC2022,  VotesMDCT2022,  VotesZANUPF2022,  VotesOther2022){

    //VotesOther2022
        document.getElementById("VotesOther20220").innerHTML = VotesOther2022[0]
        document.getElementById("VotesOther20221").innerHTML = VotesOther2022[1]
        document.getElementById("VotesOther20222").innerHTML = VotesOther2022[2]
        document.getElementById("VotesOther20223").innerHTML = VotesOther2022[3]
        document.getElementById("VotesOther20224").innerHTML = VotesOther2022[4]
        document.getElementById("VotesOther20225").innerHTML = VotesOther2022[5]
        document.getElementById("VotesOther20226").innerHTML = VotesOther2022[6]
        document.getElementById("VotesOther20227").innerHTML = VotesOther2022[7]
        document.getElementById("VotesOther20228").innerHTML = VotesOther2022[8]
        document.getElementById("VotesOther20229").innerHTML = VotesOther2022[9]
        document.getElementById("VotesOther202210").innerHTML = VotesOther2022[10]
        document.getElementById("VotesOther202211").innerHTML = VotesOther2022[11]
        document.getElementById("VotesOther202212").innerHTML = VotesOther2022[12]
        document.getElementById("VotesOther202213").innerHTML = VotesOther2022[13]
        document.getElementById("VotesOther202214").innerHTML = VotesOther2022[14]
        document.getElementById("VotesOther202215").innerHTML = VotesOther2022[15]
        document.getElementById("VotesOther202216").innerHTML = VotesOther2022[16]
        document.getElementById("VotesOther202217").innerHTML = VotesOther2022[17]
        document.getElementById("VotesOther202218").innerHTML = VotesOther2022[18]
        document.getElementById("VotesOther202219").innerHTML = VotesOther2022[19]
        document.getElementById("VotesOther202220").innerHTML = VotesOther2022[20]
        document.getElementById("VotesOther202221").innerHTML = VotesOther2022[21]
        document.getElementById("VotesOther202222").innerHTML = VotesOther2022[22]
        document.getElementById("VotesOther202223").innerHTML = VotesOther2022[23]
        document.getElementById("VotesOther202224").innerHTML = VotesOther2022[24]
        document.getElementById("VotesOther202225").innerHTML = VotesOther2022[25]
        document.getElementById("VotesOther202226").innerHTML = VotesOther2022[26]
        document.getElementById("VotesOther202227").innerHTML = VotesOther2022[27]

    //VotesZANUPF2022
        document.getElementById("VotesZANUPF20220").innerHTML = VotesZANUPF2022[0]
        document.getElementById("VotesZANUPF20221").innerHTML = VotesZANUPF2022[1]
        document.getElementById("VotesZANUPF20222").innerHTML = VotesZANUPF2022[2]
        document.getElementById("VotesZANUPF20223").innerHTML = VotesZANUPF2022[3]
        document.getElementById("VotesZANUPF20224").innerHTML = VotesZANUPF2022[4]
        document.getElementById("VotesZANUPF20225").innerHTML = VotesZANUPF2022[5]
        document.getElementById("VotesZANUPF20226").innerHTML = VotesZANUPF2022[6]
        document.getElementById("VotesZANUPF20227").innerHTML = VotesZANUPF2022[7]
        document.getElementById("VotesZANUPF20228").innerHTML = VotesZANUPF2022[8]
        document.getElementById("VotesZANUPF20229").innerHTML = VotesZANUPF2022[9]
        document.getElementById("VotesZANUPF202210").innerHTML = VotesZANUPF2022[10]
        document.getElementById("VotesZANUPF202211").innerHTML = VotesZANUPF2022[11]
        document.getElementById("VotesZANUPF202212").innerHTML = VotesZANUPF2022[12]
        document.getElementById("VotesZANUPF202213").innerHTML = VotesZANUPF2022[13]
        document.getElementById("VotesZANUPF202214").innerHTML = VotesZANUPF2022[14]
        document.getElementById("VotesZANUPF202215").innerHTML = VotesZANUPF2022[15]
        document.getElementById("VotesZANUPF202216").innerHTML = VotesZANUPF2022[16]
        document.getElementById("VotesZANUPF202217").innerHTML = VotesZANUPF2022[17]
        document.getElementById("VotesZANUPF202218").innerHTML = VotesZANUPF2022[18]
        document.getElementById("VotesZANUPF202219").innerHTML = VotesZANUPF2022[19]
        document.getElementById("VotesZANUPF202220").innerHTML = VotesZANUPF2022[20]
        document.getElementById("VotesZANUPF202221").innerHTML = VotesZANUPF2022[21]
        document.getElementById("VotesZANUPF202222").innerHTML = VotesZANUPF2022[22]
        document.getElementById("VotesZANUPF202223").innerHTML = VotesZANUPF2022[23]
        document.getElementById("VotesZANUPF202224").innerHTML = VotesZANUPF2022[24]
        document.getElementById("VotesZANUPF202225").innerHTML = VotesZANUPF2022[25]
        document.getElementById("VotesZANUPF202226").innerHTML = VotesZANUPF2022[26]
        document.getElementById("VotesZANUPF202227").innerHTML = VotesZANUPF2022[27]

    //VotesMDCT2022
    document.getElementById("VotesMDCT20220").innerHTML = VotesMDCT2022[0]
    document.getElementById("VotesMDCT20221").innerHTML = VotesMDCT2022[1]
    document.getElementById("VotesMDCT20222").innerHTML = VotesMDCT2022[2]
    document.getElementById("VotesMDCT20223").innerHTML = VotesMDCT2022[3]
    document.getElementById("VotesMDCT20224").innerHTML = VotesMDCT2022[4]
    document.getElementById("VotesMDCT20225").innerHTML = VotesMDCT2022[5]
    document.getElementById("VotesMDCT20226").innerHTML = VotesMDCT2022[6]
    document.getElementById("VotesMDCT20227").innerHTML = VotesMDCT2022[7]
    document.getElementById("VotesMDCT20228").innerHTML = VotesMDCT2022[8]
    document.getElementById("VotesMDCT20229").innerHTML = VotesMDCT2022[9]
    document.getElementById("VotesMDCT202210").innerHTML = VotesMDCT2022[10]
    document.getElementById("VotesMDCT202211").innerHTML = VotesMDCT2022[11]
    document.getElementById("VotesMDCT202212").innerHTML = VotesMDCT2022[12]
    document.getElementById("VotesMDCT202213").innerHTML = VotesMDCT2022[13]
    document.getElementById("VotesMDCT202214").innerHTML = VotesMDCT2022[14]
    document.getElementById("VotesMDCT202215").innerHTML = VotesMDCT2022[15]
    document.getElementById("VotesMDCT202216").innerHTML = VotesMDCT2022[16]
    document.getElementById("VotesMDCT202217").innerHTML = VotesMDCT2022[17]
    document.getElementById("VotesMDCT202218").innerHTML = VotesMDCT2022[18]
    document.getElementById("VotesMDCT202219").innerHTML = VotesMDCT2022[19]
    document.getElementById("VotesMDCT202220").innerHTML = VotesMDCT2022[20]
    document.getElementById("VotesMDCT202221").innerHTML = VotesMDCT2022[21]
    document.getElementById("VotesMDCT202222").innerHTML = VotesMDCT2022[22]
    document.getElementById("VotesMDCT202223").innerHTML = VotesMDCT2022[23]
    document.getElementById("VotesMDCT202224").innerHTML = VotesMDCT2022[24]
    document.getElementById("VotesMDCT202225").innerHTML = VotesMDCT2022[25]
    document.getElementById("VotesMDCT202226").innerHTML = VotesMDCT2022[26]
    document.getElementById("VotesMDCT202227").innerHTML = VotesMDCT2022[27]


    //VotesCCC2022
        document.getElementById("VotesCCC20220").innerHTML = VotesCCC2022[0]
        document.getElementById("VotesCCC20221").innerHTML = VotesCCC2022[1]
        document.getElementById("VotesCCC20222").innerHTML = VotesCCC2022[2]
        document.getElementById("VotesCCC20223").innerHTML = VotesCCC2022[3]
        document.getElementById("VotesCCC20224").innerHTML = VotesCCC2022[4]
        document.getElementById("VotesCCC20225").innerHTML = VotesCCC2022[5]
        document.getElementById("VotesCCC20226").innerHTML = VotesCCC2022[6]
        document.getElementById("VotesCCC20227").innerHTML = VotesCCC2022[7]
        document.getElementById("VotesCCC20228").innerHTML = VotesCCC2022[8]
        document.getElementById("VotesCCC20229").innerHTML = VotesCCC2022[9]
        document.getElementById("VotesCCC202210").innerHTML = VotesCCC2022[10]
        document.getElementById("VotesCCC202211").innerHTML = VotesCCC2022[11]
        document.getElementById("VotesCCC202212").innerHTML = VotesCCC2022[12]
        document.getElementById("VotesCCC202213").innerHTML = VotesCCC2022[13]
        document.getElementById("VotesCCC202214").innerHTML = VotesCCC2022[14]
        document.getElementById("VotesCCC202215").innerHTML = VotesCCC2022[15]
        document.getElementById("VotesCCC202216").innerHTML = VotesCCC2022[16]
        document.getElementById("VotesCCC202217").innerHTML = VotesCCC2022[17]
        document.getElementById("VotesCCC202218").innerHTML = VotesCCC2022[18]
        document.getElementById("VotesCCC202219").innerHTML = VotesCCC2022[19]
        document.getElementById("VotesCCC202220").innerHTML = VotesCCC2022[20]
        document.getElementById("VotesCCC202221").innerHTML = VotesCCC2022[21]
        document.getElementById("VotesCCC202222").innerHTML = VotesCCC2022[22]
        document.getElementById("VotesCCC202223").innerHTML = VotesCCC2022[23]
        document.getElementById("VotesCCC202224").innerHTML = VotesCCC2022[24]
        document.getElementById("VotesCCC202225").innerHTML = VotesCCC2022[25]
        document.getElementById("VotesCCC202226").innerHTML = VotesCCC2022[26]
        document.getElementById("VotesCCC202227").innerHTML = VotesCCC2022[27]

    //VotesOther2018
    document.getElementById("VotesOther20180").innerHTML = VotesOther2018[0]
    document.getElementById("VotesOther20181").innerHTML = VotesOther2018[1]
    document.getElementById("VotesOther20182").innerHTML = VotesOther2018[2]
    document.getElementById("VotesOther20183").innerHTML = VotesOther2018[3]
    document.getElementById("VotesOther20184").innerHTML = VotesOther2018[4]
    document.getElementById("VotesOther20185").innerHTML = VotesOther2018[5]
    document.getElementById("VotesOther20186").innerHTML = VotesOther2018[6]
    document.getElementById("VotesOther20187").innerHTML = VotesOther2018[7]
    document.getElementById("VotesOther20188").innerHTML = VotesOther2018[8]
    document.getElementById("VotesOther20189").innerHTML = VotesOther2018[9]
    document.getElementById("VotesOther201810").innerHTML = VotesOther2018[10]
    document.getElementById("VotesOther201811").innerHTML = VotesOther2018[11]
    document.getElementById("VotesOther201812").innerHTML = VotesOther2018[12]
    document.getElementById("VotesOther201813").innerHTML = VotesOther2018[13]
    document.getElementById("VotesOther201814").innerHTML = VotesOther2018[14]
    document.getElementById("VotesOther201815").innerHTML = VotesOther2018[15]
    document.getElementById("VotesOther201816").innerHTML = VotesOther2018[16]
    document.getElementById("VotesOther201817").innerHTML = VotesOther2018[17]
    document.getElementById("VotesOther201818").innerHTML = VotesOther2018[18]
    document.getElementById("VotesOther201819").innerHTML = VotesOther2018[19]
    document.getElementById("VotesOther201820").innerHTML = VotesOther2018[20]
    document.getElementById("VotesOther201821").innerHTML = VotesOther2018[21]
    document.getElementById("VotesOther201822").innerHTML = VotesOther2018[22]
    document.getElementById("VotesOther201823").innerHTML = VotesOther2018[23]
    document.getElementById("VotesOther201824").innerHTML = VotesOther2018[24]
    document.getElementById("VotesOther201825").innerHTML = VotesOther2018[25]
    document.getElementById("VotesOther201826").innerHTML = VotesOther2018[26]
    document.getElementById("VotesOther201827").innerHTML = VotesOther2018[27]



    //VotesZANUPF2018
        document.getElementById("VotesZANUPF20180").innerHTML = VotesZANUPF2018[0]
        document.getElementById("VotesZANUPF20181").innerHTML = VotesZANUPF2018[1]
        document.getElementById("VotesZANUPF20182").innerHTML = VotesZANUPF2018[2]
        document.getElementById("VotesZANUPF20183").innerHTML = VotesZANUPF2018[3]
        document.getElementById("VotesZANUPF20184").innerHTML = VotesZANUPF2018[4]
        document.getElementById("VotesZANUPF20185").innerHTML = VotesZANUPF2018[5]
        document.getElementById("VotesZANUPF20186").innerHTML = VotesZANUPF2018[6]
        document.getElementById("VotesZANUPF20187").innerHTML = VotesZANUPF2018[7]
        document.getElementById("VotesZANUPF20188").innerHTML = VotesZANUPF2018[8]
        document.getElementById("VotesZANUPF20189").innerHTML = VotesZANUPF2018[9]
        document.getElementById("VotesZANUPF201810").innerHTML = VotesZANUPF2018[10]
        document.getElementById("VotesZANUPF201811").innerHTML = VotesZANUPF2018[11]
        document.getElementById("VotesZANUPF201812").innerHTML = VotesZANUPF2018[12]
        document.getElementById("VotesZANUPF201813").innerHTML = VotesZANUPF2018[13]
        document.getElementById("VotesZANUPF201814").innerHTML = VotesZANUPF2018[14]
        document.getElementById("VotesZANUPF201815").innerHTML = VotesZANUPF2018[15]
        document.getElementById("VotesZANUPF201816").innerHTML = VotesZANUPF2018[16]
        document.getElementById("VotesZANUPF201817").innerHTML = VotesZANUPF2018[17]
        document.getElementById("VotesZANUPF201818").innerHTML = VotesZANUPF2018[18]
        document.getElementById("VotesZANUPF201819").innerHTML = VotesZANUPF2018[19]
        document.getElementById("VotesZANUPF201820").innerHTML = VotesZANUPF2018[20]
        document.getElementById("VotesZANUPF201821").innerHTML = VotesZANUPF2018[21]
        document.getElementById("VotesZANUPF201822").innerHTML = VotesZANUPF2018[22]
        document.getElementById("VotesZANUPF201823").innerHTML = VotesZANUPF2018[23]
        document.getElementById("VotesZANUPF201824").innerHTML = VotesZANUPF2018[24]
        document.getElementById("VotesZANUPF201825").innerHTML = VotesZANUPF2018[25]
        document.getElementById("VotesZANUPF201826").innerHTML = VotesZANUPF2018[26]
        document.getElementById("VotesZANUPF201827").innerHTML = VotesZANUPF2018[27]

    
    //VotesMDCAlliance2018
    document.getElementById("VotesMDCAlliance20180").innerHTML = VotesMDCAlliance2018[0]
    document.getElementById("VotesMDCAlliance20181").innerHTML = VotesMDCAlliance2018[1]
    document.getElementById("VotesMDCAlliance20182").innerHTML = VotesMDCAlliance2018[2]
    document.getElementById("VotesMDCAlliance20183").innerHTML = VotesMDCAlliance2018[3]
    document.getElementById("VotesMDCAlliance20184").innerHTML = VotesMDCAlliance2018[4]
    document.getElementById("VotesMDCAlliance20185").innerHTML = VotesMDCAlliance2018[5]
    document.getElementById("VotesMDCAlliance20186").innerHTML = VotesMDCAlliance2018[6]
    document.getElementById("VotesMDCAlliance20187").innerHTML = VotesMDCAlliance2018[7]
    document.getElementById("VotesMDCAlliance20188").innerHTML = VotesMDCAlliance2018[8]
    document.getElementById("VotesMDCAlliance20189").innerHTML = VotesMDCAlliance2018[9]
    document.getElementById("VotesMDCAlliance201810").innerHTML = VotesMDCAlliance2018[10]
    document.getElementById("VotesMDCAlliance201811").innerHTML = VotesMDCAlliance2018[11]
    document.getElementById("VotesMDCAlliance201812").innerHTML = VotesMDCAlliance2018[12]
    document.getElementById("VotesMDCAlliance201813").innerHTML = VotesMDCAlliance2018[13]
    document.getElementById("VotesMDCAlliance201814").innerHTML = VotesMDCAlliance2018[14]
    document.getElementById("VotesMDCAlliance201815").innerHTML = VotesMDCAlliance2018[15]
    document.getElementById("VotesMDCAlliance201816").innerHTML = VotesMDCAlliance2018[16]
    document.getElementById("VotesMDCAlliance201817").innerHTML = VotesMDCAlliance2018[17]
    document.getElementById("VotesMDCAlliance201818").innerHTML = VotesMDCAlliance2018[18]
    document.getElementById("VotesMDCAlliance201819").innerHTML = VotesMDCAlliance2018[19]
    document.getElementById("VotesMDCAlliance201820").innerHTML = VotesMDCAlliance2018[20]
    document.getElementById("VotesMDCAlliance201821").innerHTML = VotesMDCAlliance2018[21]
    document.getElementById("VotesMDCAlliance201822").innerHTML = VotesMDCAlliance2018[22]
    document.getElementById("VotesMDCAlliance201823").innerHTML = VotesMDCAlliance2018[23]
    document.getElementById("VotesMDCAlliance201824").innerHTML = VotesMDCAlliance2018[24]
    document.getElementById("VotesMDCAlliance201825").innerHTML = VotesMDCAlliance2018[25]
    document.getElementById("VotesMDCAlliance201826").innerHTML = VotesMDCAlliance2018[26]
    document.getElementById("VotesMDCAlliance201827").innerHTML = VotesMDCAlliance2018[27]

    //VotesMDCT2018
        document.getElementById("VotesMDCT20180").innerHTML = VotesMDCT2018[0]
        document.getElementById("VotesMDCT20181").innerHTML = VotesMDCT2018[1]
        document.getElementById("VotesMDCT20182").innerHTML = VotesMDCT2018[2]
        document.getElementById("VotesMDCT20183").innerHTML = VotesMDCT2018[3]
        document.getElementById("VotesMDCT20184").innerHTML = VotesMDCT2018[4]
        document.getElementById("VotesMDCT20185").innerHTML = VotesMDCT2018[5]
        document.getElementById("VotesMDCT20186").innerHTML = VotesMDCT2018[6]
        document.getElementById("VotesMDCT20187").innerHTML = VotesMDCT2018[7]
        document.getElementById("VotesMDCT20188").innerHTML = VotesMDCT2018[8]
        document.getElementById("VotesMDCT20189").innerHTML = VotesMDCT2018[9]
        document.getElementById("VotesMDCT201810").innerHTML = VotesMDCT2018[10]
        document.getElementById("VotesMDCT201811").innerHTML = VotesMDCT2018[11]
        document.getElementById("VotesMDCT201812").innerHTML = VotesMDCT2018[12]
        document.getElementById("VotesMDCT201813").innerHTML = VotesMDCT2018[13]
        document.getElementById("VotesMDCT201814").innerHTML = VotesMDCT2018[14]
        document.getElementById("VotesMDCT201815").innerHTML = VotesMDCT2018[15]
        document.getElementById("VotesMDCT201816").innerHTML = VotesMDCT2018[16]
        document.getElementById("VotesMDCT201817").innerHTML = VotesMDCT2018[17]
        document.getElementById("VotesMDCT201818").innerHTML = VotesMDCT2018[18]
        document.getElementById("VotesMDCT201819").innerHTML = VotesMDCT2018[19]
        document.getElementById("VotesMDCT201820").innerHTML = VotesMDCT2018[20]
        document.getElementById("VotesMDCT201821").innerHTML = VotesMDCT2018[21]
        document.getElementById("VotesMDCT201822").innerHTML = VotesMDCT2018[22]
        document.getElementById("VotesMDCT201823").innerHTML = VotesMDCT2018[23]
        document.getElementById("VotesMDCT201824").innerHTML = VotesMDCT2018[24]
        document.getElementById("VotesMDCT201825").innerHTML = VotesMDCT2018[25]
        document.getElementById("VotesMDCT201826").innerHTML = VotesMDCT2018[26]
        document.getElementById("VotesMDCT201827").innerHTML = VotesMDCT2018[27]


  

}

function Chart(Constituency,  Province,  WinningParty2018,  VotesMDCAlliance2018 ,  VotesMDCT2018,  VotesZANUPF2018,  VotesOther2018,  VotesCCC2022,  VotesMDCT2022,  VotesZANUPF2022,  VotesOther2022){

    
    //////////////////////////////////////////
    //Chart 0
    //////////////////////////////////////////
    let circ0z1= parseFloat(VotesMDCAlliance2018[0].replace(/,/g, ''))
    let circ0z2= parseFloat(VotesMDCT2018[0].replace(/,/g, ''))
    let circ0z3= parseFloat(VotesZANUPF2018[0].replace(/,/g, ''))
    let circ0z4= parseFloat(VotesOther2018[0].replace(/,/g, ''))

    circ0y1 = Number(circ0z1)
    circ0y2 = Number(circ0z2)
    circ0y3 = Number(circ0z3)
    circ0y4 = Number(circ0z4)

    var optionsDonutTop0 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[0]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ0y1,circ0y2,circ0y3,circ0y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ0 = new ApexCharts( document.querySelector('#circ0a'), optionsDonutTop0);
    circ0.render().then(function () {});
    //////////////////////////////////////////
    //Chart 1
    //////////////////////////////////////////
    let circ1z1= parseFloat(VotesMDCAlliance2018[1].replace(/,/g, ''))
    let circ1z2= parseFloat(VotesMDCT2018[1].replace(/,/g, ''))
    let circ1z3= parseFloat(VotesZANUPF2018[1].replace(/,/g, ''))
    let circ1z4= parseFloat(VotesOther2018[1].replace(/,/g, ''))

    circ1y1 = Number(circ1z1)
    circ1y2 = Number(circ1z2)
    circ1y3 = Number(circ1z3)
    circ1y4 = Number(circ1z4)

    var optionsDonutTop1 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[1]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ1y1,circ1y2,circ1y3,circ1y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ1 = new ApexCharts( document.querySelector('#circ1a'), optionsDonutTop1);
    circ1.render().then(function () {});
    //////////////////////////////////////////
    //Chart 2
    //////////////////////////////////////////
    let circ2z1= parseFloat(VotesMDCAlliance2018[2].replace(/,/g, ''))
    let circ2z2= parseFloat(VotesMDCT2018[2].replace(/,/g, ''))
    let circ2z3= parseFloat(VotesZANUPF2018[2].replace(/,/g, ''))
    let circ2z4= parseFloat(VotesOther2018[2].replace(/,/g, ''))

    circ2y1 = Number(circ2z1)
    circ2y2 = Number(circ2z2)
    circ2y3 = Number(circ2z3)
    circ2y4 = Number(circ2z4)

    var optionsDonutTop2 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[2]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ2y1,circ2y2,circ2y3,circ2y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ2 = new ApexCharts( document.querySelector('#circ2a'), optionsDonutTop2);
    circ2.render().then(function () {});
 
    //////////////////////////////////////////
    //Chart 3
    //////////////////////////////////////////
    let circ3z1= parseFloat(VotesMDCAlliance2018[3].replace(/,/g, ''))
    let circ3z2= parseFloat(VotesMDCT2018[3].replace(/,/g, ''))
    let circ3z3= parseFloat(VotesZANUPF2018[3].replace(/,/g, ''))
    let circ3z4= parseFloat(VotesOther2018[3].replace(/,/g, ''))

    circ3y1 = Number(circ3z1)
    circ3y2 = Number(circ3z2)
    circ3y3 = Number(circ3z3)
    circ3y4 = Number(circ3z4)

    var optionsDonutTop3 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[3]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ3y1,circ3y2,circ3y3,circ3y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ3 = new ApexCharts( document.querySelector('#circ3a'), optionsDonutTop3);
    circ3.render().then(function () {});

    //////////////////////////////////////////
    //Chart 4
    //////////////////////////////////////////
    let circ4z1= parseFloat(VotesMDCAlliance2018[4].replace(/,/g, ''))
    let circ4z2= parseFloat(VotesMDCT2018[4].replace(/,/g, ''))
    let circ4z3= parseFloat(VotesZANUPF2018[4].replace(/,/g, ''))
    let circ4z4= parseFloat(VotesOther2018[4].replace(/,/g, ''))

    circ4y1 = Number(circ4z1)
    circ4y2 = Number(circ4z2)
    circ4y3 = Number(circ4z3)
    circ4y4 = Number(circ4z4)

    var optionsDonutTop4 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[4]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ4y1,circ4y2,circ4y3,circ4y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ4 = new ApexCharts( document.querySelector('#circ4a'), optionsDonutTop4);
    circ4.render().then(function () {});

    //////////////////////////////////////////
    //Chart 5
    //////////////////////////////////////////
    let circ5z1= parseFloat(VotesMDCAlliance2018[5].replace(/,/g, ''))
    let circ5z2= parseFloat(VotesMDCT2018[5].replace(/,/g, ''))
    let circ5z3= parseFloat(VotesZANUPF2018[5].replace(/,/g, ''))
    let circ5z4= parseFloat(VotesOther2018[5].replace(/,/g, ''))

    circ5y1 = Number(circ5z1)
    circ5y2 = Number(circ5z2)
    circ5y3 = Number(circ5z3)
    circ5y4 = Number(circ5z4)

    var optionsDonutTop5 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[5]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ5y1,circ5y2,circ5y3,circ5y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ5 = new ApexCharts( document.querySelector('#circ5a'), optionsDonutTop5);
    circ5.render().then(function () {});


    //////////////////////////////////////////
    //Chart 6
    //////////////////////////////////////////
     let circ6z1= parseFloat(VotesMDCAlliance2018[6].replace(/,/g, ''))
    let circ6z2= parseFloat(VotesMDCT2018[6].replace(/,/g, ''))
    let circ6z3= parseFloat(VotesZANUPF2018[6].replace(/,/g, ''))
    let circ6z4= parseFloat(VotesOther2018[6].replace(/,/g, ''))

    circ6y1 = Number(circ6z1)
    circ6y2 = Number(circ6z2)
    circ6y3 = Number(circ6z3)
    circ6y4 = Number(circ6z4)

    var optionsDonutTop6 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[6]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ6y1,circ6y2,circ6y3,circ6y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ6 = new ApexCharts( document.querySelector('#circ6a'), optionsDonutTop6);
    circ6.render().then(function () {});


    //////////////////////////////////////////
    //Chart 7
    //////////////////////////////////////////
     let circ7z1= parseFloat(VotesMDCAlliance2018[7].replace(/,/g, ''))
    let circ7z2= parseFloat(VotesMDCT2018[7].replace(/,/g, ''))
    let circ7z3= parseFloat(VotesZANUPF2018[7].replace(/,/g, ''))
    let circ7z4= parseFloat(VotesOther2018[7].replace(/,/g, ''))

    circ7y1 = Number(circ7z1)
    circ7y2 = Number(circ7z2)
    circ7y3 = Number(circ7z3)
    circ7y4 = Number(circ7z4)

    var optionsDonutTop7 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[7]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ7y1,circ7y2,circ7y3,circ7y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ7 = new ApexCharts( document.querySelector('#circ7a'), optionsDonutTop7);
    circ7.render().then(function () {});


    //////////////////////////////////////////
    //Chart 8
    //////////////////////////////////////////
     let circ8z1= parseFloat(VotesMDCAlliance2018[8].replace(/,/g, ''))
    let circ8z2= parseFloat(VotesMDCT2018[8].replace(/,/g, ''))
    let circ8z3= parseFloat(VotesZANUPF2018[8].replace(/,/g, ''))
    let circ8z4= parseFloat(VotesOther2018[8].replace(/,/g, ''))

    circ8y1 = Number(circ8z1)
    circ8y2 = Number(circ8z2)
    circ8y3 = Number(circ8z3)
    circ8y4 = Number(circ8z4)

    var optionsDonutTop8 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[8]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ8y1,circ8y2,circ8y3,circ8y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ8 = new ApexCharts( document.querySelector('#circ8a'), optionsDonutTop8);
    circ8.render().then(function () {});


    //////////////////////////////////////////
    //Chart 9
    //////////////////////////////////////////
     let circ9z1= parseFloat(VotesMDCAlliance2018[9].replace(/,/g, ''))
    let circ9z2= parseFloat(VotesMDCT2018[9].replace(/,/g, ''))
    let circ9z3= parseFloat(VotesZANUPF2018[9].replace(/,/g, ''))
    let circ9z4= parseFloat(VotesOther2018[9].replace(/,/g, ''))

    circ9y1 = Number(circ9z1)
    circ9y2 = Number(circ9z2)
    circ9y3 = Number(circ9z3)
    circ9y4 = Number(circ9z4)

    var optionsDonutTop9 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[9]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ9y1,circ9y2,circ9y3,circ9y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ9 = new ApexCharts( document.querySelector('#circ9a'), optionsDonutTop9);
    circ9.render().then(function () {});


    //////////////////////////////////////////
    //Chart 10
    //////////////////////////////////////////
     let circ10z1= parseFloat(VotesMDCAlliance2018[10].replace(/,/g, ''))
    let circ10z2= parseFloat(VotesMDCT2018[10].replace(/,/g, ''))
    let circ10z3= parseFloat(VotesZANUPF2018[10].replace(/,/g, ''))
    let circ10z4= parseFloat(VotesOther2018[10].replace(/,/g, ''))

    circ10y1 = Number(circ10z1)
    circ10y2 = Number(circ10z2)
    circ10y3 = Number(circ10z3)
    circ10y4 = Number(circ10z4)

    var optionsDonutTop10 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[10]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ10y1,circ10y2,circ10y3,circ10y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ10 = new ApexCharts( document.querySelector('#circ10a'), optionsDonutTop10);
    circ10.render().then(function () {});


    //////////////////////////////////////////
    //Chart 11
    //////////////////////////////////////////
     let circ11z1= parseFloat(VotesMDCAlliance2018[11].replace(/,/g, ''))
    let circ11z2= parseFloat(VotesMDCT2018[11].replace(/,/g, ''))
    let circ11z3= parseFloat(VotesZANUPF2018[11].replace(/,/g, ''))
    let circ11z4= parseFloat(VotesOther2018[11].replace(/,/g, ''))

    circ11y1 = Number(circ11z1)
    circ11y2 = Number(circ11z2)
    circ11y3 = Number(circ11z3)
    circ11y4 = Number(circ11z4)

    var optionsDonutTop11 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[11]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ11y1,circ11y2,circ11y3,circ11y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ11 = new ApexCharts( document.querySelector('#circ11a'), optionsDonutTop11);
    circ11.render().then(function () {});


    //////////////////////////////////////////
    //Chart 12
    //////////////////////////////////////////
    
    let circ12z1= parseFloat(VotesMDCAlliance2018[12].replace(/,/g, ''))
    let circ12z2= parseFloat(VotesMDCT2018[12].replace(/,/g, ''))
    let circ12z3= parseFloat(VotesZANUPF2018[12].replace(/,/g, ''))
    let circ12z4= parseFloat(VotesOther2018[12].replace(/,/g, ''))

    circ12y1 = Number(circ12z1)
    circ12y2 = Number(circ12z2)
    circ12y3 = Number(circ12z3)
    circ12y4 = Number(circ12z4)

    var optionsDonutTop12 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[12]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ12y1,circ12y2,circ12y3,circ12y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ12 = new ApexCharts( document.querySelector('#circ12a'), optionsDonutTop12);
    circ12.render().then(function () {});


    //////////////////////////////////////////
    //Chart 13
    //////////////////////////////////////////

    let circ13z1= parseFloat(VotesMDCAlliance2018[13].replace(/,/g, ''))
    let circ13z2= parseFloat(VotesMDCT2018[13].replace(/,/g, ''))
    let circ13z3= parseFloat(VotesZANUPF2018[13].replace(/,/g, ''))
    let circ13z4= parseFloat(VotesOther2018[13].replace(/,/g, ''))

    circ13y1 = Number(circ13z1)
    circ13y2 = Number(circ13z2)
    circ13y3 = Number(circ13z3)
    circ13y4 = Number(circ13z4)

    var optionsDonutTop13 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[13]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ13y1,circ13y2,circ13y3,circ13y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ13 = new ApexCharts( document.querySelector('#circ13a'), optionsDonutTop13);
    circ13.render().then(function () {});


    //////////////////////////////////////////
    //Chart 14
    //////////////////////////////////////////

    let circ14z1= parseFloat(VotesMDCAlliance2018[14].replace(/,/g, ''))
    let circ14z2= parseFloat(VotesMDCT2018[14].replace(/,/g, ''))
    let circ14z3= parseFloat(VotesZANUPF2018[14].replace(/,/g, ''))
    let circ14z4= parseFloat(VotesOther2018[14].replace(/,/g, ''))

    circ14y1 = Number(circ14z1)
    circ14y2 = Number(circ14z2)
    circ14y3 = Number(circ14z3)
    circ14y4 = Number(circ14z4)

    var optionsDonutTop14 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[14]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ14y1,circ14y2,circ14y3,circ14y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ14 = new ApexCharts( document.querySelector('#circ14a'), optionsDonutTop14);
    circ14.render().then(function () {});


    //////////////////////////////////////////
    //Chart 15
    //////////////////////////////////////////

    let circ15z1= parseFloat(VotesMDCAlliance2018[15].replace(/,/g, ''))
    let circ15z2= parseFloat(VotesMDCT2018[15].replace(/,/g, ''))
    let circ15z3= parseFloat(VotesZANUPF2018[15].replace(/,/g, ''))
    let circ15z4= parseFloat(VotesOther2018[15].replace(/,/g, ''))

    circ15y1 = Number(circ15z1)
    circ15y2 = Number(circ15z2)
    circ15y3 = Number(circ15z3)
    circ15y4 = Number(circ15z4)

    var optionsDonutTop15 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[15]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ15y1,circ15y2,circ15y3,circ15y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ15 = new ApexCharts( document.querySelector('#circ15a'), optionsDonutTop15);
    circ15.render().then(function () {});


    //////////////////////////////////////////
    //Chart 16
    //////////////////////////////////////////

    let circ16z1= parseFloat(VotesMDCAlliance2018[16].replace(/,/g, ''))
    let circ16z2= parseFloat(VotesMDCT2018[16].replace(/,/g, ''))
    let circ16z3= parseFloat(VotesZANUPF2018[16].replace(/,/g, ''))
    let circ16z4= parseFloat(VotesOther2018[16].replace(/,/g, ''))

    circ16y1 = Number(circ16z1)
    circ16y2 = Number(circ16z2)
    circ16y3 = Number(circ16z3)
    circ16y4 = Number(circ16z4)

    var optionsDonutTop16 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[16]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ16y1,circ16y2,circ16y3,circ16y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ16 = new ApexCharts( document.querySelector('#circ16a'), optionsDonutTop16);
    circ16.render().then(function () {});



    //////////////////////////////////////////
    //Chart 17
    //////////////////////////////////////////

    let circ17z1= parseFloat(VotesMDCAlliance2018[17].replace(/,/g, ''))
    let circ17z2= parseFloat(VotesMDCT2018[17].replace(/,/g, ''))
    let circ17z3= parseFloat(VotesZANUPF2018[17].replace(/,/g, ''))
    let circ17z4= parseFloat(VotesOther2018[17].replace(/,/g, ''))

    circ17y1 = Number(circ17z1)
    circ17y2 = Number(circ17z2)
    circ17y3 = Number(circ17z3)
    circ17y4 = Number(circ17z4)

    var optionsDonutTop17 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[17]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ17y1,circ17y2,circ17y3,circ17y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ17 = new ApexCharts( document.querySelector('#circ17a'), optionsDonutTop17);
    circ17.render().then(function () {});

    
    //////////////////////////////////////////
    //Chart 18
    //////////////////////////////////////////

    let circ18z1= parseFloat(VotesMDCAlliance2018[18].replace(/,/g, ''))
    let circ18z2= parseFloat(VotesMDCT2018[18].replace(/,/g, ''))
    let circ18z3= parseFloat(VotesZANUPF2018[18].replace(/,/g, ''))
    let circ18z4= parseFloat(VotesOther2018[18].replace(/,/g, ''))

    circ18y1 = Number(circ18z1)
    circ18y2 = Number(circ18z2)
    circ18y3 = Number(circ18z3)
    circ18y4 = Number(circ18z4)

    var optionsDonutTop18 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[18]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ18y1,circ18y2,circ18y3,circ18y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ18 = new ApexCharts( document.querySelector('#circ18a'), optionsDonutTop18);
    circ18.render().then(function () {});


    //////////////////////////////////////////
    //Chart 19
    //////////////////////////////////////////

    let circ19z1= parseFloat(VotesMDCAlliance2018[19].replace(/,/g, ''))
    let circ19z2= parseFloat(VotesMDCT2018[19].replace(/,/g, ''))
    let circ19z3= parseFloat(VotesZANUPF2018[19].replace(/,/g, ''))
    let circ19z4= parseFloat(VotesOther2018[19].replace(/,/g, ''))

    circ19y1 = Number(circ19z1)
    circ19y2 = Number(circ19z2)
    circ19y3 = Number(circ19z3)
    circ19y4 = Number(circ19z4)

    var optionsDonutTop19 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[19]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ19y1,circ19y2,circ19y3,circ19y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ19 = new ApexCharts( document.querySelector('#circ19a'), optionsDonutTop19);
    circ19.render().then(function () {});


    //////////////////////////////////////////
    //Chart 20
    //////////////////////////////////////////

    let circ20z1= parseFloat(VotesMDCAlliance2018[20].replace(/,/g, ''))
    let circ20z2= parseFloat(VotesMDCT2018[20].replace(/,/g, ''))
    let circ20z3= parseFloat(VotesZANUPF2018[20].replace(/,/g, ''))
    let circ20z4= parseFloat(VotesOther2018[20].replace(/,/g, ''))

    circ20y1 = Number(circ20z1)
    circ20y2 = Number(circ20z2)
    circ20y3 = Number(circ20z3)
    circ20y4 = Number(circ20z4)

    var optionsDonutTop20 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[20]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ20y1,circ20y2,circ20y3,circ20y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ20 = new ApexCharts( document.querySelector('#circ20a'), optionsDonutTop20);
    circ20.render().then(function () {});

    
    //////////////////////////////////////////
    //Chart 21
    //////////////////////////////////////////

    let circ21z1= parseFloat(VotesMDCAlliance2018[21].replace(/,/g, ''))
    let circ21z2= parseFloat(VotesMDCT2018[21].replace(/,/g, ''))
    let circ21z3= parseFloat(VotesZANUPF2018[21].replace(/,/g, ''))
    let circ21z4= parseFloat(VotesOther2018[21].replace(/,/g, ''))

    circ21y1 = Number(circ21z1)
    circ21y2 = Number(circ21z2)
    circ21y3 = Number(circ21z3)
    circ21y4 = Number(circ21z4)

    var optionsDonutTop21 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[21]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ21y1,circ21y2,circ21y3,circ21y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ21 = new ApexCharts( document.querySelector('#circ21a'), optionsDonutTop21);
    circ21.render().then(function () {});


    //////////////////////////////////////////
    //Chart 22
    //////////////////////////////////////////

    let circ22z1= parseFloat(VotesMDCAlliance2018[22].replace(/,/g, ''))
    let circ22z2= parseFloat(VotesMDCT2018[22].replace(/,/g, ''))
    let circ22z3= parseFloat(VotesZANUPF2018[22].replace(/,/g, ''))
    let circ22z4= parseFloat(VotesOther2018[22].replace(/,/g, ''))

    circ22y1 = Number(circ22z1)
    circ22y2 = Number(circ22z2)
    circ22y3 = Number(circ22z3)
    circ22y4 = Number(circ22z4)

    var optionsDonutTop22 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[22]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ22y1,circ22y2,circ22y3,circ22y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ22 = new ApexCharts( document.querySelector('#circ22a'), optionsDonutTop22);
    circ22.render().then(function () {});



    //////////////////////////////////////////
    //Chart 23
    //////////////////////////////////////////

    let circ23z1= parseFloat(VotesMDCAlliance2018[23].replace(/,/g, ''))
    let circ23z2= parseFloat(VotesMDCT2018[23].replace(/,/g, ''))
    let circ23z3= parseFloat(VotesZANUPF2018[23].replace(/,/g, ''))
    let circ23z4= parseFloat(VotesOther2018[23].replace(/,/g, ''))

    circ23y1 = Number(circ23z1)
    circ23y2 = Number(circ23z2)
    circ23y3 = Number(circ23z3)
    circ23y4 = Number(circ23z4)

    var optionsDonutTop23 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[23]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ23y1,circ23y2,circ23y3,circ23y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ23 = new ApexCharts( document.querySelector('#circ23a'), optionsDonutTop23);
    circ23.render().then(function () {});


    //////////////////////////////////////////
    //Chart 24
    //////////////////////////////////////////

    let circ24z1= parseFloat(VotesMDCAlliance2018[24].replace(/,/g, ''))
    let circ24z2= parseFloat(VotesMDCT2018[24].replace(/,/g, ''))
    let circ24z3= parseFloat(VotesZANUPF2018[24].replace(/,/g, ''))
    let circ24z4= parseFloat(VotesOther2018[24].replace(/,/g, ''))

    circ24y1 = Number(circ24z1)
    circ24y2 = Number(circ24z2)
    circ24y3 = Number(circ24z3)
    circ24y4 = Number(circ24z4)

    var optionsDonutTop24 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[24]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ24y1,circ24y2,circ24y3,circ24y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ24 = new ApexCharts( document.querySelector('#circ24a'), optionsDonutTop24);
    circ24.render().then(function () {});



    //////////////////////////////////////////
    //Chart 25
    //////////////////////////////////////////


    let circ25z1= parseFloat(VotesMDCAlliance2018[25].replace(/,/g, ''))
    let circ25z2= parseFloat(VotesMDCT2018[25].replace(/,/g, ''))
    let circ25z3= parseFloat(VotesZANUPF2018[25].replace(/,/g, ''))
    let circ25z4= parseFloat(VotesOther2018[25].replace(/,/g, ''))

    circ25y1 = Number(circ25z1)
    circ25y2 = Number(circ25z2)
    circ25y3 = Number(circ25z3)
    circ25y4 = Number(circ25z4)

    var optionsDonutTop25 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[25]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ25y1,circ25y2,circ25y3,circ25y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ25 = new ApexCharts( document.querySelector('#circ25a'), optionsDonutTop25);
    circ25.render().then(function () {});


    //////////////////////////////////////////
    //Chart 26
    //////////////////////////////////////////

    let circ26z1= parseFloat(VotesMDCAlliance2018[26].replace(/,/g, ''))
    let circ26z2= parseFloat(VotesMDCT2018[26].replace(/,/g, ''))
    let circ26z3= parseFloat(VotesZANUPF2018[26].replace(/,/g, ''))
    let circ26z4= parseFloat(VotesOther2018[26].replace(/,/g, ''))

    circ26y1 = Number(circ26z1)
    circ26y2 = Number(circ26z2)
    circ26y3 = Number(circ26z3)
    circ26y4 = Number(circ26z4)

    var optionsDonutTop26 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[26]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ26y1,circ26y2,circ26y3,circ26y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ26 = new ApexCharts( document.querySelector('#circ26a'), optionsDonutTop26);
    circ26.render().then(function () {});


    //////////////////////////////////////////
    //Chart 27
    //////////////////////////////////////////

    let circ27z1= parseFloat(VotesMDCAlliance2018[27].replace(/,/g, ''))
    let circ27z2= parseFloat(VotesMDCT2018[27].replace(/,/g, ''))
    let circ27z3= parseFloat(VotesZANUPF2018[27].replace(/,/g, ''))
    let circ27z4= parseFloat(VotesOther2018[27].replace(/,/g, ''))

    circ27y1 = Number(circ27z1)
    circ27y2 = Number(circ27z2)
    circ27y3 = Number(circ27z3)
    circ27y4 = Number(circ27z4)

    var optionsDonutTop27 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[27]+" 2018 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ27y1,circ27y2,circ27y3,circ27y4
            ],
        
        
        labels: ['MDC A','MDC-T' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ27 = new ApexCharts( document.querySelector('#circ27a'), optionsDonutTop27);
    circ27.render().then(function () {});



    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    

 

 
  

}

function Chart2(Constituency,  Province,  WinningParty2018,  VotesCCC2022 ,  VotesMDCT2022,  VotesZANUPF2022,  VotesOther2022,  VotesCCC2022,  VotesMDCT2022,  VotesZANUPF2022,  VotesOther2022){

    
    //////////////////////////////////////////
    //Chart 0
    //////////////////////////////////////////
    let circ0z1= parseFloat(VotesCCC2022[0].replace(/,/g, ''))
    let circ0z2= parseFloat(VotesMDCT2022[0].replace(/,/g, ''))
    let circ0z3= parseFloat(VotesZANUPF2022[0].replace(/,/g, ''))
    let circ0z4= parseFloat(VotesOther2022[0].replace(/,/g, ''))

    circ0y1 = Number(circ0z1)
    circ0y2 = Number(circ0z2)
    circ0y3 = Number(circ0z3)
    circ0y4 = Number(circ0z4)

    var optionsDonutTop0 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[0]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ0y1,circ0y2,circ0y3,circ0y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ0 = new ApexCharts( document.querySelector('#circ0'), optionsDonutTop0);
    circ0.render().then(function () {});
    //////////////////////////////////////////
    //Chart 1
    //////////////////////////////////////////
    let circ1z1= parseFloat(VotesCCC2022[1].replace(/,/g, ''))
    let circ1z2= parseFloat(VotesMDCT2022[1].replace(/,/g, ''))
    let circ1z3= parseFloat(VotesZANUPF2022[1].replace(/,/g, ''))
    let circ1z4= parseFloat(VotesOther2022[1].replace(/,/g, ''))

    circ1y1 = Number(circ1z1)
    circ1y2 = Number(circ1z2)
    circ1y3 = Number(circ1z3)
    circ1y4 = Number(circ1z4)

    var optionsDonutTop1 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[1]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ1y1,circ1y2,circ1y3,circ1y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ1 = new ApexCharts( document.querySelector('#circ1'), optionsDonutTop1);
    circ1.render().then(function () {});
    //////////////////////////////////////////
    //Chart 2
    //////////////////////////////////////////
    let circ2z1= parseFloat(VotesCCC2022[2].replace(/,/g, ''))
    let circ2z2= parseFloat(VotesMDCT2022[2].replace(/,/g, ''))
    let circ2z3= parseFloat(VotesZANUPF2022[2].replace(/,/g, ''))
    let circ2z4= parseFloat(VotesOther2022[2].replace(/,/g, ''))

    circ2y1 = Number(circ2z1)
    circ2y2 = Number(circ2z2)
    circ2y3 = Number(circ2z3)
    circ2y4 = Number(circ2z4)

    var optionsDonutTop2 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[2]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ2y1,circ2y2,circ2y3,circ2y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ2 = new ApexCharts( document.querySelector('#circ2'), optionsDonutTop2);
    circ2.render().then(function () {});
 
    //////////////////////////////////////////
    //Chart 3
    //////////////////////////////////////////
    let circ3z1= parseFloat(VotesCCC2022[3].replace(/,/g, ''))
    let circ3z2= parseFloat(VotesMDCT2022[3].replace(/,/g, ''))
    let circ3z3= parseFloat(VotesZANUPF2022[3].replace(/,/g, ''))
    let circ3z4= parseFloat(VotesOther2022[3].replace(/,/g, ''))

    circ3y1 = Number(circ3z1)
    circ3y2 = Number(circ3z2)
    circ3y3 = Number(circ3z3)
    circ3y4 = Number(circ3z4)

    var optionsDonutTop3 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[3]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ3y1,circ3y2,circ3y3,circ3y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ3 = new ApexCharts( document.querySelector('#circ3'), optionsDonutTop3);
    circ3.render().then(function () {});

    //////////////////////////////////////////
    //Chart 4
    //////////////////////////////////////////
    let circ4z1= parseFloat(VotesCCC2022[4].replace(/,/g, ''))
    let circ4z2= parseFloat(VotesMDCT2022[4].replace(/,/g, ''))
    let circ4z3= parseFloat(VotesZANUPF2022[4].replace(/,/g, ''))
    let circ4z4= parseFloat(VotesOther2022[4].replace(/,/g, ''))

    circ4y1 = Number(circ4z1)
    circ4y2 = Number(circ4z2)
    circ4y3 = Number(circ4z3)
    circ4y4 = Number(circ4z4)

    var optionsDonutTop4 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[4]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ4y1,circ4y2,circ4y3,circ4y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ4 = new ApexCharts( document.querySelector('#circ4'), optionsDonutTop4);
    circ4.render().then(function () {});

    //////////////////////////////////////////
    //Chart 5
    //////////////////////////////////////////
    let circ5z1= parseFloat(VotesCCC2022[5].replace(/,/g, ''))
    let circ5z2= parseFloat(VotesMDCT2022[5].replace(/,/g, ''))
    let circ5z3= parseFloat(VotesZANUPF2022[5].replace(/,/g, ''))
    let circ5z4= parseFloat(VotesOther2022[5].replace(/,/g, ''))

    circ5y1 = Number(circ5z1)
    circ5y2 = Number(circ5z2)
    circ5y3 = Number(circ5z3)
    circ5y4 = Number(circ5z4)

    var optionsDonutTop5 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[5]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ5y1,circ5y2,circ5y3,circ5y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ5 = new ApexCharts( document.querySelector('#circ5'), optionsDonutTop5);
    circ5.render().then(function () {});


    //////////////////////////////////////////
    //Chart 6
    //////////////////////////////////////////
     let circ6z1= parseFloat(VotesCCC2022[6].replace(/,/g, ''))
    let circ6z2= parseFloat(VotesMDCT2022[6].replace(/,/g, ''))
    let circ6z3= parseFloat(VotesZANUPF2022[6].replace(/,/g, ''))
    let circ6z4= parseFloat(VotesOther2022[6].replace(/,/g, ''))

    circ6y1 = Number(circ6z1)
    circ6y2 = Number(circ6z2)
    circ6y3 = Number(circ6z3)
    circ6y4 = Number(circ6z4)

    var optionsDonutTop6 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[6]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ6y1,circ6y2,circ6y3,circ6y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ6 = new ApexCharts( document.querySelector('#circ6'), optionsDonutTop6);
    circ6.render().then(function () {});


    //////////////////////////////////////////
    //Chart 7
    //////////////////////////////////////////
     let circ7z1= parseFloat(VotesCCC2022[7].replace(/,/g, ''))
    let circ7z2= parseFloat(VotesMDCT2022[7].replace(/,/g, ''))
    let circ7z3= parseFloat(VotesZANUPF2022[7].replace(/,/g, ''))
    let circ7z4= parseFloat(VotesOther2022[7].replace(/,/g, ''))

    circ7y1 = Number(circ7z1)
    circ7y2 = Number(circ7z2)
    circ7y3 = Number(circ7z3)
    circ7y4 = Number(circ7z4)

    var optionsDonutTop7 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[7]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ7y1,circ7y2,circ7y3,circ7y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ7 = new ApexCharts( document.querySelector('#circ7'), optionsDonutTop7);
    circ7.render().then(function () {});


    //////////////////////////////////////////
    //Chart 8
    //////////////////////////////////////////
     let circ8z1= parseFloat(VotesCCC2022[8].replace(/,/g, ''))
    let circ8z2= parseFloat(VotesMDCT2022[8].replace(/,/g, ''))
    let circ8z3= parseFloat(VotesZANUPF2022[8].replace(/,/g, ''))
    let circ8z4= parseFloat(VotesOther2022[8].replace(/,/g, ''))

    circ8y1 = Number(circ8z1)
    circ8y2 = Number(circ8z2)
    circ8y3 = Number(circ8z3)
    circ8y4 = Number(circ8z4)

    var optionsDonutTop8 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[8]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ8y1,circ8y2,circ8y3,circ8y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ8 = new ApexCharts( document.querySelector('#circ8'), optionsDonutTop8);
    circ8.render().then(function () {});


    //////////////////////////////////////////
    //Chart 9
    //////////////////////////////////////////
     let circ9z1= parseFloat(VotesCCC2022[9].replace(/,/g, ''))
    let circ9z2= parseFloat(VotesMDCT2022[9].replace(/,/g, ''))
    let circ9z3= parseFloat(VotesZANUPF2022[9].replace(/,/g, ''))
    let circ9z4= parseFloat(VotesOther2022[9].replace(/,/g, ''))

    circ9y1 = Number(circ9z1)
    circ9y2 = Number(circ9z2)
    circ9y3 = Number(circ9z3)
    circ9y4 = Number(circ9z4)

    var optionsDonutTop9 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[9]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ9y1,circ9y2,circ9y3,circ9y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ9 = new ApexCharts( document.querySelector('#circ9'), optionsDonutTop9);
    circ9.render().then(function () {});


    //////////////////////////////////////////
    //Chart 10
    //////////////////////////////////////////
     let circ10z1= parseFloat(VotesCCC2022[10].replace(/,/g, ''))
    let circ10z2= parseFloat(VotesMDCT2022[10].replace(/,/g, ''))
    let circ10z3= parseFloat(VotesZANUPF2022[10].replace(/,/g, ''))
    let circ10z4= parseFloat(VotesOther2022[10].replace(/,/g, ''))

    circ10y1 = Number(circ10z1)
    circ10y2 = Number(circ10z2)
    circ10y3 = Number(circ10z3)
    circ10y4 = Number(circ10z4)

    var optionsDonutTop10 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[10]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ10y1,circ10y2,circ10y3,circ10y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ10 = new ApexCharts( document.querySelector('#circ10'), optionsDonutTop10);
    circ10.render().then(function () {});


    //////////////////////////////////////////
    //Chart 11
    //////////////////////////////////////////
     let circ11z1= parseFloat(VotesCCC2022[11].replace(/,/g, ''))
    let circ11z2= parseFloat(VotesMDCT2022[11].replace(/,/g, ''))
    let circ11z3= parseFloat(VotesZANUPF2022[11].replace(/,/g, ''))
    let circ11z4= parseFloat(VotesOther2022[11].replace(/,/g, ''))

    circ11y1 = Number(circ11z1)
    circ11y2 = Number(circ11z2)
    circ11y3 = Number(circ11z3)
    circ11y4 = Number(circ11z4)

    var optionsDonutTop11 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[11]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ11y1,circ11y2,circ11y3,circ11y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ11 = new ApexCharts( document.querySelector('#circ11'), optionsDonutTop11);
    circ11.render().then(function () {});


    //////////////////////////////////////////
    //Chart 12
    //////////////////////////////////////////
    
    let circ12z1= parseFloat(VotesCCC2022[12].replace(/,/g, ''))
    let circ12z2= parseFloat(VotesMDCT2022[12].replace(/,/g, ''))
    let circ12z3= parseFloat(VotesZANUPF2022[12].replace(/,/g, ''))
    let circ12z4= parseFloat(VotesOther2022[12].replace(/,/g, ''))

    circ12y1 = Number(circ12z1)
    circ12y2 = Number(circ12z2)
    circ12y3 = Number(circ12z3)
    circ12y4 = Number(circ12z4)

    var optionsDonutTop12 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[12]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ12y1,circ12y2,circ12y3,circ12y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ12 = new ApexCharts( document.querySelector('#circ12'), optionsDonutTop12);
    circ12.render().then(function () {});


    //////////////////////////////////////////
    //Chart 13
    //////////////////////////////////////////

    let circ13z1= parseFloat(VotesCCC2022[13].replace(/,/g, ''))
    let circ13z2= parseFloat(VotesMDCT2022[13].replace(/,/g, ''))
    let circ13z3= parseFloat(VotesZANUPF2022[13].replace(/,/g, ''))
    let circ13z4= parseFloat(VotesOther2022[13].replace(/,/g, ''))

    circ13y1 = Number(circ13z1)
    circ13y2 = Number(circ13z2)
    circ13y3 = Number(circ13z3)
    circ13y4 = Number(circ13z4)

    var optionsDonutTop13 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[13]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ13y1,circ13y2,circ13y3,circ13y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ13 = new ApexCharts( document.querySelector('#circ13'), optionsDonutTop13);
    circ13.render().then(function () {});


    //////////////////////////////////////////
    //Chart 14
    //////////////////////////////////////////

    let circ14z1= parseFloat(VotesCCC2022[14].replace(/,/g, ''))
    let circ14z2= parseFloat(VotesMDCT2022[14].replace(/,/g, ''))
    let circ14z3= parseFloat(VotesZANUPF2022[14].replace(/,/g, ''))
    let circ14z4= parseFloat(VotesOther2022[14].replace(/,/g, ''))

    circ14y1 = Number(circ14z1)
    circ14y2 = Number(circ14z2)
    circ14y3 = Number(circ14z3)
    circ14y4 = Number(circ14z4)

    var optionsDonutTop14 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[14]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ14y1,circ14y2,circ14y3,circ14y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ14 = new ApexCharts( document.querySelector('#circ14'), optionsDonutTop14);
    circ14.render().then(function () {});


    //////////////////////////////////////////
    //Chart 15
    //////////////////////////////////////////

    let circ15z1= parseFloat(VotesCCC2022[15].replace(/,/g, ''))
    let circ15z2= parseFloat(VotesMDCT2022[15].replace(/,/g, ''))
    let circ15z3= parseFloat(VotesZANUPF2022[15].replace(/,/g, ''))
    let circ15z4= parseFloat(VotesOther2022[15].replace(/,/g, ''))

    circ15y1 = Number(circ15z1)
    circ15y2 = Number(circ15z2)
    circ15y3 = Number(circ15z3)
    circ15y4 = Number(circ15z4)

    var optionsDonutTop15 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[15]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ15y1,circ15y2,circ15y3,circ15y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ15 = new ApexCharts( document.querySelector('#circ15'), optionsDonutTop15);
    circ15.render().then(function () {});


    //////////////////////////////////////////
    //Chart 16
    //////////////////////////////////////////

    let circ16z1= parseFloat(VotesCCC2022[16].replace(/,/g, ''))
    let circ16z2= parseFloat(VotesMDCT2022[16].replace(/,/g, ''))
    let circ16z3= parseFloat(VotesZANUPF2022[16].replace(/,/g, ''))
    let circ16z4= parseFloat(VotesOther2022[16].replace(/,/g, ''))

    circ16y1 = Number(circ16z1)
    circ16y2 = Number(circ16z2)
    circ16y3 = Number(circ16z3)
    circ16y4 = Number(circ16z4)

    var optionsDonutTop16 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[16]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ16y1,circ16y2,circ16y3,circ16y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ16 = new ApexCharts( document.querySelector('#circ16'), optionsDonutTop16);
    circ16.render().then(function () {});



    //////////////////////////////////////////
    //Chart 17
    //////////////////////////////////////////

    let circ17z1= parseFloat(VotesCCC2022[17].replace(/,/g, ''))
    let circ17z2= parseFloat(VotesMDCT2022[17].replace(/,/g, ''))
    let circ17z3= parseFloat(VotesZANUPF2022[17].replace(/,/g, ''))
    let circ17z4= parseFloat(VotesOther2022[17].replace(/,/g, ''))

    circ17y1 = Number(circ17z1)
    circ17y2 = Number(circ17z2)
    circ17y3 = Number(circ17z3)
    circ17y4 = Number(circ17z4)

    var optionsDonutTop17 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[17]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ17y1,circ17y2,circ17y3,circ17y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ17 = new ApexCharts( document.querySelector('#circ17'), optionsDonutTop17);
    circ17.render().then(function () {});

    
    //////////////////////////////////////////
    //Chart 18
    //////////////////////////////////////////

    let circ18z1= parseFloat(VotesCCC2022[18].replace(/,/g, ''))
    let circ18z2= parseFloat(VotesMDCT2022[18].replace(/,/g, ''))
    let circ18z3= parseFloat(VotesZANUPF2022[18].replace(/,/g, ''))
    let circ18z4= parseFloat(VotesOther2022[18].replace(/,/g, ''))

    circ18y1 = Number(circ18z1)
    circ18y2 = Number(circ18z2)
    circ18y3 = Number(circ18z3)
    circ18y4 = Number(circ18z4)

    var optionsDonutTop18 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[18]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ18y1,circ18y2,circ18y3,circ18y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ18 = new ApexCharts( document.querySelector('#circ18'), optionsDonutTop18);
    circ18.render().then(function () {});


    //////////////////////////////////////////
    //Chart 19
    //////////////////////////////////////////

    let circ19z1= parseFloat(VotesCCC2022[19].replace(/,/g, ''))
    let circ19z2= parseFloat(VotesMDCT2022[19].replace(/,/g, ''))
    let circ19z3= parseFloat(VotesZANUPF2022[19].replace(/,/g, ''))
    let circ19z4= parseFloat(VotesOther2022[19].replace(/,/g, ''))

    circ19y1 = Number(circ19z1)
    circ19y2 = Number(circ19z2)
    circ19y3 = Number(circ19z3)
    circ19y4 = Number(circ19z4)

    var optionsDonutTop19 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[19]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ19y1,circ19y2,circ19y3,circ19y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ19 = new ApexCharts( document.querySelector('#circ19'), optionsDonutTop19);
    circ19.render().then(function () {});


    //////////////////////////////////////////
    //Chart 20
    //////////////////////////////////////////

    let circ20z1= parseFloat(VotesCCC2022[20].replace(/,/g, ''))
    let circ20z2= parseFloat(VotesMDCT2022[20].replace(/,/g, ''))
    let circ20z3= parseFloat(VotesZANUPF2022[20].replace(/,/g, ''))
    let circ20z4= parseFloat(VotesOther2022[20].replace(/,/g, ''))

    circ20y1 = Number(circ20z1)
    circ20y2 = Number(circ20z2)
    circ20y3 = Number(circ20z3)
    circ20y4 = Number(circ20z4)

    var optionsDonutTop20 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[20]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ20y1,circ20y2,circ20y3,circ20y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ20 = new ApexCharts( document.querySelector('#circ20'), optionsDonutTop20);
    circ20.render().then(function () {});

    
    //////////////////////////////////////////
    //Chart 21
    //////////////////////////////////////////

    let circ21z1= parseFloat(VotesCCC2022[21].replace(/,/g, ''))
    let circ21z2= parseFloat(VotesMDCT2022[21].replace(/,/g, ''))
    let circ21z3= parseFloat(VotesZANUPF2022[21].replace(/,/g, ''))
    let circ21z4= parseFloat(VotesOther2022[21].replace(/,/g, ''))

    circ21y1 = Number(circ21z1)
    circ21y2 = Number(circ21z2)
    circ21y3 = Number(circ21z3)
    circ21y4 = Number(circ21z4)

    var optionsDonutTop21 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[21]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ21y1,circ21y2,circ21y3,circ21y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ21 = new ApexCharts( document.querySelector('#circ21'), optionsDonutTop21);
    circ21.render().then(function () {});


    //////////////////////////////////////////
    //Chart 22
    //////////////////////////////////////////

    let circ22z1= parseFloat(VotesCCC2022[22].replace(/,/g, ''))
    let circ22z2= parseFloat(VotesMDCT2022[22].replace(/,/g, ''))
    let circ22z3= parseFloat(VotesZANUPF2022[22].replace(/,/g, ''))
    let circ22z4= parseFloat(VotesOther2022[22].replace(/,/g, ''))

    circ22y1 = Number(circ22z1)
    circ22y2 = Number(circ22z2)
    circ22y3 = Number(circ22z3)
    circ22y4 = Number(circ22z4)

    var optionsDonutTop22 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[22]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ22y1,circ22y2,circ22y3,circ22y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ22 = new ApexCharts( document.querySelector('#circ22'), optionsDonutTop22);
    circ22.render().then(function () {});



    //////////////////////////////////////////
    //Chart 23
    //////////////////////////////////////////

    let circ23z1= parseFloat(VotesCCC2022[23].replace(/,/g, ''))
    let circ23z2= parseFloat(VotesMDCT2022[23].replace(/,/g, ''))
    let circ23z3= parseFloat(VotesZANUPF2022[23].replace(/,/g, ''))
    let circ23z4= parseFloat(VotesOther2022[23].replace(/,/g, ''))

    circ23y1 = Number(circ23z1)
    circ23y2 = Number(circ23z2)
    circ23y3 = Number(circ23z3)
    circ23y4 = Number(circ23z4)

    var optionsDonutTop23 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[23]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ23y1,circ23y2,circ23y3,circ23y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ23 = new ApexCharts( document.querySelector('#circ23'), optionsDonutTop23);
    circ23.render().then(function () {});


    //////////////////////////////////////////
    //Chart 24
    //////////////////////////////////////////

    let circ24z1= parseFloat(VotesCCC2022[24].replace(/,/g, ''))
    let circ24z2= parseFloat(VotesMDCT2022[24].replace(/,/g, ''))
    let circ24z3= parseFloat(VotesZANUPF2022[24].replace(/,/g, ''))
    let circ24z4= parseFloat(VotesOther2022[24].replace(/,/g, ''))

    circ24y1 = Number(circ24z1)
    circ24y2 = Number(circ24z2)
    circ24y3 = Number(circ24z3)
    circ24y4 = Number(circ24z4)

    var optionsDonutTop24 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[24]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ24y1,circ24y2,circ24y3,circ24y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ24 = new ApexCharts( document.querySelector('#circ24'), optionsDonutTop24);
    circ24.render().then(function () {});



    //////////////////////////////////////////
    //Chart 25
    //////////////////////////////////////////


    let circ25z1= parseFloat(VotesCCC2022[25].replace(/,/g, ''))
    let circ25z2= parseFloat(VotesMDCT2022[25].replace(/,/g, ''))
    let circ25z3= parseFloat(VotesZANUPF2022[25].replace(/,/g, ''))
    let circ25z4= parseFloat(VotesOther2022[25].replace(/,/g, ''))

    circ25y1 = Number(circ25z1)
    circ25y2 = Number(circ25z2)
    circ25y3 = Number(circ25z3)
    circ25y4 = Number(circ25z4)

    var optionsDonutTop25 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[25]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ25y1,circ25y2,circ25y3,circ25y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ25 = new ApexCharts( document.querySelector('#circ25'), optionsDonutTop25);
    circ25.render().then(function () {});


    //////////////////////////////////////////
    //Chart 26
    //////////////////////////////////////////

    let circ26z1= parseFloat(VotesCCC2022[26].replace(/,/g, ''))
    let circ26z2= parseFloat(VotesMDCT2022[26].replace(/,/g, ''))
    let circ26z3= parseFloat(VotesZANUPF2022[26].replace(/,/g, ''))
    let circ26z4= parseFloat(VotesOther2022[26].replace(/,/g, ''))

    circ26y1 = Number(circ26z1)
    circ26y2 = Number(circ26z2)
    circ26y3 = Number(circ26z3)
    circ26y4 = Number(circ26z4)

    var optionsDonutTop26 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[26]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ26y1,circ26y2,circ26y3,circ26y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ26 = new ApexCharts( document.querySelector('#circ26'), optionsDonutTop26);
    circ26.render().then(function () {});


    //////////////////////////////////////////
    //Chart 27
    //////////////////////////////////////////

    let circ27z1= parseFloat(VotesCCC2022[27].replace(/,/g, ''))
    let circ27z2= parseFloat(VotesMDCT2022[27].replace(/,/g, ''))
    let circ27z3= parseFloat(VotesZANUPF2022[27].replace(/,/g, ''))
    let circ27z4= parseFloat(VotesOther2022[27].replace(/,/g, ''))

    circ27y1 = Number(circ27z1)
    circ27y2 = Number(circ27z2)
    circ27y3 = Number(circ27z3)
    circ27y4 = Number(circ27z4)

    var optionsDonutTop27 = {
        chart: {      
          type: "donut",
          width :"100%" ,
          
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
        colors: ['#fff3cd',    '#f8d7da',    '#d1e7dd',    '#cfe2ff'],
         title: {
                text: Constituency[27]+" 2022 Results",
                align: 'left',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',                
                    color:  '#000000'
                }
            },
            series: [
            circ27y1,circ27y2,circ27y3,circ27y4
            ],
        
        
        labels: ['CCC','MDC-A' ,'Zanu Pf' ,'Other'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            labels: {
                colors: 'black'        
            }
        }
      };

    
    circ27 = new ApexCharts( document.querySelector('#circ27'), optionsDonutTop27);
    circ27.render().then(function () {});



    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    

 

 
  

}









