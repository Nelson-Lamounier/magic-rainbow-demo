Magic Rainbow Website

Welcome to the repository for the Magic Rainbow Painting and Decorating website. This project showcases the company’s services, customer testimonials, gallery, and a contact form for inquiries.

---

Table of Contents
	1.	About
	2.	Features
	3.	Technologies Used
	4.	Getting Started
	5.	Testing
	6.	Contributing
	7.	License


About

The Magic Rainbow website is a fully responsive platform developed to highlight the professional services of Magic Rainbow Painting and Decorating. It includes dynamic sections such as service descriptions, a gallery, a contact form, and testimonials from satisfied customers.

Features
	•	About Us Section: Detailed information about the company and its values.
	•	Sticky Navigation Bar: Easy-to-access navigation throughout the site.
	•	Footer with Social Links: Links to the company’s social media profiles.
	•	Services Description: A breakdown of the services offered.
	•	Vertical Printing Video: A promotional video for the sister company’s services.
	•	Customer Testimonials: Reviews and experiences from satisfied customers.
	•	Our Customers Section: A showcase of the company’s clients.
	•	Dynamic Contact Form:
	•	Allows users to submit inquiries directly to the team.
	•	Includes form validation for user inputs.

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **SEO Optimized**: Meta tags, keywords, and content are designed to enhance search engine visibility.

---

## Technologies Used

•	Frontend:
	•	React
	•	TailwindCSS
	•	Next.js

•	Backend:
	•	AWS SES (for sending email)

•	Tools:
	•	Jest (for unit testing)
	•	React Testing Library (for component testing)
	•	Axios (for API integration)
    
## Getting Started
1. Prerequisites
	•	Node.js (v16 or higher)
	•	Yarn package manager
	•	AWS account (for SES setup)



## Live
1. AWS
	•	EC2: Hosting the backend.
	•	S3: Static file storage.
	•	Route 53: Domain management for `magicrainbow.ie`.  
	•	SES: Email notifications for contact form submissions. 

## Live Demo
2. Netlify
	•	Deploying the React frontend for Demo access.
    •	SES: Email notifications for contact form submissions.


## Installation and Setup
Follow these steps to set up the project locally:
Clone the repository and install dependencies:
git clone https://github.com/Nelson-Lamounier/magic-rainbow.git
cd magic-rainbow
yarn install

3. Development
Run the development server: yarn dev

4. Build
Generate a production build: yarn build


Testing

Overview

Testing ensures the reliability and functionality of the ContactForm component, focusing on validation, API integration, and user interactions. Jest and React Testing Library were used for the following scenarios:

Test Scenarios

1. Rendering Tests
	•	Ensure all form fields (Name, Email, Phone, Message) are rendered with the correct placeholders.
	•	Check that the “Submit” button is visible and functional.

2. Validation Tests
	•	Verify that validation errors are displayed when the form is submitted with empty fields:
	•	"Name is required"
	•	"Email is required"
	•	"Phone is required"
	•	"Message is required"

3. Input Interaction
	•	Simulate typing into form fields and ensure the values update correctly:
	•	For example, entering "John Doe" in the Name field reflects immediately in the input.

4. Form Submission
	•	Successful Submission:
	•	Mocked API responses were used to simulate successful email delivery.
	•	After submission, the form resets, and a success message ("Your message has been sent successfully!") is displayed using alert.
	•	Failed Submission:
	•	Simulated network errors or API failures.
	•	Validation ensures an error message ("An error occurred. Please try again later.") is shown.

Testing Tools
	•	Jest: Used as the test runner to ensure all tests pass consistently.
	•	React Testing Library: Provides utilities to interact with rendered components and verify behavior.
	•	Mocking:
	    •	axios was mocked to simulate API responses for the /api/send-email endpoint.
	    •	global.alert was mocked to verify user feedback without triggering actual alerts.

Test Commands
Run all tests: yarn test
Clear Jest cache: yarn jest --clearCache


Contributing
We welcome contributions! Please submit a pull request or open an issue if you encounter bugs or have feature suggestions.


License
This project is licensed under the MIT License.

Final Notes
The ContactForm component has been thoroughly tested to handle validation, user interactions, and API integrations. 