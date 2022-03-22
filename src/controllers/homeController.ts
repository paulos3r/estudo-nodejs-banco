import { Request, Response } from 'express';
import { User } from '../model/users'

export const home = async ( req: Request, res: Response) => {
    let users = await User.findAll();

    res.render('pages/home', {
        users
    });
}