import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import eventImg from "../assets/event1.png";

const Events = () => {

  const navigate = useNavigate();

  /* ================= STATES ================= */
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    sucNo: "",
    college: "",
    course: "",
    projectTitle: "",
    eventId: ""
  });

  const [showForm, setShowForm] = useState(false);

  /* ================= FETCH EVENTS ================= */
  useEffect(() => {
    axios
      .get("https://event-app-backend-nn0z.onrender.com/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  /* ================= LOGIN CHECK ================= */
  const handleEnrollClick = () => {

    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login to enroll in event");
      navigate("/login");
      return;
    }

    setShowForm(true);
  };

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://event-app-backend-nn0z.onrender.com/api/events/enroll",
        formData
      );

      alert("Enrollment Successful ✅");
      setShowForm(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="events" className="bg-gray-100 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[#fd6716] font-semibold tracking-widest">
          EVENTS BOOKING
        </p>

        <h2 className="text-5xl font-bold text-gray-800 mt-2">
          EVENT SCHEDULE
        </h2>
      </div>

      {/* Event Card */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">

          <img
            src={eventImg}
            alt="event"
            className="w-40 h-40 rounded-full object-cover"
          />

          <div className="flex-1">

            <p className="text-gray-500 font-medium">
              Technical Event
            </p>

            <h3 className="text-3xl font-bold mt-2">
              Technical Projects Expo
            </h3>

            <p className="text-gray-600 mt-4">
              Students technical related projects were displayed in this event.
            </p>

            <button
              onClick={handleEnrollClick}
              className="mt-6 px-8 py-3 bg-[#fd6716] text-white rounded-lg"
            >
              Enroll Now
            </button>

          </div>
        </div>

      </div>

      {/* ================= REGISTRATION FORM ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

          <form
onSubmit={handleSubmit}
className="bg-white p-8 rounded-xl w-[500px] space-y-4 max-h-[90vh] overflow-y-auto"
>

<h2 className="text-2xl font-bold text-center">
Event Registration
</h2>

{/* FIRST NAME */}
<input
name="firstName"
placeholder="First Name"
onChange={handleChange}
className="w-full border p-2 rounded"
required
/>

{/* LAST NAME */}
<input
name="lastName"
placeholder="Last Name"
onChange={handleChange}
className="w-full border p-2 rounded"
required
/>

{/* EMAIL */}
<input
name="email"
placeholder="Email"
onChange={handleChange}
className="w-full border p-2 rounded"
required
/>

{/* MOBILE */}
<input
name="mobile"
placeholder="Mobile"
onChange={handleChange}
className="w-full border p-2 rounded"
required
/>

{/* SUC */}
<input
name="sucNo"
placeholder="SUC Number"
onChange={handleChange}
className="w-full border p-2 rounded"
required
/>

{/* COLLEGE DROPDOWN */}
<select
name="college"
onChange={handleChange}
className="w-full border p-2 rounded"
required
>
<option value="">Select College</option>
<option>Aditya Degree College Rajahmundry</option>
<option>Aditya Degree College Vizianagaram</option>
<option>Aditya Degree & PG College, Kakinada</option>
<option>Aditya University</option>
<option>Aditya Degree & PG College, Gopalapatnam</option>
</select>

{/* COURSE DROPDOWN */}
<select
name="course"
onChange={handleChange}
className="w-full border p-2 rounded"
required
>
<option value="">Select Course</option>
<option>MCA</option>
<option>BCA</option>
<option>BBA</option>
<option>MBA</option>
<option>Animation</option>
<option>BTech CSE</option>
<option>BSC</option>
</select>

{/* EVENT DROPDOWN */}
<select
  name="eventId"
  onChange={handleChange}
  className="w-full border p-2 rounded"
  required
>

  {/* Default */}
  <option value="">Select Event</option>

  {/* Default Technical Expo */}
  <option value="1">
  </option>

  {/* Admin Added Events */}
  {events.map(event => (
    <option key={event.id} value={event.id}>
      {event.eventName}
    </option>
  ))}

</select>

{/* PROJECT TITLE */}
<input
name="projectTitle"
placeholder="Enter Project name/Performance name/Sport name..etc"
onChange={handleChange}
className="w-full border p-2 rounded"
/>

{/* TERMS */}
<label className="flex gap-2 text-sm">
<input type="checkbox" required />
I accept Terms & Conditions
</label>

<button
type="submit"
className="w-full bg-[#fd6716] text-white py-3 rounded-lg"
>
Submit Registration
</button>

<button
type="button"
onClick={() => setShowForm(false)}
className="w-full text-red-500"
>
Cancel
</button>

</form>
        </div>
      )}

    </section>
  );
};

export default Events;