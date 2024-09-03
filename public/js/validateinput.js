	function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == null) {
    alert("Name must be filled out");
    return false;
  }
}
function validatesearchbox(){
  var shval = document.getElementById("peopsh").value;
  // alert(shval);
  // document.ready(
  // 	if (shval==null) {
  //   	document.getElementById("shbutton").disabled = true;
	 //  }else{
	 //    document.getElementById("shbutton").disabled = false;
	 //  }
  // 	);
  if (!(/^\s*$/.test(shval))) 
  {
    //   alert(true);
    document.getElementById("shbutton").disabled = false;
  }else{
    //   alert(false);
    document.getElementById("shbutton").disabled = true;
  }
  
}
function validatesearchboxforchatpeople(){
  var shval = document.getElementById("peopforchat").value;
  // alert(shval);
  // document.ready(
  //  if (shval==null) {
  //    document.getElementById("shbutton").disabled = true;
   //  }else{
   //    document.getElementById("shbutton").disabled = false;
   //  }
  //  );
  if (!(/^\s*$/.test(shval))) 
  {
    //   alert(true);
    document.getElementById("shbutton").disabled = false;
  }else{
    //   alert(false);
    document.getElementById("shbutton").disabled = true;
  }
  
}
function validateprnaming(){
	var prnameval = document.getElementById("itemname").value;
	if (prnameval=="") {
		$('#itemnamelbl').css('display', 'block');
	}else{
		$('#itemnamelbl').css('display', 'none');
	}
	  
}
function validateprdescribing(){
	var prnameval = document.getElementById("itemdesc").value;
	if (prnameval=="") {
		$('#itemdesclbl').css('display', 'block');
	}else{
		$('#itemdesclbl').css('display', 'none');
	}
	  
}
function validateprpricing(){
	var prnameval = document.getElementById("itemprice").value;
	if (prnameval=="") {
		$('#itempricelbl').css('display', 'block');
	}else{
		$('#itempricelbl').css('display', 'none');
	}
	  
}
function validateprcategory(){
	var prnameval = document.getElementById("catpet-select").value;
	if (prnameval=="--Please Select a Catagory--") {
		$('#catselectlbl').css('display', 'block');
	}else{
		$('#catselectlbl').css('display', 'none');
	}
}
	//this function is used to validate profile complation 
