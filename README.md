# 🚀 Kislay Kumar's Portfolio Website

> A modern, responsive, and animated portfolio built using React, TypeScript, Vite, and Tailwind CSS.

🌐 **Live Website**: [https://kislaykumar.netlify.app](https://kislaykumar.netlify.app)  
📂 **GitHub Repository**: [Portfolio Website](https://github.com/KislayKashyap-hub/Portfolio-Website)

---

## ✨ Overview

This is my personal developer portfolio showcasing my projects, certifications, and skills in a clean, mobile-first design. Built with cutting-edge tools for performance, responsiveness, and smooth UI animations.

---

## 📸 Screenshots

### 🏠 Home Page
![Home](/project-image/Home.png)

### 🧑‍💻 About Me Section
![About Me](/project-image/AboutMe.png)

### 💼 Experience Section
![Experience](/project-image/experience.png)

### 💻 Projects Section
![Projects](/project-image/projects.png)

### 🎓 Certificate Section
![Certificate](/project-image/certificate.png)

### 📞 Contact Section
![Contact](/project-image/contact.png)

---


## ⚙️ Tech Stack

- 🚀 **React 18**
- 🧠 **TypeScript**
- ⚡ **Vite**
- 💎 **Tailwind CSS**
- 🎥 **Framer Motion**
- 📩 **Formspree**
- 🧩 **React Icons**
- 🔍 **React Helmet** *(for SEO - optional)*
- 📈 **Google Analytics** *(optional for tracking)*

---

## 🔧 Features

- ✅ Fully responsive across all devices
- ✅ Framer Motion animations
- ✅ Scroll-based transitions
- ✅ Formspree contact integration
- ✅ Showcases certifications and projects
- ✅ Clean folder structure and scalable codebase
- ✅ Visitor counter via external service
- ✅ SEO-optimized metadata using React Helmet
- 🌙 Optional: Dark Mode Support
- 🌐 Optional: Blog Section with Markdown/Headless CMS
- 🧠 Optional: Multi-language Support (i18n)
- 📊 Optional: Analytics & Insights (GA4, Plausible, etc.)

---

## 📁 Folder Structure

```
Portfolio-Website/
├── public/
│   └── project-image/
│       ├── certificate.png
│       ├── contact.png
│       └── home.png
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/KislayKashyap-hub/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

---

## 📬 Contact Form Setup (Formspree)

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and copy the endpoint URL.
3. Update your contact form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

---

## 📈 Google Analytics Setup (Optional)

1. Go to [Google Analytics](https://analytics.google.com/) and set up GA4.
2. Add the tracking code to `index.html` or use `react-ga` in your code.

---

## 🌍 Visitor Counter (Optional)

You can use services like [Visitor Badge](https://visitor-badge.laobi.icu/) or [Hits](https://hits.seeyoufarm.com/):

```markdown
![visitors](https://visitor-badge.laobi.icu/badge?page_id=KislayKashyap-hub.Portfolio-Website)
```

Add this badge under the header in your README.

---

## 🌙 Add Dark Mode (Tailwind-based)

Use Tailwind's dark mode feature:

```js
// tailwind.config.js
darkMode: 'class',
```

Then toggle the `dark` class using a button to switch themes.

---

## ✍️ Optional Blog Section

You can create a new route like `/blog` and render Markdown files using:

- `react-markdown`
- `gray-matter`
- or integrate with a headless CMS (e.g. Contentful, Sanity)

---

## 🔐 SEO Optimization

Use `react-helmet`:

```tsx
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Kislay Kumar | Portfolio</title>
  <meta name="description" content="Portfolio of Kislay Kumar" />
</Helmet>
```

---

## 🚀 Deploy on Netlify

1. Push the repo to GitHub.
2. Go to [Netlify](https://netlify.com) → **New Site** → **Import from Git**.
3. Set:
   - Build Command: `npm run build`
   - Publish directory: `dist`
4. Deploy your site 🎉

---

## 🙋‍♂️ Author

**Kislay Kumar**  
Salesforce Developer | Frontend Enthusiast  
📧 kislay.tech@gmail.com  
🌐 [https://kislaykumar.netlify.app](https://kislaykumar.netlify.app)  
💼 [linkedin.com/in/kislay-kumar-kk](https://linkedin.com/in/kislay-kumar-kk)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## ❤️ Acknowledgements

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Formspree](https://formspree.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Netlify](https://www.netlify.com/)
