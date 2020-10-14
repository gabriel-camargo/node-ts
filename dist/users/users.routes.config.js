"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = require("./controllers/users.controller");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const usersController = new users_controller_1.UsersController();
        this.app.get(`/users`, [
            usersController.listUsers
        ]);
        this.app.post(`/users`, [
            usersController.createUser
        ]);
        this.app.put(`/users/:userId`, [
            usersController.put
        ]);
        this.app.patch(`/users/:userId`, [
            usersController.patch
        ]);
        this.app.delete(`/users/:userId`, [
            usersController.removeUser
        ]);
        this.app.get(`/users/:userId`, [
            usersController.getUserById
        ]);
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQW1GO0FBQ25GLHFFQUErRDtBQUcvRCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNYLE1BQU0sZUFBZSxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNuQixlQUFlLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEIsZUFBZSxDQUFDLFVBQVU7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsZUFBZSxDQUFDLEdBQUc7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsZUFBZSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUIsZUFBZSxDQUFDLFVBQVU7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsZUFBZSxDQUFDLFdBQVc7U0FDOUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBakNELGtDQWlDQyJ9