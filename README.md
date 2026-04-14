# 🌐 Cyber-Hub: Integrated Cloud Dashboard
A futuristic, multi-utility web dashboard built to manage daily tasks, track expenses, and monitor community donations. This project integrates multiple tools into a single-page application (SPA) interface.

## 🚀 Overview
The **Cyber-Hub** is designed for users who want a centralized place for their digital tools. It features a Cyberpunk-inspired UI and uses a real-time backend to ensure data is synchronized across all devices.

## 🛠️ Integrated Modules
1.  **🤖 Cyber-Bot v2.0:** A rule-based intelligent chatbot that assists users with basic commands and information.
2.  **💸 Expense Cloud:** A personal finance tracker that saves data to the cloud. It features a unique "View-Only" sharing system using URL parameters.
3.  **🙏 Bhandara Tracker:** A community donation management system that calculates real-time totals and maintains a transparent contributor list.

## 🏗️ Technical Stack
* **Frontend:** HTML5 (Semantic Structure), CSS3 (Flexbox & Grid Layouts).
* **Styling:** Cyberpunk Aesthetic with Neon Glow effects (`box-shadow` & `text-shadow`).
* **Database:** Google Firebase Realtime Database (NoSQL).
* **Language:** Vanilla JavaScript (ES6+).

## 🌟 Key Features
* **Cloud Persistence:** Unlike local storage, data is saved on a server and doesn't disappear on refresh.
* **Tab-Based Navigation:** Smooth switching between different tools without page reloads.
* **Shareable Links:** Users can share their Expense list via a "View Mode" link (`?view=userID`).
* **Real-time Updates:** Any change made on one device reflects instantly on all other connected devices.

## 📂 Project Structure
* `index.html` - The main entry point containing the Dashboard UI.
* `style.css` - Custom Cyberpunk theme and layout styling.
* `script.js` - Main logic for Firebase integration, Tab switching, and Bot responses.
* `.gitignore` - To keep the repository clean from system junk files.

## 🔧 How to Setup
1. Clone the repository.
2. Create a project on [Firebase Console](https://console.firebase.google.com/).
3. Enable **Realtime Database** and set rules to `true` for testing.
4. Replace the `firebaseConfig` object in `script.js` with your own API keys.
5. Open `index.html` in any modern web browser.

---
**Developer Note:** Created by a passionate Class 9 student. Learning the depths of Full-Stack development one project at a time!(This is my first time to devlop a project with google firebase )
