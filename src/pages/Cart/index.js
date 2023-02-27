/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React, {useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import { Container, HeaderList, ContainerList, TravelItem, Info, Quantity, Subtotal, FootTotal} from './styles';

function Cart() {
    const {state, setState} = useContext(CartContext);
    const total = state.cart.reduce((acc, travel) => acc + travel.quantity * travel.price, 0,);

    return(
        <Container>
            <ContainerList>
                <HeaderList>
                    <p id='gp'>PRODUCTO</p>
                    <p>CANTIDAD</p>
                    <p>PRECIO</p>
                </HeaderList>
                {state.cart.map((el) => (
                    <TravelItem>
                        <img src={el.photo} alt={el.title}/>
                        <Info>
                            <p>{el.title}</p>
                            <strong>$ {el.price}</strong>
                        </Info>
                        <Quantity readOnly type="number" value={el.quantity} />
                        <Subtotal>
                            <p>$ {el.quantity * el.price}</p>
                            <button type='button'>
                                <MdDelete size={24} color="#0676d9" />
                            </button>
                        </Subtotal>
                    </TravelItem>
                ))}
                <FootTotal>
                    <p>TOTAL</p>
                    <strong>$ {total}</strong>
                </FootTotal>
            </ContainerList>
        </Container>
    )
}
export default Cart;