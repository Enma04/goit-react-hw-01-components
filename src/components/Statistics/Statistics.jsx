import React from 'react';
import PropTypes from "prop-types";
import estilos from './Statistics.module.css';

function Statistics({title, stats}) {
    //Fujncion que devuelve una lista de licon datos
    return (
        <section className={estilos.statistics}>
            { ( title ) && ( <h3 className={estilos.title}>{title}</h3> ) }

            <ul className={estilos.statsList}>
                {stats.map( (item) => (
                    <li key={item.id} className={estilos.item}>
                        <span className="label"> {item.label} </span>
                        <br />
                        <span className="percentage"> {item.percentage} </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Statistics;