/* Display stars base on rating */
import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
  review: number;
};

function StarRating({ rating, review }: Props) {
  const n: number = 5;

  return (
    <div>
      <ul className="list-unstyled list-inline mb-0">
        <li className="list-inline-item ">
          {[...Array(n)].map((star, pos) => {
            const ratingValue = pos + 1;
            return (
              <FaStar
                key={pos}
                size={16}
                className={
                  ratingValue <= rating ? "text-secondary " : "text-muted"
                }
              />
            );
          })}
        </li>
        <li className="list-inline-item">
          <p className="text-muted inline-block">
            {rating}
            {"("}
            {review}
            {")"}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default StarRating;
