export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url:"https://srv918361.hstgr.cloud",
  allowedHosts: ["srv918361.hstgr.cloud"],
});
