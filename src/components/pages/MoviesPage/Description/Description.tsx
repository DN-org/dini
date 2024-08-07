import React from "react";
import { DescriptionStyled } from "./Description.styled";

const Description: React.FC = () => {
  return (
    <DescriptionStyled>
        <h3>Описание</h3>
        <p>
          Доктор Райан Стоун, блестящий специалист в области медицинского
          инжиниринга, отправляется в свою первую космическую миссию под
          командованием ветерана астронавтики Мэтта Ковальски, для которого этот
          полет - последний перед отставкой. Но во время, казалось бы, рутинной
          работы за бортом случается катастрофа. Шаттл уничтожен, а Стоун и
          Ковальски остаются совершенно одни; они находятся в связке друг с
          другом, и все, что они могут, - это двигаться по орбите в абсолютно
          черном пространстве без всякой связи с Землей и какой-либо надежды на
          спасение.
        </p>
    </DescriptionStyled>
  );
};

export default Description;