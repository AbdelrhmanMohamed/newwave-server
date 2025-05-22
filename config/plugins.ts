module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },

  seo: {
    enabled: true,
  },

  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: "smtp.gmail.com", //SMTP Host
        port: 465, //SMTP Port
        secure: true,
        username: "a.m.abdelzher@gmail.com",
        password: "sxaj gsyo dxkr wuow",
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1000,
      },
    },
    settings: {
      defaultFrom: "a.m.abdelzher@gmail.com",
      defaultReplyTo: "boodyhope@gmail.com",
    },
  },
});
