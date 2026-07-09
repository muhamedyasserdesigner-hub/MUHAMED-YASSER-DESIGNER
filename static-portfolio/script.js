const categories = [
  { id: "all", label: "All", icon: "grid" },
  { id: "brand-identity", label: "Brand Identity", icon: "brand" },
  { id: "packaging", label: "Packaging", icon: "box" },
  { id: "3d-visualization", label: "3D Visualization", icon: "cube" },
  { id: "social-media", label: "Social Media", icon: "social" },
];

const portfolioItems = [
  { title: "Aurelia Maison", category: "Brand Identity", description: "Luxury positioning with a cinematic visual system and identity architecture.", image: "assets/portfolio/aurelia-maison.svg", tags: ["Logo", "Brand System", "Art Direction"] },
  { title: "Nero Atelier", category: "Brand Identity", description: "Crafting a bold luxury label with refined typography and premium tone.", image: "assets/portfolio/nero-atelier.svg", tags: ["Branding", "Typography", "Luxury"] },
  { title: "Arcane Studio", category: "Brand Identity", description: "A memorable identity for a creative studio, balancing modern minimalism with warmth.", image: "assets/portfolio/arcane-studio.svg", tags: ["Identity", "Logo", "Creative"] },
  { title: "Vesper Collective", category: "Brand Identity", description: "A striking identity system built for an upscale creative collective.", image: "assets/portfolio/vesper-collective.svg", tags: ["Creative", "System", "Luxury"] },
  { title: "Solstice Packaging", category: "Packaging", description: "Elegant tactile systems for a premium product launch with shelf appeal.", image: "assets/portfolio/solstice-packaging.svg", tags: ["Packaging", "Luxury", "Retail"] },
  { title: "Luxe Parcel", category: "Packaging", description: "Packaging design that feels premium from unboxing to display.", image: "assets/portfolio/luxe-parcel.svg", tags: ["Unboxing", "Premium", "Brand Experience"] },
  { title: "Nectar Tote", category: "Packaging", description: "A high-impact packaging system designed for artisanal products and seasonal launches.", image: "assets/portfolio/nectar-tote.svg", tags: ["Eco", "Retail", "Visual Story"] },
  { title: "Aegis Box", category: "Packaging", description: "High-end packaging crafted to communicate protection and premium value.", image: "assets/portfolio/aegis-box.svg", tags: ["Premium", "Secure", "Display"] },
  { title: "Velora 3D Launch", category: "3D Visualization", description: "Immersive product storytelling rendered for high-end digital campaigns.", image: "assets/portfolio/velora-3d-launch.svg", tags: ["3D", "Rendering", "Campaign"] },
  { title: "Horizon Render", category: "3D Visualization", description: "Showcasing architectural visuals with crisp lighting, materials, and cinematic framing.", image: "assets/portfolio/horizon-render.svg", tags: ["Architecture", "CGI", "Cinematic"] },
  { title: "Nova Product Studio", category: "3D Visualization", description: "Product visualization that makes every detail feel tactile and premium.", image: "assets/portfolio/nova-product-studio.svg", tags: ["Product", "3D", "Texture"] },
  { title: "Echo Studio", category: "3D Visualization", description: "A stylized 3D concept suite tailored for innovation stories.", image: "assets/portfolio/echo-studio.svg", tags: ["Concept", "3D", "Innovation"] },
  { title: "Luna Social Media", category: "Social Media", description: "A social-first creative system built to elevate audience engagement and storytelling.", image: "assets/portfolio/luna-social-media.svg", tags: ["Social", "Content", "Engagement"] },
  { title: "Pulse Campaign", category: "Social Media", description: "Campaign assets designed to increase shareability and brand heat across platforms.", image: "assets/portfolio/pulse-campaign.svg", tags: ["Campaign", "Ads", "Engagement"] },
  { title: "Frame Stories", category: "Social Media", description: "Visual storytelling templates for reels, posts, and brand launches.", image: "assets/portfolio/frame-stories.svg", tags: ["Stories", "Social", "Motion"] },
  { title: "Orbit Canvas", category: "Social Media", description: "A dynamic social toolkit designed for rapid content production and brand presence.", image: "assets/portfolio/orbit-canvas.svg", tags: ["Toolkit", "Social", "Motion"] },
];

