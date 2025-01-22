// Code: Trang Cơ sở



const FaciPage = () => {
  return (
    <div className="bg-gray-100 py-4">
    <header className="relative">
      <img
        src="https://placehold.co/1920x500"
        alt="Teacher with students in a classroom"
        className="w-full h-100 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-7xl font-bold">HỆ THỐNG CƠ SỞ</h1>
      </div>
    </header>
    
  </div>
  );
};

export default FaciPage;
