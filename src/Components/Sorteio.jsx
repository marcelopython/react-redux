import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Sorteio = props => {
    const { min, max } = props;
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{Math.floor(Math.random(min)*(max-min))}</strong>
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = (state)=>{
    return {
        min: state.numeros.min,
        max: state.numeros.max
    };
}

export default connect(mapStateToProps)(Sorteio);