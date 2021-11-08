import React from 'react';
import PropTypes from 'prop-types';

export const TableRows = ({ rows }) => (
  <tbody>
    {rows.map((row) => (
      <tr key={row.id}>
        {Object.keys(row).map((key) => {
          if (key === 'id') {
            return null;
          }
          return (
            // eslint-disable-next-line react/no-danger
            <td key={key} dangerouslySetInnerHTML={{ __html: row[key] }} />
          );
        })}
      </tr>
    ))}
  </tbody>
);

TableRows.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default TableRows;
