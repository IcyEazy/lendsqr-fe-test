import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import UserDetails from './UserDetails';
// import * as api from '../../api/Users';

// // Mock the API call
// jest.mock('../../api/Users');

// const mockUser = {
//   _id: '1',
//   fullName: 'John Doe',
//   avatar: 'avatar.png',
//   phoneNumber: '1234567890',
//   emailAddress: 'john.doe@example.com',
//   bvn: '12345678901',
//   gender: 'Male',
//   maritalStatus: 'Single',
//   children: 0,
//   typeOfResidence: 'Apartment',
//   levelOfEducation: 'Bachelor\'s Degree',
//   employmentStatus: 'Employed',
//   sectorOfEmployment: 'IT',
//   durationOfEmployment: '2 years',
//   officeEmail: 'john.doe@work.com',
//   monthlyIncomeRange: [5000, 10000],
//   loanRepayment: 200,
//   twitter: '@johndoe',
//   facebook: 'johndoe',
//   instagram: 'johndoe',
//   guarantors: [
//     {
//       guarantorFullName: 'Jane Doe',
//       guarantorPhoneNumber: '0987654321',
//       guarantorEmailAddress: 'jane.doe@example.com',
//       relationshipWithGuarantor: 'Sister'
//     }
//   ]
// };

// describe('UserDetails', () => {
//   beforeEach(() => {
//     api.getAllUsers.mockResolvedValue([mockUser]);
//   });

//   test('renders user details correctly', async () => {
//     render(
//       <BrowserRouter>
//         <UserDetails />
//       </BrowserRouter>
//     );

//     // Check for loading state
//     expect(screen.getByText(/Loading/i)).toBeInTheDocument();

//     // Wait for user details to load
//     await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());

//     // Verify some user details
//     expect(screen.getByText('John Doe')).toBeInTheDocument();
//     expect(screen.getByText('1234567890')).toBeInTheDocument();
//     expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
//   });

//   test('handles user activation', async () => {
//     render(
//       <BrowserRouter>
//         <UserDetails />
//       </BrowserRouter>
//     );

//     // Wait for user details to load
//     await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());

//     // Click activate user button
//     const activateButton = screen.getByText(/Activate User/i);
//     activateButton.click();

//     // Verify activation status
//     await waitFor(() => expect(screen.queryByText(/Activate User/i)).toBeNull());
//   });

//   test('handles user blacklisting', async () => {
//     render(
//       <BrowserRouter>
//         <UserDetails />
//       </BrowserRouter>
//     );

//     // Wait for user details to load
//     await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());

//     // Click blacklist user button
//     const blacklistButton = screen.getByText(/Blacklist User/i);
//     blacklistButton.click();

//     // Verify blacklist status
//     await waitFor(() => expect(screen.queryByText(/Blacklist User/i)).toBeNull());
//   });
// });
