import React, { useEffect, useState } from "react";
import { FaChevronRight, FaMapMarkerAlt, FaRegClock, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fixedicons from "../component/Fixedicons";

function Contact() {
  useEffect(() => {
    document.title = `Contact | The Royal Skin Aesthetics`;
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
    alert("Message submitted successfully!");
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
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="relative z-10 mx-auto flex min-h-[320px] max-w-7xl flex-col justify-end px-4 py-14 text-white sm:min-h-[380px] sm:px-6 lg:min-h-[450px] lg:px-8 lg:py-20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-4xl font-bold sm:text-5xl">Contact</h1>
              <div className="flex flex-wrap items-center gap-3 text-lg font-medium sm:text-2xl">
                <Link to="/" className="text-gray-200">Home</Link>
                <FaChevronRight className="text-amber-400" />
                <span className="text-amber-400">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <p className="pb-4 text-xl font-semibold italic text-amber-600 sm:text-2xl">
              Get In Touch
            </p>
            <h1 className="pb-5 text-3xl font-bold sm:text-4xl">
              Contact The Royal Skin Aesthetics Clinic
            </h1>
            <p className="mb-8 leading-7 text-gray-700">
              Have questions about our treatments or want to schedule a visit?
              Reach out to our team and we will help you choose the right care
              for your skin goals.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: FaMapMarkerAlt,
                  title: 'Clinic Address',
                  body: 'House No, 17A Street 31, Islamabad',
                },
                {
                  icon: FaRegClock,
                  title: 'Open Hours',
                  body: 'Monday - Sunday: 9am - 5pm',
                },
                {
                  icon: FaPhoneAlt,
                  title: 'Call Us',
                  body: '0331-5130307',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-2xl text-white">
                    <Icon />
                  </div>
                  <div>
                    <h2 className="pb-2 text-xl font-bold sm:text-2xl">{title}</h2>
                    <p className="leading-7 text-gray-700">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <h2 className="mb-6 text-center text-2xl font-semibold sm:text-3xl">
              Book An Appointment
            </h2>

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
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              >
                <option value="">Select Service</option>
                <option value="Laser Hair Reduction">Laser Hair Reduction</option>
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
              <label className="mb-1 block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <button type="submit" className="w-full rounded-full bg-amber-400 py-3 font-semibold text-white transition hover:bg-amber-500">
              Book An Appointment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
