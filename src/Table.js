import React, { Component } from 'react';


//COMPONENTES SIMPLES
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Área</th>
            </tr>
      </thead>
    )
}

const TableBody = (props) => {

    const rows = props.characterData.map((row, index) =>{
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

//COMPONENTE DE CLASSE
class Table extends Component {
    
    render() {
        const {characterData, removeCharacter} = this.props;
        // console.log(characterData, removeCharacter)

        return (
            <table>
                <TableHeader/>
                <TableBody characterData = {characterData} removeCharacter = {removeCharacter}/>
            </table>
        )
    }
}



export default Table