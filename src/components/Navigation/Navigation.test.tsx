import { describe, it, expect } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { Navigation } from './Navigation'
import { BrowserRouter } from 'react-router'
import { screen, waitFor } from '@testing-library/dom'

describe('Navigation', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    screen.debug()
  })

  it('should render navigation links correctly', () => {
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })
  it('should have correct initial styles for links', () => {
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')

    expect(homeLink).toHaveClass('text-white')
    expect(aboutLink).toHaveClass('text-gray-400')
  })
  it('should change link color on hover', async () => {
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toHaveClass('text-gray-400')

    await waitFor(() => fireEvent.mouseOver(aboutLink))
    expect(aboutLink).toHaveClass('hover:text-white')

    await waitFor(() => fireEvent.mouseOut(aboutLink))
    expect(aboutLink).toHaveClass('text-gray-400')
  })

  it('should update the url when a link is clicked', async () => {
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')

    expect(window.location.pathname).toBe('/')

    await waitFor(() => fireEvent.click(aboutLink))
    expect(window.location.pathname).toBe('/about')

    await waitFor(() => fireEvent.click(homeLink))
    expect(window.location.pathname).toBe('/')
  })

  it('should apply active class to the current route', () => {
    const aboutLink = screen.getByText('About')
    const homeLink = screen.getByText('Home')

    expect(homeLink).toHaveClass('text-white')
    expect(aboutLink).toHaveClass('text-gray-400')

    fireEvent.click(screen.getByText('About'))
    expect(aboutLink).toHaveClass('text-white')
    expect(homeLink).toHaveClass('text-gray-400')
  })

  it('should not change the URL when clicking on the same link', () => {
    const aboutLink = screen.getByText('About')

    fireEvent.click(aboutLink)
    expect(window.location.pathname).toBe('/about')
  })
})
