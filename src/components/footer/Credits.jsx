import { useState } from "react";
import PropTypes from "prop-types";

Credits.propTypes = {
  credits: PropTypes.shape({
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default function Credits({ credits }) {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="text-xs w-1/6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        className={`${
          isHover ? "translate-y-0" : "translate-y-4"
        } transition-all duration-500`}
      >
        {credits.location.city}, {credits.location.country}
      </p>
      <a
        href={`https://unsplash.com/photos/${credits.id}`}
        target="_blank"
        className={`${
          isHover ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        } transition-all duration-700`}
      >
        {credits?.user.name} / Unsplash
      </a>
    </div>
  );
}
