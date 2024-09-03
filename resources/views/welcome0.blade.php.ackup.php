<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/image/ndcproject.ico" type="image/vnd.microsoft.icon" style="background-color: red">


        <title>NDC Projects</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script type="text/javascript" src="/js/validateinput.js"></script>
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <script type="text/javascript" src="/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/js/jquery.min.js"></script>
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script src="assets/pspdfkit.js"></script>
  <!-- load jQuery -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
    <meta name="csrf-token" content="{{ csrf_token() }}" />
  <style>
  body {
      font: 400 15px Lato, sans-serif;
      line-height: 1.8;
      color: #818181;
      font-family: Arial, Helvetica, sans-serif;
  }
  h2 {
      font-size: 24px;
      text-transform: uppercase;
      color: #303030;
      font-weight: 600;
      margin-bottom: 30px;
  }
  h4 {
      font-size: 19px;
      line-height: 1.375em;
      color: #303030;
      font-weight: 400;
      margin-bottom: 30px;
  }  
  .jumbotron {
      background-color: rgb(106, 90, 205);
      color: #fff;
      padding: 100px 25px;
      font-family: Montserrat, sans-serif;
  }
  .container-fluid {
      padding: 60px 50px;
  }
  .bg-grey {
      background-color: #f6f6f6;
  }
  .logo-small {
      color: rgb(106, 90, 205);
      font-size: 50px;
  }
  .logo {
      color: rgb(106, 90, 205);
      font-size: 200px;
  }
  .thumbnail {
      padding: 0 0 15px 0;
      border: none;
      border-radius: 0;
  }
  .thumbnail img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
  }
  .carousel-control.right, .carousel-control.left {
      background-image: none;
      color: rgb(106, 90, 205);
  }
  .carousel-indicators li {
      border-color: rgb(106, 90, 205);
  }
  .carousel-indicators li.active {
      background-color: rgb(106, 90, 205);
  }
  .item h4 {
      font-size: 19px;
      line-height: 1.375em;
      font-weight: 400;
      font-style: italic;
      margin: 70px 0;
  }
  .item span {
      font-style: normal;
  }
  .panel {
      border: 1px solid rgb(106, 90, 205); 
      border-radius:0 !important;
      transition: box-shadow 0.5s;
  }
  .panel:hover {
      box-shadow: 5px 0px 40px rgba(0,0,0, .2);
  }
  .panel-footer .btn:hover {
      border: 1px solid rgb(106, 90, 205);
      background-color: #fff !important;
      color: rgb(106, 90, 205);
  }
  .panel-heading {
      color: #fff !important;
      background-color: rgb(106, 90, 205) !important;
      padding: 25px;
      border-bottom: 1px solid transparent;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
  }
  .panel-footer {
      background-color: white !important;
  }
  .panel-footer h3 {
      font-size: 32px;
  }
  .panel-footer h4 {
      color: #aaa;
      font-size: 14px;
  }
  .panel-footer .btn {
      margin: 15px 0;
      background-color: rgb(106, 90, 205);
      color: #fff;
  }
  .navbar {
      margin-bottom: 0;
      /*background-color: #04AA6D;*/
      background-color: #111;
      z-index: 9999;
      border: 0;
      font-size: 12px !important;
      line-height: 1.42857143 !important;
      letter-spacing: 2px;
      border-radius: 0;
      font-family: Montserrat, sans-serif;
      display: block;

  }
  .navbar li a, .navbar .navbar-brand {
      color: #fff !important;
  }
  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: rgb(106, 90, 205) !important;
      background-color: #fff !important;
  }
  .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #fff !important;
  }
  footer .glyphicon {
      font-size: 20px;
      margin-bottom: 20px;
      color: rgb(106, 90, 205);
      
  }
  .slideanim {visibility:hidden;}
  .slide {
      animation-name: slide;
      -webkit-animation-name: slide;
      animation-duration: 1s;
      -webkit-animation-duration: 1s;
      visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
        width: 100%;
        margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
        font-size: 150px;
    }
  }

  #myCarousel{
            /*display: flex;*/
            /*flex-direction: row;*/
            font-size: 30px;
            color: green;
            /*border: 4px dashed green;*/
            padding: 5px;
            width: auto;}
 
  #myCarousel div {
            border-radius: 5px red;
            margin: 10px 20px ;
            width: 200px;
            display: block;
        }

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
  font-size: small;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

