<!-- @format -->

# 🖥️ Full-Stack Marketing Website – Server-Side Rendered (Next.js + AWS)

This repository contains a fully responsive, server-rendered marketing website developed using **Next.js**, deployed on **AWS**, and enhanced with **CI/CD pipelines and containerization**. The project demonstrates modern **frontend development**, **form handling via AWS SES**, and **cloud-native deployment** using AWS services.

---

## 🔗 Live Demo

🌐 **URL**: [Live Site](https://project1.lamounierdigital.com/)

---

## 🧰 Tech Stack

| Layer              | Technology                                                     |
| ------------------ | -------------------------------------------------------------- |
| **Frontend**       | Next.js, React, TailwindCSS                                    |
| **Email API**      | AWS SES (Simple Email Service)                                 |
| **Infrastructure** | Docker, AWS CodePipeline, CodeDeploy, CloudFormation, Route 53 |
| **Testing**        | Jest, React Testing Library                                    |
| **Deployment**     | AWS ECS (Fargate), ECR, CI/CD                                  |

---

## 💡 Features 

- **Responsive Design**: Optimized for desktop, tablet, and mobile using TailwindCSS.
- **Server-Side Rendering (SSR)**: Built with Next.js for fast page loads and SEO benefits.
- **Contact Form Integration**: Submissions handled via AWS SES with form validation.
- **SEO Optimization**: Structured meta tags and semantic layout.
- **Dockerized App**: Includes Dockerfile for containerized builds and deployments.

---

## 🚀 Deployment Architecture

This project is fully deployed on **AWS**, leveraging a cloud-native and automated deployment workflow:

- **Infrastructure as Code**: Provisioned using **AWS CloudFormation** templates.
- **Containerisation**: Application is containerised with **Docker**, stored in **Amazon ECR**.
- **Deployment**: Automated using **AWS CodePipeline** and **CodeDeploy**.
- **DNS Routing**: Managed with **Amazon Route 53** for domain configuration.
- **CI/CD Pipeline**: Push-to-main triggers build, test, and deploy workflows.

---

## 📁 Project Purpose

This application serves as a **portfolio project** demonstrating:

- Real-world application of **full-stack development principles**
- Integration of **AWS services for production-grade deployment**
- Usage of **Docker and CI/CD pipelines** to automate infrastructure

> While the project reflects a real-world use case, all branding and business content has been anonymised for portfolio presentation purposes.

---

## 📄 License & Attribution

This repository is intended for personal learning and technical demonstration only. Do not reuse content or assets for commercial purposes.
