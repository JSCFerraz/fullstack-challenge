import { Modal, ModalBox, StyledCartDiv, StyledCartTitle } from "./style";
import { Button } from "../Button";
import { StyledText } from "../../styles/typography";
import { useContext } from "react";
import { CartList } from "../CartList";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { TotalCart } from "../TotalCart";

export const CartModal = () => {
  const { openCartModal } = useContext(CartContext);

  return (
    <>
      {openCartModal && (
        <Modal>
          <ModalBox>
            <Button type="closeModal" buttonStyle="closeModal">
              X
            </Button>
            <StyledCartDiv>
              <StyledCartTitle>
                <StyledText tag="h4" textStyle="cartTitle">
                  Carrinho de Compras
                </StyledText>
              </StyledCartTitle>
              <CartList />
              <TotalCart />
            </StyledCartDiv>
          </ModalBox>
        </Modal>
      )}
    </>
  );
};