/* HTML: <div class="loader"></div> */
.live {
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #0004;
  animation: l1 1s infinite;
}
@keyframes l1 {
    100% {box-shadow: 0 0 0 30px #0000}
}

/*loader*/
/* HTML: <div class="loader"></div> */
#loader {
  margin: 300px 0 0 50%;
  width: 50px;
  --b: 50px; 
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%,#04AA6D) content-box;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
    radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
  -webkit-mask-composite: destination-in;
          mask-composite: intersect;
  animation:l4 1s infinite steps(10);
}
@keyframes l4 {to{transform: rotate(1turn)}}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 100px 300px;
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

/*.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}*/

.tooltiptext {
  visibility: hidden;
  width: 170px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 9999;
}
.tooltipx .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}

.tooltipx:hover .tooltiptext {
  visibility: visible;
}

* {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 48%;
  padding: 10px;
  margin: 2px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #skyblue;
  cursor: pointer;
}

.btn:hover {
  background-color: #skyblue;
}

.btn.active {
  background-color: skyblue;
  color: white;
}

h2{
  color: white;
}
h3{
  text-transform: uppercase;
  color: skyblue;
}
.file-icon {
            font-size: 28px; /* Increased font size */
            margin: 5px;
        }
  </style>
}
</head>
<body id="ndcprojects" data-spy="scroll" data-target=".navbar" data-offset="60" style="background-color:#333">

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <img src="/image/mint.png" alt="NDLE" class="img-responsive img-rounded" style="width: 200px; float: left; margin-top: 10px;">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/">Home</a></li>
        <li><a onclick="register_project()">Register_New_Project</a> </li>
        <li><a href="#Complated">Complated</a></li>
        <li><a href="#Inprogress">Inprogress</a></li>
        <li><a href="#Future">Future</a></li>
      </ul>
    </div>
  </div>
</nav>
<div id="monitoring" class="container-fluid" style="margin-left: px;">
   <div id="btnContainer">
  <button class="btn" onclick="listView()"><i class="fa fa-bars"></i> List</button> 
  <button class="btn active" onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button>
  <label class="" style="float: right;"><h1 style="margin-right: 50px;"><small style="color: skyblue;">National Data Center Project Archive</small></h1></label>
</div>
    <div class="text-left">
    <h3 id="Complated">Complated</h3>
  </div>

<div class="row" id="Complatedlist">
 
</div>

<br>
<div class="text-left" id="Inprogress">
    <h3>Inprogress</h3>
  </div>
  <br>

<div class="row"  id="Inprogresslist">
   
  
</div>

<br>
<div class="text-left">
    <h3 id="Future">Future</h3>
  </div>
  <br>

<div class="row"   id="Futurelist">
  
</div>

</div>
        <!-- Delete modal  -->
        <div id="deletemodal" class="modal fade" role="dialog" style = "top: 50px; z-index: 10040;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <!-- <button type="button" class="btn-info" data-dismiss="modal">ይቅር</button> -->
       <h4 class="modal-title" id="deletewarninghead" style="float: left;"></h4><input type='button' class='btn btn-info' value='X' id='btn_cancle_upload' data-dismiss="modal" style="float: right;"> 
      </div>
      <!-- Form -->
        <form id="delete_data" method='post' action="{{url('fileuploadtest')}}" enctype="multipart/form-data">
          {{csrf_field()}}
          <input type="hidden" id="deleteprojectid" name="deleteproject" value="default">
                                </form>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <input type='button' class='btn btn-info' value='Yes' id='btn_delete' data-dismiss="modal" style="float: right; margin: 3px;">
        <input type='button' class='btn btn-info' value='Cancel' id='cancle_delete' data-dismiss="modal" style="float: left;margin: 3px;">
        
      </div>
    </div>

  </div>
</div>


        <!-- Delete doc  -->
        <div id="deletemodaldoc" class="modal fade" role="dialog" style = "top: 50px; z-index: 10040;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <!-- <button type="button" class="btn-info" data-dismiss="modal">ይቅር</button> -->
       <h4 class="modal-title" id="deletewarningheaddoc" style="float: left;"></h4><input type='button' class='btn btn-info' value='X' id='btn_cancle_upload' data-dismiss="modal" style="float: right;"> 
      </div>
      <!-- Form -->
        <form id="delete_data" method='post' action="{{url('fileuploadtest')}}" enctype="multipart/form-data">
          {{csrf_field()}}
          <input type="hidden" id="deleteprojectiddoc" name="deleteproject" value="default">
                                </form>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <input type='button' class='btn btn-info' value='Yes' id='btn_delete_doc' data-dismiss="modal" style="float: right; margin: 3px;">
        <input type='button' class='btn btn-info' value='Cancel' id='cancle_delete' data-dismiss="modal" style="float: left;margin: 3px;">
        
      </div>
    </div>

  </div>
