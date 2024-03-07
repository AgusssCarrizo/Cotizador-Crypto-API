import styled from "@emotion/styled";
const Contenedor = styled.div`
   color: #ffffff;
   font-family: "lato", sans-serif;
   position: relative;
   z-index: 3;

   padding-inline: 50px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   justify-items: center;
   align-items: center;
   border: 1px solid #fff;
   width: 60%;
   margin-inline: auto;
   margin-top: 40px;
`;
const Texto = styled.p``;

const Precio = styled.p`
   font-size: 30px;
   text-align: center;
`;
const Image = styled.img`
   position: absolute;
   z-index: 1;
   top: 50%;
   left: 50%;
   opacity: 0.3;
   transform: translate(-50%, -50%);
   width: 150px;
   height: 150px;
`;
export default function Resultado({resultado}) {
   const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} =
      resultado;
   return (
      <Contenedor>
         <Image
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="imagen cripto"
         />
         <div>
            <Precio>{PRICE}9</Precio>
            <Texto>
               El precio mas Bajo del dia: <span>{LOWDAY}</span>
            </Texto>

            <Texto>
               El precio mas Alto del dia:<span>{HIGHDAY}</span>
            </Texto>

            <Texto>
               Variación ultima 24 horas:{""}
               <span>{CHANGEPCT24HOUR}</span>
            </Texto>

            <Texto>
               Ultima actualización: <span>{LASTUPDATE}</span>
            </Texto>
         </div>
      </Contenedor>
   );
}
