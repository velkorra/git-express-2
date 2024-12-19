class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUserById(id) {
        return this.userRepository.getUserById(id);
    }

    async createUser(user) {
        return this.userRepository.createUser(user);
    }

    async updateUser(user) {
        return this.userRepository.updateUser(user);
    }
}