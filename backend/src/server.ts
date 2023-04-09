import { UserFactory } from "./api/factory/UserFactory";
import App from "./app";

const server = new App();

server.startServer();
server.addRouter(UserFactory.createUserRouter());

export default server;
