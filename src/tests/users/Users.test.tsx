import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { MemoryRouter, Route, Routes } from "react-router-dom";
// import "@testing-library/jest-dom/extend-expect";
// import { getAllUsers } from '../../api/Users';
// import { useAppSelector } from '../../redux/hooks';
// import { selectSearch } from '../../redux/search/searchSlice';
// import { selectFilter } from "../../redux/filter/Filter";
// import Users from "../../pages/users";

// // Mock the getAllUsers API call
// jest.mock('../../api/Users', () => ({
//   getAllUsers: jest.fn(),
// }));

// // Mock the useAppSelector hook
// jest.mock('../../redux/hooks', () => ({
//   useAppSelector: jest.fn(),
// }));

// const mockNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockNavigate,
// }));

// const mockUsers = [
//   {
//     _id: '1',
//     organization: 'Org1',
//     fullName: 'User One',
//     emailAddress: 'user1@example.com',
//     phoneNumber: '1234567890',
//     dateJoined: '2022-01-01',
//     status: 'active',
//     loan: 'yes',
//     savings: 'yes',
//   },
//   {
//     _id: '2',
//     organization: 'Org2',
//     fullName: 'User Two',
//     emailAddress: 'user2@example.com',
//     phoneNumber: '2345678901',
//     dateJoined: '2022-01-02',
//     status: 'inactive',
//     loan: 'no',
//     savings: 'yes',
//   },
// ];

// describe('Dashboard', () => {
//   beforeEach(() => {
//     getAllUsers.mockResolvedValue<Promise<>>(mockUsers);
//     useAppSelector.mockImplementation((selector: any) => {
//       if (selector === selectSearch) return '';
//       if (selector === selectFilter) return {};
//       return null;
//     });
//   });

//   const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
//     window.history.pushState({}, 'Test page', route);
//     return render(
//       <MemoryRouter initialEntries={[route]}>
//         <Routes>
//           <Route path="*" element={ui} />
//         </Routes>
//       </MemoryRouter>
//     );
//   };

//   test('renders the dashboard correctly', async () => {
//     renderWithRouter(<Users />);

//     expect(screen.getByText(/Users/i)).toBeInTheDocument();
//     await waitFor(() => expect(getAllUsers).toHaveBeenCalled());
//     expect(screen.getByText(/User One/i)).toBeInTheDocument();
//     expect(screen.getByText(/user1@example.com/i)).toBeInTheDocument();
//     expect(screen.getByText(/User Two/i)).toBeInTheDocument();
//     expect(screen.getByText(/user2@example.com/i)).toBeInTheDocument();
//   });

//   test('handles user actions correctly', async () => {
//     renderWithRouter(<Users />);

//     await waitFor(() => expect(getAllUsers).toHaveBeenCalled());

//     const moreActionsButton = screen.getAllByText(/more_vert/i)[0];
//     fireEvent.click(moreActionsButton);

//     const viewDetailsButton = screen.getByText(/View Details/i);
//     fireEvent.click(viewDetailsButton);
//     expect(mockNavigate).toHaveBeenCalledWith('/user-details/1');

//     const blacklistButton = screen.getByText(/Blacklist User/i);
//     fireEvent.click(blacklistButton);
//     expect(screen.getByText(/The User Is Already Blacklisted!/i)).toBeInTheDocument();

//     const activateButton = screen.getByText(/Activate User/i);
//     fireEvent.click(activateButton);
//     expect(screen.getByText(/The User Is Already An Active User!/i)).toBeInTheDocument();
//   });

//   test('handles pagination correctly', async () => {
//     renderWithRouter(<Users />);

//     await waitFor(() => expect(getAllUsers).toHaveBeenCalled());

//     const nextPageButton = screen.getByText(/Next/i);
//     fireEvent.click(nextPageButton);

//     expect(screen.getByText(/Page 2/i)).toBeInTheDocument();
//   });

//   test('filters users correctly', async () => {
//     useAppSelector.mockImplementation((selector) => {
//       if (selector === selectSearch) return 'user two';
//       if (selector === selectFilter) return {};
//       return null;
//     });

//     renderWithRouter(<Users />);

//     await waitFor(() => expect(getAllUsers).toHaveBeenCalled());
//     expect(screen.queryByText(/User One/i)).not.toBeInTheDocument();
//     expect(screen.getByText(/User Two/i)).toBeInTheDocument();
//   });
// });
