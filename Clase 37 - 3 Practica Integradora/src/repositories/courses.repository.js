export default class CoursesRepository {
    constructor(dao) {
        this.dao = dao
    }

    async getCourses() {
        return await this.dao.getAll();
    }

    async getBy(params) {
        return await this.dao.getBy(params);
    }

    async createCourse(course) {
        return await this.dao.save(course);
    }

    async updateCourse(id, course) {
        return await this.dao.update(id, course);
    }
}