/* Display stars base on rating */
import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
};

function StarRating({ rating }: Props) {
  const n: number = 5;

  return (
    <div>
      {[...Array(n)].map((star, pos) => {
        const ratingValue = pos + 1;
        return (
          <FaStar
            key={pos}
            size={15}
            className={ratingValue <= rating ? "text-secondary" : "text-muted"}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
