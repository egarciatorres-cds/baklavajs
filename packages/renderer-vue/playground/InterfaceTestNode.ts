import { defineNode } from "@baklavajs/core";
import { setType } from "@baklavajs/interface-types";
import {
    ButtonInterface,
    CheckboxInterface,
    IntegerInterface,
    NumberInterface,
    SelectInterface,
    SliderInterface,
    TextInputInterface,
    TextInterface,
} from "../src";
import { booleanType, numberType, stringType } from "./interfaceTypes";

export default defineNode({
    type: "InterfaceTestNode",
    inputs: {
        button: () => new ButtonInterface("ButtonInterface", () => alert("It works")),
        checkbox: () => new CheckboxInterface("CheckboxInterface", false).use(setType, booleanType),
        integer: () =>
            new IntegerInterface("IntegerInterface", 5, { min: 0, max: 10, disabled: true }).use(setType, numberType),
        number: () =>
            new NumberInterface("NumberInterface", 0.5, { min: 0, max: 10, disabled: true }).use(setType, numberType),
        select: () =>
            new SelectInterface("SelectInterface", "Value 1", ["Value 1", "Value 2", "Value 3"]).use(
                setType,
                stringType,
            ),
        slider: () =>
            new SliderInterface("SliderInterface", 0.5, { min: 0, max: 1, disabled: true }).use(setType, numberType),
        textInput: () => new TextInputInterface("TextInputInterface", "").use(setType, stringType),
        text: () => new TextInterface("TextInterface", "My text"),
    },
});
