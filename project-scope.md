# Alexandru Barbulescu

Few words about my blog

## Problem

Currently, when I write an article, I do it in a separate Markdown (MD) file, send it to the AI for improvements, and then manually add it by connecting directly to the MySQL database.

## Solution

I want to implement a solution for writing and improving articles using AI.

## Features

- Authentication system (JWT-based sessions) with email and password, or via Better Auth / OAuth
- A form for creating and editing articles, including:
  - Category
  - Title
  - Hero banner (generated using AI)
  - Body content
- File storage (images and PDFs) handled via a cloud provider (e.g., Cloudinary)
- Article list with filtering, sorting, and pagination
- AI-powered article classification
- AI-assisted content improvement
- User management (admin only — single user is sufficient)
- Admin dashboard to view and manage all articles