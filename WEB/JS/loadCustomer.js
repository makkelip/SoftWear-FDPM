


/* 

ME TRYING TO MAKE FETCH HAPPEN 
====================================0


document.addEventListener("DOMContentLoaded", function(event) {
  
  parts of Hannu's fetch: 
  
  const output = document.querySelector("p")
  output.innerHTML = "Fetching JSON data...";
  
  const restAPI = "https://my-json-server.typicode.com/typicode/demo/posts";
  const staticJSON = "https://users.metropolia.fi/~hannutam/adm/fetch/valid-json.json";
  
    
 EDIT & BEST VER : 

  const processJSON = (function(json) {
    let itemStr = "";
    let jsonFile ={"name":"John", "email":"xyz@xyz.com", "description":"customer"}  
    for (let item of jsonFile) {
      itemStr +=  ` <br/>${item.id}: ${item.title}`;
      
      
    }
    
  );
  
  fetch(url + path + "/1")
    .then(response => response.json())    //Returns a promise that resolves JSON object
    .then(processJSON)
    .catch(error => (console.log("Fetch crashed due to " + error)));
});
    
    
    

    

  var json = {"items": [
 {
   "name": "jason",
   "email": "json@json.com",
   "description": "description"}
]};

    var test = document.getElementsByClassName("classname")[0];
		var items = json.items;
    
for (var i = 0; i < items.length; i++) {    
	  var p_name = document.createElement("p");
    p_name.innerHTML = items[i].name;
    test.appendChild(p_name);
    var p_mail = document.createElement("p");
    p_mail.innerHTML = items[i].email;
    test.appendChild(p_mail);
    var p_desc = document.createElement("p");
    p_desc.innerHTML = items[i].description;
    test.appendChild(p_desc);
  
  
}})

 https://jsfiddle.net/cehbkb0u/46/  

*/ 
