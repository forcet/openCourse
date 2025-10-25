import { Router, Request, Response, NextFunction } from "express";
import { LuckyService } from "../service/LuckyService";

const router = Router();
const luckyService = new LuckyService();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message = await luckyService.getExternalService();  
      if(!message) {
        return res.send("hola mundo!!");
      }
      return res.send(`hola mundo!!, te entrego este mensaje: [ ${message} ]`); 
    } catch (err) {
      next(err);
    }
});

export default router;