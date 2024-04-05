import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//adding  user in every request is optional

declare global {
    namespace Express {
        interface Request{
            user: any; // Adjust the type accordingly 
        }
    }
}


function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_HEADER_KEY as string, (err: jwt.VerifyErrors | null, user: any) => {
        

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    });
}

export default authenticateToken;
//auth middleware 