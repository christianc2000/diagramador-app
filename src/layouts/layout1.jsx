import React from 'react';
import Navigation from './navigation';
import Contenido from '../components/container'
const Layout = () => {
    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr', // Una columna
        gridTemplateRows: '70px 19fr', // 1 parte para la barra de navegación, 19 partes para el contenido
        height: '100vh', // Ajusta la altura según tus necesidades
        width: '100vw', // Ocupa el ancho completo de la pantalla
    };



    const contentStyle = {
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="layout" style={layoutStyle}>

            <Navigation />

            <Contenido />
        </div>
    );
};

export default Layout;
