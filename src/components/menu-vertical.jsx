import React from 'react';
import GroupOrientation from './buttongroup';
// Componente del menú vertical
const VerticalMenu = () => {
    const menuStyle = {
        backgroundColor: '#333333',

    };
    return (
        <div className="vertical-menu" style={menuStyle}>
            <GroupOrientation />
        </div>
    );
};

export default VerticalMenu;
