'use strict'
import React from "react"
import ReactDOM from "react-dom"

import GridItem from "../../components/GridItem"
import renderer from "react-test-renderer"
import {shallow, configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const withConditional = Component =>
    function withConditionalComponent({ condition, ...props }) {
        if (condition) {
        return <Component {...props} />;
        }
    return null;
};
export default withConditional;

describe("<GridItem /> HOC should render correctly", () => {
    const ConditionalComponent = withConditional(GridItem);
    const wrapper = shallow(<ConditionalComponent condition={true} />);
    it("should render without breaking", () => {
        expect(wrapper.html()).not.toBe(null);
    })
})