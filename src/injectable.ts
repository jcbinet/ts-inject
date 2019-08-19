import { GenericClass } from './generic-class';
import { Type } from './type.interface';

export const Injectable = () : GenericClass<Type<any>> => {
    return (target: Type<any>) => { };
};
