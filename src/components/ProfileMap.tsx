interface ProfileMapProps {
  theme: "dark" | "light";
}

export function ProfileMap({ theme }: ProfileMapProps) {
  return (
    <div className="hero-visual">
      <figure className="profile-map">
        <img
          src={theme === "light" ? "/profile-map-light.svg" : "/profile-map.svg"}
          alt="Animated terminal-style visual map with an ASCII portrait of Athena."
        />
      </figure>
    </div>
  );
}
