import { useEffect, useState } from "react";
import { StyledText } from "../../styles/typography";
import {
  StyledInputDiv,
  StyledInput,
  StyledLabel,
  HelperTextDiv,
} from "./style";
import { iSingleInput } from "./types";

export const SingleInput = ({
  label,
  id,
  type,
  placeholder,
  register,
  disabled,
  error,
  watch,
}: iSingleInput) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (watch !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [watch]);
  error && console.log(error);
  return (
    <StyledInputDiv isActive={isActive} error={error}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
      />

      <HelperTextDiv>
        {error && (
          <StyledText tag="span" textStyle="headline" textColor="error">
            {error.message}
          </StyledText>
        )}
      </HelperTextDiv>
    </StyledInputDiv>
  );
};
