import React from 'react';
import * as TestingLibrary from '@testing-library/react';
import App from '../src/App.jsx';
import NavComponent from '../src/components/NavComponent.jsx';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import DependentComponent from '../src/components/DependentComponent.jsx';
import { act } from '@testing-library/react';


const {
  render,
  screen,
  waitFor,
  getAllByRole,
  findByRole,
  getByRole,
  getByDisplayValue,
  findAllByRole,
  fireEvent,
} = TestingLibrary;


import UserProfileContainer from '../src/containers/UserProfileContainer.jsx';

const MOCK_DATA = [{
  _id: 123,
  name: 'Doggo',
  age: 3,
  breed: 'Husky',
  gender: 'Male',
}];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);


describe('Testing React Components', () => {
  describe('Testing Title Header', () => {
    let testApp;

    beforeAll(() => {
      testApp =
        render();
      // to test fetch:
      // <BrowserRouter>
      //   <App />
      // </BrowserRouter>
    });

    test('Renders Title on Nav Bar', () => {
      // const titleElement = screen.getByText('PetLogger');
      // expect(titleElement).toBeInTheDocument();
    });
  });

  describe('Dog Component Rendering Test', () => {
    let testDependentComponent;

    const props = {
      _id: 123,
      name: 'Doggo',
      age: 3,
      breed: 'Husky',
      gender: 'Male',
    };

    beforeAll(() => {
      testDependentComponent = render(<DependentComponent traits={props} />);
    });

    test('Render Name of Dependent', () => {
      // expect(testDependentComponent.querySelector('.dependentname')).toHaveTextContent("Doggo")
      const headingElement = screen.getByRole('heading');
      expect(headingElement).toHaveTextContent(props.name);
    });
  });


  describe('Testing Buttons',  () => {
    

    test('It should render a button', async () => {
      
      await act( async () => {
        render(
          <BrowserRouter>
            <UserProfileContainer />
          </BrowserRouter>
        );
      });

      const button = screen.getAllByRole('button');
      expect(button[0]).toBeInTheDocument();
      expect(button[1]).toBeInTheDocument();
    });
  });
});
