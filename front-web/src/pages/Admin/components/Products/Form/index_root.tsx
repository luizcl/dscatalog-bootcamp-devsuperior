import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm'
import './styles.scss'

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description: '',
    });

    const handleOnChange = (event: FormEvent ) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const Payload = {
            ...formData,
            imgUrl: 'https://images5.kabum.com.br/produtos/fotos/128245/console-sony-playstation-5-digital-edition_1600364534_g.jpg',
            categories: [{id: formData.category}]
        }
        makeRequest({url:"/products", method: 'POST', data: Payload})
            .then( () => {
                setFormData({name: '', category: '1', price: '', description: ''});
            } );
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="Cadastrar Um Produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={formData.name}
                            name="name"
                            type="text"
                            className="form-control mb-5"
                            placeholder="Nome do Produto"
                            onChange={handleOnChange}
                        />

                        <select
                            value={formData.category}
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            name="category"
                        >
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletronicos</option>
                        </select>

                        <input
                            value={formData.price}
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Preço"
                            onChange={handleOnChange}
                        />

                    </div>
                    <div className="col-6">
                        <textarea 
                            name="description"
                            className="form-control"
                            onChange={handleOnChange}
                            value={formData.description}
                            cols={30} 
                            rows={10} 
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    );

}

export default Form;