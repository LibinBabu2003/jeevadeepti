import { Donor, EmergencyContact, BloodGroup } from "./types";

export const KERALA_DISTRICTS = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", 
  "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad", 
  "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasargod"
];

export const BLOOD_GROUPS: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Helper to check if donation was more than 3 months ago
export const isEligibleToDonate = (lastDonationDateStr: string): boolean => {
  if (!lastDonationDateStr) return true;
  const lastDate = new Date(lastDonationDateStr);
  const today = new Date();
  const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 3));
  return lastDate < threeMonthsAgo;
};

// Mock Database of Donors
export const MOCK_DONORS: Donor[] = [
  {
    id: 1,
    name: "Rahul Nair",
    bloodGroup: "O+",
    phone: "9876543210",
    district: "Ernakulam",
    location: "Kochi, Edappally",
    lastDonationDate: "2023-01-15", // Eligible
  },
  {
    id: 2,
    name: "Sneha Thomas",
    bloodGroup: "A+",
    phone: "9876543211",
    district: "Kottayam",
    location: "Pala",
    lastDonationDate: "2023-11-20", // Not Eligible (assuming current date is roughly after) - let's ensure logic works dynamically
  },
  {
    id: 3,
    name: "Arjun K",
    bloodGroup: "B-",
    phone: "9876543212",
    district: "Ernakulam",
    location: "Aluva",
    lastDonationDate: "2023-05-10", // Eligible
  },
  {
    id: 4,
    name: "Fathima S",
    bloodGroup: "O+",
    phone: "9876543213",
    district: "Thrissur",
    location: "Chalakudy",
    lastDonationDate: new Date().toISOString().split('T')[0], // Not Eligible (Today)
  },
  {
    id: 5,
    name: "Joseph Mathew",
    bloodGroup: "AB+",
    phone: "9876543214",
    district: "Idukki",
    location: "Thodupuzha",
    lastDonationDate: "2022-12-12", // Eligible
  }
];

export const MOCK_DIRECTORY: EmergencyContact[] = [
  {
    id: 1,
    name: "General Hospital Ernakulam",
    category: "Hospital",
    phone: "0484-2361234",
    location: "Ernakulam"
  },
  {
    id: 2,
    name: "St. John's Ambulance",
    category: "Ambulance",
    phone: "108",
    location: "Kerala Wide"
  },
  {
    id: 3,
    name: "Alpha Palliative Care",
    category: "Palliative",
    phone: "0487-2345678",
    location: "Thrissur"
  },
  {
    id: 4,
    name: "Medical College Trivandrum",
    category: "Hospital",
    phone: "0471-2528300",
    location: "Trivandrum"
  },
  {
    id: 5,
    name: "Yuvadeepti Emergency Response",
    category: "Ambulance",
    phone: "9999988888",
    location: "Kottayam"
  }
];