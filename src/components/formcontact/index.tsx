import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Form } from './styles';
import { init, send } from '@emailjs/browser';

interface IForm {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  hiddenForm: string;
}


const FormContact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    init("user_7MQJ52Os8H8XpfdkTEpEW");
  }, [])

  async function handleForm(data: IForm) {
    if (data.hiddenForm) return;
    try {
      setLoading(true);
      let templateParams = { ...data };
      await send("service_zlei5fp", "template_rx1qbgm", templateParams);
      setLoading(false);
      alert("E-mail enviado");
    } catch (error) {
      setLoading(false);
      alert("Não foi possível enviar e-mail");
    }

  }

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <input type={"text"} placeholder='Nome' {...register("nome", { required: true })} />
      {errors.nome && <span>Campo obrigatório</span>}
      <input type={"text"} placeholder='E-mail' {...register("email", { required: true })} />
      {errors.email && <span>Campo obrigatório</span>}
      <input type={"text"} placeholder='Telefone' {...register("telefone", { required: true })} />

      {errors.telefone && <span>Campo obrigatório</span>}
      <textarea placeholder='Descreva sua solicitação' {...register("mensagem", { required: true })} />
      {errors.mensagem && <span>Campo obrigatório</span>}
      <input type={"submit"} value={loading ? "Enviando ..." : "Enviar"} disabled={loading} />

      <input type={"hidden"} placeholder='Telefone' {...register("hiddenForm", { required: false })} />
    </Form>
  )
}

export default FormContact;