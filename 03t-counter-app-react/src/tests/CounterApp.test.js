import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import React from 'react';

describe('Pruebas en CounterApp ', () => {

    const valueg = 420;

    // let wrapper;

    let wrapper = shallow(<CounterApp value = {valueg}/>);

    beforeEach(() => {
        wrapper = shallow(
            <CounterApp 
                value = {valueg}
            />
        );

    })
    
    test('debe mostrar <CounterApp /> correctamente ', () => {

        const wrapper = shallow(
            <CounterApp />
        );

        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100 ', () => {
        
        const value = 100;

        const wrapper = shallow(
            <CounterApp 
                value = {value}
            />
        );

        const textoH2 = wrapper.find('h2').text().trim();

        expect(textoH2).toBe(value.toString());

    })

    test('debe incrementar con el boton +1 ', () => {

        // const btn1 = wrapper.find('button').at(0).simulate('click');
        // const btn2 = wrapper.find('button').at(1);
        // const btn3 = wrapper.find('button').at(2);

        wrapper.find('button').at(0).simulate('click');

        // console.log(btn1.html());

        const textoH2 = wrapper.find('h2').text().trim();

        expect(textoH2).toBe((valueg + 1).toString());

    })

    test('debe decrementar con el boton -1  ', () => {

        wrapper.find('button').at(2).simulate('click');

        const textoh2 = wrapper.find('h2').text().trim();

        expect(textoh2).toBe((valueg - 1).toString());

    })

    test('debe resetear con el boton reset  ', () => {
        
        wrapper.find('button').at(0).simulate('click');

        console.log(wrapper.find('h2').text().trim());

        wrapper.find('button').at(1).simulate('click');

        console.log(wrapper.find('h2').text().trim());

        const textoh2 = wrapper.find('h2').text().trim();

        expect(textoh2).toBe((valueg).toString());

    })
    
})
