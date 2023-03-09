window.Apex = {
  dataLabels: {
    enabled: false
  }
};

//main artcle feed rss
var xhr6 = new XMLHttpRequest();

xhr6.open("GET", "https://crnpathzwdash.herokuapp.com/articles", true);
//xhr6.open("GET", "http://127.0.0.1:8081/bustop", true);
xhr6.setRequestHeader("Content-Type", "application/json");
xhr6.send();
xhr6.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log( xhr6.responseText)
    var jsonResponse = JSON.parse(xhr6.responseText);

    let Dates        = jsonResponse.Dates
    let Author       = jsonResponse.Author
    let OriginalLink = jsonResponse.OriginalLink
    let CoverImage   = jsonResponse.CoverImage
    let Para1        = jsonResponse.Para1
    let Para2        = jsonResponse.Para2
    let Para3        = jsonResponse.Para3
    let Para4        = jsonResponse.Para4
    let Category     = jsonResponse.Category
    let Title        = jsonResponse.Title
    let AuthorImage  = jsonResponse.AuthorImage
    
    NormalArticle2(OriginalLink, CoverImage, Category, Dates, Title, Para1, AuthorImage, Author);
    NormalArticle3(OriginalLink, CoverImage, Category, Dates, Title, Para1, AuthorImage, Author);
  }
};

//side article
function NormalArticle2(OriginalLink, CoverImage, Category, Dates, Title, Para1, AuthorImage, Author) {

  //console.log("boo" + CoverImage[0])
  //console.log("boo" + CoverImage.length)

  console.log('OriginalLink' + OriginalLink[0])
   console.log('CoverImage' +  CoverImage[0])
   /*console.log('Category' +  Category)
   console.log('Dates' +  Dates)
   console.log('OriginalLink' +  OriginalLink)
   console.log('Title' +  Title)
   console.log('Para1' +  Para1)
   console.log('AuthorImage' +  AuthorImage)
   console.log('Author' +  Author)*/

  let nDates = Dates

  console.log(nDates.slice(31));

  var text = "";
  for (var i = 1; i < 4; i++) {
    console.log('OriginalLink' + OriginalLink[i])

    text += 

    '<div class="blog-side-item align-items-center">'+
    '<div class="left">'+
    '<img src="'+
    CoverImage[i] +

    '" alt="Blog">'+
    '</div>'+
    '<div class="right">'+
    '<ul>'+
    '<li>'+
    '<i class="icofont-calendar"></i>'+
    '<span>'+
    Dates[i] +
    '</span>'+
    '</li>'+
    '<li>'+
    '<i class="icofont-user-alt-4"></i>'+
    '<span>By:</span>'+
    '<a href="#">'+
    Author[i] +
    'Admin</a>'+
    '</li>'+
    '</ul>'+
    '<h3>'+
    '<a href="'+
    OriginalLink[i]+
    '">'+

    Title[i]+

    '</a>'+
    '</h3>'+
    '<a class="blog-btn" href="'+
    OriginalLink[i]+
    '">'+
    'Read More'+
    '<i class="icofont-long-arrow-right"></i>'+
    '</a>'+
    '</div>'+
    '</div>';





  }

  document.getElementById("dateUpdate2").innerHTML = text

}

//main artilce generation

