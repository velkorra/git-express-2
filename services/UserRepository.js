export class UserRepository{
    constructor() {
        this.users = [];
    }

    async getUserById(id) {
        return this.users.find(user => user.id === id);
    }

    async createUser(user) {
        this.users.push(user);
    }

    async updateUser(user){
        this.users = this.users.map(u => u.id === user.id ? user : u);
    }
}