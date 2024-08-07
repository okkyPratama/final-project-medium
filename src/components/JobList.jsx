import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './Card';
import { JobDetail } from './JobDetail';

export const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy');
        setJobs(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch job listings');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleViewMore = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Job Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {jobs.map((job) => (
            <Card key={job.id} job={job} onViewMore={() => handleViewMore(job)} />
          ))}
          </div>
      </div>
      <JobDetail 
        job={selectedJob} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};