import React from 'react';

// Componente del encabezado con navbar
const Navigation = () => {
    const headerStyle = {
        backgroundColor: '#363030',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        height: '100%',
    };

    const navStyle = {
        listStyle: 'none',
        display: 'flex',
    };

    const navItemStyle = {
        margin: '0 10px',
        cursor: 'pointer',
    };

    return (
        <div className="Navigation" style={headerStyle}>
            <h1 style={{ marginRight: 'auto' }}>Encabezado</h1>
            <nav>
                <ul style={navStyle}>
                    <li style={navItemStyle}>Inicio</li>
                    <li style={navItemStyle}>Acerca de</li>
                    <li style={navItemStyle}>Servicios</li>
                    <li style={navItemStyle}>Contacto</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
