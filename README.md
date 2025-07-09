This is the frontend repository for **Vyn**, an AI powered code vulnerability scanner. It's built with **Next.js** and consumes REST APIs from the Django backend to render vulnerability reports.

🔗 Live: [vyn-web-scanner.vercel.app](https://vyn-web-scanner.vercel.app)


---

## 🚀 What It Does

- Loads and displays code scan results
- Connects to a backend API for vulnerability data
- Uses modern Next.js 14 features (`app/` directory, fast routing)
- Serves static assets and responsive pages

---

## 🛠️ Tech Stack used

- **Framework**: Next.js 14
- **Language**: JavaScript (ES Modules)
- **Styling**: Tailwind CSS (optional, add if used)
- **Hosting**: [Vercel](https://vercel.com)

---

## ⚙️ How to Run Locally

**Prerequisites**: Node.js ≥ 18

1. **Clone the repo**
   ```bash
   git clone https://github.com/hyemiie/vyn_web_scanner.git
   cd vyn_web_scanner

2. **Install dependencies**

```bash
npm install
# or yarn / pnpm / bun install
```

3. **Start the dev server**

```bash
npm run dev
```
once it starts running navigate to `http://localhost:3000` to view the application in your browser.

This frontend connects to the [Vyn Backend](https://github.com/hyemiie/vyn-web-demo), which processes scans and serves results via an API.

## 🤝 Connect 
I'm always open to feedback and suggestions, you can reach me at;

GitHub: @hyemiie
Email: yemiojedapo1@gmail.com
