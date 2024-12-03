import { useDispatch } from 'react-redux';
import { updateQuantity } from '../Components/Home/cart'

const useCart = () => {
  const dispatch = useDispatch();

  const changeCount = (bool, item) => {
    let newCount;
    if (bool === 'minus' && item.quantity > 1) {
      newCount = item.quantity - 1; 
    } else if (bool === 'plus') {
      newCount = item.quantity + 1;
    }
    dispatch(updateQuantity({ id: item.id, quantity: newCount }));
  };
  return { changeCount };
};
export default useCart;