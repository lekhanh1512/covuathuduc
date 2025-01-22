// Code: Trang Khóa Học

import { LayoutGrid, LayoutList } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const [isGridView, setIsGridView] = useState(true);

  const courses = [
    {
      id: 1,
      title: "Khóa Học Online Qua Bài Tập Phần Mềm",
      date: "17/08/2024",
      students: 0,
      image: "https://placehold.co/300x300",
    },
    {
      id: 2,
      title: "Khóa Học Online 3 – 6 Học Viên",
      date: "17/08/2024",
      students: 9,
      image: "https://placehold.co/300x300",
    },
    {
      id: 3,
      title: "Khóa Học Online 2 Học Viên",
      date: "17/08/2024",
      students: 0,
      image: "https://placehold.co/300x300",
    },
  ];

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
          <h1 className="text-white text-7xl font-bold">KHÓA HỌC</h1>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4 max-w-7xl">
        <nav className="text-gray-600 mb-4">
          <Link to="/" className="nav-link">
            Trang chủ
          </Link>
          &gt; <span>Khóa Học</span>
        </nav>
        <div className="flex justify-between items-center mb-4 bg-gray-200 rounded pl-4">
          <div className="text-gray-600">
            Showing 1-{courses.length} of {courses.length} results
          </div>
          <div className="flex space-x-2">
            <button
              className={`p-2 rounded ${
                isGridView ? "bg-[#47AE31] text-[#fff]" : "bg-gray-200"
              }`}
              onClick={() => setIsGridView(true)}
            >
              <LayoutGrid />
            </button>
            <button
              className={`p-2 rounded ${
                !isGridView ? "bg-[#47AE31] text-[#fff]" : "bg-gray-200"
              }`}
              onClick={() => setIsGridView(false)}
            >
              <LayoutList />
            </button>
          </div>
        </div>
        <div
          className={`flex ${
            isGridView ? "flex-wrap" : "flex-col"
          } transition-all`}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`w-full ${
                isGridView ? "sm:w-1/3 px-4" : "flex mb-4"
              } transition-all`}
            >
              {isGridView ? (
                <div className=" cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 w-full">
                  <div className="aspect-ratio-16-9">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mb-2 mt-2">
                    {course.title}
                  </h2>
                  <div className="flex justify-between items-center text-gray-600 text-sm">
                    <span>{course.date}</span>
                    <span>{course.students} học viên</span>
                  </div>
                </div>
              ) : (
                <div className=" cursor-pointer w-full flex bg-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-1/4 p-2">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-3/4 p-2 ">
                    <h2 className="text-2xl font-semibold mb-2 mt-2">
                      {course.title}
                    </h2>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                      <span>{course.date}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
