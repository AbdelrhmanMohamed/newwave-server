export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://srv918361.hstgr.cloud"],
    },
  },
  {
    name: 'strapi::public',
    config: {
      maxAge: 31536000
    },
  },
];

