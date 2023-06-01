import { StyledText } from "../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { StyledTotalComp } from "./style";
import { StyledButton } from "../../styles/buttons";

export const TotalCart = () => {
  const { currentSale, removeAllItems, totalQuantityCart } =
    useContext(CartContext);
  const totalCart = currentSale.reduce((accumulator, currentValue) => {
    return currentValue.prodPrice * currentValue.prodQuantity + accumulator;
  }, 0);

  const localCurrencyTotal = totalCart.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return totalQuantityCart ? (
    <>
      <StyledTotalComp>
        <StyledText tag="h4" textStyle="total">
          Total
        </StyledText>
        <StyledText tag="h4" textStyle="total">
          {localCurrencyTotal}
        </StyledText>
      </StyledTotalComp>
      <StyledButton buttonSize="cart" onClick={removeAllItems}>
        Remover Todos
      </StyledButton>
    </>
  ) : (
    <></>
  );
};
