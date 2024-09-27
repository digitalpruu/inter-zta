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
        description1: "En INTER-ZTA, nos especializamos en miscelánea y papelería. Ofrecemos una variedad de productos para satisfacer tus necesidades diarias. En nuestra tienda, cada detalle cuenta y nos esforzamos por brindar la mejor experiencia a nuestros clientes.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "INTERNET - HIJOS ALMACEN",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/y2msRSpPxAhUQD5L/?mibextid=qi2Omg", // Enlace específico de Facebook
        instagram: "", // No se proporciona
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
