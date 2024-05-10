import Credits from "./Credits";
import Quotes from "./Quotes";
import PropTypes from "prop-types";

FooterToolbar.propTypes = {
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

export default function FooterToolbar({ credits }) {
  return (
    <div className="flex justify-between items-center">
      <Credits credits={credits} />
      <Quotes />
      <div className="w-1/6" />
    </div>
  );
}