const services = [
  { name: "Brand Identity", description: "From logo systems to full visual language, I craft premium brands that feel cinematic, confident, and built to last.", price: "Starts at $2,500 - $6,500", badge: "Luxury systems" },
  { name: "Packaging Design", description: "Tactile packaging, structural concepts, and premium finishes that make products feel irresistible on shelf and online.", price: "Starts at $1,800 - $5,000", badge: "Premium unboxing" },
  { name: "Social Media Campaigns", description: "Strategic visual content, motion assets, and campaign direction for brands that grow faster with higher engagement.", price: "Starts at $1,200 - $4,000", badge: "Scroll-stopping" },
  { name: "Web Design", description: "High-end website concepts with modern interactions, polished layouts, and a strong brand-first experience.", price: "Starts at $2,800 - $7,500", badge: "Digital presence" },
  { name: "UI/UX Design", description: "User-first interfaces, intuitive journeys, and beautiful digital products designed to convert and delight.", price: "Starts at $2,200 - $6,200", badge: "Experience-led" },
];

const aboutServices = [
  { title: "Brand Identity", items: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"] },
  { title: "Graphic Design", items: ["Social Media Campaigns", "Advertising Creatives", "Marketing Materials"] },
  { title: "3D Visualization", items: ["Product Rendering", "Packaging Visualization", "Commercial Mockups"] },
  { title: "Creative Direction", items: ["Concept Development", "Visual Strategy", "AI-Assisted Design Workflows"] },
];

const processSteps = [
  { title: "Discover", text: "Understanding the brand, audience, and project goals." },
  { title: "Strategy", text: "Building a visual direction that aligns with business objectives." },
  { title: "Design", text: "Crafting premium visuals with attention to every detail." },
  { title: "Deliver", text: "Providing polished, production-ready assets with consistency across every touchpoint." },
];

const tools = ["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Blender", "Cinema 4D", "Figma", "Spline", "ChatGPT", "Midjourney", "AI Creative Tools"];
const reasons = ["Strategic Brand Thinking", "Premium Modern Design", "Fast Communication", "Detail-Oriented Workflow", "High-Quality Deliverables", "Creative Problem Solving", "AI-Enhanced Efficiency", "Consistent Visual Systems"];
const contacts = [
  { label: "Email", value: "hello@mohamedyasser.com", href: "mailto:hello@mohamedyasser.com" },
  { label: "WhatsApp", value: "+20 100 123 4567", href: "https://wa.me/201001234567" },
  { label: "Instagram", value: "@mohamedyasser.design", href: "https://instagram.com/mohamedyasser.design" },
  { label: "LinkedIn", value: "Mohamed Yasser", href: "https://linkedin.com/in/mohamedyasser" },
  { label: "Behance", value: "behance.net/mohamedyasser", href: "https://www.behance.net/mohamedyasser" },
];

let activeCategory = "All";

function renderCategories() {
  const container = document.querySelector("#categoryFilters");
  if (!container) return;
  container.innerHTML = categories.map((category) => `
    <button class="category-card ${category.label === activeCategory ? "active" : ""}" data-category="${category.label}" type="button">
      <span class="category-icon category-icon-${category.icon}">${categoryIconTemplate(category.icon)}</span>
      <h3>${category.label}</h3>
      <p>Show ${category.label === "All" ? "all" : category.label} projects.</p>
    </button>
  `).join("");

  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderProjects();
    });
  });
}

function categoryIconTemplate(icon) {
  const icons = {
    grid: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"/></svg>`,
    brand: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4.5 7.2v8.6L12 20l7.5-4.2V7.2L12 3Zm0 3.2 4.6 2.6-4.6 2.6-4.6-2.6L12 6.2Zm-4.8 5.1 3.3 1.9v3.8l-3.3-1.9v-3.8Zm6.3 5.7v-3.8l3.3-1.9v3.8L13.5 17Z"/></svg>`,
    box: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8 3.8 7v10L12 21.2 20.2 17V7L12 2.8Zm0 2.8L16.8 8 12 10.4 7.2 8 12 5.6ZM6 10.2l4.8 2.4v5.1L6 15.2v-5Zm7.2 7.5v-5.1l4.8-2.4v5l-4.8 2.5Z"/></svg>`,
    cube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 4 6.8v10.4l8 4.3 8-4.3V6.8l-8-4.3Zm0 2.9 5.1 2.7L12 10.8 6.9 8.1 12 5.4Zm-5.4 5 4.2 2.2v5.4l-4.2-2.3v-5.3Zm6.6 7.6v-5.4l4.2-2.2v5.3L13.2 18Z"/><path d="M12 10.8v2.6"/></svg>`,
    social: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14.5a3 3 0 1 0 2.7 1.7l5.1-2.6a3 3 0 0 0 2.2 1 3 3 0 1 0-2.7-4.3L9.2 7.8A3 3 0 1 0 8 9.6l5.2 2.5v.1l-5.1 2.6A3 3 0 0 0 7 14.5Z"/></svg>`,
  };
  return icons[icon] || icons.grid;
}

