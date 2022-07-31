import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

/*esto sirve para hacer un mock de mis propias librerías 
y de terceros tambien*/
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => { 

    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente', () => { 
       
       useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true

       });

        render(<GifGrid category={category} />);
        screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Dragon Ball',
                url: 'https://localhost/dragon-ball.jpg'
            },

            {
                id: '123',
                title: 'Saitaman',
                url: 'https://localhost/saitaman.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
    
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
        
    });
});