</div>



          <!-- modal for upload doc -->
<div id="uploaddocModal" class="modal fade" role="dialog" style = "top: 50px; z-index: 10040;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <!-- <button type="button" class="btn-info" data-dismiss="modal">ይቅር</button> -->
       <h4 class="modal-title" id="conutselectedfiles" style="float: left;"></h4><input type='button' class='btn btn-info' value='X' id='btn_cancle_upload' data-dismiss="modal" style="float: right;"> 
      </div>
      <!-- Form -->
        <form id="data" method='post' action="{{url('fileuploadtest')}}" enctype="multipart/form-data">
          {{csrf_field()}}
                        
              <input type="hidden" id="rcFrist_Name" name="rcFrist_Name" value="default">
              <input type="hidden" id="rcLast_Name" name="rcLast_Name" value="default">
              <input type="hidden" id="rcEmail" name="rcEmail" value="default">
              <input type="hidden" id="rcPhoto" name="rcPhoto" value="default">
          <input id="filecaptiontext" focus="true" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="File description"><br>
        </form>
      <div class="modal-body">
      </div>
      <div id="previewfile" class="col-sm-12"></div>
      <div id="previewmultipleimg" class="col-sm-12"></div>
      <div class="modal-footer">
        <input type='button' class='btn btn-info' value='upload' id='btn_upload' data-dismiss="modal" style="float: right;">
      </div>
    </div>

  </div>
</div>

<!-- modla for registerig a project -->
  <div id="uploadModal" class="modal fade" role="dialog" style = "top: 50px; z-index: 10040;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
       <h4 class="modal-title" id="conutselectedfiles" style="float: left;">Register New Domain</h4>
       <input type='button' class='btn btn-info' value='X' id='btn_cancle_upload' data-dismiss="modal" style="float: right;"> 
      </div>
      <!-- Form -->
        <form id="data" method='post' action="{{url('fileuploadtest')}}" enctype="multipart/form-data">
          {{csrf_field()}}  
          <label for="project_name">project_name</label><br>         
          <input id="project_name" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_name">
          <label for="project_description">project_description</label><br>         
          <input id="project_description" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_description">
           <label for="project_contractor">project_contractor</label><br>         
          <input id="project_contractor" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_contractor">
            <label for="start_date">start_date</label><br>         
          <input id="start_date" type="datetime-local" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="start_date">
           <label for="end_date">end_date</label><br>         
          <input id="end_date" type="datetime-local" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="end_date">
           <label for="project_status">project_status</label><br>         
          <!-- <input id="project_status" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_status"> -->
           <select class="col-xs-12 btn btn-default" id="project_status" name="options" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_status">
            <option value="" selected disabled>project_status</option>
            <option value="Complated">Complated</option>
            <option value="Inprogess">Inprogess</option>
            <option value="Future">Future</option>
          </select>
          <br><br>
        </form>
      <div class="modal-body">
      </div>
      <!-- <div id="previewfile" class="col-sm-12"></div> -->
      <!-- <div id="previewmultipleimg" class="col-sm-12"></div> -->
      <div class="modal-footer">
        <input type='button' onclick="register_new_project()" class='btn btn-info' value='Send' id='btn_register' data-dismiss="modal">
      </div>
    </div>
  </div>
</div>


<!-- showpdf modal -->

<!-- modla for registerig a project -->
  <div id="pdf-viewer-Modal" class="modal fade" role="dialog" style = "top: 50px; z-index: 10040;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
       <h4 class="modal-title" id="pdftitle" style="float: left;"></h4>
       <input type='button' class='btn btn-info' value='X' id='btn_cancle_upload' data-dismiss="modal" style="float: right;"> 
      </div>
      
      <div class="modal-footer">
        <input type='button' onclick="register_new_project()" class='btn btn-info' value='Send' id='btn_register' data-dismiss="modal">
      </div>
    </div>
  </div>
</div>

