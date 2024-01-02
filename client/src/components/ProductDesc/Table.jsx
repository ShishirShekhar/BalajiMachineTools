const Table = ({ product }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr className="border border-x-0">
          {Object.entries(product?.specifications).map((items) => (
            <th
              className="text-md px-6 py-3 text-center"
              key={items[0]}
              style={{ minWidth: "10rem" }}
            >
              {items[0]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(product?.specifications)[0].map((_, index) => (
          <tr key={index}>
            {Object.entries(product?.specifications).map((items) => (
              <td className="text-md px-6 py-1 text-center" key={items}>
                {items[1][index]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
