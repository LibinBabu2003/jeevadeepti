import React from 'react';
import { MOCK_DIRECTORY } from '../constants';
import { Phone, Ambulance, Building2, HeartPulse } from 'lucide-react';

const Directory: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Ambulance': return <Ambulance className="h-6 w-6 text-blue-500" />;
      case 'Hospital': return <Building2 className="h-6 w-6 text-green-500" />;
      case 'Palliative': return <HeartPulse className="h-6 w-6 text-purple-500" />;
      default: return <Phone className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Emergency Directory</h1>
          <p className="mt-2 text-gray-600">Important contacts for emergency situations</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_DIRECTORY.map((contact) => (
            <div key={contact.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 border-l-4 border-brand-500 hover:shadow-md transition-shadow">
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">{contact.name}</h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {contact.category}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm truncate">{contact.location}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-full">
                   {getIcon(contact.category)}
                </div>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`tel:${contact.phone}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-brand-500"
                    >
                      <Phone className="w-5 h-5 text-gray-400 mr-3" aria-hidden="true" />
                      <span className="text-lg font-bold">{contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directory;
