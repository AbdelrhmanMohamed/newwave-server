import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      console.log("Searching blog with slug:", slug);

      const blogs = await strapi.entityService.findMany("api::blog.blog", {
        filters: { slug },
        populate: "*",
      });

      console.log("Blogs found:", blogs);

      if (!blogs || blogs.length === 0) {
        return ctx.notFound("Blog not found");
      }

      return blogs[0];
    },
  })
);