<!-- edit modal -->
<div id="editModal" class="modal fade" role="dialog" style = "top: 50px; z-index: 10040;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
       <h4 class="modal-title" id="editmodalhead" style="float: left;">Register New Domain</h4>
       <input type='button' class='btn btn-info' value='X' id='btn_cancle_upload' data-dismiss="modal" style="float: right;"> 
      </div>
      <!-- Form -->
        <form id="data" method='post' action="{{url('fileuploadtest')}}" enctype="multipart/form-data">
          {{csrf_field()}}  
          <label for="project_name">project_name</label><br>         
          <input id="edit_project_name" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_name">
          <label for="project_description">project_description</label><br>         
          <input id="edit_project_description" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_description">
           <label for="project_contractor">project_contractor</label><br>         
          <input id="edit_project_contractor" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_contractor">
            <label for="start_date">start_date</label><br>         
          <input id="edit_start_date" type="datetime-local" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="start_date">
           <label for="end_date">end_date</label><br>         
          <input id="edit_end_date" type="datetime-local" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="end_date">
           <label for="project_status">project_status</label><br>         
          <input id="edit_project_status" type="text" class="col-xs-12 btn btn-default" autofocus="true" style="border-radius: 5px red; text-align: right; display: block; float: left; row:1; left; margin-right: 5px;" placeholder="project_status">
          <br><br>
        </form>
      <div class="modal-body">
      </div>
      <!-- <div id="previewfile" class="col-sm-12"></div> -->
      <!-- <div id="previewmultipleimg" class="col-sm-12"></div> -->
      <div class="modal-footer">
        <input type='button' onclick="saveedit()" class='btn btn-info' value='Send' id='btn_edit' data-dismiss="modal">
      </div>
    </div>
  </div>
</div>
<div id="pspdfkit" style="height: 100vh"></div>
<footer class="container-fluid text-center">
  <a href="#ndcprojects" title="To Top">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Powerd By <a href="https://www.ndc.mint.gov.et" title="NDC">NDC, Ministry of Innovation and Technology</a></p>
</footer>
</body>
<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#ndcprojects']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

</script>


