export enum TestEnum {
    FIRST,
    SECOND
}

export type PrefixType = "Dr" | "Docent"

interface ITest {
    name: string;
    sayTest(prefix: PrefixType): void
    enumTest(arg: TestEnum): void
}

type ClassType = {
    age: number;
}

type CombinedType = ITest & ClassType & {
    // eyeColor: string
}

abstract class TestAbstract implements CombinedType {
    private readonly eyeColor: string = "red";
    name: string;
    age: number;

    constructor() {
        this.eyeColor = "black"
    }

    sayTest(prefix: PrefixType): void {
        console.log(`Hello, ${prefix} ${this.name}`)
    }

    abstract enumTest(arg: TestEnum): void
}

export {
    ITest,
    TestAbstract,
    CombinedType,
    ClassType
}