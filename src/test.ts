import { Injector } from './injector';
import { Injectable } from './injectable';
import { expect } from 'chai';

class ToInject { }

@Injectable()
class Test {
    constructor(private toInject: ToInject) { }
}

describe('Register Class', () => {
    it('should register test class and resolve it\'s dependencies', () => {
        const result = Injector.register<Test>(Test) instanceof Test;
        expect(result).to.equal(true);
    });
});
