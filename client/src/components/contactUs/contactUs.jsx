import { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 201) {
        setSuccess(true);
        setFormData({ email: "", name: "", message: "" });
      }
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert(error.response?.data?.error || "An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fff] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full border-t-4 border-bg-[#CECAB3]">
        <h2 className="text-3xl font-extrabold text-[#3E4A56] text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We'd love to hear from you! Send us a message below.
        </p>

        {success && (
          <p className="text-green-600 text-center mb-4">
            ✅ Your message has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">
              Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-100"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3E4A56] text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-[#CECAB3] transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
