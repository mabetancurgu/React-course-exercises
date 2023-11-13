import {fireEvent, render, screen} from '@testing-library/react'
import CounterApp from '../CounterApp';

describe('Pruebas en Counter App', () => { 
const value=100
    test('Debe hacer  match con el snapshot', () => { 
        const{container} = render(<CounterApp value={value}/>)
         expect(container).toMatchSnapshot();

     });
     test('Debe mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={value} />)
        expect(screen.getByText('100')).toBeTruthy()
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100')
      });

      test('Debe incrementar con el boton +1', () => { 
        //Inicializar el sujeto de pruebas
        render(<CounterApp value={value} />)
        //Aplicar una accion - click en el boton
        fireEvent.click(screen.getByText('+1'))
        //Evaluar resultados
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe decrementar con el boton -1', () => { 
        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Debe funcionar el boton de reset ', () => { 
        render(<CounterApp value={value} />)

        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))

        //buscar un elemento por su tipo (buttton) y su label
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        
        // Otra forma de hacerlo
        // fireEvent.click(screen.getByTest('Reset'))
        expect(screen.getByText('100')).toBeTruthy();
    });
      


 })