import React from 'react';

interface Props {
  title: string
  value: string;
  icon: JSX.Element;
}

export const PropertieIcon = ({ title, value, icon }: Props) => {
  return (
    <div className="flex items-center justify-center gap-1 px-2 py-6">
      <div className="flex items-center justify-center text-gray-600">
        {icon}
      </div>
      <div className="flex flex-col gap-0 text-gray-600">
        <span className="font-light text-base leading-none">{title}</span>
        <span className="font-bold text-2xl leading-none">{value}</span>
      </div>
    </div>
  );
}; 