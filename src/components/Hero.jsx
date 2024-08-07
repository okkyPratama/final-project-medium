import career from '../assets/career.png'

export const Hero = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center" style={{
      backgroundImage: `url(${career})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-xl mb-8">Discover thousands of job opportunities with all the information you need.</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search jobs..."
            className="p-3 w-full rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button className="bg-blue-700 text-white px-6 py-3 rounded-r-xl hover:bg-blue-800 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}