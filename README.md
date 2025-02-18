# Dokan Portfolio

This is a portfolio project for Dokan Front End Test. The project includes a responsive header, footer, and content components with animations using `framer-motion`.

## Features

- Responsive Header with dropdown menu for mobile view
- Responsive Footer with contact information and links
- Content component
- Animations using `framer-motion`

## Installation

To get started with this project, follow the steps below:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dokan-portfolio.git 
```

2. Navigate to the project directory:

```bash
cd dokan-portfolio
```

3. Install the dependencies:

```bash
npm install
```
4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:3000 to see the project in action.

## Project Structure

The project structure is as follows:

```markdown
dokan-portfolio/
├── public/
│   ├── brandlogo.svg
│   ├── envelope.svg
│   ├── facebook.svg
│   ├── instagram.svg
│   ├── linkedin.svg
│   ├── Logotype.svg
│   ├── phone.svg
│   ├── pin.svg
│   ├── twitter.svg
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Content.tsx
│   │   │   ├── Footer/
│   │   │   │   └── index.tsx
│   │   │   ├── Header/
│   │   │   │   └── index.tsx
│   │   ├── pages/
│   │   │   └── index.tsx
│   ├── constant/
│   │   └── index.ts
├── README.md
├── package.json
├── tsconfig.json
```

## Components
# Header
The Header component includes a responsive navigation menu with a dropdown for mobile view. It uses framer-motion for animations.

# Footer
The Footer component includes contact information and links. It is responsive and adapts to different screen sizes.

# Content
The Content component is a placeholder for the main content of the page.

# Animations
The project uses framer-motion for animations. The Header component includes animations for the dropdown menu, and the LoginPage component includes fade-in animations for the header, content, and footer.

# License
This project is licensed under the MIT License.