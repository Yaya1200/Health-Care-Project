import React from "react";
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div>
        Name
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Email</label>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Message</label>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Send Message
      </button>
    </div>
  );
}
export default Contact;