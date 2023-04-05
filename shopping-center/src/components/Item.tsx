import { ItemType } from "../context/modules/ItemProvider";
import {
  ReducerActionType,
  ReducerAction,
} from "../context/modules/CartProvider";
import { ReactElement } from "react";
import { BsCartPlus, BsCheckCircle } from "react-icons/bs";
import StarRating from "./StarRating";

type Props = {
  item: ItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  isSelected: boolean;
};

const Item = ({
  item,
  dispatch,
  REDUCER_ACTIONS,
  isSelected,
}: Props): ReactElement => {
  // iamge link
  const imgPath: string = new URL(
    `../assets/images/${item.sku}.jpeg`,
    import.meta.url
  ).href;

  // add item to cart
  const onAddCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...item, quantity: 1 } });

  // in cart
  const itemCart = isSelected ? <BsCheckCircle /> : null;
  return (
    <div className=" text-secondary">
      <div className="container-lg">
        <div className="row my-5 align-items-center justify-content-center">
          <div className="col-8 col-lg-4 col-xl-3">
            <div className="card text-center">
              <img
                className="card-img-top img-fluid. "
                src={imgPath}
                alt={item.name}
              />
              <div className="card-body ">
                <p className="card-title">{item.name} </p>
                {/* format price */}
                <StarRating
                  rating={item.stats.rating}
                  review={item.stats.reviews}
                />
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price)}
                  <span>{itemCart}</span>
                </p>

                <button
                  className="btn rounded-pill btn-secondary "
                  onClick={onAddCart}
                >
                  <BsCartPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
