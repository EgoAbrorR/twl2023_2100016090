import React from "react";

const Service = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Layanan Kami</h1>
        <p className="text-xl text-gray-600 mb-8">Kami menyediakan layanan terbaik untuk memenuhi kebutuhan Anda</p>
        <ul className="list-disc pl-8 text-lg">
          <li>Pelayanan cepat dan berkualitas</li>
          <li>Harga yang terjangkau</li>
          <li>Dukungan pelanggan yang ramah dan responsif</li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