function NormalArticle3(OriginalLink, CoverImage, Category, Dates, Title, Para1, AuthorImage, Author) {

  //console.log("boo" + CoverImage[0])
  //console.log("boo" + CoverImage.length)

  console.log('OriginalLink' + OriginalLink[0])
   console.log('CoverImage' +  CoverImage[0])
   /*console.log('Category' +  Category)
   console.log('Dates' +  Dates)
   console.log('OriginalLink' +  OriginalLink)
   console.log('Title' +  Title)
   console.log('Para1' +  Para1)
   console.log('AuthorImage' +  AuthorImage)
   console.log('Author' +  Author)*/

  let nDates = Dates

  console.log(nDates.slice(31));

  var text = "";
  for (var i = 0; i < 1; i++) {
    console.log('OriginalLink' + OriginalLink[i])

    text += 

'<div class="blog-item">'+
'<div class="top">'+
'<a href="'+

OriginalLink[i]+

'">'+
'<img src="'+
CoverImage[i] +
'" alt="Blog">'+
'</a>'+
'</div>'+
'<div class="bottom">'+
'<ul>'+
'<li>'+
'<i class="icofont-calendar"></i>'+
'<span>'+
Dates[i] +
'</span>'+
'</li>'+
'<li>'+
'<i class="icofont-user-alt-4"></i>'+
'<span>By:</span>'+
'<a href="#">'+
Author[i] +

'</a>'+
'</li>'+
'</ul>'+
'<h3>'+
'<a href="'+
OriginalLink[i]+
'">'+
Title[i]+
'</a>'+
'</h3>'+
'<p>'+
Para1[i]+

'</p>'+
'<a class="blog-btn" href="'
OriginalLink[i]+
'">'+
'Read More'+
'<i class="icofont-long-arrow-right"></i>'+
'</a>'+
'</div>'+
'</div>';



  }

  document.getElementById("dateUpdate3").innerHTML = text

}

//main page headline feed
var xhr7 = new XMLHttpRequest();
//xhr7.withCredentials = true;

xhr7.open("GET", "https://crnpathzwdash.herokuapp.com/mainheader", true);
//xhr7.open("GET", "http://127.0.0.1:8081/mainheader", true);
xhr7.setRequestHeader("Content-Type", "application/json");
xhr7.send();
xhr7.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {    
    var jsonResponse = JSON.parse(xhr7.responseText);


  let FirstPost             = jsonResponse.FirstPost
  let PostNumber            = jsonResponse.PostNumber
  let BigBackgroundImage    = jsonResponse.BigBackgroundImage
  let SmallBackgroundImage  = jsonResponse.SmallBackgroundImage
  let Link                  = jsonResponse.Link
  let Category              = jsonResponse.Category 
  let Title                 = jsonResponse.Title    
  let embedLink             = jsonResponse.EmbedLink     


  MainHeaderBuilder(FirstPost,PostNumber,BigBackgroundImage,SmallBackgroundImage,Link,Category,Title,embedLink)

  }
  // todo upadate UI with an error mesage
};


