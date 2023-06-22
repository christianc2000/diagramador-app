import React from 'react';
import VerticalMenu from '../components/menu-vertical';
import Pizarra from '../components/pizarra';

const Container = ({ children }) => {
    const containerStyle = {
        backgroundColor: '#363030',
        display: 'flex',
        color: '#fff',
        height: '100%',
    };

    const verticalMenuStyle = {
        width: '200px',
        backgroundColor: '#363030',
    };

    const contentStyle = {
        flex: '1',
        padding: '20px',
        backgroundColor: '#1E1E1E',
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="vertical-menu" style={verticalMenuStyle}>
                <VerticalMenu />
            </div>
            <div className="content" style={contentStyle}>
                <Pizarra></Pizarra>
            </div>
        </div>
    );
};

export default Container;
