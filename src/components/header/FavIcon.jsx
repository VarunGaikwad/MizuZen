import PropTypes from "prop-types";

FavIcon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default function FavIcon({ name, url }) {
  const src = `https://favvyvision.onrender.com/favicon?url=${url}`,
    onerror = (event) => {
      const my_url = "https://cdn-icons-png.flaticon.com/512/2748/2748583.png";
      event.target.src = my_url;
    };
  return (
    <a href={url}>
      <div className="w-24 flex flex-col align-middle items-center justify-center text-center gap-2">
        <img className="size-8" src={src} alt={name} onError={onerror} />
        <p className="text-xs">{name}</p>
      </div>
    </a>
  );
}
