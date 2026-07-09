export type PortfolioCategory = "Brand Identity" | "Packaging" | "3D Visualization" | "Social Media";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  slug: string;
  tags: string[];
};

export const portfolioCategories = [
  { id: "brand-identity", label: "Brand Identity" },
  { id: "packaging", label: "Packaging" },
  { id: "3d-visualization", label: "3D Visualization" },
  { id: "social-media", label: "Social Media" },
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Aurelia Maison",
    category: "Brand Identity",
    description: "Luxury positioning with a cinematic visual system and identity architecture.",
    image: "/portfolio/aurelia-maison.svg",
    slug: "aurelia-maison",
    tags: ["Logo", "Brand System", "Art Direction"],
  },
  {
    title: "Nero Atelier",
    category: "Brand Identity",
    description: "Crafting a bold luxury label with refined typography and premium tone.",
    image: "/portfolio/nero-atelier.svg",
    slug: "nero-atelier",
    tags: ["Branding", "Typography", "Luxury"],
  },
  {
    title: "Arcane Studio",
    category: "Brand Identity",
    description: "A memorable identity for a creative studio, balancing modern minimalism with warmth.",
    image: "/portfolio/arcane-studio.svg",
    slug: "arcane-studio",
    tags: ["Identity", "Logo", "Creative"],
  },
  {
    title: "Vesper Collective",
    category: "Brand Identity",
    description: "A striking identity system built for an upscale creative collective.",
    image: "/portfolio/vesper-collective.svg",
    slug: "vesper-collective",
    tags: ["Creative", "System", "Luxury"],
  },
  {
    title: "Solstice Packaging",
    category: "Packaging",
    description: "Elegant tactile systems for a premium product launch with shelf appeal.",
    image: "/portfolio/solstice-packaging.svg",
    slug: "solstice-packaging",
    tags: ["Packaging", "Luxury", "Retail"],
  },
  {
    title: "Luxe Parcel",
    category: "Packaging",
    description: "Packaging design that feels premium from unboxing to display.",
    image: "/portfolio/luxe-parcel.svg",
    slug: "luxe-parcel",
    tags: ["Unboxing", "Premium", "Brand Experience"],
  },
  {
    title: "Nectar Tote",
    category: "Packaging",
    description: "A high-impact packaging system designed for artisanal products and seasonal launches.",
    image: "/portfolio/nectar-tote.svg",
    slug: "nectar-tote",
    tags: ["Eco", "Retail", "Visual Story"],
  },
  {
    title: "Aegis Box",
    category: "Packaging",
    description: "High-end packaging crafted to communicate protection and premium value.",
    image: "/portfolio/aegis-box.svg",
    slug: "aegis-box",
    tags: ["Premium", "Secure", "Display"],
  },
  {
    title: "Velora 3D Launch",
    category: "3D Visualization",
    description: "Immersive product storytelling rendered for high-end digital campaigns.",
    image: "/portfolio/velora-3d-launch.svg",
    slug: "velora-3d-launch",
    tags: ["3D", "Rendering", "Campaign"],
  },
  {
    title: "Horizon Render",
    category: "3D Visualization",
    description: "Showcasing architectural visuals with crisp lighting, materials, and cinematic framing.",
    image: "/portfolio/horizon-render.svg",
    slug: "horizon-render",
    tags: ["Architecture", "CGI", "Cinematic"],
  },
  {
    title: "Nova Product Studio",
    category: "3D Visualization",
    description: "Product visualization that makes every detail feel tactile and premium.",
    image: "/portfolio/nova-product-studio.svg",
    slug: "nova-product-studio",
    tags: ["Product", "3D", "Texture"],
  },
  {
    title: "Echo Studio",
    category: "3D Visualization",
    description: "A stylized 3D concept suite tailored for innovation stories.",
    image: "/portfolio/echo-studio.svg",
    slug: "echo-studio",
    tags: ["Concept", "3D", "Innovation"],
  },
  {
    title: "Luna Social Media",
    category: "Social Media",
    description: "A social-first creative system built to elevate audience engagement and storytelling.",
    image: "/portfolio/luna-social-media.svg",
    slug: "luna-social-media",
    tags: ["Social", "Content", "Engagement"],
  },
  {
    title: "Pulse Campaign",
    category: "Social Media",
    description: "Campaign assets designed to increase shareability and brand heat across platforms.",
    image: "/portfolio/pulse-campaign.svg",
    slug: "pulse-campaign",
    tags: ["Campaign", "Ads", "Engagement"],
  },
  {
    title: "Frame Stories",
    category: "Social Media",
    description: "Visual storytelling templates for reels, posts, and brand launches.",
    image: "/portfolio/frame-stories.svg",
    slug: "frame-stories",
    tags: ["Stories", "Social", "Motion"],
  },
  {
    title: "Orbit Canvas",
    category: "Social Media",
    description: "A dynamic social toolkit designed for rapid content production and brand presence.",
    image: "/portfolio/orbit-canvas.svg",
    slug: "orbit-canvas",
    tags: ["Toolkit", "Social", "Motion"],
  },
];
