/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,  // Active l'App Router
    },
    async redirects() {
      return [
        {
          source: '/home',         // La route d'origine (page d'accueil)
          destination: '/site', // La route cible (le dossier "site" sera traité comme home)
          permanent: true,     // Redirection permanente (301)
        },
      ];
    },
  };
  
  export default nextConfig;
  