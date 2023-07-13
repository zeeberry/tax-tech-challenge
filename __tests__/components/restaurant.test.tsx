import { render, screen } from '@testing-library/react'
import Restaurant, { RestaurantProps } from '@/components/restaurant'

describe('Restaurant', () => {
  it('renders restaurant', () => {
    const data:RestaurantProps = {
      name: 'Butler',
      cuisine: 'American',
      priceRange: '$$',
      rating: '4.7',
      description: 'A lovely neighborhood coffee shop'
    }
    const { getByText } = render(<Restaurant data={data}/>)

    expect(getByText('Butler')).toBeInTheDocument()
    expect(getByText('American')).toBeInTheDocument()
    expect(getByText('$$')).toBeInTheDocument()
    expect(getByText('4.7')).toBeInTheDocument()
    expect(getByText('A lovely neighborhood coffee shop')).toBeInTheDocument()
  })
})
