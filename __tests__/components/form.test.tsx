import { render, screen } from '@testing-library/react'
import ReservationForm from '@/components/form'

describe('ReservationForm', () => {
  it('renders form', () => {
    const { getByText, getByRole } = render(<ReservationForm />)

    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Phone Number')).toBeInTheDocument()
    expect(getByText('Email Address')).toBeInTheDocument()
    expect(getByText('Guests')).toBeInTheDocument()
    expect(getByText('Date')).toBeInTheDocument()
    expect(getByText('Time')).toBeInTheDocument()
    expect(getByRole('button', {name: /Reserve/i})).toBeInTheDocument()
  })
})
