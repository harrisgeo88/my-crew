'use strict'
import React from "react"
import ReactDOM from "react-dom"

import InputText from "../../components/InputText"
import renderer from "react-test-renderer"
import {shallow, configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<InputText /> should render correctly", () => {
    const wrapper = shallow(<InputText />)
    it("should render without breaking", () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
})