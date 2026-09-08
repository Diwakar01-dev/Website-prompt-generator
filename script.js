function generatePrompt() {
  const type = document.getElementById('type').value;
  const industry = document.getElementById('industry').value;
  const audience = document.getElementById('audience').value;
  const style = document.getElementById('style').value;
  const color = document.getElementById('color').value;
  const features = document.getElementById('features').value;
  const platform = document.getElementById('platform').value;

  const prompt = `Create a ${type} website for a ${industry}.

Target Audience:
${audience}

Design Style:
${style} with ${color} theme

Features:
${features}

UI/UX:
Clean, modern, responsive design with smooth animations.

Tech Stack:
${platform}

Goal:
High conversion, user-friendly, premium feel.`;

  document.getElementById('output').value = prompt;
}

function copyPrompt() {
  const text = document.getElementById('output');
  text.select();
  document.execCommand('copy');
  alert('Copied!');
}

function downloadTXT() {
  const text = document.getElementById('output').value;
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'prompt.txt';
  a.click();
}

function randomPrompt() {
  const styles = ['Modern', 'Minimal', 'Dark', 'Futuristic'];
  const industries = ['Tea Brand', 'Clothing', 'Tech Startup', 'Fitness'];

  document.getElementById('type').value = 'eCommerce';
  document.getElementById('industry').value = industries[Math.floor(Math.random()*industries.length)];
  document.getElementById('audience').value = 'Young professionals';
  document.getElementById('style').value = styles[Math.floor(Math.random()*styles.length)];
  document.getElementById('color').value = 'Green & Gold';
  document.getElementById('features').value = 'Login, Payment, Cart, Dashboard';
  document.getElementById('platform').value = 'React';

  generatePrompt();
}