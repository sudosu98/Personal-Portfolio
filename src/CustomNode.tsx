import { FC, memo } from "react";
import { Handle, Position } from "reactflow";

export interface CutomNodeProps {
  data: { icon: any; name: string };
}
const CustomNode: FC<CutomNodeProps> = ({ data }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="avatar w-8">
          <div className="w-8 rounded-full">
            <img src={data.icon} />
          </div>
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
};

export default memo(CustomNode);
