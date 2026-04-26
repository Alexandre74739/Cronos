"use client";

import Image, { StaticImageData } from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Reveal from "../animations/Reveal";

interface HeroProps {
  imageSrc?: StaticImageData | string;
  tint?: string;
  badgeContent: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryContent?: string;
  secondaryHref?: string;
  secondaryContent?: string;
}

export default function Hero({
  imageSrc,
  tint,
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
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority
          />
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{
          background: imageSrc
            ? "linear-gradient(to right, #151515 35%, #15151599 60%, transparent 100%)"
            : tint
              ? `radial-gradient(ellipse at 15% 55%, ${tint}70 0%, transparent 65%)`
              : "radial-gradient(ellipse at 15% 55%, rgba(90,45,8,0.45) 0%, transparent 65%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, #151515 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 max-w-xl">
        <Reveal delay={0}>
          <Badge content={badgeContent} />
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-bold leading-[1.05] tracking-tight whitespace-pre-line">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.2}>
            <p className="text-white/60 max-w-base leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}

        {primaryHref && primaryContent && (
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button content={primaryContent} href={primaryHref} style="primary" />
              {secondaryHref && secondaryContent && (
                <Button content={secondaryContent} href={secondaryHref} style="secondary" />
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
