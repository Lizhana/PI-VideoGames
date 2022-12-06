import {render, screen} from '@testing-library/react'
import FormToCreate from '../components/FormToCreate'


test('render title', ()=>{
    render(<FormToCreate/>);
    const title = screen.getByTitle(/Create your Videogame/i);
    expect(title).toBeInTheDocument();
});

test('render a label whith text name', ()=>{
    render(<FormToCreate/>);
    const label = screen.getByLabelText(/Name: /i);
    expect(label).toBeInTheDocument();
});


test('render input type checkbox', ()=>{
    render(<FormToCreate/>);
    const input = screen.getByText(/LOADING.../i);
    expect(input).toBeInTheDocument();
});




