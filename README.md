# 📝 React To-Do List App

A simple and clean to-do list built with React.

## ✨ Features

- ✅ Add and delete tasks
- 🌙 Dark mode toggle
- 🕒 Timestamp with full format (e.g. April 15, 2025 @ 1:15:02 PM)
- 📂 Select categories for tasks
- ✔️ Checkmark to mark tasks as done
- 🔄 Tasks sorted by most recent
- 📑 Tasks grouped as **To Do** and **Done**
- 🧹 One-click clear for completed tasks
- 💾 Data saved in browser (local storage)

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/rjsnavarette03/to-do-list.git
cd to-do-list
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npm start
```

Then open your browser to [http://localhost:3000](http://localhost:3000)

---

## 🧠 How It Works

- Tasks are stored in browser local storage, so they don't disappear on refresh.
- Tasks include category, timestamp, and "done" status.
- Tasks are shown in two groups: **To Do** and **Done**.
- Each task shows the formatted date and time it was added.

---

## 🗂 Project Structure

```
src/
│
├── components/
│   ├── TaskInput.js         # Input box with category selector
│   ├── TaskItem.js          # Each task with checkmark, delete, and timestamp
│   └── DarkModeToggle.js    # Dark mode switch
│
├── utils/
│   └── formatDate.js        # Converts ISO date to readable format
│
├── styles.css               # All styles in one CSS file
└── App.js                   # Main logic and layout
```

---

## 🏗 Build for Production

```bash
npm run build
```

This will create a `build/` folder with the production-ready app.

---

## 🌐 Deploying to Hostinger

If you're using **Hostinger Premium Web Hosting**, you can:

1. Run `npm run build`
2. Upload the contents of the `build/` folder to your public HTML directory via File Manager or FTP
3. Make sure your domain points to the correct folder

---

## 🙌 Credits

Built with [React](https://reactjs.org/) and [Create React App](https://create-react-app.dev/).  
Designed for easy use and quick customization.

---

## 📬 Contact

If you have questions or want to improve this app, feel free to reach out or fork the repo!