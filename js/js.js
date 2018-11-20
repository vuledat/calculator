
	var str ='';
	var his ='';
	$("td").click(function(event) {
		var click = this.innerHTML;

	if( click != '=' && click != 'C' && click !='d' ){

		var a = this.innerHTML;
		var b = document.getElementById("result").innerHTML;
		document.getElementById("result").innerHTML = b + this.innerHTML;
		str += a; 
		console.log(str);
		}
		
	 // if( click == '='){
	 // 	document.getElementById("result").innerHTML = eval(str);
	 // 	his += str +'='+ eval(str)+'</br>';
	 // 	str = '';
	 // 	document.getElementById("list-result").innerHTML = his;
	 // }


	 // if( click == 'C'){

	 // 	document.getElementById("result").innerHTML = '';
	 // }
	 // if( click == 'd'){
	 // 	str = str.substring(0, str.length - 1);
	 // 	console.log(str);
	 // 	document.getElementById("result").innerHTML = str;
	 // }
	 // if( click == 'CE'){
	 // 	 str ='';
		//  his ='';
	 // 	document.getElementById("result").innerHTML = '';
	 // 	document.getElementById("list-result").innerHTML = '';
	 // }

	 switch(click) {
		    case '=':
		        document.getElementById("result").innerHTML = eval(str);
			 	his += str +' = '+ eval(str)+'</br>';
			 	str = '';
			 	document.getElementById("list-result").innerHTML = his;
		        break;
		    case 'C':
		        document.getElementById("result").innerHTML = '';
		        break;
		    case 'd':
		        str = str.substring(0, str.length - 1);
			 	console.log(str);
			 	document.getElementById("result").innerHTML = str;
		        break;
		    case 'CE':
		        str ='';
				his ='';
			 	document.getElementById("result").innerHTML = '';
			 	document.getElementById("list-result").innerHTML = '';
		        break;
		    
		}

	 
	})
