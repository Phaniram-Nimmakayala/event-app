import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {

  const [students, setStudents] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [stats, setStats] = useState({});
  const [activeView, setActiveView] = useState(null); // ✅ HERE
  const [eventName, setEventName] = useState("");
  const [feedback, setFeedback] = useState([]);
  /* ================= FETCH DATA ================= */

  useEffect(() => {
    fetchDashboard();
    fetchStudents();
    fetchEnrollments();
    fetchFeedback();
  }, []);

  const fetchDashboard = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/events/stats"
    );
    setStats(res.data);
  };

  const fetchStudents = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/auth/students"
    );
    setStudents(res.data);
  };

  const fetchEnrollments = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/events/enrollments"
    );
    setEnrollments(res.data);
  };

  const fetchFeedback = async () => {
  const res = await axios.get(
    "http://localhost:5000/api/events/feedback"
  );
  setFeedback(res.data);
};


/* ================= DELETE FEEDBACK ================= */

const deleteFeedback = async (id) => {

  const confirmDelete =
    window.confirm("Delete this feedback?");

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/events/feedback/${id}`
    );

    alert("Feedback deleted");

    fetchFeedback();

  } catch (error) {
    console.log(error);
  }
};

  /* ================= ADD EVENT ================= */

  const handleAddEvent = async () => {
    if (!eventName) return;

    await axios.post(
      "http://localhost:5000/api/events/add",
      { eventName }
    );

    alert("Event Added");
    setEventName("");
  };

  /* ================= DELETE STUDENT ================= */

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete student?")) return;

    await axios.delete(
      `http://localhost:5000/api/auth/students/${id}`
    );

    fetchStudents();
    fetchDashboard();
  };


  /* ================= DELETE ENROLLMENT ================= */

const deleteEnrollment = async (id) => {

  const confirmDelete =
    window.confirm("Delete this enrollment?");

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/events/enrollments/${id}`
    );

    alert("Enrollment deleted");

    fetchEnrollments();
    fetchDashboard();

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-10 pt-28">

      {/* ================= DASHBOARD CARDS ================= */}

<div className="grid md:grid-cols-4 gap-6 mb-10">

  {/* REGISTERED STUDENTS */}
  <div className="bg-white p-6 shadow rounded-lg">
    <h3 className="text-gray-500">
      Registered Students
    </h3>

    <h1 className="text-4xl font-bold">
      {stats.totalStudents || 0}
    </h1>

    <button
      onClick={() => setActiveView("students")}
      className="mt-4 bg-[#fd6716] text-white px-4 py-2 rounded"
    >
      View
    </button>
  </div>

  {/* ENROLLMENTS */}
  <div className="bg-white p-6 shadow rounded-lg">
    <h3 className="text-gray-500">
      Event Enrollments
    </h3>

    <h1 className="text-4xl font-bold">
      {stats.totalEnrollments || 0}
    </h1>

    <button
      onClick={() => setActiveView("enrollments")}
      className="mt-4 bg-[#fd6716] text-white px-4 py-2 rounded"
    >
      View
    </button>
  </div>

  {/* ADD EVENT */}
  <div className="bg-white p-6 shadow rounded-lg">
    <h3 className="text-gray-500 mb-3">
      Add Event
    </h3>

    <input
      placeholder="Enter Event Name"
      value={eventName}
      onChange={(e)=>setEventName(e.target.value)}
      className="border w-full p-2 rounded mb-3"
    />

    <button
      onClick={handleAddEvent}
      className="bg-[#fd6716] w-full text-white py-2 rounded"
    >
      Add Event
    </button>
  </div>

  <div className="bg-white p-6 shadow rounded-lg">
  <h3 className="text-gray-500">
    Feedback Messages
  </h3>

  <h1 className="text-4xl font-bold">
    {feedback.length}
  </h1>

  <button
    onClick={()=>setActiveView("feedback")}
    className="mt-4 bg-[#fd6716] text-white px-4 py-2 rounded"
  >
    View
  </button>
</div>

</div>

      {/* ================= STUDENTS TABLE ================= */}

      {activeView === "students" && (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Registered Students
          </h2>

          <table className="w-full bg-white shadow rounded">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>SUC</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s, i) => (
                <tr key={s.id} className="text-center border-b">
                  <td>{i+1}</td>
                  <td>{s.firstName} {s.lastName}</td>
                  <td>{s.email}</td>
                  <td>{s.mobile}</td>
                  <td>{s.sucNo}</td>

                  <td>
                    {s.role === "admin"
                      ? "Admin"
                      :
                      <button
                        onClick={()=>deleteStudent(s.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* ================= ENROLLMENT TABLE ================= */}

      {activeView === "enrollments" && (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Event Enrollments
          </h2>

          <table className="w-full bg-white shadow rounded">
            <thead className="bg-gray-900 text-white">
              <tr>
  <th>ID</th>
  <th>Name</th>
  <th>SUC No</th>
  <th>College</th>
  <th>Course</th>
  <th>Event</th>
  <th>Project</th>
  <th>Action</th>
</tr>
            </thead>

           <tbody>
  {enrollments.map((e, i) => (
    <tr key={e.id} className="text-center border-b">

      <td>{i + 1}</td>

      <td>
        {e.firstName} {e.lastName}
      </td>

      {/* ✅ SUC NUMBER ADDED */}
      <td>{e.sucNo}</td>

      <td>{e.college}</td>
      <td>{e.course}</td>
      <td>{e.eventName}</td>
      <td>{e.projectTitle}</td>

      {/* ✅ DELETE BUTTON ADDED */}
      <td>
        <button
          onClick={() => deleteEnrollment(e.id)}
          className="
            bg-red-500
            text-white
            px-3 py-1
            rounded
            hover:bg-red-600
          "
        >
          Delete
        </button>
      </td>

    </tr>
  ))}
</tbody>
          </table>
        </>
      )}



      {activeView === "feedback" && (
<>
<h2 className="text-2xl font-bold mb-4">
Student Feedback
</h2>

<table className="w-full bg-white shadow rounded">
<thead className="bg-gray-900 text-white">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Message</th>
<th>Action</th>
</tr>
</thead>

<tbody>
{feedback.map((f,i)=>(
<tr key={f.id} className="text-center border-b">

<td>{i+1}</td>
<td>{f.name}</td>
<td>{f.email}</td>
<td>{f.message}</td>

<td>
<button
onClick={()=>deleteFeedback(f.id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>
</td>

</tr>
))}
</tbody>
</table>
</>
)}

    </div>


   


  );
};

export default Admin;