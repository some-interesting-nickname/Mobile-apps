const update = async ()=>{

    let students = await fetch("/students")
    .then(response => response.json())
    .then(data => {
        return data
    }).catch(err =>{
        console.warn(err)
        return []
    })

    return students
}

const renderStudents = (array)=>{
    let html = ""
    let onclick = ''
    for (let i in array)
    {
        onclick = `onclick=\"alert(\'${array[i].name} ${array[i].group}\')\"`
        html +=`<div class="card" style="width: 100%;"><div class="card-body" group=${array[i].group} ${onclick}>${array[i].name}</div></div>`
    }
    document.getElementById("students").innerHTML = html
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("[btn]").addEventListener("click", ()=>{
        update().then(data=>{
            console.table(data)
            renderStudents(data)
       })
    })
})
