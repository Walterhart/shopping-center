import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
};

function StarRating({ rating }: Props) {
  return (
    <div>
      {[...Array(5)].map((star, pos) => {
        const ratingValue = pos + 1;
        return (
          <FaStar
            size={15}
            className={ratingValue <= rating ? "text-secondary" : "text-muted"}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
