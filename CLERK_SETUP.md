# Clerk Authentication Setup

This project now uses Clerk for authentication instead of the custom auth system.

## Setup Instructions

### 1. Create a Clerk Account

1. Go to [clerk.com](https://clerk.com) and sign up for a free account
2. Create a new application
3. Choose "React" as your framework

### 2. Get Your Publishable Key

1. In your Clerk dashboard, go to "API Keys"
2. Copy your "Publishable key"

### 3. Set Environment Variable

Create a `.env.local` file in your project root and add:

```
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
```

### 4. Configure Admin Users

To make a user an admin:

1. In your Clerk dashboard, go to "Users"
2. Find the user you want to make an admin
3. Click on their profile
4. Go to "Metadata" tab
5. Add a new metadata field:
   - Key: `role`
   - Value: `admin`

### 5. Run the Application

```bash
npm run dev
```

## Features

- ✅ **Sign In/Sign Up** - Modal-based authentication
- ✅ **User Management** - Built-in user profiles
- ✅ **Admin Detection** - Based on user metadata
- ✅ **Sign Out** - Integrated user button
- ✅ **Protected Routes** - Admin panel protection

## Admin Panel Access

Users with `role: admin` in their Clerk metadata will see an "Admin" badge and can access the admin panel at `/admin`.

## Customization

You can customize the Clerk appearance by modifying the `appearance` prop in the `UserButton` component in `src/components/Header.tsx`.
