const path = "config";
// //Esta esa una funcion automática :D
// (async(parameter)=>{ //primero realizamos una funcion asincronica y le pasamos un parámetro donde tendrá el nombre del archivo JSON
//     let peticion = await fetch (`${parameter}.json`) //Esperamos a que el json nos mande una respuesta
    // let response = await peticion.json() // Al traer la info la volvemos .json
//     console.log(response);
// })(path) 
(async(parameter)=>{
    let peticion = await fetch (`${parameter}.json`)
    let response = await peticion.json()
    let myHeader = document.querySelector("#header")
    myHeader.insertAdjacentHTML("beforeend", /*html*/
    `
    <h1 class="display-4 fw-medium text-body-emphasis fs-2"> ${response.section1.title}</h1>
    <p class="fs-5 text-body-secondary text-start d-flex flex-column justify-content-start">
        ${response.section1.parraf.map((value)=>`
            <div class="d-flex flex-row justify-content-start mb-2">
                <td>${value.tagSvg}</td>
                <th scope="row" class="text-start">${value.text}</th>
            </div>`).join("")}

    </p>

    `)
})(path)