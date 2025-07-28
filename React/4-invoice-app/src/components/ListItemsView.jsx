import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types';


export const ListItemsView = ({ title, items, handlerRemoveItem }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItemView key={id} product={product} price={price} quantity={quantity} handlerRemoveItem={ () => handlerRemoveItem(id) } />
          ))}
        </tbody>
      </table>
    </>
  );
};

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};