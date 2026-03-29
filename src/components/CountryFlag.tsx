export type CountryCode = "LC" | "JM" | "BS" | "DM" | "GD" | "JP";

const flagCodeToTwemojiFile = {
  // Regional indicator symbols -> Twemoji filename part
  // Example: 🇱🇨 (L=1f1f1, C=1f1e8) -> 1f1f1-1f1e8.png
  LC: "1f1f1-1f1e8",
  JM: "1f1ef-1f1f2",
  BS: "1f1e7-1f1f8",
  DM: "1f1e9-1f1f2",
  GD: "1f1ec-1f1e9",
  JP: "1f1ef-1f1f5",
} satisfies Record<CountryCode, string>;

type CountryFlagProps = {
  code: CountryCode;
  label?: string;
  className?: string;
};

export default function CountryFlag({ code, label, className }: CountryFlagProps) {
  const twemojiFile = flagCodeToTwemojiFile[code];
  const src = `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/${twemojiFile}.png`;

  return (
    <img
      src={src}
      alt={label ?? code}
      className={className ?? "w-4 h-4 inline-block align-middle"}
      width={16}
      height={16}
      loading="lazy"
    />
  );
}

