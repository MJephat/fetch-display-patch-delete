// fetching data.
fetch("http://localhost:3000/cars")
        .then(res => res.json())
        .then(data =>{
              for(let i=0; i<data.length; i++){
                // console.log(data[i]);

            let Model = data[i].model;
            let Make = data[i].make;
            let Year = data[i].year;
            let Price = data[i].price;
            let Pic = data[i].image_url;

            document.querySelector(".container").innerHTML+=`
            <image src="${Pic}">
            <p>${Year}</p>
            <p>${Price}</p<
            <p>${Make}</p>
            <P>${Model}}
    
            `

            }
        
        })
 
 
    const submit= document.getElementById("Ongeza");
    submit.addEventListener("click", myFunction);
    function myFunction(e) {
    e.preventDefault();
        fetch("http://localhost:3000/cars/2", {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "price": "540700"
            })
        })
    }


// const submit= document.getElementById("submitid");
//  submit.addEventListener("click", myFunction);
// function myFunction(e) {
// e.preventDefault();
//     fetch("http://localhost:3000/Shoes/1", {
//         method: "DELETE",
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(myFunction),
//     })
//     .then(response=> response.json())
//     .then(data =>console.log(data))
// }
