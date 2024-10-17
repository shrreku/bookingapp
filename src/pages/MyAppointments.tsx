import React from 'react';
import { Calendar, Clock, Trash2 } from 'lucide-react';

const MyAppointments: React.FC = () => {
  // Mock data for appointments
  const appointments = [
    { id: 1, service: 'Haircut', date: '2024-03-15', time: '10:00 AM' },
    { id: 2, service: 'Legal Consultation', date: '2024-03-20', time: '02:00 PM' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Appointments</h1>
      {appointments.length > 0 ? (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{appointment.service}</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <Clock size={16} className="mr-2" />
                  <span>{appointment.time}</span>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">You have no upcoming appointments.</p>
      )}
    </div>
  );
};

export default MyAppointments;