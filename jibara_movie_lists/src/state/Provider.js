import Context from './Context';
import React from "react";

export default class Provider extends React.Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    render() {
        return (
            <Context.Provider
                value={{
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                                          cars
                                      });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                                          cars
                                      });
                    }
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
