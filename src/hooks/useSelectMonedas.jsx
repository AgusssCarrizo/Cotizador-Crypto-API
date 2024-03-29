import React, {useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label`
   font-family: "lato", sans-serif;
   display: block;
   font-size: 24px;
   font-weight: 700;
   color: #fff;
   margin: 16px 0;
`;
const Select = styled.select`
   width: 100%;
   font-size: 18px;
   padding: 12px;
   border-radius: 10px;
   margin-bottom: 20px;
`;

const useSelectMonedas = (label, opciones) => {
   const [state, setState] = useState("");
   const SelectMonedas = () => {
      return (
         <>
            <Label>{label}</Label>
            <Select value={state} onChange={(e) => setState(e.target.value)}>
               <option value="">Seleccione</option>

               {opciones.map((opcion) => (
                  <option key={opcion.id} value={opcion.id}>
                     {opcion.nombre}
                  </option>
               ))}
            </Select>
         </>
      );
   };
   return [state, SelectMonedas];
};
export default useSelectMonedas;
