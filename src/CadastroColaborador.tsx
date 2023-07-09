import React, { useState } from 'react';

const CadastroColaborador: React.FC = () => {
    const [data, setData] = useState('');
    const [nome, setNome] = useState('');
    const [horaEntrada, setHoraEntrada] = useState('');
    const [horaAlmoco, setHoraAlmoco] = useState('');
    const [horaRetornoAlmoco, setHoraRetornoAlmoco] = useState('');
    const [horaSaida, setHoraSaida] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Data', data);
        console.log('Nome', nome);
        console.log('Hora de Entrada', horaEntrada);
        console.log('Hora de Almoco', horaAlmoco);
        console.log('Hora de Retorno Almoco', horaRetornoAlmoco);
        console.log('Hora de Saida', horaSaida);

        //clear forms after sendind
        setData('');
        setNome('');
        setHoraEntrada('');
        setHoraAlmoco('');
        setHoraRetornoAlmoco('');
        setHoraSaida('');

    };

    return (
        <div>
            <h2>Cadastro de Colaborador</h2>
            <form onSubmitCapture={handleSubmit}>
                <div>
                    <label>Data:</label>
                    <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
                </div>
            </form>
        </div>
    )

}