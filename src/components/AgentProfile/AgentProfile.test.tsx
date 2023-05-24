// // import React from 'react';
// import { render, screen } from '@testing-library/react';
// import AgentProfile from './AgentProfile';
// import React from "react";
// // import { render, screen } from "@testing-library/react";
// // import "@testing-library/jest-dom/extend-expect"; // Add this import
// //import AgentProfile from "./AgentProfile";

// test("renders agent profile", () => {
//   //  render(<AgentProfile agent={mockAgent} />);

//   //   expect(screen.getByText('Agent007')).toBeInTheDocument();
//   //   // Add other assertions here
//   // });

//   //test('renders agent profile', () => {
//   //   const mockAgent = {
//   //     picture: { large: 'https://example.com/image.jpg' },
//   //     login: { username: 'Agent007' },
//   //     name: { first: 'James', last: 'Bond' },
//   //     // Add other mock agent details here
//   //   };

//   const mockAgent = {
//     picture: {
//       large: "https://example.com/image.jpg",
//       medium: "https://example.com/image_medium.jpg",
//       thumbnail: "https://example.com/image_thumbnail.jpg",
//     },
//     login: { username: "Agent007" },
//     name: { first: "James", last: "Bond" },
//     location: {
//       street: { number: 123, name: "Secret Street" },
//       city: "London",
//       state: "England",
//       country: "United Kingdom",
//       postcode: "007",
//       coordinates: { latitude: "50.0000", longitude: "0.0000" },
//       timezone: { offset: "+1:00", description: "Greenwich Mean Time" },
//     },
//     dob: {
//       date: "1930-11-11T00:00:00.000Z",
//       age: 93,
//     },
//     gender: "male",
//     eyeColor: "blue",
//     timezone: { offset: "James", description: "Bond" },
//   };

//   render(<AgentProfile agent={mockAgent} />);

//   expect(screen.getByText("Agent007")).toBeInTheDocument();
//   // Add other assertions here
//   render(<AgentProfile agent={mockAgent} />);

//   expect(screen.getByText("Agent007")).toBeInTheDocument();
//   // Add other assertions here
// });
