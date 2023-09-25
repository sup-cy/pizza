import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';

import DeleteItem from './DeleteItem';
import QuantityButton from './QuantityButton';
import { getCurrentQuantity } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <QuantityButton
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
          show={false}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
