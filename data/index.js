import { indexPage } from "./pages/indexPage";
import { catalogoPage } from "./pages/catalogoPage";
import { ofertasPage } from "./pages/ofertasPage";
import { formularioCompraPage } from "./pages/formularioCompraPage";
import { cursosPage } from "./pages/cursosPage";
import { galeriaPage } from "./pages/galeriaPage";
import { nosotrosPage } from "./pages/nosotrosPage";
import { misionVisionPage } from "./pages/misionVisionPage";
import { eventosPage } from "./pages/eventosPage";
import { contactoPage } from "./pages/contactoPage";
import { preguntasFrecuentesPage } from "./pages/preguntasFrecuentesPage";

const commonData = {
    navigation: [
        { url: 'index.html', label: 'Página de inicio' },
        { url: 'Catalogo.html', label: 'Catálogo' },
        { url: 'OfertasyPromociones.html', label: 'Ofertas y Promociones' },
        { url: 'formulariocompra.html', label: 'Formulario de compra' },
        { url: 'Cursos.html', label: 'Cursos' },
        { url: 'Galeria.html', label: 'Galeria' },
        { url: 'Nosotros.html', label: 'Nosotros' },
        { url: 'MisionyVision.html', label: 'Mision y Vision' },
        { url: 'Eventos.html', label: 'Eventos' },
        { url: 'Contactos.html', label: 'Contactos' },
        { url: 'PreguntasF.html', label: 'Preguntas Frecuentes' },
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath) {
        case '/index.html':
            pageData = indexPage;
            break;
        case '/Catalogo.html':
            pageData = catalogoPage;
            break;
        case '/OfertasyPromociones.html':
            pageData = ofertasPage;
            break;
        case '/formulariocompra.html':
            pageData = formularioCompraPage;
            break;
        case '/Cursos.html':
            pageData = cursosPage;
            break;
        case '/Galeria.html':
            pageData = galeriaPage;
            break;
        case '/Nosotros.html':
            pageData = nosotrosPage;
            break;
        case '/MisionyVision.html':
            pageData = misionVisionPage;
            break;
        case '/Eventos.html':
            pageData = eventosPage;
            break;
        case '/Contactos.html':
            pageData = contactoPage;
            break;
        case '/PreguntasF.html':
            pageData = preguntasFrecuentesPage;
            break;
        default:
            pageData = {}; 
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}