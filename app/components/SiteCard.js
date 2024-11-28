import PropTypes from 'prop-types';

const SiteCard = ({ site }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto transition-all hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-gray-800">{site.name}</h3>
      <p className="text-sm text-gray-500 mt-2">Status: {site.status}</p>
    </div>
  );
};

SiteCard.propTypes = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default SiteCard;
