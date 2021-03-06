const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises");

const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({ isPublished: true, tags: "backend" })
    .sort("name")
    .select({ name: 1, author: 1 });
}

(async () => {
  const courses = await getCourses();
  console.log(courses);
})();
