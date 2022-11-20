// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseType<T, E> = {
  data?: T | object,
  message: string;
  error?: E | object
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

const handler =  async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != 'POST') return res.status(400).json({ message: `${req.method} request not allowed. Only POST request is allowed.`});

  const { email } = req.body;

  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    
    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    if (response.status >= 400) {
      const finalRes = await response.json();

      // Check if the user has already been added
      if (finalRes && finalRes.title == 'Member Exists') {
        return res.status(200).json({ 
          data: finalRes,
          message: `${email} has already been added to our waiting list.`
        });
      }

      return res.status(400).json({
        data: finalRes,
        message: `There was an error subscribing to the newsletter. Hit us up special@reviewgush.com and I'll add you the old fashioned way :(.`,
      });
    }

    return res.status(201).json({});
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export default handler;