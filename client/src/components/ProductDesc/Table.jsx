import React from "react";

const Table = ({ product }) => {
  const renderTableHeader = () => {
    return (
      <tr className="bg-gray-200">
        {Object.entries(product?.specifications).map(([key]) => (
          <th
            key={key}
            className="text-sm md:text-md px-2 py-2 md:py-3 text-center border border-gray-400"
            style={{ minWidth: "5rem" }}
          >
            {key}
          </th>
        ))}
      </tr>
    );
  };

  const renderTableBody = () => {
    return Object.values(product?.specifications)[0].map((_, index) => (
      <tr key={index}>
        {Object.entries(product?.specifications).map(([key, value]) => (
          <td
            key={key}
            className="text-sm md:text-md px-2 py-2 md:py-2 text-center border border-gray-400"
          >
            {value[index]}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full md:w-max border-collapse border border-gray-400">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
