import React from "react";

const ServiceCard = ({ services }) => {
  const { tittle, service, icon } = services;
  return (
    <div className="px-2 my-1 pb-4 min-w-40 w-fit max-w-96 h-40 flex flex-col  text-left justify-start border-1 border-neutral-500 overflow-hidden rounded-md bg-gray-200 dark:bg-gray-900">
      <p className="my-2">{icon}</p>
      <p className="font-semibold">{tittle}</p>
      <p className="pb-2 m-0 flex-1 items-end">{service}</p>
    </div>
  );
};

export default ServiceCard;
