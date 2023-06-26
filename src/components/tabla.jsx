import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

// Componente de representación para la tabla
const TableNode = ({ data }) => {
  const { headers, rows } = data;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableNode;
