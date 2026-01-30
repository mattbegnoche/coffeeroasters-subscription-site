import IconFacebook from "../ui/icons/IconFacebook";
import IconInstagram from "../ui/icons/IconInstagram";
import IconTwitter from "../ui/icons/IconTwitter";

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/",
    icon: IconFacebook,
  },
  {
    platform: "Twitter",
    url: "https://www.twitter.com/",
    icon: IconTwitter,
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/",
    icon: IconInstagram,
  },
];

/*
// 1. Define the TypeScript type for a social link

// 2. Define the data structure
const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: FaGithub },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: FaLinkedin },
  { platform: 'Twitter', url: 'https://twitter.com', icon: FaTwitter },
];

const SocialLinksComponent: React.FC = () => {
  return (
    <div style={styles.container}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            style={sPtyles.link}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};

// 3. Simple styling (can be replaced with Tailwind, CSS Modules, etc.)
const styles = {
  container: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#333',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
};

export default SocialLinksComponent;
 */
