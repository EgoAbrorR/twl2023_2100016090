import React from "react";

const Contact = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              className="px-4 py-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Masukkan Nama Anda"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Masukkan Email Anda"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              className="px-4 py-2 border border-gray-400 rounded-md w-full h-32 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Tulis Pesan Anda"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
