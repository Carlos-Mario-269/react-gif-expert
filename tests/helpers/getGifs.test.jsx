import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', () => { 

    test('debe de retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs('One Punch');
        // console.log(gifs);
        //se comprueba que la cadena sea mayor que 0
        expect(gifs.length).toBeGreaterThan(0);
        //se evalua que retorne un objeto
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });


    });

});