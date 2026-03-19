import React, { useEffect, useState } from "react";
import { FaRegClock, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fixedicons from "../component/Fixedicons";
import { motion } from "framer-motion";

function Appointment() {
  useEffect(() => {
    document.title = `Book An Appointment | The Royal Skin Aesthetics`;
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Appointment booked successfully!");
  }

  return (
    <div className="overflow-x-hidden">
      <section>
        <Fixedicons />
      </section>

      <section className="relative">
        <div
          className="relative min-h-[320px] bg-cover bg-center bg-no-repeat sm:min-h-[380px] lg:min-h-[450px]"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/surgeon-consulting-client.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 mx-auto flex min-h-[320px] max-w-7xl flex-col justify-end px-4 py-14 text-white sm:min-h-[380px] sm:px-6 lg:min-h-[450px] lg:px-8 lg:py-20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-4xl font-bold sm:text-5xl">Book An Appointment</h1>
              <div className="flex flex-wrap items-center gap-3 text-lg font-medium sm:text-2xl">
                <Link to="/" className="text-gray-200">Home</Link>
                <FaChevronRight className="text-amber-400" />
                <span className="text-amber-400">Book An Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <form onSubmit={handleSubmit} className="w-full rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-amber-500 sm:text-3xl">
              Book An Appointment
            </h2>
            <p className="mb-6 text-center italic text-gray-600">
              Enhance your beauty—book your appointment at The Royal Aesthetics today!
            </p>

            {[
              { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
              { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label className="mb-1 block text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                  required
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="mb-1 block text-gray-700">Services</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              >
                <option value="">Select Service</option>
                <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                <option value="Facial Treatment">Facial Treatment</option>
                <option value="Skin Care Consultation">Skin Care Consultation</option>
                <option value="PRP Face & Scalp">PRP Face & Scalp</option>
                <option value="Exosomes">Exosomes</option>
                <option value="Botox">Botox</option>
                <option value="Fillers">Fillers</option>
                <option value="Mesotherapy">Mesotherapy</option>
                <option value="Hydrafacial">Hydrafacial</option>
                <option value="Hydratherapy">Hydratherapy</option>
                <option value="Chemical Peels">Chemical Peels</option>
                <option value="Emsculpt Fat Reduction">Emsculpt Fat Reduction</option>
                <option value="Emsella">Emsella</option>
                <option value="Threads">Threads</option>
                <option value="Aptos Face Lift">Aptos Face Lift</option>
                <option value="Body Fillers">Body Fillers</option>
                <option value="HIFU">HIFU</option>
                <option value="Q-Switch">Q-Switch</option>
                <option value="Fat Dissolving Injection">Fat Dissolving Injection</option>
                <option value="Polynucleotides">Polynucleotides</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-1 block text-gray-700">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              />
            </div>

            <button type="submit" className="w-full rounded-full bg-amber-400 py-3 font-semibold text-white transition hover:bg-amber-500">
              Book An Appointment
            </button>
          </form>

          <div>
            <motion.h3
              className="mb-4 text-xl font-semibold italic text-amber-600 sm:text-2xl"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Ready to take the next step?
            </motion.h3>

            <h1 className="mb-5 text-3xl font-bold leading-snug sm:text-4xl">
              Make an Appointment at The Royal Aesthetic Clinic
            </h1>

            <p className="mb-6 leading-7 text-gray-700">
              At The Royal Aesthetic Clinic, we prioritize your unique beauty goals and provide a personalized experience to ensure you feel confident in your skin. Our expert team offers tailored aesthetic solutions designed to meet your needs with care and precision. Scheduling your appointment is easy – whether online, over the phone, or in person, we’re here to guide you every step of the way.
            </p>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="pb-3 text-xl font-bold sm:text-2xl">Opening Hours</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>Monday - Sunday</span>
                  <span className="flex items-center gap-2"><FaRegClock className="text-amber-400" /> 9am - 5pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointment;
