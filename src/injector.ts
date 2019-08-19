import 'reflect-metadata';
import { Type } from './type.interface';

export const Injector = new class {
    classes: Map<string, any> = new Map<string, any>();

    resolve<T>(target: Type<any>): T {
        return this.classes.get(target.prototype.constructor.name) != null ? this.classes.get(target.prototype.constructor.name) : this.register(target);
    }

    register<T>(target: Type<any>): T {
        const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
        const injections = tokens.map((token:any) => Injector.resolve<any>(token));
        this.classes.set(target.prototype.constructor.name, new target(...injections));
        return this.classes.get(target.prototype.constructor.name);
    }
};
