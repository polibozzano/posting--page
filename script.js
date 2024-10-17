const url = "https://jsonplaceholder.typicode.com/posts";

const formulario = document.querySelector("#post-form");
const renderizarTitulo = document.querySelector("#title");
const renderizarConteudo = document.querySelector("#body");
const renderizarContainer = document.querySelector("#renderizar-container");
const renderizarImagem = document.querySelector("#imagem");
const renderizarNome = document.querySelector("#nome");


// Criar uma Postagem
function createPost(data) {
    const div = document.createElement("div");
    const name = document.createElement ("p");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const body = document.createElement("h4");

    image.src = "images/icon.png";
    name.innerHTML = "Fulana da Silva"
    title.innerHTML = data.title;
    body.innerHTML = data.body;

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(title);
    div.appendChild(body);

    renderizarContainer.appendChild(div);

    div.style.border = "1px solid lightgrey";
    div.style.borderRadius = "10px";
    div.style.padding = "25px";

}

// Event Listener
formulario.addEventListener("submit", (e) => {
    e.preventDefault;

    let data = {
        title: renderizarTitulo.value,
        body: renderizarConteudo.value,
        userId: 1
    };

    data = JSON.stringify(data);
    postRequest(data);


});

// Enviar uma Postagem
async function postRequest(data) {

    const response = await fetch(`${url}`, {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    });

    const dataReq = await response.json();

    createPost(dataReq);
}

