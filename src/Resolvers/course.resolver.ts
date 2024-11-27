import { Course } from "../Models/course.model";

const getAllCourses = async () => {
  try {
    const courses = await Course.find();
    if (!courses) return console.log("courses Not Found!");
    console.log("Courses Retrieved Successfully!");
    return courses;
  } catch (error) {
    console.log(error);
  }
};

const getCoursebyId = async (parent: any, args: { id: string }) => {
  try {
    const course = await Course.findById(args.id);
    if (!course) return console.log("No course Found with this ID!");
    console.log("Course Retrieved Successfully!");
    return course;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCourses, getCoursebyId };
