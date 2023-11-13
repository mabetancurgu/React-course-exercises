import FirstApp from "../FirstApp"
import {getAllByAltText, render} from '@testing-library/react'

describe('Pruebas en <FirstApp/>', () => { 
//'toma una fotografia al componente y si algo llega a cambiar, falla'
    // test('debe hacer match con el snapshot', () => { 
    //     const title ="holiss"
    //     const{container} = render(<FirstApp title={title}/>)

    //     expect(container).toMatchSnapshot();
    //  });

     test('debe de mostrar el titulo en un h1', () => { 
        const title ="holiss"
        const{container, getByText, getByTestId} = render(<FirstApp title={title}/>)
        expect(getByText(title)).toBeTruthy();

        //no es lo recomendado pero es util
        //query selector solo retornaria un h1
        // const h1 = container.querySelector('h1')
         // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toBe(title)
    });

    test('debe de mostrar el subtitul enviado por props', () => { 
        const title ="holiss"
        const subTitle ="soy un subtitulo"
        const{getAllByText} = render(<FirstApp title={title} subTitle={subTitle}/>)

        //Revisa que solo este una vez
        // expect(getByText(subTitle)).toBeTruthy();

        //Revisa que llegue un array de elementos que coincidan
        expect(getAllByText(subTitle).length).toBe(2)
    });


 })