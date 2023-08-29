import {When} from "@badeball/cypress-cucumber-preprocessor";

export interface IStepDefinitionBody<T extends unknown[], C extends Mocha.Context> {
  (this: C, ...args: T): void;
}

export type ITypedWorld<Type extends {[key: string]: any}> = Type & IStepDefinitionBody<[], Mocha.Context>;

export type IDuckDuckGoWorld = ITypedWorld<{
  hello: boolean;
}>;
