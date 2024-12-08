import { render, screen } from "@testing-library/react";
import Header from '../Header'
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

test('should render Header component with a Cart items 0', () => {
  render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>     
    )

    const cartItems = screen.getByText('Cart (0 itmes)');
    expect(cartItems).toBeInTheDocument();
})