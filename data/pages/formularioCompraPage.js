export const formularioCompraPage = {
    titulo: "FORMULARIO DE COMPRA",
    
    productos: [
        {
            nombre: "Ramo de 3 rosas eternas",
            precio: 100,
            id: "producto-1"
        },
        {
            nombre: "Ramo de 7 rosas eternas",
            precio: 230,
            id: "producto-2"
        },
        {
            nombre: "Ramo de 15 rosas eternas",
            precio: 410,
            id: "producto-3"
        },
        {
            nombre: "Ramo de 1 girasol",
            precio: 60,
            id: "producto-4"
        },
        {
            nombre: "Ramo de 7 rosas y 1 girasol",
            precio: 270,
            id: "producto-5"
        },
        {
            nombre: "Ramo de 10 rosas, 1 girasol y 10 chocolates",
            precio: 760,
            id: "producto-6"
        },
        {
            nombre: "Ramo de 5 dalias eternas",
            precio: 240,
            id: "producto-7"
        },
        {
            nombre: "Ramo de 2 dalias, 1 rosa y 1 HotWheel",
            precio: 260,
            id: "producto-8"
        },
        {
            nombre: "Ramo de 7 dalias eternas",
            precio: 320,
            id: "producto-9"
        },
        {
            nombre: "Ramo de 5 tulipanes",
            precio: 160,
            id: "producto-10"
        },
        {
            nombre: "Ramo de 5 tulipanes con envoltorio (70 lempiras adicional cada Polaroid)",
            precio: 170,
            id: "producto-11"
        },
        {
            nombre: "Ramo de 5 Tulipanes y una retratera con 2 Polaroids",
            precio: 370,
            id: "producto-12"
        }
    ],

    formulario: {
        action: "https://formsubmit.co/lizzysauceda15@gmail.com",
        method: "POST",
        campos: {
            nombre: {
                tipo: "text",
                id: "txtNombre",
                name: "nombre",
                label: "Nombre:",
                placeholder: "Nombre Completo",
                required: true,
                pattern: "[A-Za-záéíóúÁÉÍÓÚñÑ ]{2,50}"
            },
            apellido: {
                tipo: "text",
                id: "txtApellido",
                name: "apellido",
                label: "Apellido:",
                placeholder: "Apellido Completo",
                required: true,
                pattern: "[A-Za-záéíóúÁÉÍÓÚñÑ ]{2,50}"
            },
            email: {
                tipo: "email",
                id: "txtEmail",
                name: "email",
                label: "Email:",
                placeholder: "tucorreo@electronico.com",
                required: true
            },
            telefono: {
                tipo: "tel",
                id: "txtTeléfono",
                name: "telefono",
                label: "Número de teléfono:",
                placeholder: "Número de teléfono",
                required: true,
                pattern: "[0-9]{8,15}"
            },
            comentarios: {
                tipo: "textarea",
                textarea: true,
                id: "txtComentarios",
                name: "comentarios",
                label: "Comentarios:",
                placeholder: "Tu comentario",
                required: true,
                minlength: "10"
            }
        },
        textoBoton: "Enviar Pedido"
    }
};