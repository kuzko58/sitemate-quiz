import express from "express";
import { TicketsController } from "./controllers/tickets-controller.js";

class Server {
  constructor() {
    this.basePath = "/api/v1";
    this.app = express();
    this.ticketsController = new TicketsController();
    this.config();
    this.initializeControllers();
  }

  config = () => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  initializeControllers() {
    this.app.use(`${this.basePath}/tickets`, this.ticketsController.router);
  }

  start = (port) => {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  };
}

const port = 4000;
const server = new Server();
server.start(port);
