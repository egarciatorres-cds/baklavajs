import { type ComponentOptions, markRaw } from "vue";
import { BaseNumericInterface } from "../baseNumericInterface";
import SliderInterfaceComponent from "./SliderInterface.vue";

export interface BaseSliderNumericOptions {
    min: number;
    max: number;
    disabled?: boolean;
}

export class SliderInterface extends BaseNumericInterface {
    component = markRaw(SliderInterfaceComponent) as ComponentOptions;

    public options: BaseSliderNumericOptions = {
        min: 0,
        max: 1000,
    };

    constructor(name: string, value: number, options: BaseSliderNumericOptions) {
        super(name, value);
        this.options = options;
    }
}

export { SliderInterfaceComponent };
