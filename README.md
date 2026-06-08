# 🖼️ Image Processing API

A scalable RESTful API built with **Node.js**, **Express**, and **TypeScript** for dynamic image resizing and processing. Built following **Test-Driven Development (TDD)** practices with automated testing via Jasmine.

---

## ✨ Features

- 🔄 **Dynamic Image Resizing** — resize images on-the-fly via query parameters
- ⚡ **High-Performance Processing** — powered by the [Sharp](https://sharp.pixelplumbing.com/) library
- 💾 **Caching** — processed images are cached to avoid redundant operations
- ✅ **Input Validation & Error Handling** — meaningful error responses for invalid inputs
- 🧪 **TDD** — fully tested with Jasmine unit tests
- 🔷 **TypeScript** — fully typed codebase for maintainability

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| TypeScript | Language |
| Node.js | Runtime |
| Express.js | Web framework |
| Sharp | Image processing |
| Jasmine | Unit testing |

---

## 📡 API Endpoint

### Resize an Image
GET /api/images?filename=<name>&width=<w>&height=<h>
---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- npm

### Installation

```bash
git clone https://github.com/NawrasFarhat/image-processing-api.git
cd image-processing-api
npm install
```

### Running the Project

```bash
# Development mode (with hot reload)
npm run dev

# Build the project
npm run build

# Start production server
npm start
```

### Running Tests

```bash
npm test
```

---

## 📁 Project Structure
image-processing-api/
├── src/
│   ├── routes/         # API route definitions
│   ├── controllers/    # Request handling logic
│   └── utilities/      # Image processing functions (Sharp)
├── images/             # Source and processed/cached images
├── spec/               # Jasmine unit tests
├── dist/               # Compiled JavaScript output
├── tsconfig.json
└── package.json
---

## 🧪 Testing

This project was developed using **Test-Driven Development (TDD)**. Tests cover:

- Image resizing logic
- Cache hit/miss behavior
- Input validation and error cases

Run with:

```bash
npm test
```

---

## 📄 License

This project is licensed under the terms found in [LICENSE.txt](./LICENSE.txt).

---

## 👤 Author

**Nawras Farhat**  
[GitHub](https://github.com/NawrasFarhat) · [LinkedIn](https://www.linkedin.com/in/nawrasfarhatt)
