import PropTypes from "prop-types";

FavIcon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default function FavIcon({ name, url }) {
  // const src = `https://www.google.com/s2/favicons?sz=128&domain=${url}`;
  const src = `https://favvyvision.onrender.com/favicon?url=${url}`;
  return (
    <a href={url}>
      <div className="w-24 flex flex-col align-middle items-center justify-center text-center gap-2">
        <img width={32} height={32} src={src} alt={name} />
        <p className="text-xs">{name}</p>
      </div>
    </a>
  );
}
