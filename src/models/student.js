//book schema
const studentschema = new mongoose.Schema({
  name: String,
  class: String,
  age: Number,
  tel: Number,
});

module.exports = mongoose.model("student", studentschema);
