const title = "INTER-ZTA";
const email = "martha.com2023@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573132438809"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "INTER-ZTA es tu destino y papelería para cada ocasión. Desde nuestra creación, hemos sido la elección preferida de aquellos que buscan variedad y calidad en un solo lugar. En INTER-ZTA, nos enorgullece ofrecer una gama amplia de productos que cubren todas tus necesidades, desde artículos de papelería básicos hasta detalles especiales para cualquier evento. Nuestro compromiso es proporcionar productos que combinen funcionalidad y diseño, asegurando que siempre encuentres lo que buscas. Nuestro equipo trabaja constantemente para mantener un inventario actualizado y diverso, garantizando que puedas encontrar los productos más recientes y populares. Creemos en la importancia de cada pequeño detalle, por lo que nos esforzamos por ofrecer artículos que marquen la diferencia en tu día día. Si necesitas papelería para cualquier ocasión INTER-ZTA es tu mejor opción. ¡ Visítanos y descubre la variedad y calidad que tenemos para ti!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Papelería para cada ocasión",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/y2msRSpPxAhUQD5L/?mibextid=qi2Omg", // Enlace específico de Facebook
        instagram: "https://www.instagram.com/", // No se proporciona
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