function validatepc(){
  var inputtxt = document.getElementById("phone").value;
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((inputtxt.match(phoneno)))
        {
      $('#phonehelperrlbl').css('display', 'none');
      $('#phonehelplbl').css('display', 'block');
      
      // alert("true");
        }
      else
        {
        // alert("message");
        $('#phonehelplbl').css('display', 'none');
        $('#phonehelperrlbl').css('display', 'block');
        }
        var prnameval = document.getElementById("country").value;
        if ((prnameval!="SelectCountry") && (inputtxt.match(phoneno))) {
        	document.getElementById("submit1").disabled = false;
        }else{
        	document.getElementById("submit1").disabled = true;	
        }
}
function validatecountry(){
	var inputtxt = document.getElementById("phone").value;
	var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	var prnameval = document.getElementById("country").value;
	if (prnameval=="SelectCountry") {
		$('#countryhelplbl').css('display', 'none');
		$('#countryhelperrlbl').css('display', 'block');
	}else{
		$('#countryhelperrlbl').css('display', 'none');
		$('#countryhelplbl').css('display', 'block');
	}
	if ((prnameval!="SelectCountry") && (inputtxt.match(phoneno))) {
        	document.getElementById("submit1").disabled = false;
        }
        else{
        	document.getElementById("submit1").disabled = true;	
        }
}
function submit2usershope() {
	// body...
	var trname = document.getElementById("inputTradingName").value;
	var inputtxt = document.getElementById("shopphone").value;
	var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	if (trname!="") {
		$('#trnamehelplbl').css('display', 'none');
		$('#trnamehelperrlbl').css('display', 'block');
	}else{
		$('#trnamehelperrlbl').css('display', 'none');
		$('#trnamehelplbl').css('display', 'block');
	}
	if ((trname!="") && (inputtxt.match(phoneno))) {
        	document.getElementById("submit2").disabled = false;
        }
        else{
        	document.getElementById("submit2").disabled = true;	
        }
}
function submit2usershopephone() {
	// body...
	var trname = document.getElementById("inputTradingName").value;
	var inputtxt = document.getElementById("shopphone").value;
	var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	if ((inputtxt.match(phoneno))) {
		$('#shopephonehelplbl').css('display', 'none');
		$('#shopephonehelperrlbl').css('display', 'block');
	}else{
		$('#shopephonehelperrlbl').css('display', 'none');
		$('#shopephonehelplbl').css('display', 'block');
	}
	if ((trname!="") && (inputtxt.match(phoneno))) {
        	document.getElementById("submit2").disabled = false;
        }
        else{
        	document.getElementById("submit2").disabled = true;	
        }
}
function validaterole(){
	var roleval = document.getElementById("role").value;
	var loclat = document.getElementById("inputlat").value;
	var loclong = document.getElementById("inputlng").value;

	if (roleval.length<3 && ((loclat.length < 8) && (loclong.length < 8))) {
		$('#jobposiotnhelplbl').css('display', 'none');
		$('#jobposiotnhelperrlbl').css('display', 'block');
		document.getElementById("submit3").disabled = true;
		alert(loclat+" "+loclong);
	}else{
		if((loclat.length < 8) && (loclong.length < 8)){
        	document.getElementById("submit3").disabled = true;
        	alert(loclat+" "+loclong);
        }
        else{
        	document.getElementById("submit3").disabled = false;	
        	alert(loclat+" "+loclong);
        }
	}
}
function validatelat(){
	var roleval = document.getElementById("role").value;
	var loclat = document.getElementById("inputlat").value;
	var loclong = document.getElementById("inputlng").value;

	if (loclat!="") {
		$('#locationehelperrlbl').css('display', 'none');
		$('#locationhelplbl').css('display', 'block');
	}else{
		$('#locationhelplbl').css('display', 'none');
		$('#locationehelperrlbl').css('display', 'block');
	}
	if ((roleval!="Select role") && (loclat!="" && loclong!="" )) {
        	document.getElementById("submit3").disabled = false;
        }
        else{
        	document.getElementById("submit3").disabled = true;	
        }
}
function validatelatandlng(){
	var roleval = document.getElementById("role").value;
	var loclat = document.getElementById("inputlat").value;
	var loclong = document.getElementById("inputlng").value;

	var reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,10}");
	// var reg = new RegExp("^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$");

	if( reg.exec(loclat) ) {
	 //do nothing
	  $('#locationehelperrlbl').css('display', 'none');
		$('#locationhelplbl').css('display', 'block');
	} else {
	 //error
	 $('#locationhelplbl').css('display', 'none');
		$('#locationehelperrlbl').css('display', 'block');
	}

	if( reg.exec(loclong) ) {
	 //do nothing
	 $('#locationehelperrlbl').css('display', 'none');
		$('#locationhelplbl').css('display', 'block');
	} else {
	 //error
	    $('#locationhelplbl').css('display', 'none');
		$('#locationehelperrlbl').css('display', 'block');
	}
	if ((roleval!="Select role") && (reg.exec(loclong) && reg.exec(loclat) )) {
        	document.getElementById("submit3").disabled = false;
        }
        else{
        	document.getElementById("submit3").disabled = true;	
        }
}
//below code will validate signup complation input forms
function checkPassword(){ 
	var country = document.forms["persenalinfoRegistration"]["password"].value;
	var reinterpassword = document.forms["persenalinfoRegistration"]["reinterpassword"].value;
  if (password === reinterpassword) {
    $('#reinterpasswordHelp').html("ትክክል");
    $('#reinterpasswordHelp').css('color', 'green');
  }else{
  	$('#reinterpasswordHelp').html("የይለፍ ቃልዎ አይመሳሰልም እንደገና ያስገቡ");
    $('#reinterpasswordHelp').css('color', 'red');
    regInputValidation();
  }
}

// below code will validate registration inputs
function checkPassword(){ 
	var password = document.forms["persenalinfoRegistration"]["password"].value;
	var reinterpassword = document.forms["persenalinfoRegistration"]["reinterpassword"].value;
  if (password === reinterpassword) {
    $('#reinterpasswordHelp').html("ትክክል");
    $('#reinterpasswordHelp').css('color', 'green');
  }else{
  	$('#reinterpasswordHelp').html("የይለፍ ቃልዎ አይመሳሰልም እንደገና ያስገቡ");
    $('#reinterpasswordHelp').css('color', 'red');
    regInputValidation();
  }
}

//click upload button
    function getFileUserProPicture() {
  document.getElementById("userprofileimage").click();
}
//click to upload user Id or passport
function  getFileUserPassport() {
  document.getElementById("userpassport").click();
}
//click to upload Trading Logo
function  getTradingLogo() {
  document.getElementById("tradinglogo").click();
}
//click to upload trading authority 
function  getTradingCertification() {
  document.getElementById("tradingcertificate").click();
}


//IMAGE UPLOAD PREVIEW
  var loadFileUserProImage = function(event) {
    var output = document.getElementById('userprofileimagepreview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = "block";
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

  //for user passport upload preview
  //IMAGE UPLOAD PREVIEW
  var loadFileUserPassportImage = function(event) {
    var output = document.getElementById('userpassportimagepreview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = "block";
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

   //for trading logo upload preview
  var loadFileTradingLogoImage = function(event) {
    var output = document.getElementById('tradinglogoimagepreview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = "block";
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

  //for trade certification
  var loadFileTradingCertificationImage = function(event) {
    var output = document.getElementById('tradingcertificateimagepreview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = "block";
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

	 