import React from "react"
import Footer from "./Footer"
import { shallow } from "enzyme"

describe('Rendering Footer elements', () => {
    it('Renders Footer components', () => {
        component = shallow(<Footer />);
        expect(component.exists()).toEqual(true);
    });
    it('Checks footer elements', () => {
        component = shallow(<Footer />);
        expect(component.text().toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`));
    });
});