window.Apex = {
  dataLabels: {
    enabled: false
  }
};



///////////End of Trending Videos/////////
//////////////////////////////////////////

/////Partners Page////////////////////////
//////////////////////////////////////////

var xhr9 = new XMLHttpRequest();
//xhr8.withCredentials = true;

xhr9.open("GET", "https://crnpathzwdash.herokuapp.com/partners", true);
//xhr8.open("GET", "http://127.0.0.1:8081/trendingvideos", true);
xhr9.setRequestHeader("Content-Type", "application/json");
xhr9.send();
xhr9.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log( xhr8.responseText)
    var jsonResponse = JSON.parse(xhr9.responseText);  
  
  let BigBackgroundImage    = jsonResponse.CoverImage  
  let Link                  = jsonResponse.OriginalLink
  let Category              = jsonResponse.Category 
  let Title                 = jsonResponse.Title    
  let Author                 = jsonResponse.Author    
  let Dates                 = jsonResponse.Dates    
  let Para1                 = jsonResponse.Para1    

  PartnersPage(BigBackgroundImage,Link,Category,Title,Author,Dates,Para1)

  }
  // todo upadate UI with an error mesage

};


//recoverd vs new cases mulit bar chart
function PartnersPage(BigBackgroundImage,Link,Category,Title,Author,Dates,Para1) {

  console.log("partners" + Link[0])
  //console.log("boo" + Link.length)  

  var text = "";
  

  var text = "";
  for (var i = 0; i < Link.length; i++) {

    text +=

      '<div class="row align-items-center">'+
      '<div class="col-lg-6">'+
      '<div class="about-img">'+
      '<img src="'+
      BigBackgroundImage[i]+
      '" alt="About">'+
      '</div>'+
      '</div>'+
      '<div class="col-lg-6">'+
      '<div class="about-content">'+
      '<div class="section-title">'+
      '<span class="sub-title"></span>'+
      '<h2>'+
      Title[i]+      
      '</h2>'+
      '<p>'+
      Para1[i] +
      '</p>'+
      '</div>'+
      '<ul class="align-items-center">'+
      '<li>'+
      
      '<span>'+
      Author[i]+
      '</span>'+
      '</li>'+
      '<li>'+
      '<h3>'+
      Dates[i]+
      '</h3>'+      
      '</li>'+
      '</ul>'+
      '</div>'+
      '</div>'+
      '</div>';



  }

  //update main header
  document.getElementById("partners").innerHTML = text;
  

}
/////End of Partners Page///









