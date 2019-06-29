import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './PetsPage.module.css';
import pets from '../../services/pets.json';

class PetsPage extends Component {
  state = {
    petsList: [],
  };

  componentDidMount() {
    this.setState({
      petsList: pets,
    });
  }

  render() {
    const { petsList } = this.state;
    return (
      <div>
        <h2 className={styles.title}> Available pets </h2>

        <ul className={styles.ul}>
          {petsList.map(pet => (
            <li className={styles.li} key={pet.id}>
              <Link to={`/pets/${pet.id}`}>
                <img src={pet.image} alt="" className={styles.image} />

                <h4 className={styles.name}> {pet.name} </h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PetsPage;
