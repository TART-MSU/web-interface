var input=document.getElementById('model');
var input2=document.getElementById('property');
var area=document.getElementById('output');


$(document).ready(function add_field() {
    var max_fields      = 5; //maximum input boxes allowed
    var wrpper         = $("model"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    console.log('2')
    var x = 1; //initlal text box count
    $(add_button).click(function(){ //on add input button click
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="form-group"><label for="model" style="bold"><strong>Model</strong></label><textarea class="form-control about" name="model" id="model" rows="3" >{{ model }}</textarea></div>');
    }
    });
});
document.getElementById("add_field").addEventListener("click", add_field);

function append() {

	input1.innerHTML = {{ model }}
	input2.innerHTML = {{ prop }}
	area.innerHTML = {{ result }}
}
document.getElementById("mp-to-text").addEventListener("click", append);

function transferm(e) {
	e.preventDefault();
	input1.innerHTML = {{ model }}
	area.innerHTML = {{ result }}
}
document.getElementById("model-to-text").addEventListener("click", transferm);

function transferp(e) {
	e.preventDefault();
	input2.innerHTML = {{ prop }}
	area.innerHTML = {{ result }}
}
document.getElementById("prop-to-text").addEventListener("click", transferp);

function newm(e) {
	input1.value=""
}

function newp(e) {
	input2.value=''
}
document.getElementById("newprop").addEventListener("click", newp);

async function savem() {
  // (A) CREATE BLOB OBJECT
  var modelText = document.getElementById("model").value;
  modelText = modelText.replace(/\n/g, "\r\n"); 
  var myBlob = new Blob([modelText], {type: "text/plain"});
 
  // (B) FILE HANDLER & FILE STREAM
  const fileHandle = await window.showSaveFilePicker({
    types: [{
      description: "Text file",;''
      accept: {"text/plain": [".txt"]}
    }]
  });
  const fileStream = await fileHandle.createWritable();
 
  // (C) WRITE FILE
  await fileStream.write(myBlob);
  await fileStream.close();
}
document.getElementById("savemodel").addEventListener("click", savem);


async function savep() {
  // (A) CREATE BLOB OBJECT
  var propText = document.getElementById("property").value;
  propText = propText.replace(/\n/g, "\r\n"); 
  var myBlob = new Blob([propText], {type: "text/plain"});
 
  // (B) FILE HANDLER & FILE STREAM
  const fileHandle = await window.showSaveFilePicker({
    types: [{
      description: "Text file",
      accept: {"text/plain": [".txt"]}
    }]
  });
  const fileStream = await fileHandle.createWritable();
 
  // (C) WRITE FILE
  await fileStream.write(myBlob);
  await fileStream.close();
}

document.getElementById('inputmodel')
    .addEventListener('change', function() {
      
    var fr = new FileReader();
    fr.onload=function(){
    	document.getElementById('model').textContent = fr.result;
    }
      
    fr.readAsText(this.files[0]);
})

document.getElementById('inputprop')
    .addEventListener('change', function() {
      
    var fr = new FileReader();
    fr.onload=function(){
    	document.getElementById('property').textContent = fr.result;
    }
      
    fr.readAsText(this.files[0]);
})