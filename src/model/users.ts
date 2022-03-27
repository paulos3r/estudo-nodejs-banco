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
        type: DataTypes.STRING,
        get(){
            const raw = this.getDataValue('name').toUpperCase();
        }
    },
    lestName:{
        type: DataTypes.STRING
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get(){
            return `${this.getDataValue('name')} ${this.getDataValue('lestName')}`;
        }
    },
    age: {
        type: DataTypes.INTEGER,
        set(value:number){
            if(value < 18 ){
                value = 18;
            }
            this.setDataValue('age', value);
        }
    }
},
    {
        tableName: 'pessoa',
        timestamps: false
    }
);