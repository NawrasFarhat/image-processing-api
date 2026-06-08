Image Processing API

A scalable RESTful API built with Node.js, Express, and TypeScript for image resizing and processing. The API allows users to dynamically resize images through query parameters and generates optimized image outputs using the Sharp image processing library. The project follows Test-Driven Development (TDD) practices and includes automated testing with Jasmine.

Features
Resize images dynamically through API endpoints
High-performance image processing using Sharp
Caching of processed images to improve performance
Error handling and input validation
RESTful API architecture
Automated unit testing with Jasmine
TypeScript-based codebase
Technologies Used
TypeScript
Node.js
Express.js
Sharp
Jasmine
TDD (Test-Driven Development)
API Endpoint
Resize Image
GET /api/images?filename=<image_name>&width=<width>&height=<height>
Example
GET /api/images?filename=fjord&width=300&height=300
Installation
git clone <repository-url>
cd image-processing-api
npm install
Run the Project

Development mode:

npm run dev

Build the project:

npm run build

Start production server:

npm start
Run Tests
npm test
Project Structure
src/routes – API routes
src/controllers – Request handling logic
src/utilities – Image processing functions
assets/images – Source and processed images
spec – Unit tests
Learning Outcomes

This project strengthened my understanding of backend development concepts, RESTful API design, TypeScript, image processing workflows, caching strategies, and test-driven development practices. The image processing functionality is powered by Sharp, a high-performance Node.js image manipulation library.
