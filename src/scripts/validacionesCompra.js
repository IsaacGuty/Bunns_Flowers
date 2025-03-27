document.addEventListener("DOMContentLoaded", function() {
    console.log("Iniciando Validación de Formulario");

    const form = document.querySelector("form");

    // Función para validar correo electrónico
    function validarCorreo(correo) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com|icloud\.com|gmail\.es|yahoo\.es|hotmail\.es|icloud\.es)$/;
        return emailRegex.test(correo);
    }

    // Función para validar el número de teléfono
    function validarTelefono(telefono) {
        const phoneRegex = /^\+504\s?[2389]\d{7}$/;
        return phoneRegex.test(telefono);
    }

    // Función para validar que el nombre no esté vacío
    function validarNombre(nombre) {
        return nombre.trim() !== "";
    }

    // Función para validar que el nombre tenga al menos 3 caracteres
    function validarNombreL(nombre) {
        return nombre.trim().length >= 3;
    }

    // Función para validar que el apellido no esté vacío
    function validarApellido(apellido) {
        return apellido.trim() !== "";
    }

    // Función para validar que el apellido tenga al menos 3 caracteres
    function validarApellidoL(apellido) {
        return apellido.trim().length >= 3;
    }

    // Función para validar que los comentarios tengan al menos 10 caracteres
    function validarComentarios(comentarios) {
        return comentarios.trim().length >= 10;
    }

    // Función para validar que al menos un producto tenga cantidad mayor que 0
    function validarProductos() {
        const cantidades = document.querySelectorAll(".cantidad");
        let alMenosUnoSeleccionado = false;
        cantidades.forEach(input => {
            if (parseInt(input.value) > 0) {
                alMenosUnoSeleccionado = true;
            }
        });
        return alMenosUnoSeleccionado;
    }

    // Función para mostrar el mensaje de error junto al campo
    function mostrarError(input, mensaje) {
        input.style.outline = "2px solid red";
        
        let errorMensaje = input.nextElementSibling;
        if (!errorMensaje || errorMensaje.tagName !== "SPAN") {
            errorMensaje = document.createElement("span");
            errorMensaje.style.color = "red";
            errorMensaje.style.fontSize = "12px";
            errorMensaje.style.display = "block";
            input.parentNode.insertBefore(errorMensaje, input.nextSibling);
        }
        errorMensaje.textContent = mensaje;
    }
    
    // Función para limpiar el mensaje de error
    function limpiarError(input) {
        input.style.outline = "";
        const errorMensaje = input.nextElementSibling;
        if (errorMensaje && errorMensaje.tagName === "SPAN") {
            errorMensaje.remove();
        }
    }

    // Función para crear el mensaje formateado
    function crearMensajeFormateado() {
        const nombre = document.getElementById('txtNombre').value.trim();
        const apellido = document.getElementById('txtApellido').value.trim();
        const email = document.getElementById('txtEmail').value.trim();
        const telefono = document.getElementById('txtTeléfono').value.trim();
        const comentarios = document.getElementById('txtComentarios').value.trim();
        
        const precios = {
            "Ramo de 3 rosas eternas": 100,
            "Ramo de 7 rosas eternas": 230,
            "Ramo de 15 rosas eternas": 410,
            "Ramo de 1 girasol": 60,
            "Ramo de 7 rosas y 1 girasol": 270,
            "Ramo de 10 rosas, 1 girasol y 10 chocolates": 760,
            "Ramo de 5 dalias eternas": 240,
            "Ramo de 2 dalias, 1 rosa y 1 HotWheel": 260,
            "Ramo de 7 dalias eternas": 320,
            "Ramo de 5 tulipanes": 160,
            "Ramo de 5 tulipanes con envoltorio": 170,
            "Ramo de 5 Tulipanes y una retratera con 2 Polaroids": 370
        };
        
        const productos = [];
        document.querySelectorAll('.producto').forEach(item => {
            const label = item.querySelector('label').textContent.split(' - ')[0];
            const cantidad = parseInt(item.querySelector('.cantidad').value);
            
            if (cantidad > 0) {
                productos.push({
                    nombre: label,
                    cantidad: cantidad,
                    precioUnitario: precios[label],
                    subtotal: cantidad * precios[label]
                });
            }
        });

        let total = productos.reduce((sum, prod) => sum + prod.subtotal, 0);
        
    // Línea decorativa usando el color primario (simulado con caracteres)
    const lineaDecorativa = '══════════════════════════════════════════';
    
    let mensaje = `\n${lineaDecorativa}\n`;
    mensaje += ` NUEVO PEDIDO DE BUNNS FLOWERS \n`;
    mensaje += `${lineaDecorativa}\n\n`;
    
    mensaje += `■ DATOS DEL CLIENTE:\n`;
    mensaje += `  ▪ Nombre completo: ${nombre} ${apellido}\n`;
    mensaje += `  ▪ Email: ${email}\n`;
    mensaje += `  ▪ Teléfono: ${telefono}\n\n`;
    
    mensaje += `■ DETALLE DEL PEDIDO:\n`;
    mensaje += `${lineaDecorativa.substr(0, 30)}\n`;
    productos.forEach(prod => {
        // Alineamos las cantidades y precios para mejor legibilidad
        const cantidadFormateada = prod.cantidad.toString().padStart(2, ' ');
        const precioFormateado = `Lps.${prod.precioUnitario}`.padStart(8, ' ');
        const subtotalFormateado = `Lps.${prod.subtotal}`.padStart(10, ' ');
        
        mensaje += `  ▪ ${cantidadFormateada} x ${prod.nombre} ${precioFormateado} = ${subtotalFormateado}\n`;
    });
    mensaje += `${lineaDecorativa.substr(0, 30)}\n`;
    
    // Total con énfasis
    const totalFormateado = `Lps.${total}`.padStart(15, ' ');
    mensaje += `\n  TOTAL DEL PEDIDO: ${totalFormateado}\n\n`;
    
    if (comentarios) {
        mensaje += `■ COMENTARIOS ADICIONALES:\n`;
        mensaje += `  ▪ ${comentarios.replace(/\n/g, '\n    ')}\n\n`;
    }
    
    // Pie de mensaje con estilo sutil
    mensaje += `${lineaDecorativa}\n`;
    mensaje += ` Este pedido fue enviado desde: Bunns Flowers - Formulario de Compra \n`;
    mensaje += `${lineaDecorativa}\n`;
    
    return mensaje;
    }

    // Función para mostrar el loader
    function mostrarLoader() {
        const loader = document.createElement('div');
        loader.className = 'form-loader';
        loader.innerHTML = `
            <div class="loader-spinner"></div>
            <p>Enviando tu pedido...</p>
        `;
        document.body.appendChild(loader);
        return loader;
    }

    // Función para mostrar mensaje de éxito
    function mostrarMensajeExito() {
        const mensaje = document.createElement('div');
        mensaje.className = 'mensaje-exito';
        mensaje.innerHTML = `
            <div class="exito-contenido">
                <p>✓ Pedido enviado con éxito</p>
                <p>Gracias por tu compra. Nos pondremos en contacto contigo pronto.</p>
            </div>
        `;
        document.body.appendChild(mensaje);
        
        setTimeout(() => {
            mensaje.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(mensaje);
            }, 500);
        }, 5000);
    }

    // Función principal de validación
    function validarFormulario() {
        let valido = true;

        const campos = [
            { 
                id: "txtEmail", 
                validacion: validarCorreo, 
                mensaje: "El correo debe tener un formato válido y pertenecer a los dominios permitidos (gmail, yahoo, hotmail, icloud) con extensión .com o .es." 
            },
            { 
                id: "txtTeléfono", 
                validacion: validarTelefono, 
                mensaje: "El teléfono principal debe iniciar con +504 y tener 8 dígitos, comenzando con 2, 3, 8 o 9." 
            },
            { 
                id: "txtNombre", 
                validacion: validarNombre, 
                mensaje: "El campo Nombre no puede estar vacío." 
            },
            { 
                id: "txtNombre", 
                validacion: validarNombreL, 
                mensaje: "El campo Nombre debe tener al menos 3 caracteres." 
            },
            { 
                id: "txtApellido", 
                validacion: validarApellido, 
                mensaje: "El campo Apellido no puede estar vacío." 
            },
            { 
                id: "txtApellido", 
                validacion: validarApellidoL, 
                mensaje: "El campo Apellido debe tener al menos 3 caracteres." 
            },
            { 
                id: "txtComentarios", 
                validacion: validarComentarios, 
                mensaje: "El campo Comentarios debe tener al menos 10 caracteres." 
            }
        ];

        campos.forEach(function (campo) {
            const input = document.getElementById(campo.id);
            const esValido = campo.validacion(input.value);
            if (!esValido) {
                mostrarError(input, campo.mensaje);
                valido = false;
            } else {
                limpiarError(input);
            }
        });

        // Validar productos
        if (!validarProductos()) {
            const productosContainer = document.querySelector(".productos-container");
            mostrarError(productosContainer, "Debes seleccionar al menos un producto.");
            valido = false;
        } else {
            limpiarError(document.querySelector(".productos-container"));
        }

        return valido;
    }

    // Evento submit del formulario
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        if (!validarFormulario()) {
            console.log("Errores encontrados. Corrige antes de enviar.");
            return;
        }

        const loader = mostrarLoader();
        
        try {
            const mensaje = crearMensajeFormateado();
            const formData = new FormData();
            
            formData.append('message', mensaje);
            formData.append('_next', 'http://localhost:5173/formulariocompra.html?envio=exitoso');
            formData.append('_captcha', 'false');
            formData.append('_template', 'box');

            const response = await fetch('https://formsubmit.co/ajax/marcesuazo2004@gmail.com', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                window.location.href = 'http://localhost:5173/formulariocompra.html?envio=exitoso';
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.');
        } finally {
            if (loader && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }
    });

    // Event listeners para limpiar errores al editar
    const camposInput = [
        { id: "txtEmail", validacion: validarCorreo },
        { id: "txtTeléfono", validacion: validarTelefono },
        { id: "txtNombre", validacion: validarNombre },
        { id: "txtApellido", validacion: validarApellido },
        { id: "txtComentarios", validacion: validarComentarios }
    ];

    camposInput.forEach(function (campo) {
        const input = document.getElementById(campo.id);
        input.addEventListener("input", function () {
            limpiarError(input);
        });
    });

    // Limpiar error de productos al cambiar cantidades
    document.querySelectorAll(".cantidad").forEach(input => {
        input.addEventListener("input", function () {
            limpiarError(document.querySelector(".productos-container"));
        });
    });

    // Mostrar mensaje de éxito si viene de un envío exitoso
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('envio') === 'exitoso') {
        mostrarMensajeExito();
        history.replaceState(null, '', 'formulariocompra.html');
    }
});