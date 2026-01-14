import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KERALA_DISTRICTS, BLOOD_GROUPS } from '../constants';
import { UserPlus, Calendar, MapPin, Phone, User, Droplet } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bloodGroup: '',
    district: '',
    location: '',
    lastDonationDate: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Backend API Call
    setTimeout(() => {
      setLoading(false);
      alert("Registration Successful! Thank you for joining Jeevadeepti.");
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-600">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center">
            <UserPlus className="h-6 w-6 text-brand-600" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">Donor Registration</h2>
          <p className="mt-2 text-sm text-gray-600 font-malayalam">
            രക്തദാനം മഹാദാനം
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                  placeholder="Rahul Nair"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                  placeholder="10 digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Blood Group */}
              <div>
                <label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700 mb-1 block">Blood Group</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Droplet className="h-5 w-5 text-brand-400" />
                  </div>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    required
                    className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border bg-white"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {BLOOD_GROUPS.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                  </select>
                </div>
              </div>

              {/* District */}
              <div>
                <label htmlFor="district" className="text-sm font-medium text-gray-700 mb-1 block">District</label>
                <select
                  id="district"
                  name="district"
                  required
                  className="focus:ring-brand-500 focus:border-brand-500 block w-full sm:text-sm border-gray-300 rounded-lg p-2.5 border bg-white"
                  value={formData.district}
                  onChange={handleChange}
                >
                  <option value="">Select District</option>
                  {KERALA_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="relative">
              <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1 block">Local Town/City</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                  placeholder="e.g. Aluva, Pala"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Last Donation */}
            <div className="relative">
              <label htmlFor="lastDonationDate" className="text-sm font-medium text-gray-700 mb-1 block">Last Donation Date</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="lastDonationDate"
                  name="lastDonationDate"
                  type="date"
                  className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                  value={formData.lastDonationDate}
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank if never donated.</p>
              </div>
            </div>

          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-brand-600 hover:bg-brand-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors shadow-lg`}
            >
              {loading ? 'Registering...' : 'Complete Registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
