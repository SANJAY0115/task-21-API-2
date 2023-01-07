
  fetch("https://api.openbrewerydb.org/breweries")
  .then((response) => response.json())
  .then((data) => {
            
    data.forEach(element => {
        
        const breweries = {

           ...element,
           name:element.name,  
           id: element.id,         
      breweryType: element.brewery_type,
     street:element.street,
    city : element.city,
}

 breweriesfunc(breweries);

    });
   
})







function breweriesfunc({ name, id,  breweryType, street , city }) {
document.body.innerHTML += 

`

<div class= "container">
<p><span>Name : </span>${name}</p>
<p><span>Id : </span>${id}</p>
<p><span>BreweryType : </span>${breweryType}</p>
<p><span>Street : </span>${street}</p>
<p><span>City : </span>${city}</p>
</div>

`

}