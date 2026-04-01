"use client";

const IMAGES = {
  connection:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png",
  landscape:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png",
  bioluminescent:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png",
  "ocean-hero": "/images/ocean/ocean-hero.jpg",
  "ocean-garden": "/images/ocean/ocean-garden.jpg",
  "ocean-tree": "/images/ocean/ocean-tree.jpg",
  "ocean-network": "/images/ocean/ocean-network.jpg",
};

export function OrganicDivider({
  variant = "connection",
  flip = false,
}: {
  variant?: keyof typeof IMAGES;
  flip?: boolean;
}) {
  return (
    <div className="relative h-[250px] lg:h-[400px] overflow-hidden pointer-events-none">
      <img
        src={IMAGES[variant]}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover opacity-60"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
    </div>
  );
}
