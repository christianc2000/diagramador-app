import { memo } from 'react';
import { Handle, Position, NodeResizer, NodeToolbar } from 'reactflow';
import { Button } from '@mui/material';

const ResizableNodeSelected = ({ data, selected }) => {
    return (
        <>
            {selected && (
                <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
                    <Button variant="outlined" size="small">Abrir</Button>
                </NodeToolbar>
            )}
            <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={100} />
            <Handle type="target" position={Position.Left} />

            <div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', textAlign: 'center' }}>
                {data.label}
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid black', boxSizing: 'border-box', margin: 0  }} />

            <Handle type="source" position={Position.Right} />
        </>
    );
};

export default memo(ResizableNodeSelected);
