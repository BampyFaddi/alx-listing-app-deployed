import React from "react";

interface FilterProps {
  types: string[];
  selectedType: string;
  onSelect: (type: string) => void;
}

const Filter: React.FC<FilterProps> = ({ types, selectedType, onSelect }) => {
  return (
    <div className="flex space-x-3 overflow-x-auto py-4 px-2">
      {types.map((type) => (
        <button
          key={type}
          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
            selectedType === type ? "bg-blue-600 text-white" : "bg-white text-gray-700"
          } hover:bg-blue-100`}
          onClick={() => onSelect(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Filter;
