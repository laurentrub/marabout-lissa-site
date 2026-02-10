import { Facebook, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/171gHbL4n5/",
    icon: <Facebook className="w-8 h-8" />,
    borderColor: "hover:border-blue-500",
    iconBg: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@amagnon9817?_r=1&_t=ZG-93mVdQb7nHc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
      </svg>
    ),
    borderColor: "hover:border-foreground",
    iconBg: "bg-foreground/10 text-foreground",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@maitreamagnonlissa",
    icon: <Youtube className="w-8 h-8" />,
    borderColor: "hover:border-earth-red",
    iconBg: "bg-earth-red/10 text-earth-red",
  },
];

const SocialMedia = () => {
  return (
    <section className="py-10 bg-card/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-earth-red to-golden-amber bg-clip-text text-transparent">
            Rejoignez-moi sur mes réseaux
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className={`text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-mystical border-border/50 ${social.borderColor} cursor-pointer`}
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${social.iconBg}`}>
                    {social.icon}
                  </div>
                  <span className="font-semibold text-foreground">{social.name}</span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
