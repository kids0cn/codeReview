function theTop(){    
	var btn=document.getElementById("fix")
	var dtop=document.documentElement.scrollTop;                
	if(dtop > 30){
		btn.style.display="block";
	}else{
		btn.style.display="none";
	}
	
}
function goTop(){
	document.documentElement.scrollTop=0;
	
}
setInterval(theTop,500);