const persona1 ={
    name: "Jose",
    lastname: "vazquez",
    age: 46,
    profession: "contable",  
    image: "https://i.imgur.com/ifEu2gV.jpeg"
    }
const persona2 ={
    name: "Juan",
    lastname: "Perez",
    age: 25,
    profession: "Ingeniero",  
    image: "https://i.imgur.com/ifEu2gV.jpeg"
}

function appendPersona (persona) {
    const listado = document.getElementById ("listado") 
    const div = document.createElement ("div")
    const imagen = document.createElement ("img")
    const titulo = document.createElement ("h4")
    const parrafo = document.createElement ("p")
    const parrafo2 = document.createElement ("p")
    imagen.src = persona.image 
    titulo.textContent=persona.name+persona.lastname
    parrafo.textContent=persona.profession
    parrafo2.textContent=persona.age+"años"
    div.append (imagen,titulo, parrafo, parrafo2)
    listado.append (div)
    }
appendPersona (persona1)
appendPersona (persona2)

