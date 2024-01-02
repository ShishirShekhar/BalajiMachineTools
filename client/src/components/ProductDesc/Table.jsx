const Table = ({ product }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          {Object.entries(product?.specifications).map(([key]) => (
            <th
              className="text-md px-2 py-3 text-center border border-gray-400"
              key={key}
              style={{ minWidth: "5rem" }}
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(product?.specifications)[0].map((_, index) => (
          <tr key={index}>
            {Object.entries(product?.specifications).map(([key, value]) => (
              <td
                className="text-md px-2 py-2 text-center border border-gray-400"
                key={key}
              >
                {value[index]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
