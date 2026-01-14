export interface Donor {
  id: number;
  name: string;
  bloodGroup: string;
  phone: string;
  district: string;
  location: string;
  lastDonationDate: string; // ISO format YYYY-MM-DD
}

export interface EmergencyContact {
  id: number;
  name: string;
  category: 'Ambulance' | 'Hospital' | 'Palliative';
  phone: string;
  location: string;
}

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';