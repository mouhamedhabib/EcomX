import { it, expect, describe, vi, beforeEach } from 'vitest';
import { HomePage } from './HomePage';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';

vi.mock('axios');

describe('HomePage', () => {
  let loadCart;

  beforeEach(() => {
    loadCart = vi.fn();

    axios.get.mockResolvedValue({
      data: [
        {
          id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
          name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
          rating: {
            stars: 4.5,
            count: 87,
          },
          priceCents: 1090,
          keywords: ['socks', 'sports', 'apparel'],
        },
        {
          id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          image: 'images/products/intermediate-composite-basketball.jpg',
          name: 'Intermediate Size Basketball',
          rating: {
            stars: 4,
            count: 127,
          },
          priceCents: 2095,
          keywords: ['sports', 'basketballs'],
        },
      ],
    });
  });

  it('displays products correctly', async () => {
    render(
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );

    // asyns can show the name of product
    expect(
      await screen.findByText(/Black and Gray Athletic Cotton Socks/i)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/Intermediate Size Basketball/i)
    ).toBeInTheDocument();
  });
});
