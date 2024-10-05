export default {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/site', // Redirection vers ton dossier "site"
        permanent: true, // ou false si c'est une redirection temporaire
      },
    ];
  },
};
