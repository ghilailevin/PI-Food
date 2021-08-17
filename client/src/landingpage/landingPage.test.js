import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Landing from "./Landing";

configure({ adapter: new Adapter() });

describe("<Landing />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  it("Deberia renderizar un <h1 />", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});