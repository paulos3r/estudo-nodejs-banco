import { Request, Response } from 'express';
import { User } from '../model/users'


export const addIdade = async (req: Request, res:Response) =>{
    console.log('Params: ', req.params);
    let id: string = req.params.id;

    let result = await User.findAll({
        where:{
            id: id
        }
    });
    if(result.length > 0){
        let usuario = result[0]

        usuario.age++;
        await usuario.save();
    }
    res.redirect('/');
}

export const diminuirIdade = async (req: Request, res:Response) =>{
    let id : string = req.params.id;

    let result = await User.findAll({
        where:{
            id:id
        }
    });
    if(result.length > 0 ){
        let usuario = result[0];
        usuario.age--;

        await usuario.save();
    }

    res.redirect('/');
}

export const excluirIdade = async (req: Request, res:Response) =>{
    let id: string = req.params.id;
    await User.destroy({
        where:{
            id:id
        }
    });
    
    res.redirect('/');
}