import { useContext } from "react";
import { StyledSearchForm, StyledInputSearch } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { searchFormSchema } from "./searchFormSchema";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import { iSearchForm } from "./types";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../Button";

export const InputSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iSearchForm>({
    resolver: yupResolver(searchFormSchema),
  });
  const { filterSearchedProducts } = useContext(ProductContext);

  const submit: SubmitHandler<iSearchForm> = (data) => {
    filterSearchedProducts(data.searchString);
    reset();
  };

  return (
    <StyledSearchForm action="" onSubmit={handleSubmit(submit)}>
      <StyledInputSearch
        type="text"
        className="input-display"
        placeholder="Digitar pesquisa"
        {...register("searchString")}
      />
      <Button type="submit" buttonStyle="search" btnPosition="search">
        <FaSearch />
      </Button>
    </StyledSearchForm>
  );
};
