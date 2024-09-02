// routes.ts
import { Router } from "express";
import { ApiResponse } from "../utilities/api-response.js";

export class TicketsController {
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes = () => {
    try {
      this.router.get("/", (req, res) => {
        res.status(200).json(new ApiResponse("success", { ticket: null }));
      });

      // this.router.get("/create", (req: Request, res: Response) => {
      //   res.send("Hello, world from separate routes file!");
      // });
    } catch (err) {
      res.status(400).json(new ApiResponse(err.message || "Bad request", null));
    }
  };

  createTicket = (req, res) => {
    const { body } = req;

    console.log("data", body);

    res.status(200).json();
  };
}
