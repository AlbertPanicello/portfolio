document.addEventListener("DOMContentLoaded", function () {
    // Diccionario de traducciones
    const translations = {
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            salutation: "Hello!",
            welcome: "Welcome to my Portfolio!",
            aboutTitle: "About Me",
            aboutText: "Hello! My name is Albert Panicello, and I am a Computer Engineering student at the Polytechnic University of Catalonia. In this portfolio, you will find information about who I am, my projects, my technical and soft skills, among other things. I am specializing in Software Engineering because I am passionate about bothfront-end and back-end development, as well as video games.",
            tskills: "Skills",
            programming: "Programming",
            databases: "Databases",
            versionControl: "Version control",
            softSkills: "Soft Skills",
            comms: "Communication",
            problemSolving: "Problem-solving",
            teamCollab: "Teamwork & Collaboration",
            adapt: "Adaptability",
            learn: "Willing to learn",
            projects: "Projects",
            projectexp: "2D game developed in unity in a 2 week course",
            projectmovie: "Introduction to React with a movie searcher app",
            nombre: "Name",
            namePlaceholder: "Name",
            message: "Message",
            messagePlaceholder: "Message",
            sendButton: "Send!",
        },
        es: {
            home: "Inicio",
            about: "Sobre mí",
            projects: "Proyectos",
            skills: "Habilidades",
            contact: "Contacto",
            salutation: "Hola!",
            welcome: "¡Bienvenido a mi Portafolio!",
            aboutTitle: "Sobre Mí",
            aboutText: "¡Hola! Mi nombre es Albert Panicello y soy estudiante de Ingeniería Informática en la Universidad Politécnica de Cataluña. En este portafolio encontrarás información sobre quién soy, mis proyectos, mis habilidades técnicas y blandas, entre otras cosas. Me estoy especializando en Ingeniería de Software porque me apasiona el desarrollo tanto front-end como back-end, así como los videojuegos.",
            tskills: "Habilidades técnicas",
            programming: "Programación",
            databases: "Bases de Datos",
            versionControl: "Control de versiones",
            softSkills: "Habilidades blandas",
            comms: "Comunicación",
            problemSolving: "Resolución de problemas",
            teamCollab: "Trabajo en equipo & Colaboración",
            adapt: "Adaptabilidad",
            learn: "Ganas de aprender",
            projects: "Proyectos",
            projectexp: "Juego en 2D desarrolado en Unity en un curso de dos semanas",
            projectmovie: "Introducción a React con una app para buscar películas",
            nombre: "Nombre",
            namePlaceholder: "Nombre",
            message: "Mensaje",
            messagePlaceholder: "Mensaje",
            sendButton: "Enviar!",
        }
    };

    let currentLanguage = "en";

    function toggleLanguage() {
        currentLanguage = currentLanguage === "en" ? "es" : "en";

        // Cambiar textos en los elementos con data-translate
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
        
            if (element.children.length > 0) {
                // Caso 1: Si el elemento tiene hijos (como <span>), solo cambiamos el nodo de texto sin tocar los spans
                let firstTextNode = [...element.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
                if (firstTextNode) {
                    firstTextNode.nodeValue = translations[currentLanguage][key] + " "; 
                }
            } else {
                // Caso 2: Si no tiene hijos, traducimos normalmente
                element.textContent = translations[currentLanguage][key];
            }
        });
        
        
        
        
        
        

        // Traducir placeholders de inputs
        document.querySelectorAll("[data-placeholder]").forEach(input => {
            const key = input.getAttribute("data-placeholder");
            if (translations[currentLanguage][key]) {
                input.setAttribute("placeholder", translations[currentLanguage][key]);
            }
        });

        // Traducir botón de enviar
        const sendButton = document.querySelector(".container__button");
        if (sendButton) {
            sendButton.value = translations[currentLanguage]["sendButton"];
        }

        // Actualizar el botón de idioma
        const languageButton = document.getElementById("language-toggle");
        if (languageButton) {
            languageButton.textContent = currentLanguage === "en" ? "➡️ Español" : "➡️ English";
        }
    }

    // Agregar evento al botón
    document.getElementById("language-toggle").addEventListener("click", toggleLanguage);
});
