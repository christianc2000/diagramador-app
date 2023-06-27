import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';
import ResizableNodeSelected from './reacflow/resizable/ResizableNodeSelected';

import Sidebar from './reacflow/sidebar/Sidebar';
import ArrowEdge from './ArrowEdge';
import BiDirectionalEdge from './reacflow/bidireccional/BiDirectionalEdge';
import BiDirectionalNode from './reacflow/bidireccional/BiDirectionalNode';

import '../components/index.css';

const initialNodes = [];
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
let id = 0;
const getId = () => `dndnode_${id = id + 1}`;

const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [sourceNode, setSourceNode] = useState(null);
    const [targetNode, setTargetNode] = useState(null);

    const onConnect = (params) => {
        const { source, target } = params;
        setEdges((eds) => addEdge({ ...params, type: 'step' }, eds));
        setSourceNode(source);
        setTargetNode(target);
    };

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNodeId = getId();
            const newNode = {
                id: newNodeId,
                type: 'ResizableNodeSelected',
                position,
                data: {
                    label: `class name`,
                    nodeId: newNodeId,
                    width: defaultNodeStyle.width,
                    height: defaultNodeStyle.height,
                },
                style: defaultNodeStyle,
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    return (
        <div className="dndflow">
            <Sidebar />
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                        edgeTypes={{
                            step: (props) => (
                                <ArrowEdge
                                    {...props}
                                    sourceNode={sourceNode}
                                    targetNode={targetNode}
                                />
                            ),
                        }}
                        fitView
                    >
                        <Controls />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
        </div>
    );
};

export default DnDFlow;