function renderProjects() {
  const container = document.querySelector("#projectsGrid");
  if (!container) return;

  if (activeCategory === "All") {
    container.classList.add("sectioned-projects");
    container.innerHTML = categories
      .filter((category) => category.label !== "All")
      .map((category) => {
        const items = portfolioItems.filter((item) => item.category === category.label);
        return `
          <section class="project-category-section">
            <div class="project-category-head">
              <div>
                <p class="eyebrow">${category.label}</p>
                <h3>${category.label} Projects</h3>
              </div>
              <span>${items.length} projects</span>
            </div>
            <div class="projects-grid-inner">
              ${items.map((item) => projectCardTemplate(item)).join("")}
            </div>
          </section>
        `;
      })
      .join("");
    return;
  }

  container.classList.remove("sectioned-projects");
  const items = activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);
  container.innerHTML = items.map((item) => projectCardTemplate(item)).join("");
}

function projectCardTemplate(item) {
  return `
    <article class="project-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="project-body">
        <p class="eyebrow">${item.category}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function renderStaticLists() {
  const servicesGrid = document.querySelector("#servicesGrid");
  if (servicesGrid) {
    servicesGrid.innerHTML = services.map((service) => `
      <article class="service-card">
        <div class="service-top">
          <div><p class="eyebrow">${service.badge}</p><h3>${service.name}</h3></div>
          <span class="price">${service.price}</span>
        </div>
        <p>${service.description}</p>
        <div class="tags"><span>premium</span><span>rapid delivery</span></div>
      </article>
    `).join("");
  }

  const aboutServicesList = document.querySelector("#aboutServices");
  if (aboutServicesList) {
    aboutServicesList.innerHTML = aboutServices.map((service) => `
      <article><h3>${service.title}</h3><ul>${service.items.map((item) => `<li>${item}</li>`).join("")}</ul></article>
    `).join("");
  }

  const processList = document.querySelector("#processList");
  if (processList) {
    processList.innerHTML = processSteps.map((step, index) => `
      <div class="process-step"><b>${index + 1}</b><div><h3>${step.title}</h3><p>${step.text}</p></div></div>
    `).join("");
  }

  const toolsList = document.querySelector("#toolsList");
  if (toolsList) toolsList.innerHTML = tools.map((tool) => `<span>${tool}</span>`).join("");

  const reasonsList = document.querySelector("#reasonsList");
  if (reasonsList) reasonsList.innerHTML = reasons.map((reason) => `<span>${reason}</span>`).join("");

  const contactList = document.querySelector("#contactList");
  if (contactList) {
    contactList.innerHTML = contacts.map((contact) => `
      <a href="${contact.href}" target="_blank" rel="noreferrer"><p class="eyebrow">${contact.label}</p><strong>${contact.value}</strong></a>
    `).join("");
  }
}

function setupForm() {
  const form = document.querySelector("#briefForm");
  const thanks = document.querySelector("#thanksMessage");
  if (!form || !thanks) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("hidden");
    thanks.classList.remove("hidden");
  });
  document.querySelector("#editSubmission").addEventListener("click", () => {
    thanks.classList.add("hidden");
    form.classList.remove("hidden");
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupLogoButton() {
  const logoButton = document.querySelector(".logo-button");
  if (!logoButton || logoButton.tagName === "A") return;
  logoButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

renderCategories();
renderProjects();
renderStaticLists();
setupForm();
setupRevealAnimation();
setupLogoButton();
