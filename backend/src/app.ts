import express, { Router } from "express";
import cors from 'cors';

class App {
  readonly app: express.Application;

  constructor() {
    this.app = express();
  }

  public startServer(port = 3001) {
    this.app.listen(port, () => {
      console.log(`Server is running in http://localhost:${port}`);
    });
  }

  public addRouter(router: Router) {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(router);
  }
}

export default App;
