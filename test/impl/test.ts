import { TestAbstract, TestEnum, CombinedType } from "../test";

class TestBaseImpl extends TestAbstract {
    enumTest(arg: TestEnum): void {
        console.log(arg)
    }
}

class TestImpl extends TestBaseImpl {
    enumTest(arg: TestEnum): void {
        console.log(arg + " override")
    }
}

const t: TestAbstract = new TestImpl();

t.sayTest("Dr")
t.enumTest(TestEnum.FIRST)
