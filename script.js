const output = document.getElementById("output");
const emptyState = document.getElementById("emptyState");
const characterCount = document.getElementById("characterCount");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");


function getValue(id) {
  return document.getElementById(id).value.trim();
}


function generatePrompt() {

  const type = getValue("type") || "modern business website";
  const industry = getValue("industry") || "a modern digital business";
  const audience = getValue("audience") || "modern internet users";
  const style = getValue("style");
  const color = getValue("color") || "a professional, balanced color palette";
  const features = getValue("features") || "contact form, responsive navigation and clear calls-to-action";
  const platform = getValue("platform");


  const prompt = `Create a professional ${type} for ${industry}.

PROJECT OVERVIEW
Build a polished, production-ready website designed for ${audience}.

DESIGN DIRECTION
• Visual style: ${style}
• Color direction: ${color}
• Use a clean visual hierarchy with strong typography and intentional spacing.
• Avoid generic AI-generated layouts, excessive gradients, and unnecessary decorative elements.
• Use a consistent design system across the entire website.

USER EXPERIENCE
• Make navigation intuitive and responsive.
• Create clear visual hierarchy between primary and secondary content.
• Use meaningful micro-interactions for buttons, cards, links and form elements.
• Include smooth but subtle transitions.
• Maintain excellent readability and accessibility.
• Design mobile-first and ensure the layout works across all screen sizes.

CORE FEATURES
${features
  .split(",")
  .map(feature => `• ${feature.trim()}`)
  .join("\n")}

TECHNOLOGY
Use ${platform} with clean, maintainable and well-structured code.

PAGES & SECTIONS
• Hero section with a strong value proposition
• Feature / service section
• Social proof or testimonials
• Pricing or conversion section where appropriate
• FAQ section
• Strong final call-to-action
• Professional footer

ANIMATION
Use subtle, purposeful animations:
• Fade and slide reveal on scroll
• Smooth button hover states
• Card hover interactions
• Navigation transitions
• Respect prefers-reduced-motion

QUALITY REQUIREMENTS
• Fully responsive
• Fast loading
• Accessible
• SEO-friendly structure
• Semantic HTML
• Consistent spacing
• Reusable components
• Production-quality UI

GOAL
The final website should feel like a professionally designed real-world product rather than an AI-generated template. Prioritize clarity, usability, trust and conversion.`;


  showOutput(prompt);
}


function showOutput(prompt) {

  emptyState.style.display = "none";

  output.style.display = "block";

  output.value = prompt;

  updateCharacterCount();

  output.focus();

  output.scrollTop = 0;
}


function updateCharacterCount() {

  const count = output.value.length;

  characterCount.textContent =
    `${count.toLocaleString()} characters`;
}


output.addEventListener("input", updateCharacterCount);


async function copyPrompt() {

  const text = output.value.trim();

  if (!text) {
    showToast("Generate a prompt first");
    return;
  }


  try {

    await navigator.clipboard.writeText(text);

    showToast("Prompt copied to clipboard");

  } catch {

    output.select();

    document.execCommand("copy");

    showToast("Prompt copied to clipboard");
  }
}


function downloadTXT() {

  const text = output.value.trim();

  if (!text) {
    showToast("Generate a prompt first");
    return;
  }


  const blob = new Blob(
    [text],
    { type: "text/plain;charset=utf-8" }
  );


  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "website-prompt.txt";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);

  showToast("Prompt downloaded");
}


function randomPrompt() {

  const websites = [
    "SaaS Landing Page",
    "eCommerce Store",
    "Portfolio Website",
    "Startup Website",
    "Agency Website"
  ];


  const industries = [
    "AI Startup",
    "Premium Coffee Brand",
    "Fitness Platform",
    "Creative Agency",
    "FinTech Product"
  ];


  const audiences = [
    "young professionals",
    "startup founders",
    "creative professionals",
    "online shoppers",
    "small business owners"
  ];


  const colors = [
    "midnight blue and electric violet",
    "black and warm gold",
    "white and cobalt blue",
    "charcoal and emerald",
    "deep navy and cyan"
  ];


  const features = [
    "authentication, dashboard, pricing and payment",
    "product search, cart, checkout and wishlist",
    "portfolio gallery, contact form and testimonials",
    "services, case studies, testimonials and booking",
    "analytics dashboard, reports and user management"
  ];


  document.getElementById("type").value =
    randomItem(websites);

  document.getElementById("industry").value =
    randomItem(industries);

  document.getElementById("audience").value =
    randomItem(audiences);

  document.getElementById("color").value =
    randomItem(colors);

  document.getElementById("features").value =
    randomItem(features);


  generatePrompt();

  showToast("New concept generated");
}


function randomItem(array) {

  return array[
    Math.floor(Math.random() * array.length)
  ];
}


function showToast(message) {

  toastMessage.textContent = message;

  toast.classList.add("show");


  clearTimeout(window.toastTimer);


  window.toastTimer = setTimeout(() => {

    toast.classList.remove("show");

  }, 2400);
}