import type { DarkLightImageFragment } from "../lib/basehub/fragments"
import clsx from "clsx"
import { BaseHubImage } from "basehub/next-image"
import type { ImageProps } from "next/image"

type DarkLightImageProps = DarkLightImageFragment &
  Omit<ImageProps, "src" | "alt"> & {
    alt?: string
    withPlaceholder?: boolean
  }

export function DarkLightImage({
  alt,
  dark,
  light,
  className,
  width,
  height,
  withPlaceholder,
  ...props
}: DarkLightImageProps) {
  return (
    <>
      {dark ? (
        <BaseHubImage
          alt={dark.alt ?? alt ?? ""}
          className={clsx("hidden dark:block", className)}
          height={height ?? dark.height}
          src={dark.url || "/placeholder.svg"}
          width={width ?? dark.width}
          {...props}
          {...(withPlaceholder && dark.blurDataURL
            ? {
                placeholder: "blur",
                blurDataURL: dark.blurDataURL,
              }
            : {})}
        />
      ) : null}
      <BaseHubImage
        alt={light.alt ?? alt ?? ""}
        className={clsx(dark && "dark:hidden", className)}
        height={height ?? light.height}
        src={light.url}
        width={width ?? light.width}
        {...props}
        {...(withPlaceholder && light.blurDataURL
          ? {
              placeholder: "blur",
              blurDataURL: light.blurDataURL,
            }
          : {})}
      />
    </>
  )
}

export function DarkLightImageAutoscale(props: DarkLightImageProps) {
  // Accept both "16/9" (string) and 1.777… (number) formats coming from BaseHub
  let computedRatio = 1 // sensible fallback

  const rawRatio = props.light.aspectRatio

  if (typeof rawRatio === "string") {
    if (rawRatio.includes("/")) {
      const [w, h] = rawRatio.split("/").map(Number)
      if (w && h) computedRatio = w / h
    } else {
      const parsed = Number.parseFloat(rawRatio)
      if (!Number.isNaN(parsed) && parsed > 0) computedRatio = parsed
    }
  } else if (typeof rawRatio === "number" && rawRatio > 0) {
    computedRatio = rawRatio
  }

  let logoStyle: "square" | "4/3" | "portrait" | "landscape"

  switch (true) {
    case computedRatio <= 1.2:
      logoStyle = "square"
      break
    case computedRatio < 1.4:
      logoStyle = "4/3"
      break
    case computedRatio < 4:
      logoStyle = "portrait"
      break
    default:
      logoStyle = "landscape"
      break
  }

  return (
    <DarkLightImage
      priority
      alt="logo"
      className={clsx("w-auto max-w-[200px] object-contain", {
        "h-10": logoStyle === "square",
        "h-9": logoStyle === "4/3",
        "h-8": logoStyle === "portrait",
        "h-6": logoStyle === "landscape",
      })}
      style={{
        aspectRatio: typeof rawRatio === "string" ? rawRatio : computedRatio.toString(),
      }}
      {...props}
    />
  )
}
