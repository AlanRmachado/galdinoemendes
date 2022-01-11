import React from "react"

import { BsBank } from "react-icons/bs"
import { BsPersonBadge } from "react-icons/bs"
import { BsPeople } from "react-icons/bs"

import {
  Container,
  Blocks,
  BlockContent
} from "./styles"



const Services: React.FC = () => {
  return (
    <Container>
      <Blocks color={"#6aa9dd"}>
        <h2>DIREITO PREVIDENCIÁRIO</h2>
        <BlockContent>
          <p>Aposentadoria: Cálculos e
            contagem, por idade, urbana,
            portador de deficiência,
            por invalidez, por tempo de
            contribuição, especial, auxílio
            doença, auxílio acidente, auxílio, revisão de benefício
          </p>
        </BlockContent>
        <BsBank className="iconService" />
      </Blocks>
      <Blocks color={"#D4AA71"}>
        <h2>DIREITO TRABALHISTA</h2>
        <BlockContent>
          <p>Reclamação trabalhista, rescisão indireta
            do contrato de trabalho, atrasos salariais,
            reversão de justa causa, reconhecimento
            de vínculo empregatício, indenizações
            decorrentes de acidente de trabalho
            indenização por doença ocupacional,
            assédio moral e sexual, discriminação no
            ambiente de trabalho, adicionais de
            insalubridade e periculosidade, adicional
            noturno, horas extras, acúmulo de
            função, equiparação salarial, entre outras.
          </p>
        </BlockContent>
        <BsPersonBadge className="iconService" />
      </Blocks>
      {/* <Blocks color={"#607d8b"}>
        <h2>DIREITO DA FAMÍLIA</h2>
        <BlockContent>
          <p>
            Ações de divórcio, alimentos,
            guarda, visitas, inventário,
            reconhecimento e dissolução
            de união estável, execução
            revisão e exoneração de
            alimentos, dentre outras.
          </p>
        </BlockContent>
        <BsPeople className="iconService" />
      </Blocks> */}


    </Container>
  )
}

export default Services;