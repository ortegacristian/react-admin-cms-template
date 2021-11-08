import React from 'react';
import PropTypes from 'prop-types';

export const TableHeaders = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header) => <td key={header.id}>{header.label}</td>)}
    </tr>
  </thead>
);

TableHeaders.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};

export default TableHeaders;
