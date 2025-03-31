export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export const branches: Branch[] = [
  {
    id: 'newyork',
    name: 'New York Branch',
    address: '123 Manhattan Ave, New York, NY',
    phone: '+1 (555) 987-6543',
  },
  {
    id: 'sanfrancisco',
    name: 'San Francisco Branch',
    address: '456 Market St, San Francisco, CA',
    phone: '+1 (555) 123-4567',
  },
  {
    id: 'chicago',
    name: 'Chicago Branch',
    address: '789 Lakeshore Dr, Chicago, IL',
    phone: '+1 (555) 765-4321',
  },
];
