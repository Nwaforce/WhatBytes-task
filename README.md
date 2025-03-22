# Skill Test Dashboard

This is a **Skill Test Dashboard** built using **Next.js** and **Tailwind CSS**. The application provides an interactive interface for users to view test summaries, analyze question performance, and track progress using visual statistics.

## 🚀 Features

- 📊 **Test Summary**: Displays test details like duration, number of questions, and submission date.
- 📈 **Quick Statistics**: Shows ranking, percentile, and correct answers dynamically.
- 📉 **Skill-wise Progress**: Uses progress bars to show proficiency in different topics.
- 🔄 **Update Scores Modal**: Allows users to update their test results.
- 📑 **Question Analysis**: Circular progress bar visualization for correct answers.
- 📌 **Sidebar Navigation**: Provides links to Dashboard, Skill Test, and Internship sections.
- 📱 **Responsive UI**: Works seamlessly on desktop and mobile.

## 🛠 Tech Stack

- **Next.js** – For server-side rendering and frontend development.
- **Tailwind CSS** – For responsive and modern UI styling.
- **React Hooks** – For state management.
- **Lucide Icons** – For clean and customizable icons.
- **React Circular Progressbar** – For question analysis visualization.

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nwaforce/WhatBytes-task
   ```

2. Navigate to the project folder:
   ```bash
   cd skill-test-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open **http://localhost:3000/** in your browser.

## 📂 Folder Structure

```
📁 skill-test-dashboard
│── 📂 components
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── TestSummary.tsx
│   ├── QuickStatistics.tsx
│   ├── ProgressBar.tsx
│   ├── QuestionAnalysis.tsx
│   ├── ComparisonGraph.tsx
│   ├── UpdateScoresModal.tsx
│── 📂 pages
│   ├── index.tsx (Main Dashboard Page)
│── 📂 public/images (Contains project assets)
│── 📄 tailwind.config.js
│── 📄 tsconfig.json
│── 📄 next.config.js
│── 📄 package.json
│── 📄 README.md
```

## 📌 How It Works

- The **Sidebar** allows easy navigation.
- The **Test Summary** card displays test information.
- The **Quick Statistics** section updates dynamically based on user inputs.
- The **Progress Bars** visualize performance in different skill areas.
- The **Update Scores Modal** allows updating scores, affecting the statistics dynamically.

## 📜 License

This project is licensed under the **MIT License**.

---

Made with ❤️ by Your Name

