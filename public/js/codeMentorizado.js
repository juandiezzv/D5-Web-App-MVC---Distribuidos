const modalMentorizado = new bootstrap.Modal(document.getElementById('modalMentorizado'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    apellido_editar.value = fila.children[2].innerHTML
    dni_editar.value = fila.children[3].innerHTML
    codigo_editar.value = fila.children[4].innerHTML
    email_editar.value = fila.children[5].innerHTML
    modalMentorizado.show()
})