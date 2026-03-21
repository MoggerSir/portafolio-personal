const CrearElemento = (etiqueta, propiedades)=>{
    const creador = document.createElement(etiqueta);
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

export const agregarProyecto = (titulo, descripcion, imagenSrc, link) => {
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
