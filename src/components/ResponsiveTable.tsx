import React, { ReactNode } from 'react';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => ReactNode;
}

interface ResponsiveTableProps {
  columns: Column[];
  data: any[];
  onRowClick?: (row: any) => void;
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ columns, data, onRowClick }) => {
  return (
    <>
      <div className="hidden md:block bg-white/60 dark:bg-gray-800/60 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <table className="w-full">
          <thead className="bg-gray-50/60 dark:bg-gray-700/60">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-white/40 dark:hover:bg-gray-700/40 transition-colors cursor-pointer"
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {data.map((row, index) => (
          <div
            key={index}
            className="bg-white/60 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onRowClick && onRowClick(row)}
          >
            {columns.map((column) => (
              <div key={column.key} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{column.label}</span>
                <span className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ResponsiveTable;
