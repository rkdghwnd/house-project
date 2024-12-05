import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { RootState } from '../../reducers';

const ProductTable = () => {
  const productDescriptionTable = useSelector(
    (state: RootState) => state.productions.productDescriptionTable
  );

  return (
    <>
      <table className="product-table">
        <tbody>
          {productDescriptionTable.map((row) => {
            return (
              <tr key={shortid.generate()}>
                <th scope="row">{row[0]}</th>
                <td>{row[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="product-section-divider sm-only" aria-hidden></div>
    </>
  );
};

export default forwardRef(ProductTable);
