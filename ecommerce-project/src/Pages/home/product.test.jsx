import { it, expect, describe, vi, beforeEach } from 'vitest';
import { Product } from './Product';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

vi.mock('axios');

describe('Product Component', () => {
  let product;
  let loadCart;

  beforeEach(() => {
    product = {
      id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
      name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ['socks', 'sports', 'apparel'],
    };
    loadCart = vi.fn();
  });

  it('displays the product details correctly', () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
    ).toBeInTheDocument();

    expect(screen.getByTestId('product-image'))
      .toHaveAttribute('src', product.image);

    expect(screen.getByTestId('product-rating-stars'))
      .toHaveAttribute('src', 'images/ratings/rating-45.png');
  });

  it('adds a product to the cart', async () => {
    const user = userEvent.setup();
    (axios.post ).mockResolvedValue({});

    render(<Product product={product} loadCart={loadCart} />);

    await user.click(screen.getByTestId('add-to-cart-button'));

    expect(axios.post).toHaveBeenCalledWith(
      'api/cart-items',
      {
        productId: product.id,
        quantity: 1,
      }
    );

    expect(loadCart).toHaveBeenCalled();
  });
});