//recoverd vs new cases mulit bar chart
function MainHeaderBuilder(FirstPost,PostNumber,BigBackgroundImage,SmallBackgroundImage,Link,Category,Title,embedLink) {

  //console.log("boo" + PostNumber[0])
  //console.log("boo" + PostNumber.length)
  

  var text = "";
  var textSideBar = "";
  
  for (var i = 0; i < PostNumber.length; i++) {

    //chose the type of article to create
  if (Category[i] == "svg") {
    //  block of code to be executed if Category[i]1 is true
  }else if (Category[i] == "video") {
    //  block of code to be executed if the condition1 is false and condition2 is true

    text += '<div class="tab-pane fade '+
            FirstPost[i]+
            '" id="post-'+
            PostNumber[i]+
            '" role="tabpanel" aria-labelledby="post-'
            PostNumber[i]+
            '-tab">'+       
            '<a href="'+
            Link[i]+
            '" class="btn "><i class="fa fa-play" aria-hidden="true"></i></a>'+
            '<div class="post-content">'+
            '<div class="second-row">'+
            '<iframe  src="'+            
            embedLink[i]+
            '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
            '</div>'+       
            '<a href="'+
            Link[i]+
            '" class="post-title">'+
            Title[i]+
            '</a>' +
            '<div class="post-meta d-flex">' +
            '</div>' +
            '</div>' +
            '<span class="video-duration"></span>' +
            '</div>' +
            '</div>'  ;

    } else {
    
        text += '<div class="tab-pane fade '+
        FirstPost[i]+
        '" id="post-'+
        PostNumber[i]+
        '" role="tabpanel" aria-labelledby="post-'+
        PostNumber[i]+
        '-tab">'+
        '<div class="single-feature-post video-post bg-img" style="background-image: url('+
        BigBackgroundImage[i]+
        ');">'+
        '<a href="'+
        Link[i]+
        '" class="btn "><i class="fa fa-play" aria-hidden="true"></i></a>'+
        '<div class="post-content">'+
        '<a href="#" class="post-cata">'+
        Category[i]+
        '</a>'+
        '<a href="'+
        Link[i]+
        '" class="post-title">'+
        Title[i]+
        '</a>' +
        '<div class="post-meta d-flex">' +
        '</div>' +
        '</div>' +
        '<span class="video-duration"></span>' +
        '</div>' +
        '</div>' ;
    }  
    //create sidebar

    textSideBar += '<li class="nav-item">' +
                '<a class="nav-link active" id="post-' +
                PostNumber[i]+
                '-tab" data-toggle="pill" href="#post-'+
                PostNumber[i]+
                '" role="tab" aria-controls="post-'+
                PostNumber[i]+
                '" aria-selected="true">'+
                '<div class="single-blog-post style-2 d-flex align-items-center">'+
                '<div class="post-thumbnail">'+
                '<img src="'+
                SmallBackgroundImage[i]+
                '" alt="">'+
                '</div>'+
                '<div class="post-content">'+
                '<h6 class="post-title">'+
                Title[i]+
                '</h6>'+
                '<div class="post-meta d-flex justify-content-between">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</a>'+
                '</li>';
  }
  //update main header
  //document.getElementById("UpdatemMainHeader").innerHTML = text;
  //upadate sidebar
  document.getElementById("UpdatemMainHeaderSide").innerHTML = textSideBar;

  //console.log(text)
  //console.log(textSideBar)

}

//////////////TrendingVideos//////////////
//////////////////////////////////////////
var xhr8 = new XMLHttpRequest();
//xhr8.withCredentials = true;

xhr8.open("GET", "https://crnpathzwdash.herokuapp.com/trendingvideos", true);
//xhr8.open("GET", "http://127.0.0.1:8081/trendingvideos", true);
xhr8.setRequestHeader("Content-Type", "application/json");
xhr8.send();
xhr8.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log( xhr8.responseText)
    var jsonResponse = JSON.parse(xhr8.responseText);  
  
  let BigBackgroundImage    = jsonResponse.BigBackgroundImage  
  let Link                  = jsonResponse.Link
  let Category              = jsonResponse.Category 
  let Title                 = jsonResponse.Title    

  TrendingVideos(BigBackgroundImage,Link,Category,Title)

  }
  // todo upadate UI with an error mesage

};


//recoverd vs new cases mulit bar chart
function TrendingVideos(BigBackgroundImage,Link,Category,Title) {

  //console.log("boo" + Link[0])
  //console.log("boo" + Link.length)  

  var text = "";
  

  var text = "";
  for (var i = 0; i < Link.length; i++) {

    text += '<div class="col-12 col-md-4">'+
            '<div class="single-post-area mb-80">'+
            '<div class="post-thumbnail">'+
            '<img src="'+
            BigBackgroundImage[i]+
            '" alt="">'+
            
            '</div>'+
            '<div class="post-content">'+
            '<a href="'+
            Link[i]+
            '" class="post-cata cata-sm cata-success">'+
            Category[i]+
            '</a>'+
            '<a href="single-post.html" class="post-title">'+
            Title[i]+
            '</a>'+
            '<div class="post-meta d-flex">              '+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';


  }

  //update main header
  document.getElementById("TrendingVideos").innerHTML = text;
  

}


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
                color:  '#ffffff'
            }
        },
    series: [9,29,17,3,7,12,7,4,7,8],
    labels: ['Bulawayo','Harare','Manicaland','Mashonaland Central','Mashonaland East','Mashonaland West','Masvingo','Matabeleland North','Matabeleland South','Midlands'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        labels: {
            colors: 'ffffff'        
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
            colors: 'ffffff'        
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
      align: "left"
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