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

    /** *
     * ! ---- NAVBAR ----
    */
    let myNav = document.querySelector("#navbar")
    myNav.insertAdjacentHTML("beforeend", /*html*/
    `
        <a href="https://www.netflix.com/co-en/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
            <img src="${response.navbar.imgPath}" alt="" style="width: 120px; height: auto;">
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">${response.navbar.infoNav}</a>

        </nav>
    `)


    /** *
     * ! ---- HEADER ----
    */
    let myHeader = document.querySelector("#header")
    myHeader.insertAdjacentHTML("beforeend", /*html*/
    `
    <h1 class="display-4 fw-medium text-body-emphasis fs-2"> ${response.header.title}</h1>
    <p class="fs-5 text-body-secondary text-start d-flex flex-column justify-content-start">
        ${response.header.parraf.map((value)=>`
            <div class="d-flex flex-row justify-content-start mb-2">
                <td>${value.tagSvg}</td>
                <th scope="row" class="text-start">${value.text}</th>
            </div>`).join("")}

    </p>
    `)

    /** *
     * ! ---- SECTION CARDS ----
    */

    let myCard = document.querySelector("#cards")
    myCard.insertAdjacentHTML("beforeend", /*html*/
        `
        ${response.sectionCard.cards.map((value)=>`
            <div class="col">
                <div class="card mb-4 rounded-0 shadow-sm border-primary">
                <div class="card-header py-3 rounded-0 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">${value.title}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${value.price}<small class="text-body-secondary fw-light">${value.subPrice}</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>${value.info1}</li>
                    <li>${value.info2}</li>
                    <li>${value.info3}</li>
                    <li>${value.info4}</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-primary">${value.buttonInfo}</button>
                </div>
                </div>
            </div>`).join("")}
        `)


        /** *
         * ! ---- SECTION PLANS ----
        */

        let myPlans = document.querySelector("#plans")
        myPlans.insertAdjacentHTML("beforeend", /*html*/
            `
                <table class="table text-center">
                <thead>
                <tr>
                    <th style="width: 34%;"></th>
                    <th style="width: 22%;">${response.sectionPlans.thead.info1}</th>
                    <th style="width: 22%;">${response.sectionPlans.thead.info2}</th>
                    <th style="width: 22%;">${response.sectionPlans.thead.info3}</th>
                </tr>
                </thead>
                <tbody>
                    ${response.sectionPlans.tbody.map((value)=>`
                    <tr>
                        <th scope="row" class="text-start  fw-light">${value.title}</th>
                        <td>
                        ${value.info1}
                        </td>
                        <td>
                        ${value.info2}
                        </td>
                        <td>
                        ${value.info3}
                        </td>
                    </tr>
                    `).join("")}
                </tbody>
                </table>
            `)

        /** *
         * ! ---- FOOTER ----
        */

        let myFooter = document.querySelector("#footer")
        myFooter.insertAdjacentHTML("beforeend", /*html*/
            `
                <div class="row">
                    <div class="col-12 col-md">
                        <img src="${response.footer.headFooter.imgPath}" alt="" style="height: auto; width: 25px;">
                        <small class="d-block mb-3 text-body-secondary">&copy; ${response.footer.headFooter.info}</small>
                    </div>
                    ${response.footer.bodyFooter.map((value)=>`
                    <div class="col-12 col-md">
                        <ul class="list-unstyled text-small fw-light">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.li1}</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.li2}</a></li>
                        </ul>
                    </div>
                    `).join("")}
                </div>
            `)
})(path)

