import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe('Pruebas en AddCategory ', () => { 

    test('debe de cambiar el valor en la caja de texto', () => { 

        /*se extrae el sujeto de pruebas*/ 
        render(<AddCategory onNewCategory={() => {} } />)
        // screen.debug();

        /*extraemos el input que tiene una relacion con el screen
        getByRol.*/
        const input = screen.getByRole('textbox');

        //disparamos el evento
        fireEvent.input(input, {target: {value: 'Saitama'}});
        
        /*hacemos la sercion de lo que estamos esperando que
        suceda después del evento*/
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor ', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)
        
        /*referencia al input*/
        const input = screen.getByRole('textbox');

        /*referencia al formulario*/
        const form = screen.getByRole('form');

        /*se disparan los eventos respectivos*/
        fireEvent.input(input, {target: {value: inputValue }});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        //toHaveBeenCalled evalua que una funcion haya sido llamada 
        expect(onNewCategory).toHaveBeenCalled();

        /*ara esperar que solo se esta llamando 
        una sola vez */
        expect(onNewCategory).toHaveBeenCalledTimes(1);

        /*se evalua que hata sido llamado con el valor del 
        inputValue*/
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);


    })

    test('no debe de llamar el onNewCategory si el input está vacio', () => { 

        const onNewCategory = jest.fn();
        /*sujeto de pruebas*/
        render(<AddCategory onNewCategory={onNewCategory} />)

        /*sujeto de referencia*/
        const form = screen.getByRole('form');

        /*se dispara el evento*/
        fireEvent.submit(form);

        /*lo que se estaria esperando*/
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        // expect(onNewCategory).not.toHaveBeenCalled();


     })
});