import FirstApp from "../FirstApp"
import {getAllByAltText, render, screen} from '@testing-library/react'

describe('Pruebas en <FirstApp2/>', () => { 
    const title= "Hola soy un titulo"
    const subTitle="Hola soy un subtitulo"

    test('debe de hacer match con el snapshot', () => { 
        const {container} = render (<FirstApp title={title}/>)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola soy un titulo"', () => { 
        render(<FirstApp title={title} />)
        // screen.debug() para ver el objecto, recomen.
        expect(screen.getByText(title)).toBeTruthy()
    });

    test('debe de de mostrar el titulo en un h1', () => { 
        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', {level:1}).innerHTML).toBe(title)
    });

    test('debe de de mostrar el subtitulo enviado por props', () => { 
        render(<FirstApp title={title} subTitle={subTitle}/>)
        expect(screen.getAllByText(subTitle).length).toBe(2)
    });
 })