<script>
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "48%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

     function register_project(){
          // document.getElementById("mainbd").style.display = "none";
            $('#uploadModal').modal({show: true});
      }
    function uploaddoc(id){
            $('#uploaddocModal').modal({show: true});
    }
    function showdeletewarning(id){
              $("#delete_data").html("<label>Are you sure you want to delete this project? All the documents related with this project will be deleted!</label>");
              document.getElementById('deletewarninghead').innerHTML = id;

            $('#deletemodal').modal({show: true});
    }
    function showdeletewarningfordoc(id){
              $("#delete_data_doc").html(id + "<label>Are you sure you want to delete this document?</label>");
              document.getElementById('deletewarningheaddoc').innerHTML = id;

            $('#deletemodaldoc').modal({show: true});
    }
    function showdetail(id, typeofstatus){
      var st;
      var bgc;
      if (typeofstatus=="Complatedlist") {
          st = "Complateddoclist";
          bgc = "#000";
          document.getElementById('Complated').innerHTML = "<a onclick='location.reload()'><span class='glyphicon glyphicon-circle-arrow-left'></span></a>  <small>  Documents for " + id + " Project</small>";
      }else if(typeofstatus=="Inprogresslist"){
        st = "Inprogressdoclist";
         bgc = "#001";
         document.getElementById('Inprogress').innerHTML = "<a onclick='location.reload()'><span class='glyphicon glyphicon-circle-arrow-left'></span></a>  <small>  Documents for " + id + " Project</small>";
      }else if (typeofstatus=="Futurelist") {
        st = "Futuredoclist";
         bgc = "#010";
         document.getElementById('Future').innerHTML = "<a onclick='location.reload()'><span class='glyphicon glyphicon-circle-arrow-left'></span></a>  <small>  Documents for " + id + " Project</small>";
      }
              $('#'+typeofstatus).html('');
              
              $("#"+typeofstatus).append("<div class='row' id='doclist'></div>");
               document.getElementById("doclist").id = st;
               document.getElementById(st).style.backgroundColor = bgc;
                var formData = new FormData();
                var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                formData.append('_token', '{{csrf_token()}}');
                formData.append('project_name', id);
  

    $.ajax({
        url:"{{url('showdetail')}}",
        type: 'POST',
        data: formData,  
        contentType: false,
        processData: false,
        success: function (data) {
          for(i=1; i<=data.cow; i++){
                          // alert("okay");
                          $('#'+st).append("<div id= 'complatedproject' class='column' style='background-color:#101; border-radius:10px; width:100%'>"
                            +"<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project Contractor: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.numofdoc+"</p></div>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            // document.getElementById("filesup").id = data.id[i]+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("complatedproject").id = data.id[i];
                          }
          var j = 0;
          for(j=1; j<=data.numofdoc; j++){

                           filetype = data.filelocation[j].slice((data.filelocation[j].lastIndexOf(".") - 1 >>> 0) + 2);
                           // alert(filetype);
                          switch (filetype) { 
                                      case "jpeg": 
                                      case "jpg": 
                                      case "png":
                                      case "gif":
                                      case "tiff":
                                      case "raw": 
                                      case "JPEG": 
                                      case "JPG": 
                                      case "PNG":
                                      case "GIF":
                                      case "TIFF":
                                      case "RAW":
                                        $('#'+st).append("<div id= 'complatedproject' class='column' style='background-color:#101; border-radius:10px;'>"
                                          +"<h6><i style='background-color:gray' class='fas fa-file-image file-icon' title='image'></i> "+data.filelocation[j]+"<span id='trash' onclick='showdeletewarningfordoc(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span>"
                                          +"</h6><p><i>"+data.documet_description[j]+"</i><br></div>");
                                        break;
                                      case "pptx":
                                         $('#'+st).append("<div id= 'complatedproject' class='column' style='background-color:#101; border-radius:10px;'>"
                            +"<h6><i style='background-color:yellow' class='fas fa-file-powerpoint file-icon' title='PPT'></i> "+data.filelocation[j]+"<span id='trash' onclick='showdeletewarningfordoc(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span>"
                            +"</h6><p><i>"+data.documet_description[j]+"</i><br></div>");
                                        break;
                                        case "ppt":
                                         $('#'+st).append("<div id= 'complatedproject' class='column' style='background-color:#101; border-radius:10px;'>"
                            +"<h6><i style='background-color:yellow' class='fas fa-file-powerpoint file-icon' title='PPT'></i> "+data.filelocation[j]+"<span id='trash' onclick='showdeletewarningfordoc(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span>"
                            +"</h6><p><i>"+data.documet_description[j]+"</i><br></div>");
                                        break;
                                      case "docx":
                                         $('#'+st).append("<div id= 'complatedproject' class='column' style='background-color:#101; border-radius:10px;'>"
                            +"<h6><i style='background-color:skyblue' class='fas fa-file-word file-icon' title='DOC'></i> "+data.filelocation[j]+"<span id='trash' onclick='showdeletewarningfordoc(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span>"
                            +"</h6><p><i>"+data.documet_description[j]+"</i><br></div>");
                                        break;
                                      case "pdf":
                                         $('#'+st).append("<div id= 'complatedproject' class='column' style='background-color:#101; border-radius:10px;'>"
                            +"<h6><i style='background-color:red' class='fas fa-file-pdf file-icon' title='PDF'> </i><i style='background-color:red' title='PDF' id='opentoviewpdf' onclick='showpdf(this.id)'><a href='#pspdfkit'> "+data.filelocation[j]+"</a></i><span id='trash' onclick='showdeletewarningfordoc(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span>"
                            +"</h6><p><i>"+data.documet_description[j]+"</i><br></div>");
                                         document.getElementById("opentoviewpdf").id = data.absolutefilelocation[j];
                                        break;
                                      default: 
                                        $('#'+st).append("<div id= 'complatedproject' class='column' style='background-color:#101; border-radius:10px;'>"
                            +"<h6>"+data.filelocation[j]+"<span id='trash' onclick='showdeletewarningfordoc(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span>"
                            +"</h6><p><i>"+data.documet_description[j]+"</i><br></div>");
                                    }
                        
                          }
                        },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },
                   });

            // $('#deletemodal').modal({show: true});
    }

    function showedit(id){
              document.getElementById('editmodalhead').innerHTML = id;
              var formData = new FormData();
                          var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                          formData.append('_token', '{{csrf_token()}}');
                          formData.append('id',id);
                  $.ajax({
       url:"{{url('editproject')}}",
        type: 'POST',
        data: formData,  
        contentType: false,
        processData: false,
        success: function (data) {
                          $("#edit_project_name").val(data.project_name);
                          $("#edit_project_description").val(data.project_description);
                          $("#edit_project_contractor").val(data.project_contractor);
                          $("#edit_start_date").val(data.start_date);
                          $("#edit_end_date").val(data.end_date);
                          $("#edit_project_status").val(data.project_status);
                          $('#editModal').modal({show: true});
                        
                        },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },

            });
                   

          
    }



      function register_new_project(){
                          var formData = new FormData();
                          var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                          formData.append('_token', '{{csrf_token()}}');
                          formData.append('project_name', $("#project_name").val());
                          formData.append('project_description', $("#project_description").val());
                          formData.append('project_contractor', $("#project_contractor").val());
                          formData.append('start_date', $("#start_date").val());
                          formData.append('end_date', $("#end_date").val());
                          formData.append('project_status', $("#project_status").val());

                          formData.append('project_status', $("#project_status").val());
                $.ajax({
                        /* the route pointing to the post function */
                        url:"{{url('registernewproject')}}",
                        type: 'POST',
                        data: formData,  
                        contentType: false,
                        processData: false,
                    /* remind that 'data' is the response of the AjaxController */
                    success: function (data) {
                      var i=0;
                       for(i=1; i<=data.cow; i++){
                        if (data.project_status[i]=="Complated") {
                         document.getElementById("Complatedlist");
                          $("#Complatedlist").append("<div id= 'complatedproject' class='column' style='background-color:#000; border-radius:10px;'>"
                            +"<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project Contractor: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label></div>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id = data.id[i]+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("complatedproject").id = data.id[i];
                            }else if(data.project_status[i]=="Inprogress"){
                             $("#Inprogresslist").append("<div id= 'inprogressproject' class='column' style='background-color:#001; border-radius:10px;'>"
                            +"<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project Contractor: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label></div>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id = data.id[i]+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("inprogressproject").id = data.id[i];
                            }else if(data.project_status[i]=="Future"){
                            $("#Futurelist").append("<div id= 'futureproject' class='column' style='background-color:#010; border-radius:10px;'>"
                            +"<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project Contractor: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label></div>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id = data.id[i]+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("futureproject").id = data.id[i];
                            }
                         }
                          alert("New project registed successfully");
                        
                     
                    },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },
                   
                   });
                    
  } 

        function saveedit(){
                          var formData = new FormData();
                          var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                          formData.append('_token', '{{csrf_token()}}');
                          formData.append('editmodalhead', $("#editmodalhead").html())
                          formData.append('edit_project_name', $("#edit_project_name").val());
                          formData.append('edit_project_description', $("#edit_project_description").val());
                          formData.append('edit_project_contractor', $("#edit_project_contractor").val());
                          formData.append('edit_start_date', $("#edit_start_date").val());
                          formData.append('edit_end_date', $("#edit_end_date").val());
                          formData.append('edit_project_status', $("#edit_project_status").val());
                $.ajax({
                        /* the route pointing to the post function */
                        url:"{{url('saveedit')}}",
                        type: 'POST',
                        data: formData,  
                        contentType: false,
                        processData: false,
                    /* remind that 'data' is the response of the AjaxController */
                    success: function (data) {
                      var i=0;
                       for(i=1; i<=data.cow; i++){
                        if (data.project_status[i]=="Complated") {
                         document.getElementById(data.id).innerHTML = "";
                         // alert(data.project_name[i]);
                          $('#' + data.id).append(
                              "<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project start date: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id =data.id+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("complatedproject").id = data.id;
                            }else if(data.project_status[i]=="Inprogress"){
                            document.getElementById(data.id).innerHTML = "";
                         // alert(data.project_name[i]);
                          $('#' + data.id).append(
                              "<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project start date: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id =data.id+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("inprogressproject").id = data.id;
                            }else if(data.project_status[i]=="Future"){
                            document.getElementById(data.id).innerHTML = "";
                         // alert(data.project_name[i]);
                          $('#' + data.id).append(
                              "<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project start date: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id =data.id+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("futureproject").id = data.id;
                            }
                         }
                          alert("New project registred successfully");
                        
                     
                    },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },
                   
                   });
                    
  } 

  // show projects
           
        $(document).ready(function(){
          var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                $.ajax({
                        /* the route pointing to the post function */
                        url:"{{url('showproject')}}",
                        type: 'POST',
                        data: {_token: CSRF_TOKEN,},
                        dataType: 'JSON',
                    /* remind that 'data' is the response of the AjaxController */
                    success: function (data) {
                      var i=0;
                       for(i=1; i<=data.cow; i++){
                        if (data.project_status[i]=="Complated") {
                          $("#Complatedlist").append("<div id= 'complatedproject' class='column' style='background-color:#000; border-radius:10px;'>"
                            +"<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span><span id='showdetail' onclick='showdetail(this.id, `Complatedlist`)' class='glyphicon glyphicon-eye-open' style='float:right; margin-right:10px; color:skyblue'></span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project Contractor: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label></div>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id = data.id[i]+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("complatedproject").id = data.id[i];
                            document.getElementById("showdetail").id = data.project_name[i];
                            }else if(data.project_status[i]=="Inprogress"){
                            $("#Inprogresslist").append("<div id= 'inprogressproject' class='column' style='background-color:#001; border-radius:10px;'>"
                            +"<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span><span id='showdetail' onclick='showdetail(this.id, `Inprogresslist`)' class='glyphicon glyphicon-eye-open' style='float:right; margin-right:10px; color:skyblue'></span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project Contractor: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label></div>");
                            // document.getElementById("add_doc").id = i + data.project_name[i]; 
                            var filesup = data.project_name[i].replace(/\s+/g, '');
                            document.getElementById("filesup").id = data.id[i]+"-" + filesup; 
                            document.getElementById("trash").id = data.project_name[i];
                            document.getElementById("edit").id = data.project_name[i];
                            document.getElementById("inprogressproject").id = data.id[i]; 
                            document.getElementById("showdetail").id = data.project_name[i];
                            }else if(data.project_status[i]=="Future"){
                            $("#Futurelist").append("<div id= 'futureproject' class='column' style='background-color:#010; border-radius:10px;'>"
                            +"<h2>"+data.project_name[i]+"<span id='trash' onclick='showdeletewarning(this.id)' class='glyphicon glyphicon-trash' style='float:right;'> </span><span id='edit' onclick='showedit(this.id)' class='glyphicon glyphicon-edit' style='float:right; margin-right:10px;'> </span></span><span id='showdetail' onclick='showdetail(this.id, `Futurelist`)' class='glyphicon glyphicon-eye-open' style='float:right; margin-right:10px; color:skyblue'></span>"
                            +"</h2><p><i>"+data.project_description[i]+"</i><br>"
                            +"Project Contractor: "+data.project_contractor[i]+"<br>"
                            +"Project start date: "+data.start_date[i]+"<br>"
                            +"Project end date: "+data.end_date[i]+"<br>"
                            +"Project status: "+data.project_status[i]+"<br>"
                            +"Project documents: "+data.project_docs[i]+"</p>"
                            +"<label class='btn  btn-file' style='background-color: #FFD700; float:right'>Upload Document <span class='glyphicon glyphicon-paperclip'> </span> <input  onclick='uploaddocment(this.id)' type='file' name='image' id='filesup' class='form-control' style='display: none;'> </label></div>");
                              var filesup = data.project_name[i].replace(/\s+/g, '');
                              document.getElementById("filesup").id = data.id[i]+"-" + filesup; 
                              document.getElementById("trash").id = data.project_name[i];
                              document.getElementById("edit").id = data.project_name[i];
                              document.getElementById("futureproject").id = data.id[i]; 
                              document.getElementById("showdetail").id = data.project_name[i];
                            }
                         }
                          
                    },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },
                   
                   });
});
          function uploaddocment(id){
             $('#'+id).change(function () {
        document.getElementById("btn_upload").style.display =  "block";
         document.getElementById("filecaptiontext").focus();
         document.getElementById("conutselectedfiles").innerHTML = "Upload File";
        if ($(this).val() != '') {
          var file = $(this).val();
          var filename = file.replace(/^.*[\\\/]/, '');
          var filetype = file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
          // alert(file.replace(/^.*[\\\/]/, '') +"--------"+filetype);
                          switch (filetype) { 
                                      case "jpeg": 
                                      case "jpg": 
                                      case "png":
                                      case "gif":
                                      case "tiff":
                                      case "raw": 
                                      case "JPEG": 
                                      case "JPG": 
                                      case "PNG":
                                      case "GIF":
                                      case "TIFF":
                                      case "RAW":
                                        previewSelectedImage(this, id);
                                        break;
                                      case "pptx":
                                        $("#previewfile").html("<p class='btn-danger'>ፓወርፖይንት</p>"+filename);
                                        $("#uploaddocModal").modal({show: true});
                                        break;
                                      case "docx":
                                        $("#previewfile").html("<label class='btn-info' style='padding: 10px 26px; border-radius:5px;'>ዶክመንት</label>"+filename);
                                        $("#uploaddocModal").modal({show: true});
                                        break;
                                      case "pdf":
                                        $("#previewfile").html("<label class='btn-info' style='padding: 10px 26px; border-radius:5px;'>ፒዲኤፍ</label>"+filename);
                                        $("#uploaddocModal").modal({show: true});
                                        break;
                                      default: 
                                        $("#previewfile").html("<label class='btn-info' style='padding: 10px 26px; border-radius:5px;'>ፋይል</label>"+filename);
                                        $("#uploaddocModal").modal({show: true});
                                    } 
            upload(this, id);
        }
    });

          }

 function previewSelectedImage(thi, id) {
  // alert( thi.files.length);
  document.getElementById("previewmultipleimg").innerHTML='';
              const imageInput = thi;
            const previewImage = document.getElementById('previewImage');
            const filecaptiontext = document.getElementById('filecaptiontext');

               
               var shownumberofselectedfile = document.getElementById("conutselectedfiles");
               shownumberofselectedfile.innerHTML = thi.files.length + " File Selected";

               for (var i = 0; i < thi.files.length; i++) {
                var file = imageInput.files[i];
                 if (file) {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = function(e) {
                     // previewImage.src = e.target.result;
                     
                     var div = document.createElement("div");
                     var divParent = document.getElementById("previewmultipleimg");
                      div.id = "imgdiv"+i;
                      div.className = "class";
                      div.height = 110;
                      div.width = 110;
                      div.margin = "auto";
                      divParent.appendChild(div);
                      
                      var image = document.createElement("img");
                      var imageParent = document.getElementById("imgdiv"+i);
                      image.id = "id"+i;
                      image.className = "class";
                      image.height = 100;
                      image.width = 100;
                      image.margin = "auto";
                      image.src = e.target.result;            // image.src = "IMAGE URL/PATH"
                      imageParent.appendChild(image);

                      var span = document.createElement("span");
                      var spanParent = document.getElementById("imgdiv"+i);
                      span.className ="glyphicon glyphicon-trash";
                      spanParent.appendChild(span);
                      }
                    }
                  }
                  $("#uploaddocModal").modal({show: true});
                  imageInput.addEventListener('change', previewSelectedImage);
                 $('#'+id).val(''); 
            }


 var formData = new FormData();
    function upload(img, id) {
    var project_id = id.split('-');
        project_id = project_id[1]; 
  var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
  formData.append('_token', '{{csrf_token()}}');
  formData.append('image', img.files[0]);
  formData.append('project_name', project_id);
  
    event.preventDefault();    
    }
    $('#btn_upload').click(function () {
  formData.append('filecaptiontext', $("#filecaptiontext").val());
  

    $.ajax({
        url:"{{url('fileuploadtest')}}",
        type: 'POST',
        data: formData,  
        contentType: false,
        processData: false,
        success: function (data) {

                          alert("File uploaded successfully");
                          location.reload();
                      
                        },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },
                   
                   });
            });
    $('#btn_delete').click(function () {
      var delatingproj = document.getElementById('deletewarninghead').innerHTML;
      // delatingproj = delatingproj.replace(/\s+/g, '');
      var formDataDelete = new FormData();
          formDataDelete.append('deleteproject', delatingproj);
          formDataDelete.append('_token', '{{csrf_token()}}');
    $.ajax({
       url:"{{url('deleteproject')}}",
        type: 'POST',
        data: formDataDelete,  
        contentType: false,
        processData: false,
        success: function (data) {

                          alert("Project deleted successfully");
                        
                        },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },
                   
                   });
            });
    $('#btn_delete_doc').click(function () {
      var delatingproj = document.getElementById('deletewarningheaddoc').innerHTML;
      // delatingproj = delatingproj.replace(/\s+/g, '');
      var formDataDelete = new FormData();
          formDataDelete.append('deleteproject', delatingproj);
          formDataDelete.append('_token', '{{csrf_token()}}');
    $.ajax({
       url:"{{url('deleteproject')}}",
        type: 'POST',
        data: formDataDelete,  
        contentType: false,
        processData: false,
        success: function (data) {

                          alert("Project deleted successfully");
                        
                        },
                    error: function (xhr, status, error) {
                      // alert("Some Thing Went Wrong Try Again");
                      alert("Something went wrong!");
                    },
                   
                   });
            });

    
</script>
<script>
        let pspdfkitInstance;

        async function showpdf(pdfUrl) {
            const containerId = "#pspdfkit";

            // Unload the previous instance if it exists
            if (pspdfkitInstance) {
                PSPDFKit.unload(containerId);
            }

            try {
                // Load the new PDF
                pspdfkitInstance = await PSPDFKit.load({
                    licenseKey: 'sAXEpDifUWBFgaez_NRStXDZeppsmneevOw_tYvCod5-IewpwaoTEqmqjbC7QPBT8mmoOvEgLbMJZq6FxH2CBQd9f1fSG_9ep6dmgio6GP_z_bl-JqCuMWn_8S9Uxd__vOb23RwTjsGgD0TqDIenOaOxkmKXSh6n2IMgzWvNDNX4aQg8eH5PSOhLRD_YNImyLby0WKg7mxwUcdY',
                    container: containerId,
                    document: pdfUrl
                });
                console.log("PDF loaded successfully:", pdfUrl);
            } catch (error) {
                console.error("Error loading PDF:", error);
            }
        }
    // }


  // }
</script>

//
</html>
