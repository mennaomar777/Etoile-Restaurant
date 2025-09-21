# Etoile Restaurant Website

Welcome to the **Etoile Restaurant** website project! This is a fully responsive web application designed for a fictional restaurant named _Etoile_, showcasing modern UI/UX principles without relying on a pre-designed layout.

## Project Overview

Created as part of **Phase #2, Round 12 Frontend Internship**, focusing on designing and building a restaurant website from scratch. The project includes four key pages: **Home, Menu, Contact, and About**, built using React, Tailwind CSS, and integrated with Supabase for form submissions.

**Purpose:** Demonstrate the ability to research, design, and develop a modern restaurant website.  
**Tech Stack:** React, Tailwind CSS, JavaScript, Supabase

## Features

### Home Page

- Displays the restaurant's identity with a slider, featured dishes, about teaser, testimonials, and a call-to-action.

### Menu Page

- Showcases categories and dishes with images and prices, allowing users to view details.

### Contact Page

- Includes a contact form with **name, email, and message fields**, plus a Google Maps embed for location.

### About Page

- Highlights the restaurant's story, team, and customer testimonials.

### Additional Features

- Cart system for ordering dishes.
- Reservation form for table bookings.
- Authentication with Supabase (Sign Up, Sign In, Sign Out).
- Protected cart actions: only signed-in users can add items to the cart.
- Reservations linked to authenticated users.
- **Cash Payment Option:** Users can choose to pay in cash when placing orders.

## Development Process

### 1. Research & Inspiration

- Explored real-world restaurant websites (e.g., Buffalo Burger, Bazooka, McDonald's, Domino’s).
- Focused on modern layouts, warm color schemes, clear typography, and responsive design.
- Prioritized high-quality food images and intuitive navigation.

### 2. Design Decisions

- **Colors:** Warm earthy tones (`#d4a373` for buttons, `#3E3B32` for headings) for a cozy vibe.
- **Typography:** `font-serif` for headings, clean sans-serif for body text.
- **Spacing & Layout:** Tailwind CSS grid & flexbox for organized structure with proper padding/margins.
- **Responsiveness:** Mobile-first design using Tailwind’s responsive utilities (`md:`, `lg:`).
- **Images:** High-quality food images from Unsplash and Pinterest stored in the assets folder.

### 3. Implementation

- Built with React for component-based architecture.
- Integrated Tailwind CSS for modern styling.
- Integrated Supabase for secure contact form submissions.
- Added Google Maps iframe in Contact page.
- Extended functionality with cart system, reservation form, authentication, and cash payment option.

### 4. How to Run the Project

```bash
git clone https://github.com/mennaomar777/Etoile-Restaurant.git
npm install
npm run dev
```

### 5. Challenges & Future Improvements

- Challenges: Ensuring form validation and Supabase integration worked smoothly across devices.
- Future Improvements: Add Guest Checkout for non-registered users, integrate online payment, and enhance the - slider with animations.

### 6. Submission Details

- Deadline: September 25, 2025
- Repository: This GitHub repository contains the complete source code and this README file.

### 7. Acknowledgments

- Inspired by the Frontend Internship guidelines and real-world restaurant website designs.
- Thanks to the internship team for this creative challenge!

## 8. Live Demo

Check out the live site: [https://etoile-restaurant-ashy.vercel.app/](https://etoile-restaurant-ashy.vercel.app/)
