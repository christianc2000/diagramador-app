import React from 'react';

// Componente del menú vertical
const VerticalMenu = () => {
    const menuStyle = {
        backgroundColor: '#000000',
        position:'relative',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        padding: '20px'
    };

    const ulStyle = {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        flex: '1',
    };

    return (
        <div className="vertical-menu" style={menuStyle}>
            <ul style={ulStyle}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    );
};

export default VerticalMenu;
