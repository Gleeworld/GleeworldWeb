@tailwind base;
@tailwind components;
@tailwind utilities;

/* === Root Variables === */
:root {
  --magneta: #E10075;
  --orange: #FF6B35;
  --silver: #F8F9FA;
  --dark-gray: #333333;
  --white: #ffffff;
}

/* === Global Reset === */
html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

/* === Custom Utility Classes === */
.gradient-magneta-orange {
  background: linear-gradient(135deg, var(--magneta), var(--orange));
}

/* === Accessibility Improvements === */
a {
  text-decoration: none;
  color: inherit;
}

button, a {
  cursor: pointer;
  transition: all 0.3s ease;
}
