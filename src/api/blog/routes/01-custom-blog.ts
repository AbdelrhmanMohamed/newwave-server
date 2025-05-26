export default {
  routes: [
    {
      method: "GET",
      path: "/blogs/:slug",
      handler: "api::blog.blog.findBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
