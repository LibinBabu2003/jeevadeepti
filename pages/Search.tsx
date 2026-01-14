import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_DONORS, KERALA_DISTRICTS, BLOOD_GROUPS, isEligibleToDonate } from '../constants';
import { Search as SearchIcon, Phone, MapPin, Calendar, AlertCircle, Contact } from 'lucide-react';
import { Donor } from '../types';

const Search: React.FC = () => {
  const [filters, setFilters] = useState({
    district: '',
    bloodGroup: ''
  });

  // Filter Logic: Match District, Match Blood Group, AND ensure eligible (Last donation > 3 months)
  const filteredDonors = useMemo(() => {
    return MOCK_DONORS.filter((donor: Donor) => {
      const matchDistrict = filters.district ? donor.district === filters.district : true;
      const matchBlood = filters.bloodGroup ? donor.bloodGroup === filters.bloodGroup : true;
      const eligible = isEligibleToDonate(donor.lastDonationDate);
      
      return matchDistrict && matchBlood && eligible;
    });
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Find Blood Donors</h1>
          <p className="mt-2 text-gray-600 font-malayalam">രക്തം അന്വേഷിക്കാം</p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
              <select
                name="bloodGroup"
                value={filters.bloodGroup}
                onChange={handleFilterChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 border bg-white"
              >
                <option value="">All Blood Groups</option>
                {BLOOD_GROUPS.map(bg => <option key={bg} value={bg}>{bg}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
              <select
                name="district"
                value={filters.district}
                onChange={handleFilterChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 border bg-white"
              >
                <option value="">All Districts</option>
                {KERALA_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Available Donors ({filteredDonors.length})</h2>
          
          {filteredDonors.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-10 text-center border border-gray-100">
              <div className="mx-auto h-16 w-16 text-brand-200 mb-4 flex items-center justify-center bg-brand-50 rounded-full">
                 <AlertCircle size={40} className="text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Donors Found</h3>
              <p className="text-gray-500 text-base mb-6 max-w-lg mx-auto">
                We couldn't find any donors matching your criteria who are currently eligible. 
                <span className="block mt-1 text-sm text-gray-400">Note: Donors must wait 3 months between donations.</span>
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 max-w-lg mx-auto border border-blue-100">
                <h4 className="text-blue-900 font-semibold mb-2 flex items-center justify-center">
                  <Contact className="w-5 h-5 mr-2" />
                  In an Emergency?
                </h4>
                <p className="text-blue-700 text-sm mb-4">
                  If this is a medical emergency, please check our directory for hospitals and ambulance services.
                </p>
                <Link 
                  to="/directory" 
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors w-full sm:w-auto"
                >
                  View Emergency Directory
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDonors.map((donor) => (
                <div key={donor.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-white font-bold text-lg">{donor.name}</h3>
                    <span className="bg-white text-brand-600 font-black px-3 py-1 rounded-full text-sm shadow-sm">
                      {donor.bloodGroup}
                    </span>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 flex-1 space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-brand-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{donor.district}</p>
                        <p className="text-xs text-gray-500">{donor.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-brand-500" />
                      <p className="text-sm">
                        Last Donated: <span className="font-medium text-gray-900">{donor.lastDonationDate || 'Never'}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Footer / Action */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <a
                      href={`tel:${donor.phone}`}
                      className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;