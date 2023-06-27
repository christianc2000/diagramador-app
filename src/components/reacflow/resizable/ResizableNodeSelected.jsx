import { memo, useState } from 'react';
import * as React from 'react';
import { Handle, Position, NodeResizer, NodeToolbar } from 'reactflow';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ResizableNodeSelected = ({ data, selected }) => {
    const [open, setOpen] = React.useState(false);
    const [attributes, setAttributes] = useState([]);
    const [dataTypes, setDataTypes] = useState([]);

    const handleClickOpen = () => {
        console.log(data);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddAttribute = () => {
        setAttributes([...attributes, '']);
        setDataTypes([...dataTypes, '']);
    };

    const handleAttributeChange = (index, value) => {
        const updatedAttributes = [...attributes];
        updatedAttributes[index] = value;
        setAttributes(updatedAttributes);
    };

    const handleDataTypeChange = (index, value) => {
        const updatedDataTypes = [...dataTypes];
        updatedDataTypes[index] = value;
        setDataTypes(updatedDataTypes);
    };

    const handleDeleteAttribute = (index) => {
        const updatedAttributes = [...attributes];
        const updatedDataTypes = [...dataTypes];
        updatedAttributes.splice(index, 1);
        updatedDataTypes.splice(index, 1);
        setAttributes(updatedAttributes);
        setDataTypes(updatedDataTypes);
    };

    return (
        <>
            {selected && (
                <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
                    <Button variant="outlined" size="small" onClick={handleClickOpen}>
                        Abrir
                    </Button>
                </NodeToolbar>
            )}
            <NodeResizer color="#007BFF" isVisible={selected} minWidth={100} minHeight={100} />

            <div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', textAlign: 'center' }}>
                {data.label}
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid black', boxSizing: 'border-box', margin: '0' }} />
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: 'gray', width: '2px', height: '2px' }}
            />

            <Handle
                type="source"
                position={Position.Right}
                style={{ background: 'gray', width: '2px', height: '2px' }}
            />
           
            <Dialog open={open} onClose={handleClose} sx={{ minWidth: '500px' }}>
                <DialogTitle height={'15px'}>Tabla {data.nodeId}</DialogTitle>

                <DialogContent>

                    <TextField
                        margin="dense"
                        id="name"
                        label="Título de la tabla"
                        type="text"
                        fullWidth
                        variant="standard"
                        sx={{ mb: 2 }}
                    />

                    <Grid container spacing={1}>
                        {attributes.map((attribute, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={6}>
                                    <TextField
                                        value={attribute}
                                        onChange={(e) => handleAttributeChange(index, e.target.value)}
                                        autoFocus={index === 0}
                                        margin="dense"
                                        id={`atributo-${index}`}
                                        label={`Atributo ${index + 1}`}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        sx={{ mb: 1 }}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        value={dataTypes[index]}
                                        onChange={(e) => handleDataTypeChange(index, e.target.value)}
                                        autoFocus={index === 0}
                                        margin="dense"
                                        id={`tipodato-${index}`}
                                        label={`Tipo de dato ${index + 1}`}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        sx={{ mb: 1 }}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton
                                        aria-label="Eliminar"
                                        onClick={() => handleDeleteAttribute(index)}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                    <Button variant="outlined" fullWidth onClick={handleAddAttribute}>
                        Agregar atributo
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default memo(ResizableNodeSelected);
