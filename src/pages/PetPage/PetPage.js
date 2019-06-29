import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import pets from '../../services/pets.json';
import styles from './PetPage.module.css';

const getIdFromProps = props => props.match.params.id;

class PetPage extends Component {
  state = {
    pet: pets.find(obj => obj.id === getIdFromProps(this.props)),
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleClick = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    const redirect = pets.find(obj => obj.id === getIdFromProps(this.props));
    return (
      <>
        {redirect ? (
          <section className={styles.mainSection}>
            <button
              type="button"
              className={styles.button}
              onClick={this.handleClick}
            >
              Return
            </button>

            <p className={styles.title}> All about {pet.name} </p>

            <div className={styles.wrapper}>
              <img src={pet.image} alt="" className={styles.image} />

              <div className={styles.textWrapper}>
                <p>
                  <b> Age: </b> {pet.age}
                </p>

                <p>
                  <b> Gender: </b> {pet.gender}
                </p>

                <p>
                  <b> Color: </b> {pet.color}
                </p>

                <p>
                  <b> Breed: </b> {pet.breed}
                </p>
              </div>
            </div>

            <p className={styles.description}> {pet.description} </p>
          </section>
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  }
}

export default PetPage;
