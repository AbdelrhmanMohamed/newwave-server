import slugify from "slugify";

export default {
  async beforeCreate(event) {
    const { data } = event;
    if (data.title && !data.slug) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }
  },
  async beforeUpdate(event) {
    const { data } = event;
    if (data.title && !data.slug) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }
  },
};
