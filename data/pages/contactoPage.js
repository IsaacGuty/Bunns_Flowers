export const contactoPage = {
    titulo: "CONTÁCTANOS",
    introduccion: "Estamos aquí para ayudarte a hacer tus momentos aún más especiales. Si tienes preguntas, necesitas asesoría o deseas personalizar un arreglo, no dudes en escribirnos o llamarnos.",

    telefonos: {
        titulo: "TELÉFONO",
        items: [
            {
                texto: "8774-0158",
                enlace: "tel:87740158"
            }
        ]
    },
    whatsapp: {
        titulo: "WHATSAPP",
        items: [
            {
                texto: "Enviar mensaje",
                enlace: "https://wa.me/50487740158",
                target: "_blank"
            }
        ]
    },
    email: {
        titulo: "CORREO ELECTRÓNICO",
        items: [
            {
                texto: "lizzysauceda15@gmail.com",
                enlace: "mailto:lizzysauceda15@gmail.com"
            }
        ]
    },
    horario: {
        titulo: "HORARIO DE ATENCIÓN",
        items: [
            "LUNES A VIERNES: 9:00 AM - 6:00 PM",
            "SÁBADO: 9:00 AM - 3:00 PM",
            "DOMINGO: CERRADO"
        ],
        mensaje: "¡EN BUNNS FLOWERS ESTAMOS ENCANTADOS DE ATENDERTE!"
    },

    preguntasFrecuentes: {
        titulo: "PUEDES VER NUESTRAS PREGUNTAS FRECUENTES AQUÍ",
        enlace: "PreguntasF.html",
        textoBoton: "PREGUNTAS Y RESPUESTAS"
    },

    formulario: {
        titulo: "COMPLETA TU INFORMACIÓN",
        action: "https://formsubmit.co/marcesuazo2004@gmail.com",
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