import { Request, Response } from 'express';
import { User } from '../model/users'
import { Op } from 'sequelize'

export const home = async ( req: Request, res: Response) => {
    //method finder

    const[ usuario, created ] = await User.findOrCreate({
        where: {name: 'Paulo'},
        defaults:{
            name: 'Paulo',
            age: 26
        }
    });
    if(created){
        console.log('Usuario criado com sucesso');
    }else
        console.log('houve algum problema');



    // let usuario = await User.findOne({
    //     where: {
    //         id:1
    //     }
    // })
    // if(usuario){
    //     console.log(`O usuário ${usuario.nome} possui ${usuario.age} anos.`)
    // } 





    // await User.destroy({
    //     where:{
    //         age:{
    //             [Op.lte]: 18
    //         }
    //     }
    // });

    // let usersId = await User.findAll({
    //     where:{
    //         id: 7
    //     }
    // })
    // if(usersId.length > 0){
    //     let usuario = usersId[0];
    //     usuario.age= 53;

    //     await usuario.save();
    // }
    // // 1 - dados a serem alterados
    // // 2 - condição a serem alterados
    // await User.update({ age: 18}, {
    //     where: {
    //         age: {
    //             [Op.lt]:18
    //         }
    //     }
    // });
    // await User.update({ name: 'Jhonas', age: 27 }, {
    //     where: {
    //         id: 4
    //     }
    // });

    let users = await User.findAll();

    res.render('pages/home', {
        users
    });
}