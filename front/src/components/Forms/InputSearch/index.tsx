import { useContext } from "react";
import { StyledSearchForm, StyledInputSearch } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { searchFormSchema } from "./searchFormSchema";
import { iSearchForm } from "./types";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../Button";
import { ContactContext } from "../../../contexts/ContactContext/ContactContext";

export const InputSearch = () => {
  const { filterSearchedContacts } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iSearchForm>({
    resolver: yupResolver(searchFormSchema),
  });

  const submit: SubmitHandler<iSearchForm> = (data) => {
    filterSearchedContacts(data.searchString);
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
