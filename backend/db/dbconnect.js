import mongoose from "mongoose";

export const dbcon = async () => {
  try {
    await mongoose.connect("mongodb+srv://sangammunde3:69ZEogw3grwMXHyk@cluster0.7e0zod4.mongodb.net/smcode");

  } catch (error) {
    console.log(error);
  }
};
