export interface RsvpFormData {
  fullName: string;
  department: string;
  staffId: string;
  phone: string;
  attending: 'yes' | 'no';
  dietary: 'standard' | 'vegetarian' | 'halal';
  notes?: string;
}

export interface VipPass {
  id: string;
  guestName: string;
  department: string;
  staffId: string;
  timestamp: string;
  dietary: string;
  tableZone: string;
}
