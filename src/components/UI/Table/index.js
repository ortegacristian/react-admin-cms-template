import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import { TableHeaders } from './Headers';
import { TableRows } from './Rows';

export const Table = ({ headers, rows }) => (
  <table>
    <TableHeaders headers={headers} />
    <TableRows rows={rows} />
  </table>
);

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Table;
