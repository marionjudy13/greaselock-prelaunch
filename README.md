# GreaseLock Prelaunch Site

This is the **prelaunch landing page** for GreaseLock, built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/).

---

## 🛠️ Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/marionjudy13/greaselock-prelaunch.git
cd greaselock-prelaunch
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📷 Images & PDFs

Place any assets for the site in the `public/images` or `public/pdfs` folders.

---

## 🧩 Customization

Tailwind CSS configuration is in `tailwind.config.js`. Update utility classes and theme settings as needed. See docs at [tailwindcss.com](https://tailwindcss.com/).

---

## 🔀 Git Workflow

### Creating a New Feature Branch

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

### Committing Your Work

```bash
git add .
git commit -m "Add: clear description of your change"
```

### Rebase with Latest Dev Before Pushing

```bash
git pull --rebase origin dev
```

### Push Your Branch

```bash
git push origin feature/your-feature-name
```

### Open a Pull Request

Create a pull request (PR) to merge your `feature/` branch into `dev`.

---

### Merging Dev into Main

Once changes in `dev` are tested and approved, create a pull request (PR) to merge the `dev` branch into `main`.

---

## 🙋‍♀️ Maintainer

**Marion Judy**  
mjudy@bhciss.com
