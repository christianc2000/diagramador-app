const ArrowEdge = ({ id, sourceX, sourceY, targetX, targetY, style = {} }) => {
    const paddingHorizontal = 30; // Espacio horizontal fijo

    // Calcular el punto de inicio de la línea ortogonal
    
    const initX = sourceX + paddingHorizontal;
    const initY = sourceY;
    const endX = targetX - paddingHorizontal;
    const endY = targetY;

    const edgePath = `M${sourceX},${sourceY} L${initX},${initY} L${endX},${endY} L${targetX},${targetY}`;
    const markerEnd = `url(#arrow-${id})`;

    return (
        <>
            <defs>
                <marker
                    id={`arrow-${id}`}
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="40"
                    markerHeight="10"
                    orient="0"
                    markerUnits="strokeWidth"
                >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
                </marker>
            </defs>
            <path d={edgePath} style={{ ...style, markerEnd, strokeWidth: 1, stroke: 'black', fill: 'none' }} />
        </>
    );
};

export default ArrowEdge;
