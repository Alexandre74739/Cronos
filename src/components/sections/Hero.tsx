import Image, { StaticImageData } from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

interface HeroProps {
  imageSrc: StaticImageData | string;
  badgeContent: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryContent: string;
  secondaryHref: string;
  secondaryContent: string;
}

export default function Hero({
  imageSrc,
  badgeContent,
  title,
  description,
  primaryHref,
  primaryContent,
  secondaryHref,
  secondaryContent,
}: HeroProps) {
  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100vh-64px)] px-12 md:px-20 overflow-hidden bg-[#151515]">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #151515 35%, #15151599 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 max-w-xl">
        <Badge content={badgeContent} />

        <h1 className="font-bold leading-[1.05] tracking-tight whitespace-pre-line">
          {title}
        </h1>

        <p className="text-white/60 max-w-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button content={primaryContent} href={primaryHref} style="primary" />
          <Button content={secondaryContent} href={secondaryHref} style="secondary" />
        </div>
      </div>
    </section>
  );
}
