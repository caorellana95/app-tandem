// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import getConfig from 'next/config';

const {serverRuntimeConfig} = getConfig();
const config = serverRuntimeConfig;

type Response = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
    try {
        let contacto = req.body;
        contacto.telefono = '+569' + contacto.telefono;
        const response = await axios.post(config.service_url + 'notificacion/formulario-contacto-comercial', contacto);
        res.status(200).json(response.data)
      } catch (error) {
        res.status(400).json({ message: 'Error al enviar el formulario' });
      }
    }
