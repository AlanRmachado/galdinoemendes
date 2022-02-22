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

      <Blocks color={"#6aa9dd"}>
        <h2>Direito de Família e Sucessões</h2>
        <BlockContent>
          <p>Pacto antenupcial, divórcio consensual, divórcio extrajudicial, divórcio
            litigioso, investigação de paternidade, pensão alimentícia, pedido de
            guarda, regulamentação de visitas, partilha de bens, inventário judicial,
            inventário extrajudicial e testamentos.
          </p>
        </BlockContent>
        <BsPersonBadge className="iconService" />
      </Blocks>



      <Blocks color={"#6aa9dd"}>
        <h2>Direito do Consumidor</h2>
        <BlockContent>
          <p>Indenização por danos morais e materiais, negativação indevida do
            nome (protesto), prática abusiva, contratos em geral, cobrança de
            dívida, publicidade e oferta de produtos e serviços, responsabilidade
            pelo fornecimento e defeitos de produtos e serviços.
          </p>
        </BlockContent>
        <BsPersonBadge className="iconService" />
      </Blocks>

      <Blocks color={"#6aa9dd"}>
        <h2>Direito Imobiliário</h2>
        <BlockContent>
          <p>Contrato de compra e venda de imóveis, contrato de locação, ação de
            despejo, cobrança de aluguéis, ação revisional e renovatória,
            condomínios edilícios (cobrança de inadimplentes, participação em
            assembleia, assessoria do síndico, administradora e do corpo diretivo
            e terceirização de mão de obra), incorporação, hipoteca,
            financiamento imobiliário, reintegração de posse, usucapião, registro
            de imóveis, parcelamento do solo urbano (loteamento,
            desmembramento e desdobro) e desapropriação.
          </p>
        </BlockContent>
        <BsPersonBadge className="iconService" />
      </Blocks>


      <Blocks color={"#6aa9dd"}>
        <h2>Direito de Família e Sucessões</h2>
        <BlockContent>
          <p>Pacto antenupcial, divórcio consensual, divórcio extrajudicial, divórcio
            litigioso, investigação de paternidade, pensão alimentícia, pedido de
            guarda, regulamentação de visitas, partilha de bens, inventário judicial,
            inventário extrajudicial e testamentos.
          </p>
        </BlockContent>
        <BsPersonBadge className="iconService" />
      </Blocks>


    </Container>
  )
}

export default Services;