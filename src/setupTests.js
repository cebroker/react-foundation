import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJestSnapshot from 'chai-jest-snapshot';
import { expect } from 'chai';
chai.use(chaiEnzyme());
chai.use(chaiJestSnapshot);
global.expect = expect;
