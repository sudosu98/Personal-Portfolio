import { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';
import 'reactflow/dist/base.css';

import CustomNode from './CustomNode';
import { initEdges, skillTree } from './content/skills/skills';

const nodeTypes = {
  custom: CustomNode,
};



const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(skillTree);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  console.log({nodes});
    
  const onConnect = useCallback((params : any) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      className="bg-teal-50"
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
