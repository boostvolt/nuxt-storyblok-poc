# Nuxt & Storyblok PoC

## Description

This project is a Nuxt.js application with internationalization (i18n) support, using Storyblok as a headless CMS.

## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

## Features

- Internationalization with support for German (de-ch) and French (fr-ch)
- Dynamic page routing
- Integration with Storyblok for content management
- Tailwind CSS for styling

## Project Structure

- `components/`: Vue components used in the application
- `layouts/`: Layouts define the structure for your pages
- `pages/`: Contains the application's pages. Nuxt.js reads all the `.vue` files inside this directory and creates the application router
- `storyblok/`: Components for rendering content from Storyblok
- `assets/`: Contains uncompiled assets such as styles, images, or fonts
- `public/`: Static files that you want to serve directly