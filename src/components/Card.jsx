import PropTypes from "prop-types";

export const Card = ({ job, onViewMore  }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
      <img
        className="w-1/2 h-32 object-contain rounded-t-lg"
        src={job.company_image_url}
        alt={job.company_name}
      />
      <div className="p-4 flex-grow flex flex-col">
        <div>
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            {job.title}
          </h5>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            {job.company_name} - {job.company_city}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
            {job.job_tenure} - {job.job_type}
          </p>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
            Rp {job.salary_min.toLocaleString()} - Rp{" "}
            {job.salary_max.toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => onViewMore(job)}
          className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
        >
          View More
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  job: PropTypes.shape({
    company_image_url: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_city: PropTypes.string.isRequired,
    job_tenure: PropTypes.string.isRequired,
    job_type: PropTypes.string.isRequired,
    salary_min: PropTypes.number.isRequired,
    salary_max: PropTypes.number.isRequired,
  }).isRequired,
  onViewMore: PropTypes.func.isRequired,
};
