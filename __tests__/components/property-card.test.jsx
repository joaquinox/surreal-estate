import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/property-card';

it('renders prop of title', () => {
  const wrapper = shallow((
    <PropertyCard title="4-bed period house" />));
  expect(wrapper.find('.title').text()).toBe('4-bed period house');
});

it('renders prop of type', () => {
  const wrapper = shallow((
    <PropertyCard type="detached" />));
  expect(wrapper.find('.type').text()).toBe('detached');
});

it('renders prop of bathrooms', () => {
  const wrapper = shallow((
    <PropertyCard bathrooms="2" />));
  expect(wrapper.find('.bathrooms').text()).toBe('2');
});

it('renders prop of bedrooms', () => {
  const wrapper = shallow((
    <PropertyCard bedrooms="4" />));
  expect(wrapper.find('.bedrooms').text()).toBe('4');
});

it('renders prop of price', () => {
  const wrapper = shallow((
    <PropertyCard price="250000" />));
  expect(wrapper.find('.price').text()).toBe('250000');
});

it('renders prop of city', () => {
  const wrapper = shallow((
    <PropertyCard city="Manchester" />));
  expect(wrapper.find('.city').text()).toBe('Manchester');
});

it('renders prop of email', () => {
  const wrapper = shallow((
    <PropertyCard email="hello@hotmail.com" />));
  expect(wrapper.find('.email').text()).toBe('hello@hotmail.com');
});
