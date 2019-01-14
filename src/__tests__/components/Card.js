'use strict'
import React from "react"
import ReactDOM from "react-dom"

import Card from "../../components/Card"
import renderer from "react-test-renderer"
import {shallow, configure, mount} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Card /> should render correctly", () => {
    const wrapper = shallow(<Card />) // there's some weird error here with enzyme
    it("should render without props'", () => {
        expect(wrapper.find('div').children()).toHaveLength(5) // image, name, city and 2 actions

    })
})