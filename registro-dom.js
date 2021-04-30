let pessoas = []
let form = document.querySelector("#registro")
let nacionalidade = null;
let velho = null;
let eVelho = null;

form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let dados = new FormData(form);
    let registro = registrarPessoa(dados);

    pessoas.push(registro);
    form.reset();
})

function selectText(select){
    nacionalidade = select.options[select.selectedIndex].text
}

function registrarPessoa(formData) {
    let nome = formData.get("nome");
    let sobrenome = formData.get("sobrenome");
    let idade = Number(formData.get("idade"));
    let CPF = formData.get("cpf");
    let ciudade = formData.get("ciudade");

    
    let registro = {
        nome,
        sobrenome,
        idade,
        CPF,
        nacionalidade,
        ciudade,
    }
    

    addTableRow(registro);

    if (velho == null || velho < idade) {
        velho = idade;
        eVelho =""+ nome +" "+ sobrenome +" "+ "é a mais velha/o";
        addComparison(eVelho);
    }
    


    return registro
}

function addTableRow (registro){
    tabla = document.getElementById("resultados");
    row = tabla.insertRow(-1);
    let Celnome = row.insertCell(-1);
    let Celsobrenome = row.insertCell(-1);
    let Celidade = row.insertCell(-1);
    let CelCPF = row.insertCell(-1);
    let Celnacionalidade = row.insertCell(-1);
    let Celciudade = row.insertCell(-1);
    Celnome.innerHTML = registro.nome;
    Celsobrenome.innerHTML = registro.sobrenome;
    Celidade.innerHTML = registro.idade;
    CelCPF.innerHTML = registro.CPF;
    Celnacionalidade.innerHTML = registro.nacionalidade;
    Celciudade.innerHTML = registro.ciudade;
    tabla.appendChild(row);
}


function addComparison(mensaje){
    let taskList = document.querySelector('#interes');

    let newTask = mensaje;

    taskList.innerHTML = "";
    let listItem = document.createElement('li');
    listItem.textContent = newTask;

    taskList.appendChild(listItem);
}















// eMaisVelha: function(pessoa) {
//     return this.idade > pessoa.idade


// function ordenarPessoas(pessoas) {
//     return pessoas.sort((a, b) => {
//         if (a.eMaisVelha(b)) {
//             return 1
//         } else if (b.eMaisVelha(a)) {
//             return -1
//         } else {
//             return 0
//         }
//     })
// }