import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ReactFlow, { Background, BackgroundVariant, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import ResizableNodeSelected from './reacflow/resizable/ResizableNodeSelected';

const nodeTypes = {
    ResizableNodeSelected,
};

const defaultNodeStyle = {
    background: '#fff',
    color: 'black',
    fontSize: 12,
    width: '100px',
    height: '100px',
};

const initialNodes = [
    {
        id: '1',
        type: 'ResizableNodeSelected',
        data: { label: 'NodeResizer' },
        position: { x: -100, y: 0 },
        style: defaultNodeStyle,
    },
    {
        id: '2',
        type: 'ResizableNodeSelected',
        data: { label: 'NodeResizer when selected' },
        position: { x: 100, y: 300 },
        style: defaultNodeStyle,
    },
    {
        id: '3',
        type: 'ResizableNodeSelected',
        data: { label: 'Custom Resize Icon' },
        position: { x: 150, y: 150 },
        style: defaultNodeStyle,
    },
];

const initialEdges = [];

const verticalMenuStyle = {
    width: '200px',
    backgroundColor: '#444444',
};

const contentStyle = {
    flex: '1',
    backgroundColor: '#222222',
};

const containerStyle = {
    display: 'flex',
    color: '#fff',
    height: '100%',
};

export default function NodeToolbarExample() {
    const [nodes, setNodes] = useState(initialNodes);

    const handleCreateNode = () => {
        const newNode = {
            id: '1',
            type: 'ResizableNodeSelected',
            data: { label: 'NodeResizer' },
            position: { x: -100, y: 0 },
            style: defaultNodeStyle,
        };

        setNodes((prevNodes) => [...prevNodes, newNode]);
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="vertical-menu" style={verticalMenuStyle}>
                <Box
                    sx={{
                        display: 'flex',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" fullWidth>
                        <Button onClick={handleCreateNode}>Tabla</Button>
                    </ButtonGroup>
                </Box>
            </div>
            <div className="vertical-menu" style={contentStyle}>
                <ReactFlow
                    elements={nodes} // Utiliza la lista de nodos actualizada como elementos del ReactFlow
                    className="react-flow-node-resizer-example"
                    minZoom={0.2}
                    maxZoom={4}
                    fitView
                    nodeTypes={nodeTypes}
                >
                    <Background variant={BackgroundVariant.Dots} />
                    <MiniMap />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}
