import {screen, render, fireEvent} from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResList.json';
import {act} from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

// trying to mock fetch exactly similar to how original fetch fn works
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should render the body component with search', async () => {
   await act(async() => render(
   <BrowserRouter>
        <Body/>
   </BrowserRouter>
   ))

   const searchBtn = screen.getByRole("button", {name: "Search"});
   const searchInput = screen.getByTestId('searchInput');
   fireEvent.change(searchInput, {target: {value: "pizza"}})

   fireEvent.click(searchBtn)

   expect(screen.getAllByTestId("resCard").length).toBe(1);
})

it('should render the body component with top rated restaurant', async () => {
    await act(async() => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const cardBeforeFilter = screen.getAllByTestId("resCard")
    expect(cardBeforeFilter.length).toBe(8);
 
    const topRatedRes = screen.getByRole("button", {name: "Top rated restaurants"});
    fireEvent.click(topRatedRes);
 
    expect(screen.getAllByTestId("resCard").length).toBe(1);
 })