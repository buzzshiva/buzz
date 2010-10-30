function addElement(txtMsg) {
  var ni = document.getElementById('myDiv');
  var numi = document.getElementById('theValue');
  var num = (document.getElementById('theValue').value -1)+ 2;
  numi.value = num;
  var newdiv = document.createElement('div');
  var divIdName = 'my'+num+'Div';
  newdiv.setAttribute('id',divIdName);
  if(txtMsg) {
  	newdiv.innerHTML = txtMsg + 'Element Number '+num+' has been added! <a href=\'#\' onclick=\'removeElement("'+divIdName+'")\'>Remove the div "'+divIdName+'"</a>';
  } else {
	newdiv.innerHTML = 'Element Number '+num+' has been added! <a href=\'#\' onclick=\'removeElement("'+divIdName+'")\'>Remove the div "'+divIdName+'"</a>';  
  }

  ni.appendChild(newdiv);
  //debugger;
}

function removeElement(divNum) {
  var d = document.getElementById('myDiv');
  var olddiv = document.getElementById(divNum);
  d.removeChild(olddiv);
}