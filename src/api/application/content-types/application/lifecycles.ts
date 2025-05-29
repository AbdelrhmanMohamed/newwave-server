const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

export default {
  async beforeCreate(event) {
    if (!event.params.data.cv) {
      throw new errors.ApplicationError("CV is required.");
    }
    if (event.params.data.cv && typeof event.params.data.cv !== "object") {
      throw new errors.ApplicationError("CV must be an object.");
    }

    await validateCV(event.params.data.cv);
  },

  async beforeUpdate(event) {
    if (!event.params.data.cv) {
      throw new errors.ApplicationError("CV is required.");
    }
    await validateCV(event.params.data.cv);
  },
};

async function validateCV(cv) {
  if (!cv) return;

  const fileId = typeof cv === "object" && cv.id ? cv.id : cv;

  const file = await strapi.db.query("plugin::upload.file").findOne({
    where: { id: fileId },
    select: ["mime", "name"],
  });

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!file || !allowedTypes.includes(file.mime)) {
    throw new errors.ApplicationError(
      `❌ Invalid file type: ${file?.name || "Unknown"}. Only PDF or Word documents are allowed.`
    );
  }
}
