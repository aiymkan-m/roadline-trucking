# RoadLine Trucking - Web Application

A modern, responsive, professional frontend website for **RoadLine Trucking**, a US-based freight logistics company.

This repository is designed as a clean React application that can be used for DevOps and CI/CD practice (e.g., GitHub Actions, Docker, SonarQube, Trivy, AWS ECR, Kubernetes).

---

## 🚀 Features

- **Navbar**: Logo, links (Home, Services, About, Fleet, Contact) and a "Get a Quote" button. Collapses to a menu on mobile.
- **Hero**: "Reliable Freight. Delivered On Time." with call-to-action buttons and an inline SVG highway/truck illustration.
- **Services**: Full Truckload, Less Than Truckload, Expedited Freight, Dedicated Routes, Warehousing & Logistics, Nationwide Delivery.
- **About**: Company overview and mission.
- **Why Choose Us**: On-Time Delivery, Experienced Drivers, Modern Fleet, 24/7 Dispatch, Nationwide Coverage, Safety First.
- **Fleet**: Dry Van, Reefer, Flatbed, Box Truck.
- **Company Statistics**: 10+ Years Experience, 50+ Trucks, 48 States Covered, 99% On-Time Delivery.
- **Get a Quote Form**: Frontend-only form with validation (nothing is sent anywhere).
- **Contact & Footer**: Quick links, services, contact information and copyright.

---

## 🛠️ Technology Stack

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3 (Flexbox & CSS Grid)**
- **Lucide React** (Icons)
- **ESLint** (Linting & Code Quality)

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed.

### 1. Installation

Install all project dependencies:

```bash
npm install
```

### 2. Local Development

Start the Vite development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 3. Code Quality / Linting

Run ESLint to check for code quality and formatting issues:

```bash
npm run lint
```

### 4. Production Build

Build the optimized application for production deployment:

```bash
npm run build
```

The output build files will be created in the `dist/` directory.

### 5. Docker

The `Dockerfile` uses a multi-stage build:

1. **Stage 1** (`node:22-alpine`): runs `npm ci` and `npm run build` to create `dist/`.
2. **Stage 2** (`nginx:alpine`): copies `dist/` into `/usr/share/nginx/html` and serves it with `nginx.conf`.

```bash
docker build -t roadline-trucking:latest .
docker run -d -p 8080:80 --name roadline-trucking roadline-trucking:latest
```

Open `http://localhost:8080`. A health check endpoint is available at `http://localhost:8080/health`.

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.css
│   │   ├── About.jsx
│   │   ├── Contact.css
│   │   ├── Contact.jsx
│   │   ├── Fleet.css
│   │   ├── Fleet.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── QuoteForm.css
│   │   ├── QuoteForm.jsx
│   │   ├── Services.css
│   │   ├── Services.jsx
│   │   ├── Stats.css
│   │   ├── Stats.jsx
│   │   ├── WhyChooseUs.css
│   │   └── WhyChooseUs.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .dockerignore
├── Dockerfile
├── eslint.config.js
├── index.html
├── nginx.conf
├── package.json
├── README.md
└── vite.config.js
```
