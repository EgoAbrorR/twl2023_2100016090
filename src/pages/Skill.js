import React from "react";

const Skill = () => {
  return (
    <div className="container h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Skill Kami</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-gray-700">Desain Grafis</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-gray-700">Pemrograman Web</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-gray-700">Pengembangan Aplikasi Mobile</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-gray-700">Pemrograman Desktop</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-gray-700">Jaringan Komputer</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-gray-700">Analisis Data</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
