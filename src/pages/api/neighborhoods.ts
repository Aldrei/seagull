import { listNeighborhood } from '@/services'
import { buildPropertiesFilteredParams } from '@/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  neighborhoods: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { query } = req
  const buildedUrl = buildPropertiesFilteredParams({ query })

  const response = await listNeighborhood(buildedUrl.toString())
  res.status(200).json({ neighborhoods: response })
}
