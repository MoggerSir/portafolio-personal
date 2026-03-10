const CrearElemento = (etiqueta, propiedades)=>{
    creador = document.createElement(etiqueta);
    Object.entries(propiedades).forEach(([tiket,valor])=>{
        if(tiket=== 'classList') creador.classList.add(...[].concat(valor));
        else creador[tiket] = valor;
    })
    return creador;
}


const proyectosContenedor = document.querySelector(".proyectos_contenedor");

const gridProyectos = CrearElemento('div', { classList: 'grid-proyectos' });
proyectosContenedor.appendChild(gridProyectos);

const expandirImagen = (src) => {
    const overlay = CrearElemento('div', { classList: 'overlay-imagen' });
    const imgExpandida = CrearElemento('img', { src: src, classList: 'imagen-expandida' });
    
    overlay.appendChild(imgExpandida);
    document.body.appendChild(overlay);

    overlay.onclick = () => {
        overlay.remove();
    };
}

const agregarProyecto = (titulo, descripcion, imagenSrc, link) => {
    const card = CrearElemento('div', { classList: 'proyecto-card' });
    
    const h4 = CrearElemento('h4', { innerText: titulo });
    const p = CrearElemento('p', { innerText: descripcion });
    const img = CrearElemento('img', { src: imagenSrc, alt: titulo, classList: `proyecto-img`});
    const btn = CrearElemento('button', { innerText: 'Ver Repositorio', classList: 'btn-proyecto' });
    
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(img);
    card.appendChild(btn);
    
    img.onclick = () => expandirImagen(imagenSrc);
    
    if (link) {
        btn.onclick = () => {
            window.open(link, '_blank');
        };
    }
    
    gridProyectos.appendChild(card);
}
document.getElementById('github').addEventListener('click', () => {
    window.open('https://github.com/MoggerSir', '_blank');
});

agregarProyecto(
    "Proyecto 1: Carreras Clandestinas de Gokus", 
    "Este proyecto es una aplicación web interactiva que simula una carrera entre diferentes versiones de Goku. Los usuarios pueden personalizar los nombres de los corredores y observar cómo avanzan aleatoriamente hacia una meta definida.", 
    "img/proyecto1.png",
    "https://github.com/MoggerSir/Race-game"
);

agregarProyecto(
    "Proyecto 2: BlackJack", 
    "Este es un proyecto web sencillo que implementa el juego clásico de Blackjack (también conocido como 21). El jugador compite contra la computadora (máquina) para ver quién se acerca más a 21 sin pasarse.", 
    "/img/proyecto2.png",
    'https://github.com/MoggerSir/Blackjack_JS'
);
agregarProyecto(
    'proyecto 3: calculadora de propinas',
    'Una calculadora de propinas moderna y dinámica, diseñada con un enfoque en Arquitectura de Software y Clean Code. Este proyecto demuestra el uso avanzado de JavaScript para la generación de interfaces, manipulación del DOM y procesamiento de datos mediante expresiones regulares',
    'img/proyecto3.png',
    'https://github.com/MoggerSir/calculadora-de-propinas'
)

