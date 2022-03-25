import { Model, DataTypes } from 'sequelize'
import { sequelize  } from '../instances/banco'

interface UserInstance extends Model{
    id:number,
    nome:string,
    age:number
}
export const User = sequelize.define<UserInstance>("User", {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
},
    {
        tableName: 'pessoa',
        timestamps: false
    }
);