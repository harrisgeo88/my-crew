'use strict'
import React from "react"
import ReactDOM from "react-dom"

import App from "../App"
import renderer from "react-test-renderer"
import {shallow, configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<App /> should render correctly", () => {
    const wrapper = shallow(<App />)
    it("should render 1 child", () => {
        expect(wrapper.find('div').children()).toHaveLength(2)
    })
    it("should render text 'Loading..'", () => {
        expect(wrapper.find('#content').children().text()).toEqual('Loading..')
    })
    it("should expect state to change after api call",() => {})
    it("should expect candidate state to change when clicking on action",() => {})
    it("should expect filter for name to work",() => {})
    it("should expect filter for city to work",() => {})
    it("should expect 'reset filters' to work",() => {})
})