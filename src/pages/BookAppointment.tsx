import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const BookAppointment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking logic
    console.log('Booking submitted:', { selectedDate, selectedTime, selectedService });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="service" className="block mb-2">Select Service</label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Choose a service</option>
            <option value="haircut">Haircut</option>
            <option value="legal-consultation">Legal Consultation</option>
            <option value="massage">Massage</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">Select Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 pl-10 border rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block mb-2">Select Time</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Choose a time</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="13:00">01:00 PM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;