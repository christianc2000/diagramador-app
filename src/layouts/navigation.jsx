import React from 'react';

// Componente del encabezado con navbar
const Navigation = () => {
    const headerStyle = {
        backgroundColor: '#333333',
        display: 'flex',
        alignItems: 'center',
       
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
            <img src="src/assets/Logo.png" alt="Logo"  style={{ maxHeight:"70%",padding:"50px"}} />
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
