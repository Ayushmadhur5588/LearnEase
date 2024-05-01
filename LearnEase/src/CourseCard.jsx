const CourseCard = () => {
  return (
    <div className="rounded-2xl shadow-lg border-2 border-cyan-500 mb-5">
      <img
        className="w-80 h-48 rounded-t-xl"
        src="https://appx-wsb.kaxa.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg"
        alt="img"
      />
      <div className="p-4">
        <h3 className="font-semibold">Name</h3>
        <h5 className="font-light text-gray-400">Description</h5>
        <h3>Price</h3>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default CourseCard;
