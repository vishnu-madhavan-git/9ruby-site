"use client";

const IMAGES = {
  connection:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png",
  landscape:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png",
  bioluminescent:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png",
};

export function OrganicDivider({
  variant = "connection",
  flip = false,
}: {
  variant?: keyof typeof IMAGES;
  flip?: boolean;
}) {
  return (
    <div className="relative h-[200px] lg:h-[300px] overflow-hidden pointer-events-none">
      <img
        src={IMAGES[variant]}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover opacity-25"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
    </div>
  );
}
