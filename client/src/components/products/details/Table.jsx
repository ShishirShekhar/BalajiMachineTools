const Table = ({ product }) => {
  const specs = product?.specifications || {};
  const entries = Object.entries(specs);

  const isMatrix = entries.length > 0 && entries.every(([, value]) => Array.isArray(value));

  const renderMatrixHeader = () => (
    <tr className="bg-gray-200">
      {entries.map(([key]) => (
        <th
          key={key}
          className="md:text-md border border-gray-400 px-2 py-2 text-center text-sm md:py-3"
          style={{ minWidth: "5rem" }}
        >
          {key}
        </th>
      ))}
    </tr>
  );

  const renderMatrixBody = () => {
    const maxRows = Math.max(...entries.map(([, value]) => value.length));
    return Array.from({ length: maxRows }).map((_, index) => (
      <tr key={index}>
        {entries.map(([key, value]) => (
          <td
            key={`${key}-${index}`}
            className="md:text-md border border-gray-400 px-2 py-2 text-center text-sm md:py-2"
          >
            {value[index] ?? "—"}
          </td>
        ))}
      </tr>
    ));
  };

  const renderKVBody = () => (
    <tbody>
      {entries.map(([key, value]) => (
        <tr key={key}>
          <th className="w-1/3 border border-gray-300 bg-gray-50 px-3 py-2 text-left text-sm">
            {key}
          </th>
          <td className="border border-gray-300 px-3 py-2 text-sm">
            {Array.isArray(value) ? value.join(", ") : String(value)}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        {isMatrix ? (
          <table className="w-full table-auto border-collapse border border-gray-400 md:w-max">
            <thead>{renderMatrixHeader()}</thead>
            <tbody>{renderMatrixBody()}</tbody>
          </table>
        ) : (
          <table className="w-full table-auto border-collapse border border-gray-300">
            {renderKVBody()}
          </table>
        )}
      </div>
      <div className="rounded-b-lg border border-t-0 border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-500 md:hidden">
        💡 Scroll horizontally to see all specifications
      </div>
    </div>
  );
};

export default Table;
